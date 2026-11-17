import { useRef } from 'react'

/**
 * The logo as a real 3D glass object: stacked masked layers in CSS 3D space,
 * tilting toward the pointer. Pure CSS + one pointer handler, so it prerenders.
 *
 * logo   URL of a single-colour SVG/PNG; its alpha is used as the shape.
 * ending "logo" (mark only) or "logo-text" (mark plus `text` underneath).
 * theme  "light" | "dark"
 * depth  thickness of the glass, roughly 0–5.
 * parts  optional list of SVG URLs (same viewBox as `logo`), rendered as
 *        separate glass pieces (.lgl-part) that CSS can move independently.
 */
export function LiquidGlassLogo({ logo, parts, ending = 'logo', text = '', theme = 'light', depth = 2, label = '', className = '', style }) {
  const ref = useRef(null)
  const d = Math.max(0, Math.min(5, Number(depth) || 0))
  const maskOf = (src) => ({
    WebkitMaskImage: `url("${src}")`,
    maskImage: `url("${src}")`,
    WebkitMaskSize: 'contain',
    maskSize: 'contain',
    WebkitMaskRepeat: 'no-repeat',
    maskRepeat: 'no-repeat',
    WebkitMaskPosition: 'center',
    maskPosition: 'center',
  })
  const layers = Math.round(d * 4)
  const stack = (src) => {
    const z = (px) => ({ ...maskOf(src), transform: `translateZ(${px}px)` })
    return (
      <>
        <span className="lgl-layer lgl-shadow" style={z(-d * 14)} />
        {Array.from({ length: layers }, (_, i) => (
          <span key={i} className="lgl-layer lgl-side" style={z(-(layers - i) * 2)} />
        ))}
        <span className="lgl-layer lgl-face" style={z(0)} />
        <span className="lgl-layer lgl-spec" style={z(0.5)} />
        <span className="lgl-layer lgl-rim" style={z(1)} />
      </>
    )
  }

  // Write CSS variables directly: no re-render per pointer move.
  const onMove = (e) => {
    if (e.pointerType !== 'mouse') return
    const r = ref.current.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    ref.current.style.setProperty('--ry', `${x * 36}deg`)
    ref.current.style.setProperty('--rx', `${y * -28}deg`)
    ref.current.style.setProperty('--gx', `${(x + 0.5) * 100}%`)
    ref.current.style.setProperty('--gy', `${(y + 0.5) * 100}%`)
    ref.current.classList.add('lgl-active')
  }
  const onLeave = () => {
    ref.current.style.removeProperty('--rx')
    ref.current.style.removeProperty('--ry')
    ref.current.classList.remove('lgl-active')
  }

  return (
    <div
      ref={ref}
      className={`lgl lgl-${theme} ${className}`}
      style={style}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      role={label ? 'img' : undefined}
      aria-label={label || undefined}
      aria-hidden={label ? undefined : true}
    >
      <div className="lgl-tile">
        <div className="lgl-float">
          <div className="lgl-mark">
            {parts ? parts.map((src) => <div key={src} className="lgl-part">{stack(src)}</div>) : stack(logo)}
          </div>
        </div>
        {ending === 'logo-text' && text && <span className="lgl-text">{text}</span>}
      </div>
    </div>
  )
}

export default LiquidGlassLogo

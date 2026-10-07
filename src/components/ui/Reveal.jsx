import { useEffect, useRef, useState } from 'react'

/**
 * Fades content up once when it scrolls into view. CSS does the animation
 * (see `[data-reveal]` in index.css), including the reduced-motion fallback.
 */
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', style, children, ...props }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      data-reveal=""
      className={`${className} ${visible ? 'is-visible' : ''}`}
      style={delay ? { ...style, '--delay': `${delay}ms` } : style}
      {...props}
    >
      {children}
    </Tag>
  )
}

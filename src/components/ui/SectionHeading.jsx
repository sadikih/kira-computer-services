import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, description, align = 'left', as: H = 'h2', id, className = '' }) {
  const center = align === 'center'
  return (
    <Reveal className={`flex max-w-3xl flex-col gap-5 ${center ? 'mx-auto items-center text-center' : ''} ${className}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <H id={id} className="display-2 text-ink-950">{title}</H>
      {description && <p className="lede max-w-2xl">{description}</p>}
    </Reveal>
  )
}

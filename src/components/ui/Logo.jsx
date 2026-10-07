import { Link } from '../../lib/router'

/** The KiraTech interlocking mark, traced from src/assets/Kira logo.svg. */
export function LogoMark({ className = 'h-7 w-auto' }) {
  return (
    <svg viewBox="383 1274 399 266" className={className} fill="none" stroke="currentColor" strokeWidth="28.53" aria-hidden="true">
      <path d="M589,1373.88l22.3,22.3a30.25,30.25,0,0,1,0,42.79l-76.6,76.6a30.24,30.24,0,0,1-42.78,0l-83.77-83.77a30.25,30.25,0,0,1,0-42.79l76.59-76.6a30.27,30.27,0,0,1,42.79,0l32.35,32.35" />
      <path d="M578,1443.54l-23-21.62a30.26,30.26,0,0,1-1.29-42.77L628,1300.28A30.25,30.25,0,0,1,670.8,1299l86.26,81.21a30.26,30.26,0,0,1,1.28,42.77l-74.25,78.87a30.27,30.27,0,0,1-42.77,1.29L608,1471.77" />
    </svg>
  )
}

export default function Logo({ className = '' }) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 text-ink-950 ${className}`} aria-label="KiraTech home">
      <LogoMark className="h-6 w-auto text-accent" />
      <span className="font-display text-xl font-semibold tracking-tight">
        Kira<span className="text-accent">Tech</span>
      </span>
    </Link>
  )
}

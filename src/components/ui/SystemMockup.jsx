import { Boxes, FileText, LayoutDashboard, Search, ShoppingCart, Users } from 'lucide-react'

// Illustrative interface only — sample figures, not client data.
const nav = [
  [LayoutDashboard, 'Overview', true],
  [ShoppingCart, 'Orders'],
  [Boxes, 'Inventory'],
  [Users, 'Customers'],
  [FileText, 'Reports'],
]
const kpis = [
  ['Open orders', '312'],
  ['Stock value', 'KES 42.6M'],
  ['Awaiting approval', '17'],
]
const bars = [38, 52, 46, 61, 58, 72, 66, 80, 74, 88, 82, 94]
const rows = [
  ['SO-20418', 'Mombasa Road branch', 'Dispatched'],
  ['SO-20417', 'Westlands branch', 'Picking'],
  ['PO-7731', 'Supplier restock', 'Approved'],
  ['SO-20415', 'Kisumu distributor', 'Delivered'],
]

/** Light product screenshot used in the hero. Decorative; hidden from assistive tech. */
export default function SystemMockup({ className = '' }) {
  return (
    <figure className={`mock overflow-hidden text-left ${className}`} aria-hidden="true">
      <div className="flex items-center gap-2 border-b border-line bg-muted px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-ink-500/25" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-500/25" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-500/25" />
      </div>

      <div className="grid grid-cols-[auto_1fr]">
        <aside className="hidden w-48 border-r border-line bg-muted/60 p-3 sm:block">
          <p className="px-2 pb-3 text-xs font-semibold text-ink-950">Operations</p>
          <ul className="space-y-0.5">
            {nav.map(([Icon, label, active]) => (
              <li key={label} className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-xs ${active ? 'bg-white font-medium text-ink-950 shadow-sm ring-1 ring-line' : 'text-ink-600'}`}>
                <Icon className="h-3.5 w-3.5" /> {label}
              </li>
            ))}
          </ul>
        </aside>

        <div className="min-w-0 p-4 sm:p-6">
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm font-semibold text-ink-950">Overview</p>
            <span className="hidden items-center gap-2 rounded-md border border-line px-2.5 py-1 text-[11px] text-ink-500 sm:flex">
              <Search className="h-3 w-3" /> Search orders, products…
            </span>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-3">
            {kpis.map(([label, value]) => (
              <div key={label} className="rounded-lg border border-line p-3">
                <p className="truncate text-[11px] text-ink-500">{label}</p>
                <p className="mt-1 truncate text-sm font-semibold text-ink-950 sm:text-lg">{value}</p>
              </div>
            ))}
          </div>

          <div className="mt-3 grid gap-3 md:grid-cols-[1.3fr_1fr]">
            <div className="rounded-lg border border-line p-3">
              <p className="text-[11px] text-ink-500">Orders fulfilled, last 12 weeks</p>
              <div className="mt-3 flex h-24 items-end gap-1.5">
                {bars.map((h, i) => (
                  <span key={i} className="flex-1 rounded-t-sm bg-accent/80" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
            <div className="hidden rounded-lg border border-line md:block">
              <p className="border-b border-line px-3 py-2 text-[11px] text-ink-500">Recent orders</p>
              <ul>
                {rows.map(([id, label, status]) => (
                  <li key={id} className="grid grid-cols-[4.5rem_1fr_auto] items-center gap-2 border-b border-line px-3 py-2 text-[11px] last:border-0">
                    <span className="text-ink-500">{id}</span>
                    <span className="truncate text-ink-800">{label}</span>
                    <span className="text-ink-600">{status}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </figure>
  )
}

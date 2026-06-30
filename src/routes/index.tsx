import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: OwnersLanding,
})

const stats = [
  { label: 'Properties under management', value: '186' },
  { label: 'Communities represented', value: '11' },
  { label: 'Average owner tenure', value: '7.4 yrs' },
]

const services = [
  {
    title: 'Statements & payouts',
    copy: 'Monthly statements land by the 8th, with a line-item breakdown of every booking, cleaning fee, and maintenance call against your property.',
  },
  {
    title: 'Booking calendar',
    copy: 'Block out your own stays, see guest reservations in real time, and adjust rate floors for shoulder season without calling anyone.',
  },
  {
    title: 'Maintenance & turnover',
    copy: 'Local crews handle snow clearing, hot tub service, and post-guest turnover; every visit is logged with photos in your owner file.',
  },
  {
    title: 'Community resources',
    copy: 'HOA contacts, parking permits, and trailhead access for the specific community your property sits in — organized by address, not guesswork.',
  },
]

function OwnersLanding() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-[var(--color-pine)]/15">
        <div
          className="pointer-events-none absolute -right-32 top-0 h-[480px] w-[480px] rounded-full opacity-30 blur-3xl"
          style={{
            background:
              'radial-gradient(circle, var(--color-brass-bright), transparent 70%)',
          }}
        />
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
          <div className="rise-in">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-brass)]">
              Owner Portal
            </p>
            <h1 className="font-display mt-5 text-5xl leading-[1.05] text-[var(--color-pine-deep)] md:text-6xl">
              Your property,
              <br />
              watched over
              <br />
              <span className="italic text-[var(--color-rust)]">
                like it's ours.
              </span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-[var(--color-pine-deep)]/75">
              Aprés Rentals manages short-term rental properties across
              mountain communities. This portal is where you check
              statements, review bookings, and find resources specific to
              your community.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="rounded-full bg-[var(--color-pine-deep)] px-6 py-3 text-sm font-semibold text-[var(--color-cream)] transition-transform hover:-translate-y-0.5"
              >
                Reach owner relations
              </a>
              <Link
                to="/communities"
                className="rounded-full border border-[var(--color-pine-deep)]/30 px-6 py-3 text-sm font-semibold text-[var(--color-pine-deep)] transition-colors hover:border-[var(--color-pine-deep)]"
              >
                Browse communities
              </Link>
            </div>
          </div>

          <div className="relative rise-in" style={{ animationDelay: '0.15s' }}>
            <div className="overflow-hidden rounded-3xl border border-[var(--color-pine)]/15 bg-[var(--color-pine-deep)] p-8 text-[var(--color-cream)] shadow-xl">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--color-brass-bright)]">
                This month, at a glance
              </p>
              <dl className="mt-6 space-y-5">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-baseline justify-between border-b border-[var(--color-cream)]/10 pb-3"
                  >
                    <dt className="text-sm text-[var(--color-cream-dim)]/80">
                      {stat.label}
                    </dt>
                    <dd className="font-display text-2xl">{stat.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-xs leading-relaxed text-[var(--color-cream-dim)]/60">
                Figures reflect aggregate portfolio performance, not an
                individual property — your statement has the real numbers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col gap-3 md:max-w-xl">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-brass)]">
            What we handle
          </p>
          <h2 className="font-display text-3xl text-[var(--color-pine-deep)] md:text-4xl">
            Everything between guest checkout and your next statement.
          </h2>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-[var(--color-pine)]/15 bg-[var(--color-pine)]/15 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-[var(--color-cream)] p-8 transition-colors hover:bg-[var(--color-cream-dim)]"
            >
              <h3 className="font-display text-xl text-[var(--color-pine-deep)]">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-pine-deep)]/75">
                {service.copy}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-[var(--color-pine)]/15 bg-[var(--color-cream-dim)]">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-16 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-brass)]">
              Find your community
            </p>
            <h2 className="font-display mt-2 text-2xl text-[var(--color-pine-deep)] md:text-3xl">
              Resources are organized by where your property actually sits.
            </h2>
          </div>
          <Link
            to="/communities"
            className="shrink-0 rounded-full bg-[var(--color-rust)] px-7 py-3 text-sm font-semibold text-[var(--color-cream)] transition-transform hover:-translate-y-0.5"
          >
            View all communities
          </Link>
        </div>
      </section>
    </main>
  )
}

import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/communities/deer-crest')({
  component: DeerCrestCommunity,
})

const contacts = [
  { role: 'HOA Manager', name: 'Renata Aguilar', detail: '(435) 555-0142' },
  { role: 'Gate & Access', name: 'Summit Security', detail: '(435) 555-0188' },
  { role: 'Snow Removal', name: 'High Basin Plowing', detail: 'on-call, dispatched by Aprés' },
]

const notes = [
  {
    title: 'Parking permits',
    copy: 'Each unit gets two resident permits and one guest pass per stay. Owner relations issues replacements if a permit is lost — there is a $25 reissue fee from the HOA.',
  },
  {
    title: 'Gate access',
    copy: 'Code changes quarterly. Current code is sent to your statement email and to guests 48 hours before check-in.',
  },
  {
    title: 'Trash & recycling',
    copy: 'Pickup is Tuesday before 8am. Bins must be pulled back from the curb by noon or the HOA issues a notice.',
  },
  {
    title: 'Quiet hours',
    copy: '10pm–7am, enforced by the gate attendant. Two documented complaints in a season triggers an HOA review of short-term rental privileges for that unit.',
  },
]

function DeerCrestCommunity() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <Link
        to="/communities"
        className="text-sm font-medium text-[var(--color-brass)] hover:text-[var(--color-rust)]"
      >
        ← All communities
      </Link>

      <div className="mt-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-brass)]">
            Park City, UT
          </p>
          <h1 className="font-display mt-2 text-4xl text-[var(--color-pine-deep)] md:text-5xl">
            Deer Crest
          </h1>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-[var(--color-pine-deep)]/70">
          Gated ski-in/ski-out enclave above the Canyons base, served by its
          own gondola landing and a private beach club on the Jordanelle in
          summer.
        </p>
      </div>

      <section className="mt-12 grid gap-6 md:grid-cols-3">
        {contacts.map((contact) => (
          <div
            key={contact.role}
            className="rounded-2xl border border-[var(--color-pine)]/15 bg-[var(--color-cream)] p-6"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-brass)]">
              {contact.role}
            </p>
            <p className="font-display mt-2 text-lg text-[var(--color-pine-deep)]">
              {contact.name}
            </p>
            <p className="mt-1 text-sm text-[var(--color-pine-deep)]/70">
              {contact.detail}
            </p>
          </div>
        ))}
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl text-[var(--color-pine-deep)]">
          Good to know
        </h2>
        <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-[var(--color-pine)]/15 bg-[var(--color-pine)]/15 md:grid-cols-2">
          {notes.map((note) => (
            <div key={note.title} className="bg-[var(--color-cream)] p-7">
              <h3 className="font-display text-lg text-[var(--color-pine-deep)]">
                {note.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-pine-deep)]/75">
                {note.copy}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

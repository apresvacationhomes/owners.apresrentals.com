import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/communities/')({
  component: CommunitiesIndex,
})

const communities = [
  {
    slug: 'deer-crest',
    name: 'Deer Crest',
    region: 'Park City, UT',
    blurb:
      'Gated ski-in/ski-out enclave above the Canyons base — gondola access, private beach club in summer.',
    live: true,
  },
  {
    slug: 'old-town',
    name: 'Old Town',
    region: 'Park City, UT',
    blurb: 'Historic Main Street district, walkable to the lifts and bars.',
    live: false,
  },
  {
    slug: 'tahoe-donner',
    name: 'Tahoe Donner',
    region: 'Truckee, CA',
    blurb: 'Family-oriented community with its own ski hill and marina.',
    live: false,
  },
]

function CommunitiesIndex() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-brass)]">
        Owner Portal
      </p>
      <h1 className="font-display mt-3 text-4xl text-[var(--color-pine-deep)] md:text-5xl">
        Communities
      </h1>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--color-pine-deep)]/75">
        Each community page covers the resources specific to that
        neighborhood — HOA contacts, parking and access rules, trash
        schedules, and the local crew handling turnovers.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {communities.map((community) =>
          community.live ? (
            <Link
              key={community.slug}
              to="/communities/deer-crest"
              className="group rounded-2xl border border-[var(--color-pine)]/15 bg-[var(--color-cream)] p-7 transition-all hover:-translate-y-1 hover:border-[var(--color-pine)]/30 hover:shadow-lg"
            >
              <CommunityCard community={community} />
            </Link>
          ) : (
            <div
              key={community.slug}
              className="rounded-2xl border border-dashed border-[var(--color-pine)]/20 bg-[var(--color-cream)]/60 p-7 opacity-70"
            >
              <CommunityCard community={community} />
            </div>
          ),
        )}
      </div>
    </main>
  )
}

function CommunityCard({
  community,
}: {
  community: (typeof communities)[number]
}) {
  return (
    <>
      <div className="flex items-start justify-between gap-3">
        <h2 className="font-display text-xl text-[var(--color-pine-deep)]">
          {community.name}
        </h2>
        {!community.live && (
          <span className="shrink-0 rounded-full bg-[var(--color-pine)]/10 px-2.5 py-1 text-[10px] uppercase tracking-wide text-[var(--color-pine-deep)]/60">
            Coming soon
          </span>
        )}
      </div>
      <p className="mt-1 text-xs uppercase tracking-[0.15em] text-[var(--color-brass)]">
        {community.region}
      </p>
      <p className="mt-4 text-sm leading-relaxed text-[var(--color-pine-deep)]/75">
        {community.blurb}
      </p>
    </>
  )
}

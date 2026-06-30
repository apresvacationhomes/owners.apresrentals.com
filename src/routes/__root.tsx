import { HeadContent, Link, Scripts, createRootRoute } from '@tanstack/react-router'

import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Owners Portal — Aprés Rentals',
      },
      {
        name: 'description',
        content:
          'The owners portal for Aprés Rentals: statements, bookings, and community resources for your mountain property.',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <div className="grain-overlay" />
        <SiteHeader />
        {children}
        <SiteFooter />
        <Scripts />
      </body>
    </html>
  )
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-pine)]/15 bg-[var(--color-cream)]/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-display text-xl tracking-tight text-[var(--color-pine-deep)]">
            Aprés
          </span>
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-brass)]">
            Owners
          </span>
        </Link>
        <nav className="flex items-center gap-7 text-sm font-medium text-[var(--color-pine-deep)]/80">
          <Link
            to="/"
            className="hover:text-[var(--color-pine-deep)] transition-colors"
          >
            Overview
          </Link>
          <Link
            to="/communities"
            className="hover:text-[var(--color-pine-deep)] transition-colors"
          >
            Communities
          </Link>
          <a
            href="#contact"
            className="rounded-full bg-[var(--color-pine-deep)] px-4 py-2 text-[var(--color-cream)] transition-colors hover:bg-[var(--color-pine)]"
          >
            Contact your team
          </a>
        </nav>
      </div>
    </header>
  )
}

function SiteFooter() {
  return (
    <footer
      id="contact"
      className="border-t border-[var(--color-pine)]/15 bg-[var(--color-pine-deep)] text-[var(--color-cream-dim)]"
    >
      <div className="mx-auto max-w-6xl px-6 py-14 grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="font-display text-2xl text-[var(--color-cream)]">
            Aprés Rentals
          </div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-[var(--color-cream-dim)]/80">
            Owner relations for ski-country properties, handled by people who
            answer the phone before the lift opens.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-brass-bright)]">
            Owner Relations
          </div>
          <div className="mt-3 space-y-1 text-sm">
            <p>owners@apresrentals.com</p>
            <p>(435) 200-7741</p>
            <p>Mon–Sat, 7a–7p MT</p>
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-brass-bright)]">
            Communities
          </div>
          <div className="mt-3 space-y-1 text-sm">
            <Link to="/communities" className="block hover:text-[var(--color-cream)]">
              Browse all communities
            </Link>
            <Link
              to="/communities/deer-crest"
              className="block hover:text-[var(--color-cream)]"
            >
              Deer Crest
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-[var(--color-cream)]/10 px-6 py-5 text-center text-xs text-[var(--color-cream-dim)]/60">
        © 2026 Aprés Rentals Owner Services. All rights reserved.
      </div>
    </footer>
  )
}

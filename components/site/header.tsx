'use client'

import { useState } from 'react'
import { Menu, Phone, Truck, X } from 'lucide-react'
import { BUSINESS, NAV_LINKS } from '@/lib/site-data'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5" aria-label={`${BUSINESS.name} home`}>
          <span className="flex size-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Truck className="size-5" aria-hidden="true" />
          </span>
          <span className="font-heading text-base font-extrabold leading-none tracking-tight text-primary">
            Adelaide
            <span className="block text-[0.7rem] font-semibold tracking-wide text-muted-foreground">
              Packers &amp; Movers
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={BUSINESS.phoneHref}
            className="hidden items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold text-primary transition-colors hover:bg-secondary sm:flex"
          >
            <Phone className="size-4" aria-hidden="true" />
            {BUSINESS.phone}
          </a>
          <a
            href="#quote"
            className="hidden rounded-md bg-accent px-4 py-2.5 text-sm font-bold text-accent-foreground transition-transform hover:scale-[1.02] sm:inline-flex"
          >
            Request a Quote
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex size-10 items-center justify-center rounded-md text-primary hover:bg-secondary lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-3 sm:px-6" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-base font-medium text-foreground/90 hover:bg-secondary"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-border pt-3">
              <a
                href={BUSINESS.phoneHref}
                className="flex items-center justify-center gap-2 rounded-md border border-border px-4 py-3 text-sm font-semibold text-primary"
              >
                <Phone className="size-4" aria-hidden="true" />
                {BUSINESS.phone}
              </a>
              <a
                href="#quote"
                onClick={() => setOpen(false)}
                className="rounded-md bg-accent px-4 py-3 text-center text-sm font-bold text-accent-foreground"
              >
                Request a Quote
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

import { Clock, Mail, MapPin, Phone, Truck } from 'lucide-react'
import { BUSINESS, NAV_LINKS } from '@/lib/site-data'

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v6h3v-6h2.5l.5-3H14V9c0-.6.4-1 1-1z" />
    </svg>
  )
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-md bg-accent text-accent-foreground">
              <Truck className="size-5" aria-hidden="true" />
            </span>
            <span className="font-heading text-base font-extrabold leading-tight">
              Adelaide
              <span className="block text-[0.7rem] font-semibold tracking-wide text-primary-foreground/60">
                Packers &amp; Movers
              </span>
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
            Local, insured and licensed removalists making moves across Adelaide
            and interstate genuinely stress-free.
          </p>
          <div className="mt-5 flex gap-3">
            <a href="https://www.facebook.com/p/A1-Removals-Adelaide-61561548832002/" target='_blank' aria-label="Facebook" className="flex size-9 items-center justify-center rounded-md bg-primary-foreground/10 transition-colors hover:bg-accent hover:text-accent-foreground">
              <FacebookIcon className="size-4" />
            </a>
            <a href="https://www.instagram.com/a1removals_adelaide/" target='_blank' aria-label="Instagram" className="flex size-9 items-center justify-center rounded-md bg-primary-foreground/10 transition-colors hover:bg-accent hover:text-accent-foreground">
              <InstagramIcon className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-primary-foreground/60">
            Explore
          </h3>
          <ul className="mt-4 space-y-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-primary-foreground/80 transition-colors hover:text-accent">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-primary-foreground/60">
            Get in touch
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li>
              <a href={BUSINESS.phoneHref} className="flex items-center gap-2.5 hover:text-accent">
                <Phone className="size-4 shrink-0 text-accent" aria-hidden="true" />
                {BUSINESS.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-2.5 hover:text-accent">
                <Mail className="size-4 shrink-0 text-accent" aria-hidden="true" />
                {BUSINESS.email}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <MapPin className="size-4 shrink-0 text-accent" aria-hidden="true" />
              Adelaide, South Australia
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-primary-foreground/60">
            Business hours
          </h3>
          <div className="mt-4 flex items-start gap-2.5 text-sm text-primary-foreground/80">
            <Clock className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
            <p className="leading-relaxed">{BUSINESS.hours}</p>
          </div>
          <a
            href="#quote"
            className="mt-5 inline-flex rounded-md bg-accent px-4 py-2.5 text-sm font-bold text-accent-foreground transition-transform hover:scale-[1.02]"
          >
            Get a Free Quote
          </a>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-primary-foreground/60 sm:flex-row sm:px-6">
          <p>
            &copy; {new Date().getFullYear()} {BUSINESS.name}. {BUSINESS.abn}. Licensed &amp; insured.
          </p>
          <p>Proudly serving Adelaide, South Australia.</p>
        </div>
      </div>
    </footer>
  )
}

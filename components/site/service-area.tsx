import { Check, MapPin } from 'lucide-react'
import { SUBURBS } from '@/lib/site-data'

export function ServiceArea() {
  return (
    <section id="areas" className="scroll-mt-20 border-t border-border bg-secondary/40 py-16 lg:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="font-heading text-sm font-bold uppercase tracking-widest text-accent-foreground/70">
            Service area
          </p>
          <h2 className="mt-2 text-balance font-heading text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
            Covering greater Adelaide
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            From the CBD to the coast and up into the Hills, we move households and
            businesses right across metropolitan Adelaide — and interstate too.
          </p>

          <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-2">
            {SUBURBS.map((suburb) => (
              <li key={suburb} className="flex items-center gap-2 text-sm text-foreground/90">
                <Check className="size-4 shrink-0 text-accent" aria-hidden="true" />
                {suburb}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-sm text-muted-foreground">
            Don&apos;t see your suburb? We likely still cover it —{' '}
            <a href="#quote" className="font-semibold text-primary underline underline-offset-4">
              ask for a quote
            </a>
            .
          </p>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-border bg-primary p-8 text-primary-foreground shadow-xl">
          <div className="flex items-center gap-2 text-accent">
            <MapPin className="size-5" aria-hidden="true" />
            <span className="font-heading text-sm font-bold uppercase tracking-widest">
              Based in Adelaide, SA
            </span>
          </div>
          <div
            className="mt-6 aspect-square w-full rounded-xl border border-primary-foreground/10"
            style={{
              backgroundImage:
                'linear-gradient(oklch(1 0 0 / 0.06) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.06) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
            aria-hidden="true"
          >
            <div className="flex h-full items-center justify-center">
              <div className="relative flex size-40 items-center justify-center">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent/20" />
                <span className="absolute inline-flex size-24 rounded-full bg-accent/30" />
                <span className="relative flex size-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <MapPin className="size-6" aria-hidden="true" />
                </span>
              </div>
            </div>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-primary-foreground/70">
            Local depots keep our trucks close by, so we arrive on time and keep
            your travel charges low.
          </p>
        </div>
      </div>
    </section>
  )
}

import { SERVICES } from '@/lib/site-data'
import { ICONS } from './icon-map'

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 border-t border-border bg-secondary/40 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="font-heading text-sm font-bold uppercase tracking-widest text-accent-foreground/70">
            What we do
          </p>
          <h2 className="mt-2 text-balance font-heading text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
            Moving services for every job
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Whether it&apos;s across the suburb or across the country, we have the
            team and the trucks to get you there safely.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = ICONS[service.icon]
            return (
              <article
                key={service.title}
                className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/60 hover:shadow-md"
              >
                <span className="flex size-12 items-center justify-center rounded-lg bg-primary/5 text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  {Icon ? <Icon className="size-6" aria-hidden="true" /> : null}
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold text-primary">
                  {service.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

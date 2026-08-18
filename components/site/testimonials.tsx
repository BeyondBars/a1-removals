import { Quote, Star } from 'lucide-react'
import { TESTIMONIALS } from '@/lib/site-data'

export function Testimonials() {
  return (
    <section id="reviews" className="scroll-mt-20 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-heading text-sm font-bold uppercase tracking-widest text-accent-foreground/70">
            Reviews
          </p>
          <h2 className="mt-2 text-balance font-heading text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
            Adelaide locals love moving with us
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <Quote className="size-8 text-accent" aria-hidden="true" />
              <div className="mt-3 flex" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-4 fill-accent text-accent" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-foreground/90">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 border-t border-border pt-4">
                <span className="font-heading font-bold text-primary">{t.name}</span>
                <span className="ml-2 text-sm text-muted-foreground">{t.suburb}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

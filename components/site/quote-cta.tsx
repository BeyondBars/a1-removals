'use client'

import { useState } from 'react'
import { CheckCircle2, Phone } from 'lucide-react'
import { BUSINESS } from '@/lib/site-data'

const FIELD =
  'w-full rounded-md border border-border bg-background px-3.5 py-2.5 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/30'
const LABEL = 'mb-1.5 block text-sm font-semibold text-foreground'

export function QuoteCta() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="quote" className="scroll-mt-20 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 rounded-2xl border border-border bg-card p-6 shadow-lg sm:p-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center">
            <p className="font-heading text-sm font-bold uppercase tracking-widest text-accent-foreground/70">
              Free, no-obligation quote
            </p>
            <h2 className="mt-2 text-balance font-heading text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
              Tell us about your move
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Fill in a few details and we&apos;ll get back to you fast with a clear,
              upfront price. No pressure, no hidden fees.
            </p>
            <div className="mt-8 rounded-xl border border-border bg-secondary/60 p-5">
              <p className="text-sm font-semibold text-foreground">Prefer to talk?</p>
              <a
                href={BUSINESS.phoneHref}
                className="mt-2 inline-flex items-center gap-2 font-heading text-xl font-extrabold text-primary hover:text-accent-foreground"
              >
                <Phone className="size-5 text-accent" aria-hidden="true" />
                {BUSINESS.phone}
              </a>
              <p className="mt-1 text-sm text-muted-foreground">{BUSINESS.hours}</p>
            </div>
          </div>

          {submitted ? (
            <div className="flex flex-col items-center justify-center rounded-xl border border-accent/40 bg-accent/10 p-8 text-center">
              <CheckCircle2 className="size-12 text-accent-foreground" aria-hidden="true" />
              <h3 className="mt-4 font-heading text-2xl font-extrabold text-primary">
                Thanks — we&apos;ve got it!
              </h3>
              <p className="mt-2 max-w-sm text-muted-foreground">
                One of our Adelaide team will be in touch shortly with your free
                quote. Keep an eye on your phone.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-4" noValidate>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={LABEL}>
                    Full name
                  </label>
                  <input id="name" name="name" type="text" required autoComplete="name" className={FIELD} placeholder="Jane Smith" />
                </div>
                <div>
                  <label htmlFor="phone" className={LABEL}>
                    Phone
                  </label>
                  <input id="phone" name="phone" type="tel" required autoComplete="tel" className={FIELD} placeholder="0412 345 678" />
                </div>
              </div>

              <div>
                <label htmlFor="date" className={LABEL}>
                  Preferred moving date
                </label>
                <input id="date" name="date" type="date" required className={FIELD} />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="from" className={LABEL}>
                    Moving from
                  </label>
                  <input id="from" name="from" type="text" required className={FIELD} placeholder="Suburb or address" />
                </div>
                <div>
                  <label htmlFor="to" className={LABEL}>
                    Moving to
                  </label>
                  <input id="to" name="to" type="text" required className={FIELD} placeholder="Suburb or address" />
                </div>
              </div>

              <div>
                <label htmlFor="details" className={LABEL}>
                  Anything else? <span className="font-normal text-muted-foreground">(optional)</span>
                </label>
                <textarea id="details" name="details" rows={3} className={FIELD} placeholder="Bedrooms, stairs, fragile items…" />
              </div>

              <button
                type="submit"
                className="mt-1 inline-flex items-center justify-center rounded-md bg-accent px-6 py-3.5 text-base font-bold text-accent-foreground transition-transform hover:scale-[1.01]"
              >
                Get My Free Quote
              </button>
              <p className="text-center text-xs text-muted-foreground">
                We respect your privacy. Your details are only used to prepare your quote.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

import Image from 'next/image'
import { Phone, ShieldCheck, Star } from 'lucide-react'
import { BUSINESS } from '@/lib/site-data'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-background">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 pt-14 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:pb-24 lg:pt-20">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-semibold text-primary">
            <ShieldCheck className="size-3.5 text-accent" aria-hidden="true" />
            Insured &amp; licensed · Locally owned
          </span>

          <h1 className="mt-5 text-balance font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-primary sm:text-5xl lg:text-6xl">
            Adelaide&apos;s Trusted Packing &amp; Moving Experts
          </h1>

          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            Careful, on-time removalists who treat your belongings like their own.
            From a single room to a whole office, we make moving across Adelaide
            genuinely stress-free.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#quote"
              className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3.5 text-base font-bold text-accent-foreground transition-transform hover:scale-[1.02]"
            >
              Get a Free Quote
            </a>
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-6 py-3.5 text-base font-semibold text-primary transition-colors hover:bg-secondary"
            >
              <Phone className="size-4" aria-hidden="true" />
              {BUSINESS.phone}
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
            <div className="flex" aria-hidden="true">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="size-4 fill-accent text-accent" />
              ))}
            </div>
            <span>
              Rated <span className="font-semibold text-foreground">4.9/5</span> by Adelaide families
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-border shadow-xl">
            <Image
              src="/hero-movers.png"
              alt="Two professional movers in navy uniforms loading a wrapped sofa into a moving truck on an Adelaide street"
              width={880}
              height={720}
              priority
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 left-4 hidden rounded-xl border border-border bg-card px-5 py-4 shadow-lg sm:left-6 sm:block">
            <p className="font-heading text-2xl font-extrabold text-primary">2,500+</p>
            <p className="text-sm text-muted-foreground">Adelaide moves completed</p>
          </div>
        </div>
      </div>
    </section>
  )
}

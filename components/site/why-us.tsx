import Image from 'next/image'
import { WHY_US } from '@/lib/site-data'
import { ICONS } from './icon-map'

export function WhyUs() {
  return (
    <section id="why-us" className="scroll-mt-20 py-16 lg:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="relative order-last lg:order-first">
          <div className="overflow-hidden rounded-2xl border border-border shadow-xl">
            <Image
              src="/team-packing.png"
              alt="A friendly moving team carefully packing labelled boxes and wrapping furniture inside a bright home"
              width={720}
              height={640}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div>
          <p className="font-heading text-sm font-bold uppercase tracking-widest text-accent-foreground/70">
            Why choose us
          </p>
          <h2 className="mt-2 text-balance font-heading text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
            Moving made simple, safe and honest
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            We are a local Adelaide business built on referrals. That only happens
            when every move goes right.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {WHY_US.map((item) => {
              const Icon = ICONS[item.icon]
              return (
                <div key={item.title} className="flex gap-4">
                  <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent-foreground">
                    {Icon ? <Icon className="size-5" aria-hidden="true" /> : null}
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-bold text-primary">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

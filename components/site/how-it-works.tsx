import { STEPS } from '@/lib/site-data'

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-20 bg-primary py-16 text-primary-foreground lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="font-heading text-sm font-bold uppercase tracking-widest text-accent">
            How it works
          </p>
          <h2 className="mt-2 text-balance font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
            Four simple steps to moving day
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-primary-foreground/70">
            No confusing process, no runaround. Here&apos;s exactly what to expect
            when you move with us.
          </p>
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <li
              key={step.title}
              className="rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-6"
            >
              <span className="flex size-11 items-center justify-center rounded-lg bg-accent font-heading text-lg font-extrabold text-accent-foreground">
                {i + 1}
              </span>
              <h3 className="mt-5 font-heading text-lg font-bold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

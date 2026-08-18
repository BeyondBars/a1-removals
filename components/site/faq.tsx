'use client'

import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'
import { FAQS } from '@/lib/site-data'

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="scroll-mt-20 border-t border-border bg-secondary/40 py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <p className="font-heading text-sm font-bold uppercase tracking-widest text-accent-foreground/70">
            FAQ
          </p>
          <h2 className="mt-2 text-balance font-heading text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
            Questions, answered
          </h2>
        </div>

        <div className="mt-10 divide-y divide-border overflow-hidden rounded-xl border border-border bg-card">
          {FAQS.map((faq, i) => {
            const isOpen = open === i
            return (
              <div key={faq.question}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-heading text-base font-bold text-primary transition-colors hover:bg-secondary/60"
                  >
                    {faq.question}
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent-foreground">
                      {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                    </span>
                  </button>
                </h3>
                {isOpen && (
                  <div className="px-5 pb-5 leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

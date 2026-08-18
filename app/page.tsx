import { Header } from '@/components/site/header'
import { Hero } from '@/components/site/hero'
import { Services } from '@/components/site/services'
import { WhyUs } from '@/components/site/why-us'
import { HowItWorks } from '@/components/site/how-it-works'
import { Testimonials } from '@/components/site/testimonials'
import { ServiceArea } from '@/components/site/service-area'
import { QuoteCta } from '@/components/site/quote-cta'
import { Faq } from '@/components/site/faq'
import { Footer } from '@/components/site/footer'

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <WhyUs />
        <HowItWorks />
        <Testimonials />
        <ServiceArea />
        <QuoteCta />
        <Faq />
      </main>
      <Footer />
    </div>
  )
}

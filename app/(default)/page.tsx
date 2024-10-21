export const metadata = {
  title: 'Home | Structured',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Blog from '@/components/blog'
import CTA from '@/components/cta'
import Testimonial from '@/components/testimonial'
import Logos from '@/components/logos'
import Integrations from '@/components/integrations'

export default function Home() {
  return (
    <>
      <Hero />
      <Logos />
      <Features />
      <Integrations />
      <Testimonial />
      <Blog />
      <CTA />
    </>
  )
}

export const metadata = {
  title: 'Home | Structured',
  description: 'Automating data discovery with AI',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Blog from '@/components/blog'
import CTA from '@/components/cta'
import Testimonial from '@/components/testimonial'
import Logos from '@/components/logos'
import Integrations from '@/components/integrations'
import Security from '@/components/security'

export default function Home() {
  return (
    <>
      <Hero />
      <Logos />
      <Features />
      <Integrations />
      <Security />
      <Testimonial />
      <Blog />
      <CTA />
    </>
  )
}
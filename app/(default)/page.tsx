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

export default function Home() {
  return (
    <>
      <Hero />
      <Logos />
      <Features />
      <Testimonial />
      <Blog />
      <CTA />
    </>
  )
}
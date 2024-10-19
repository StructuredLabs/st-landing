export const metadata = {
  title: 'Home | Structured',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Features2 from '@/components/features2'
import Blog from '@/components/blog'
import CTA from '@/components/cta'
import Testimonial from '@/components/testimonial'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Features2 />
      <Testimonial />
      <Blog />
      <CTA />
    </>
  )
}

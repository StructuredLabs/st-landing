export const metadata = {
  title: 'Features - Structured',
  description: 'Page description',
}

import Hero from '@/components/features/hero'
import Features1 from '@/components/features/features1'
import Features2 from '@/components/features/features2'
import Integrations from '@/components/features/integrations'
import Features3 from '@/components/features/features3'
import CTA from '@/components/features/cta'

export default function Home() {
  return (
    <>
      <Hero />
      <Features1 />
      <Features2 />
      <Integrations />
      <Features3 />
      <CTA />
    </>
  )
}

export const metadata = {
  title: 'Use Cases - Structured',
  description: 'Page description',
}

import Hero from '@/components/usecases/hero'
import Features1 from '@/components/usecases/features1'
import Features2 from '@/components/usecases/features2'
import Integrations from '@/components/usecases/integrations'
import Features3 from '@/components/usecases/features3'
import CTA from '@/components/usecases/cta'

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

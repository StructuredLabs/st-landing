export const metadata = {
  title: 'Features | Structured',
  description: 'Page description',
}

import Hero from '@/components/features/hero'
import Features1 from '@/components/features/features1'
import Features2 from '@/components/features/features2'
import Features4 from '@/components/features/features4'
import CTA from '@/components/features/cta'
import StatsBar from '@/components/features/statsbar'

export default function Home() {
  return (
    <>
      <Hero />
      <Features1 />
      <StatsBar />
      <Features2 />
      <Features4 />
      <CTA />
    </>
  )
}

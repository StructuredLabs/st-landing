export const metadata = {
  title: 'Bot | Structured',
  description: 'Page description',
}

import Hero from '@/components/bot/hero'
import Features1 from '@/components/bot/features1'
import Features2 from '@/components/bot/features2'
import Features3 from '@/components/bot/features3'
import CTA from '@/components/bot/cta'

export default function Home() {
  return (
    <>
      <Hero />
      <Features1 />
      <Features2 />
      <Features3 />
      <CTA />
    </>
  )
}

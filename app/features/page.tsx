export const metadata = {
  title: 'Features | Structured',
  description: 'Page description',
}

import Features1 from '@/components/features/features1'
import Features2 from '@/components/features/features2'
import Features4 from '@/components/features/features4'
import CTA from '@/components/features/cta'
import StatsBar from '@/components/features/statsbar'

export default function Home() {
  return (
    <>
      <Features4 />
      <Features1 />
      <StatsBar />
      <Features2 />
      <CTA />
    </>
  )
}

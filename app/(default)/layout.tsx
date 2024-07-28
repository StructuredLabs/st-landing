'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'
import  '@/app/css/global.css'
import Footer from '@/components/ui/footer'
import posthog from 'posthog-js'

posthog.init('phc_P2yhtUehiOqv72K4AYhLhV6BsF6fxabet6oeSVLo3DK', { api_host: 'https://us.i.posthog.com', person_profiles: 'identified_only' })

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {  

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    })
  })

  return (
    <>
      <main className="grow">
        {children}
      </main>
      <Footer />
    </>
  )
}

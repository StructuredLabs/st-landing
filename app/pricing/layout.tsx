'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'
import  '@/app/css/global.css'
import Footer from '@/components/ui/footer'

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
      <main className="grow bg-white">
        {children}
      </main>
      <Footer />
    </>
  )
}

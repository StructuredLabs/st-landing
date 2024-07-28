import Content from "@/components/terms-of-service/content"
import Hero from "@/components/terms-of-service/hero"

export const metadata = {
  title: 'Terms of service - Structured',
  description: 'Page description',
}

export default function Page() {
  return (
    <>
      <Hero />
      <Content />
    </>
  )
}
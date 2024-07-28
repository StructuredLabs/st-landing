import Content from "@/components/privacy-policy/content"
import Hero from "@/components/privacy-policy/hero"

export const metadata = {
  title: 'Privacy policy - Structured',
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
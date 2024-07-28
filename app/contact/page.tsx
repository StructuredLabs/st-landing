import ContactForm from "@/components/contact/contact"
import FAQ from "@/components/contact/faq"

export const metadata = {
  title: 'FAQ - Structured',
  description: 'Page description',
}

export default function Page() {
  return (
    <>
      <ContactForm />
      <FAQ />
    </>
  )
}
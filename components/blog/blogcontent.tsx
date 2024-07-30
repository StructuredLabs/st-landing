export default function BlogContent({
  prefix = 'Introducing',
  title = "JavaScript for Beginners",
  description = "Pariatur velit exercitation pariatur do et sunt. Occaecat irure officia pariatur voluptate ut dolore.",
  children,
}: {
  prefix?: string
  title: string
  description: string
  children: React.ReactNode
}) {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <p className="text-base font-semibold leading-7 text-gray-600">{prefix}</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h1>
        <p className="mt-6 text-xl leading-8">
          {description}
        </p>
      </div>
      {children}
    </div>
  )
}

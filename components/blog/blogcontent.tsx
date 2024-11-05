export default function BlogContent({
  title,
  description,
  children,
  imageUrl
}: {
  title: string
  description: string
  children: React.ReactNode
  imageUrl: string
}) {
  return (
    <div className="bg-white px-6 pb-32 pt-16 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <img src={imageUrl} alt={title} className="w-full h-auto mb-12 rounded-lg" />
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h1>
        <p className="mt-6 text-xl leading-8">
          {description}
        </p>
      </div>
      {children}
    </div>
  )
}

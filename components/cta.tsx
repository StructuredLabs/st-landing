export default function CTA() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-100 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Ready to make data work for you?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-gray-600">
              Start your free trial today and effortlessly explore, document, and trust your data.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="https://cloud.structuredlabs.com/"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
            >
              Get started
            </a>
            <a href="https://docs.structuredlabs.com/" className="text-sm font-semibold leading-6 text-gray-900">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
          >
            <circle r={512} cx={512} cy={512} fill="url(#light-gray-gradient)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="light-gray-gradient">
                <stop stopColor="#818c91" />
                <stop offset={1} stopColor="#3f4952" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  )
}

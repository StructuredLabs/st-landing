export default function CTA() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-100 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Want product news and updates?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg/8 text-gray-600">
            Sign up for our newsletter.
          </p>
          <form className="mt-10 max-w-md mx-auto">
            <div className="flex gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                autoComplete="email"
                className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-slate-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
              >
                Subscribe
              </button>
            </div>
          </form>
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
          >
            <circle r={512} cx={512} cy={512} fill="url(#light-gray-blue-gradient)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="light-gray-blue-gradient">
                <stop stopColor="#B0BEC5" />
                <stop offset={1} stopColor="#42A5F5" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  )
}

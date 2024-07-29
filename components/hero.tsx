'use client'

export default function Hero() {
  return (
    <div className="bg-white">
      <div className="relative isolate pt-5">
        <div className="py-24 sm:py-32 lg:pb-40">
        <div className="flex justify-center">
          <p className="relative rounded-full bg-gray-50 mb-6 px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-inset ring-gray-900/5 flex items-center">
            <img src="images/investors/YC.png" alt="YC Logo" className="h-4 w-4 mr-2 ml-2"/>
            <span className="hidden md:inline">Backed by Y Combinator&nbsp; &nbsp;</span>
            <a href="https://www.ycombinator.com/companies/structured" className="font-semibold text-slate-800">
              <span aria-hidden="true" className="absolute inset-0" />
              {' '} Read more {' '}
              <span aria-hidden="true">&rarr;</span>
            </a>
          </p>
        </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Automatically compute financial metrics for your business
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Calculate CAC-LTV, churn rate, sales pipeline, gross margin, and more. Instantly access detailed insights to optimize costs, improve retention, and increase profitability.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="https://app.structuredlabs.com/"
                  target='_blank'
                  className="rounded-md bg-slate-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
                >
                  Get started
                </a>
                <a href="https://docs.structuredlabs.com" target='_blank' className="text-sm font-semibold leading-6 text-gray-900">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="mt-16 flow-root sm:mt-24">
              <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <img
                  alt="App screenshot"
                  src="images/hero.png"
                  width={2432}
                  height={1442}
                  className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  )
}

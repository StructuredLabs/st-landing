import AppScreenshot from '@/components/appscreenshot'

export const heroPageTitle = "Code, connect and deploy interactive data apps faster than ever.";

export const heroPageSubtitle =
  "Ingest, transform, and visualize your data in minutes. No heavy infrastructure. No steep learning curve.";



export default function Hero() {
  return (
    <div className="bg-white relative">
      <div className="relative isolate">

        {/* Main content */}
        <div className="py-24 sm:py-24 lg:pb-32 relative z-10">

          {/* Y Combinator Badge */}
          <YCombinatorBadge />

          {/* Hero Content */}
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-8">
              <HeroTitle />
              <p className="mt-6 text-xl leading-8 text-gray-600">
                {heroPageSubtitle}
              </p>

              {/* Call to Action Buttons */}
              <CallToActionButtons />
            </div>

            {/* Image Section */}
            <AppScreenshot />
          </div>
        </div>
      </div>
    </div>
  )
}

/* Y Combinator Badge Component */
function YCombinatorBadge() {
  return (
    <div className="flex justify-center relative z-10">
      <p className="relative rounded-full bg-gray-50 mb-6 px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-inset ring-gray-900/5 flex items-center">
        <img src="/images/investors/YC.png" alt="YC Logo" className="h-4 w-4 mr-2 ml-2" />
        <span className="hidden md:inline">Backed by Y Combinator&nbsp; &nbsp;</span>
        <a href="https://www.ycombinator.com/companies/structured"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-slate-800">
          <span aria-hidden="true" className="absolute inset-0" />
          {' '} Read more {' '}
          <span aria-hidden="true">&rarr;</span>
        </a>
      </p>
    </div>
  )
}

/* Hero Title Component */
function HeroTitle() {
  return (
    <h1 className="text-4xl tracking-wide text-gray-900 sm:text-5xl relative z-10">
      <div>{heroPageTitle}</div>
    </h1>
  );
}

/* Call to Action Buttons Component */
function CallToActionButtons() {
  return (
    <div className="mt-10 flex flex-col items-center justify-center relative z-20">
      <div className="flex items-center justify-center gap-x-6">
        <a
          href="https://console.structuredlabs.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-slate-900 px-3 py-2 text-md font-semibold text-white shadow-sm hover:bg-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
        >
          Get started
        </a>
        <a
          href="https://docs.preswald.com"
          target="_blank"
          className="text-md font-semibold leading-6 text-gray-900"
        >
          Learn more <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  )
}


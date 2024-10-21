import { heroPageSubtitle, heroPageTitle, heroPageEmphasis, heroPageEnd, heroPageImageUrl } from "./pageContent"
import AppScreenshot from '@/components/appscreenshot'

export default function Hero() {
  return (
    <div className="bg-white relative">
      <div className="relative isolate">
        
        {/* Top gradient shape */}
        <TopGradientShape />

        {/* Main content */}
        <div className="py-24 sm:py-24 lg:pb-32 relative z-10">
          
          {/* Y Combinator Badge */}
          <YCombinatorBadge />
          
          {/* Hero Content */}
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <HeroTitle />
              <p className="mt-6 text-xl leading-8 text-gray-600">
                {heroPageSubtitle}
              </p>
              
              {/* Call to Action Buttons */}
              <CallToActionButtons />
              
              {/* Bottom Gradient Shape */}
              <BottomGradientShape />
            </div>

            {/* Image Section */}
            <AppScreenshot />
          </div>
        </div>
      </div>
    </div>
  )
}

/* Top Gradient Shape Component */
function TopGradientShape() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-x-0 -top-40 -z-20 transform-gpu overflow-hidden blur-3xl sm:-top-80 pointer-events-none" // added pointer-events-none
    >
      <div
        style={{
          clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        }}
        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#808dff] to-[#89d6fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
      />
    </div>
  )
}

/* Y Combinator Badge Component */
function YCombinatorBadge() {
  return (
    <div className="flex justify-center relative z-10">
      <p className="relative rounded-full bg-gray-50 mb-6 px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-inset ring-gray-900/5 flex items-center">
        <img src="images/investors/YC.png" alt="YC Logo" className="h-4 w-4 mr-2 ml-2" />
        <span className="hidden md:inline">Backed by Y Combinator&nbsp; &nbsp;</span>
        <a href="https://www.ycombinator.com/companies/structured" className="font-semibold text-slate-800">
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
    <h1 className="text-4xl tracking-wide leading-[2rem] text-gray-900 sm:text-5xl relative z-10">
      {heroPageTitle}
      <span className="bg-gradient-to-r from-[#05a0ed] to-[#7580e0] bg-clip-text text-transparent font-bold animate-gradient-move bg-[length:200%_200%]">
        {heroPageEmphasis}
      </span>
      {heroPageEnd}
    </h1>
  )
}

/* Call to Action Buttons Component */
function CallToActionButtons() {
  return (
    <div className="mt-10 flex flex-col items-center justify-center relative z-20">
      <div className="flex items-center justify-center gap-x-6">
        <a
          href="https://app.structuredlabs.com/"
          target="_blank"
          className="rounded-md bg-slate-900 px-3 py-2 text-md font-semibold text-white shadow-sm hover:bg-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
        >
          Get started
        </a>
        <a
          href="https://docs.structuredlabs.com"
          target="_blank"
          className="text-md font-semibold leading-6 text-gray-900"
        >
          Learn more <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  )
}

/* Bottom Gradient Shape Component */
function BottomGradientShape() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-x-0 top-[calc(100%-13rem)] -z-20 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
    >
      <div
        style={{
          clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        }}
        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#808dff] to-[#89d6fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
      />
    </div>
  )
}

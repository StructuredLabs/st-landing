import { featuresHomePage, featuresHomePageTitle, featuresHomePageSubtitle } from './pageContent';

export default function Features() {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-2xl tracking-wide font-bold tracking-tight text-gray-900 sm:text-3xl">
            {featuresHomePageTitle}
          </h2>
          <p className="mt-6 text-xl leading-8 text-gray-600">
              {featuresHomePageSubtitle}           
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {featuresHomePage.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-lg font-semibold leading-8 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <feature.icon aria-hidden="true" className="h-7 w-7 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-lg leading-8 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-4">
                    <a href={feature.href} className="text-base font-semibold leading-7 text-blue-600">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

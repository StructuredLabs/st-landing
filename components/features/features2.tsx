import { ArrowPathIcon, ClockIcon, TicketIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Real-time alerts.',
    description: 'Get alerted immediately via Slack or email if key metrics are at risk, allowing for timely interventions.',
    href: 'https://docs.structuredlabs.com/',
    icon: ClockIcon,
  },
  {
    name: 'Easy data request tickets.',
    description: 'Keep everyone aligned on data requests and statuses with an integrated ticketing system.',
    href: 'https://docs.structuredlabs.com/',
    icon: TicketIcon,
  },
  {
    name: 'Audit logs over time.',
    description: 'Track and review audit logs of different accounts and leads over time to finding unexpected patterns.',
    href: 'https://docs.structuredlabs.com/',
    icon: ArrowPathIcon,
  },
]

export default function Features2() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Built for simplicity</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Say goodbye to excel gymnastics
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Purpose-built with your team in mind: no more juggling between different products to get the insights you need to run your business.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon aria-hidden="true" className="h-5 w-5 flex-none text-blue-600" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a href={feature.href} className="text-sm font-semibold leading-6 text-blue-600">
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

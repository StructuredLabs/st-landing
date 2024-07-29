import { ServerIcon, ChartBarIcon, TicketIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Single source of truth',
    description:
      'Centralize all of your business data, ensuring everyone in your organization accesses the consistent, accurate, and up-to-date information.',
    href: 'https://docs.structuredlabs.com/',
    icon: ServerIcon,
  },
  {
    name: 'One-click metrics',
    description:
      'Generate key business metrics with a single click, making it easy to track performance and make data-driven decisions.',
    href: 'https://docs.structuredlabs.com/',
    icon: ChartBarIcon,
  },
  {
    name: 'Fine-grained tracking',
    description:
      'Monitor your systems and manage tickets in the same place, enabling lightning-fast issue resolution.',
    href: 'https://docs.structuredlabs.com/',
    icon: TicketIcon,
  },
]

export default function Features() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Stay on top of your top KPIs
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
              Drill-down into business metrics. Track customer engagement to fix retention issues. 
              Monitor sales to focus on your most profitable products or services.           
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
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

import {
    ShareIcon,
    ChartBarIcon,
    PresentationChartLineIcon,
    BellAlertIcon,
    QuestionMarkCircleIcon,
    CpuChipIcon,
} from '@heroicons/react/20/solid'

const features = [
    {
        name: 'Connect in a snap.',
        description: 'Integrate with several data sources in minutes with our pre-built connectors.',
        icon: ShareIcon,
    },
    {
        name: 'Metrics wonderland.',
        description: 'Explore our treasure chest of pre-built metrics to track your success.',
        icon: ChartBarIcon,
    },
    {
        name: 'Share the knowledge.',
        description: 'Effortlessly share dashboards and collaborate with your team.',
        icon: PresentationChartLineIcon,
    },
    {
        name: 'Alert me now.',
        description: 'Get instant alerts for data changes so you are never caught off guard.',
        icon: BellAlertIcon,
    },
    {
        name: 'Ask and you shall receive.',
        description: 'Type your questions in plain English and get the answers, pronto.',
        icon: QuestionMarkCircleIcon,
    },
    {
        name: 'AI Onboarding.',
        description: 'Let our AI assistant guide you through setup like a pro.',
        icon: CpuChipIcon,
    },
]

export default function Features2() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-base font-semibold leading-7 text-blue-600">Everything you need</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Access hundreds of pre-built metrics</p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Use our comprehensive metrics library to instantly track performance and identify growth opportunities.
                    </p>
                </div>
            </div>
            <div className="relative overflow-hidden pt-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <img
                        alt="App screenshot"
                        src="images/query.png"
                        width={2432}
                        height={1442}
                        className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
                    />
                    <div aria-hidden="true" className="relative">
                        <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
                    </div>
                </div>
            </div>
            <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
                <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
                    {features.map((feature) => (
                        <div key={feature.name} className="relative pl-9">
                            <dt className="inline font-semibold text-gray-900">
                                <feature.icon aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-blue-600" />
                                {feature.name}
                            </dt>{' '}
                            <dd className="inline">{feature.description}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    )
}

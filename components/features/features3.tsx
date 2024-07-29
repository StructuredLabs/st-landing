import { Cog6ToothIcon, CheckCircleIcon, ArrowsRightLeftIcon } from '@heroicons/react/24/outline';

const incentives = [
    {
        name: 'Slice and dice your data',
        icon: Cog6ToothIcon,
        description: "Marry your custom workflows and automations with our platform for maximum reliability and robustness.",
    },
    {
        name: 'Answer one-off questions easily',
        icon: CheckCircleIcon,
        description: "No more waiting two weeks or hunting down four different teams to get an answer to a question you need an immediate answer to.",
    },
    {
        name: 'Build a data glossary',
        icon: ArrowsRightLeftIcon,
        description: "Create a comprehensive glossary of revenue-related terms that is thorough and easy enough for your whole team to understand."
    },
]

export default function Features3() {
    return (
        <div className="bg-gray-50">
            <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
                <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
                    <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
                        <div>
                            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                                From Seeing Everything to Knowing Exactly What Matters
                            </h2>
                            <p className="mt-4 text-gray-500">
                                Structured isn't about data, it's about unlocking the collective genius of your organization. We bridge information silos, empowering every individual to contribute their unique perspective to a unified vision of growth.
                            </p>
                        </div>
                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100">
                            <img
                                alt=""
                                src="images/glossary.png"
                                className="object-cover object-center"
                            />
                        </div>
                    </div>
                    <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
                        {incentives.map((incentive) => (
                            <div key={incentive.name} className="sm:flex lg:block">
                                <div className="sm:flex-shrink-0">
                                    <incentive.icon className="h-16 w-16 text-gray-500" />
                                </div>
                                <div className="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                                    <h3 className="text-sm font-medium text-gray-900">{incentive.name}</h3>
                                    <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

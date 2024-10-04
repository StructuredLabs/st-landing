import { botPageSection3, botPageSection3Title, botPageSection3Subtitle, botPageSection3ImgUrl } from '../pageContent';

export default function Features3() {
    return (
        <div className="bg-gray-50">
            <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
                <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
                    <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
                        <div>
                            <h2 className="text-4xl tracking-wide font-bold tracking-tight text-gray-900">
                                {botPageSection3Title}
                            </h2>
                            <p className="mt-4 text-gray-500">
                                {botPageSection3Subtitle}
                            </p>
                        </div>
                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100">
                            <img
                                alt=""
                                src={botPageSection3ImgUrl}
                                className="object-cover object-center"
                            />
                        </div>
                    </div>
                    <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
                        {botPageSection3.map((feature) => (
                            <div key={feature.name} className="sm:flex lg:block">
                                <div className="sm:flex-shrink-0">
                                    <feature.icon className="h-16 w-16 text-gray-500" />
                                </div>
                                <div className="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                                    <h3 className="text-sm font-medium text-gray-900">{feature.name}</h3>
                                    <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
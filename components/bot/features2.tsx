import { botPageSection2, botPageSection2Tag, botPageSection2Title, botPageSection2Subtitle, botPageSection2ImgUrl } from '../pageContent'

export default function Features2() {
    return (
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-blue-600">{botPageSection2Tag}</h2>
                <p className="mt-2 text-3xl font-bold tracking-wide tracking-tight text-gray-900 sm:text-4xl">{botPageSection2Title}</p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  {botPageSection2Subtitle}
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {botPageSection2.map((feature) => (
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
            <img
              alt="Product screenshot"
              src={botPageSection2ImgUrl}
              width={2432}
              height={1442}
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            />
          </div>
        </div>
      </div>
    )
  }

// export default function Features2() {
//     return (
//         <div className="bg-white py-24 sm:py-32">
//             <div className="mx-auto max-w-7xl px-6 lg:px-8">
//                 <div className="mx-auto max-w-2xl sm:text-center">
//                     <h2 className="text-base font-semibold leading-7 text-blue-600">{features2SectionTag}</h2>
//                     <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{features2SectionTitle}</p>
//                     <p className="mt-6 text-lg leading-8 text-gray-600">
//                         {features2SectionSubtitle}
//                     </p>
//                 </div>
//             </div>
//             <div className="relative overflow-hidden pt-16">
//                 <div className="mx-auto max-w-7xl px-6 lg:px-8">
//                     <img
//                         alt="App screenshot"
//                         src={features2SectionImageUrl}
//                         width={2432}
//                         height={1442}
//                         className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
//                     />
//                     <div aria-hidden="true" className="relative">
//                         <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
//                     </div>
//                 </div>
//             </div>
//             <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
//                 <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
//                     {features2.map((feature:any) => (
//                         <div key={feature.name} className="relative pl-9">
//                             <dt className="inline font-semibold text-gray-900">
//                                 <feature.icon aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-blue-600" />
//                                 {feature.name}
//                             </dt>{' '}
//                             <dd className="inline">{feature.description}</dd>
//                         </div>
//                     ))}
//                 </dl>
//             </div>
//         </div>
//     )
// }
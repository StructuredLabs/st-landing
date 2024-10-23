const featuredTestimonial = {
  body: 'As a startup, it can be challenging to balance the need for immediate growth with the long-term requirements for robust data management. Structured\'s automated metric lineage proves to be an essential resource for this problem. It seamlessly tracks the evolutions in your assumptions/metrics while ensuring that the entire team remains aligned in their understanding of the key decision-making metrics.',
  author: {
    name: 'Chris Jun',
    handle: 'chrisjun',
    imageUrl:'images/testimonials/chrisjun.png',
    logoUrl: 'images/logos/logo2.png',
  },
}
const testimonials = [
  [
    [
      {
        body: 'Keeping definitions of KPI\'s and other metrics consistent across a team is always a challenge. Structured makes it much easier to ensure you\'re all driving towards the same goals with a shared understanding of how to measure success.',
        author: {
          name: 'Akash Kashyap',
          handle: 'akashkashyap',
          imageUrl:'images/testimonials/testimonial-headshot-4.png',
        },
      },
      // More testimonials...
    ],
    [
      {
        body: 'Structured has made it easier for us to set and track our KPIs while also improving data discovery within our team. Everything is clear and accessible, so we know where we stand and can make faster, better decisions to hit our goals.',
        author: {
          name: 'Akshay Chalana',
          handle: 'akshaychalana',
          imageUrl:'images/testimonials/testimonial-headshot-3.png',
        },
      },
      // More testimonials...
    ],
  ],
  [
    [
      {
        body: '',
        author: {
          name: 'Andrew Hurst',
          handle: 'andrewhurst',
          imageUrl:'images/testimonials/testimonial-headshot-1.png',
        },
      },
      // More testimonials...
    ],
    [
      {
        body: '',
        author: {
          name: 'Drake Senter',
          handle: 'drakesenter',
          imageUrl:'images/testimonials/testimonial-headshot-2.png',
        },
      },
      // More testimonials...
            {
        body: '',
        author: {
          name: 'Rahil Jetly',
          handle: 'rahiljetly',
          imageUrl:'images/testimonials/testimonial-headshot-5.png',
        },
      },
      // More testimonials...
    ],
  ],
]

function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="relative isolate bg-white pb-32 pt-24 sm:pt-32">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#808dff] to-[#89d6fc]"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#808dff] to-[#89d6fc] xl:ml-0 xl:mr-[calc(50%-12rem)]"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Building Together</h2>
          <p className="mt-2 text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Discover how we’re making a difference together
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          <figure className="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
            <blockquote className="p-6 text-lg font-semibold leading-7 tracking-tight text-gray-900 sm:p-12 sm:text-xl sm:leading-8">
              <p>{`“${featuredTestimonial.body}”`}</p>
            </blockquote>
            <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
              <img
                alt=""
                src={featuredTestimonial.author.imageUrl}
                className="h-10 w-10 flex-none rounded-full bg-gray-50"
              />
              <div className="flex-auto">
                <div className="font-semibold">{featuredTestimonial.author.name}</div>
                <div className="text-gray-600">{`@${featuredTestimonial.author.handle}`}</div>
              </div>
              <img alt="" src={featuredTestimonial.author.logoUrl} className="h-7 w-auto flex-none" />
            </figcaption>
          </figure>
          {testimonials.map((columnGroup, columnGroupIdx) => (
            <div key={columnGroupIdx} className="space-y-8 xl:contents xl:space-y-0">
              {columnGroup.map((column, columnIdx) => (
                <div
                  key={columnIdx}
                  className={classNames(
                    (columnGroupIdx === 0 && columnIdx === 0) ||
                      (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1)
                      ? 'xl:row-span-2'
                      : 'xl:row-start-1',
                    'space-y-8',
                  )}
                >
                  {column.map((testimonial) => (
                    <figure
                      key={testimonial.author.handle}
                      className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                    >
                      <blockquote className="text-gray-900">
                        <p>{`“${testimonial.body}”`}</p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4">
                        <img alt="" src={testimonial.author.imageUrl} className="h-10 w-10 rounded-full bg-gray-50" />
                        <div>
                          <div className="font-semibold">{testimonial.author.name}</div>
                          <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                        </div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

import { lazy } from "react";

const TimesSqBlog = lazy(
  () => import("./blogs/TimesSqBlog"),
);

const StartupBattlefieldBlog = lazy(
  () => import("./blogs/StartupBattlefieldBlog"),
);

const Soc2Type1Blog = lazy(
  () => import("./blogs/Soc2Type1Blog"),
);

export const posts = [
  {
    id: 0,
    title: `Structured Selected for TechCrunch Disrupt - Startup Battlefield 2024`,
    href: '#',
    description:
      `Structured has been selected to participate in Startup Battlefield 200 at TechCrunch Disrupt 2024. Startup Battlefield 200 is the world's preeminent startup competition. Startup Battlefield 200 will showcase the top 200 startups from around the globe, across multiple industries.`,
    imageUrl: '/images/blogs/startup_battlefield.png',
    date: 'September 10, 2024',
    datetime: '2024-09-10',
    category: { title: 'Technology', href: '#' },
    author: {
      name: 'Amrutha Gujjar',
      role: 'Founder and CEO',
      href: '#',
      imageUrl: '/images/team/amrutha.png',
    },
    component: StartupBattlefieldBlog
  }, {
    id: 1,
    title: `Structured is now SOC 2 Type 1 Compliant`,
    href: '#',
    description:
      `We are thrilled to announce that Structured has achieved SOC 2 Type 1 compliance, a significant milestone in our ongoing commitment to protecting your data and ensuring the highest standards of security.`,
    imageUrl: '/images/blogs/soc2_type1.png',
    date: 'June 6, 2024',
    datetime: '2024-06-06',
    category: { title: 'Security', href: '#' },
    author: {
      name: 'Amrutha Gujjar',
      role: 'Founder and CEO',
      href: '#',
      imageUrl: '/images/team/amrutha.png',
    },
    component: Soc2Type1Blog,
  },
  {
    id: 2,
    title: 'Structured featured in NYC Times Square',
    href: '#',
    description:
      `Structured is being featured in NYC Times Square this week! It's so exciting! Thank you to Brex and Y Combinator for supporting our journey. 😀`,
    imageUrl: '/images/blogs/structured-times-square.png',
    date: 'May 12, 2024',
    datetime: '2024-05-12',
    category: { title: 'News', href: '#' },
    author: {
      name: 'Shivam Singhal',
      role: 'Founder and CTO',
      href: '#',
      imageUrl: '/images/team/shivam.png',
    },
    component: TimesSqBlog,
  },
];

export default function Blog() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="relative isolate bg-white">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-20 blur-3xl"
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
          className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-15 blur-3xl sm:pt-40 xl:justify-end"
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
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Your source for the latest company updates and announcements.
            </p>
            <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
              {posts.map((post) => (
                <article key={post.id} className="relative isolate flex flex-col gap-8 lg:flex-row">
                  <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                    <img
                      alt=""
                      src={post.imageUrl}
                      className={`absolute inset-0 h-full w-full rounded-2xl ${post.id === 0 || post.id === 1 ? 'object-contain bg-transparent' : 'object-cover bg-gray-100'}`}
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div>
                    <div className="flex items-center gap-x-4 text-xs">
                      <time dateTime={post.datetime} className="text-gray-500">
                        {post.date}
                      </time>
                      <a
                        href={post.category.href}
                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                      >
                        {post.category.title}
                      </a>
                    </div>
                    <a className="group relative max-w-xl" href={`/blog/${post.title}`}>
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <a href={`/blog/${post.title}`}>
                          <span className="absolute inset-0" />
                          {post.title}
                        </a>
                      </h3>
                      <p className="mt-5 text-sm leading-6 text-gray-600">{post.description}</p>
                    </a>
                    <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                      <div className="relative flex items-center gap-x-4">
                        <img alt="" src={post.author.imageUrl} className="h-10 w-10 rounded-full bg-gray-50" />
                        <div className="text-sm leading-6">
                          <p className="font-semibold text-gray-900">
                            <a href={post.author.href}>
                              <span className="absolute inset-0" />
                              {post.author.name}
                            </a>
                          </p>
                          <p className="text-gray-600">{post.author.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
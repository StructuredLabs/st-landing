import { lazy } from "react";

const Blog1 = lazy(
  () => import("./blogs/Blog1"),
);
const Blog2 = lazy(
  () => import("./blogs/Blog2"),
);
const Blog3 = lazy(
  () => import("./blogs/Blog3"),
);
const Blog4 = lazy(
  () => import("./blogs/Blog4"),
);

export const posts = [
  {
    id: 1,
    title: `The Power of Consistent Metrics for Growing SaaS Companies`,
    href: '#',
    description:
      `Growing a SaaS business is challenging enough without having to deal with inconsistent metrics. This post dives into how Structured helps ensure everyone in your company is on the same page with metrics like CAC and MRR, making growth smoother and more predictable.`,
    imageUrl: 'images/blogs/blog1.png',
    date: 'June 6, 2024',
    datetime: '2024-06-06',
    category: { title: 'Business Strategy', href: '#' },
    author: {
      name: 'Amrutha Gujjar',
      role: 'Founder and CEO',
      href: '#',
      imageUrl: 'images/team/amrutha.png',
    },
    component: Blog1,
  },
  {
    id: 2,
    title: 'Why Misaligned Metrics Are Costing You More Than You Think',
    href: '#',
    description:
      `Misaligned metrics can be a silent killer for your business. This article explores the real costs of metric misalignment and how Structured can help fix the problem by keeping everyone in sync with accurate, reliable data.`,
    imageUrl: 'images/blogs/blog2.png',
    date: 'May 12, 2024',
    datetime: '2024-05-12',
    category: { title: 'Operational Efficiency', href: '#' },
    author: {
      name: 'Shivam Singhal',
      role: 'Founder and CTO',
      href: '#',
      imageUrl: 'images/team/shivam.png',
    },
    component: Blog2,
  },
  {
    id: 3,
    title: 'How Structured Keeps Your CAC and MRR on Track',
    href: '#',
    description:
      `If different teams in your company are using different definitions for key metrics like CAC and MRR, it can lead to a lot of confusion. Find out how Structured helps standardize these metrics across your organization so you can make decisions with confidence.`,
    imageUrl: 'images/blogs/blog3.png',
    date: 'May 23, 2024',
    datetime: '2024-05-23',
    category: { title: 'Revenue Optimization', href: '#' },
    author: {
      name: 'Amrutha Gujjar',
      role: 'Founder and CEO',
      href: '#',
      imageUrl: 'images/team/amrutha.png',
    },
    component: Blog3,
  },
  {
    id: 4,
    title: 'Turning Data into Decisions: How Structured Simplifies Your Metrics',
    href: '#',
    description:
      `Data is only as good as the decisions it informs. This post covers how Structured takes the complexity out of managing business metrics, turning your data into actionable insights that drive growth.`,
    imageUrl: 'images/blogs/blog4.png',
    date: 'May 12, 2024',
    datetime: '2024-05-12',
    category: { title: 'Data Strategy', href: '#' },
    author: {
      name: 'Shivam Singhal',
      role: 'Founder and CTO',
      href: '#',
      imageUrl: 'images/team/shivam.png',
    },
    component: Blog4,
  },
];

export default function Blog() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            {posts.map((post) => (
              <article key={post.id} className="relative isolate flex flex-col gap-8 lg:flex-row">
                <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                  <img
                    alt=""
                    src={post.imageUrl}
                    className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
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
  )
}
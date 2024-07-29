export const posts = [
    {
        id: 1,
        title: 'Boosting Team Collaboration with Structured’s New Slack Integration',
        href: '#',
        description:
            'Effective collaboration and timely access to data are crucial for any team striving for success. Structured’s new Slack integration bridges the gap between data insights and team communication, enabling real-time notifications, data queries, and seamless sharing of insights within Slack channels. In this blog post, we’ll explore a detailed use case scenario demonstrating how a marketing team can leverage Structured’s Slack integration to enhance their workflow and achieve better results.',
        imageUrl: 'images/blogs/blog1.png',
        date: 'June 6, 2024',
        datetime: '2024-06-06',
        category: { title: 'Technology', href: '#' },
        author: {
            name: 'Amrutha Gujjar',
            role: 'Founder and CEO',
            href: '#',
            imageUrl: 'images/team/amrutha.png',
        },
    },
    {
        id: 2,
        title: 'Breaking Down Silos: Structured\'s Role in Fostering Cross-Team Collaboration in Revenue Operations',
        href: '#',
        description:
            'In today’s fast-paced business environment, the ability to quickly adapt and make informed decisions is crucial. However, many organizations find themselves hindered by silos—barriers that separate teams, data, and systems, preventing effective collaboration and data sharing. This is particularly detrimental in the realm of Revenue Operations (RevOps), where alignment across sales, marketing, and customer success teams is essential for driving growth and optimizing revenue cycles. Enter Structured, a revolutionary platform designed to dismantle these barriers and foster seamless cross-team collaboration.',
        imageUrl: 'images/blogs/blog2.png',
        date: 'May 12, 2024',
        datetime: '2024-05-12',
        category: { title: 'Business', href: '#' },
        author: {
            name: 'Shivam Singhal',
            role: 'Founder and CTO',
            href: '#',
            imageUrl: 'images/team/shivam.png',
        },
    },
    {
        id: 3,
        title: '10 Ways to Use Structured for Effective Customer Segmentation',
        href: '#',
        description:
            'Effective customer segmentation can transform how you approach marketing, sales, and customer service. With Structured’s advanced tools, you can segment your customers with unprecedented precision, leading to more personalized interactions and improved business outcomes. Here are 10 actionable tips to effectively leverage Structured for insightful customer segmentation.',
        imageUrl: 'images/blogs/blog3.png',
        date: 'May 23, 2024',
        datetime: '2024-05-23',
        category: { title: 'Guides', href: '#' },
        author: {
            name: 'Amrutha Gujjar',
            role: 'Founder and CEO',
            href: '#',
            imageUrl: 'images/team/amrutha.png',
        },
    },
    {
        id: 4,
        title: 'Next-Level Data Mapping Capabilities Coming Soon to Structured',
        href: '#',
        description:
            'In the continuously evolving landscape of data management, staying ahead of the curve is not just an advantage; it\'s a necessity. Structured is set to redefine the standards once again with the introduction of its next-level data mapping capabilities. This upcoming feature is designed to enhance how businesses visualize, understand, and manipulate their data relationships, ensuring a seamless and intuitive experience. Here\'s what to expect and how it can transform your data management strategy.',
        imageUrl: 'images/blogs/blog4.png',
        date: 'May 12, 2024',
        datetime: '2024-05-12',
        category: { title: 'Tools', href: '#' },
        author: {
            name: 'Shivam Singhal',
            role: 'Founder and CTO',
            href: '#',
            imageUrl: 'images/team/shivam.png',
        },
    },
    // More posts...
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
                    <div className="group relative max-w-xl">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <a href={post.href}>
                          <span className="absolute inset-0" />
                          {post.title}
                        </a>
                      </h3>
                      <p className="mt-5 text-sm leading-6 text-gray-600">{post.description}</p>
                    </div>
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
  
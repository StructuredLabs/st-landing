import BlogContent from "../blogcontent";

export default function TimesSqBlog({
    prefix = 'Structured is Thrilled to Be',
    title = "Featured in NYC Times Square: A Milestone for Data-Driven Decisions",
    description = "We're excited to announce that Structured was recently featured on a billboard in the heart of NYC's Times Square. This achievement is a major milestone, and we want to extend a special thank you to YCombinator and Brex for their support on this journey.",
}: {
    prefix?: string
    title: string
    description: string
}) {
    return (
        <div className="flex justify-center">
            <BlogContent
                prefix={prefix}
                title={title}
                description={description}
                imageUrl="/images/blogs/structured-times-square.png"
            >
                <div className="mt-10 max-w-3xl space-y-6 text-gray-700 mx-auto">
                    
                    <p>
                        We are beyond excited to share that Structured has been featured in one of the most iconic locations in the world—New York City's Times Square! Seeing our company name displayed in the heart of the city that never sleeps is a surreal and proud moment for us. It's a powerful reminder of how far we've come, and it's a testament to the dedication and hard work of our entire team.
                    </p>

                    <p>
                        None of this would have been possible without the incredible support we've received from our partners and investors. First and foremost, a huge thank you to <strong>YCombinator</strong> for believing in our vision from the start. Their mentorship and guidance have been instrumental in shaping Structured into the company it is today, and we’re incredibly grateful for the community they’ve built.
                    </p>

                    <p>
                        We also want to extend our heartfelt thanks to <strong>Brex</strong> for their continued support. Brex has not only provided us with the financial tools and flexibility we need to grow but has also been an incredible partner in pushing the boundaries of what's possible for startups like ours.
                    </p>

                    <p>
                        Being featured in Times Square is more than just a publicity moment for us—it's a celebration of how far we've come on our mission to simplify data-driven decisions for growing businesses. At Structured, we believe that data is only as powerful as the decisions it helps drive. Our platform transforms complex metrics into clear, actionable insights, allowing companies to move forward with confidence and clarity.
                    </p>

                    <p>
                        As we continue to grow and expand, this milestone inspires us to keep pushing forward, developing innovative solutions for our customers, and contributing to a world where data drives smarter, faster decisions. Once again, thank you to YCombinator, Brex, and every customer who has trusted us with their data needs. We’re just getting started!
                    </p>
                    
                    <p>
                        Here's to more milestones, more data-driven decisions, and a future where Structured helps businesses grow with confidence. Stay tuned—there's much more to come.
                    </p>
                </div>
            </BlogContent>
        </div>
    )
}

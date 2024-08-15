import BlogContent from "../blogcontent";

export default function Blog2({
    prefix = 'Turning Data into',
    title = "Decisions: How Structured Simplifies Your Metrics",
    description = "Data is only as valuable as the decisions it drives. This post explores how Structured turns complex data into actionable insights, enabling your team to make smarter, faster decisions that fuel growth.",
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
            >
                <div className="mt-10 max-w-2xl space-y-6 text-gray-700 mx-auto">
                    <p>
                        In today's data-driven world, having access to vast amounts of information is not enough. The true value lies in transforming that data into actionable insights that drive business decisions. This is where Structured steps in, simplifying the process of converting raw data into clear, reliable metrics that guide your strategic decisions.
                    </p>
                    
                    <p>
                        Consider how complex metrics like Customer Acquisition Cost (CAC) and Monthly Recurring Revenue (MRR) are often calculated differently by various teams within an organization. These discrepancies can lead to conflicting reports, making it difficult to extract actionable insights from the data. Without a unified approach, decision-making becomes slow, reactive, and prone to errors.
                    </p>
                    
                    <p>
                        Structured addresses this challenge by providing a semantic layer that unifies data across your organization. It connects directly to your cloud data warehouse, standardizing key metrics and ensuring that every team is working from the same set of reliable data. This consistency turns your data into a powerful tool for making informed decisions quickly.
                    </p>
                    
                    <p>
                        With Structured, your organization can move from data overload to data-driven decision-making. Whether it's optimizing marketing spend or refining pricing strategies, Structured ensures that your metrics are clear, consistent, and aligned with your business goals. This clarity empowers your team to act with confidence, driving growth and reducing the time spent reconciling conflicting data.
                    </p>
                    
                    <p>
                        In essence, Structured transforms your raw data into a strategic asset. By simplifying and standardizing your metrics, it enables your team to make decisions that propel your business forward, ensuring that every data point contributes to your success.
                    </p>
                </div>
            </BlogContent>
        </div>
    )
}

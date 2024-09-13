import BlogContent from "../blogcontent";

export default function Soc2Type1Blog({
    prefix = 'We are thrilled to announce',
    title = "Structured Achieves SOC 2 Type 1 Compliance",
    description = "Structured has achieved SOC 2 Type 1 compliance, marking a key milestone in our commitment to data protection and security standards. This certification demonstrates our dedication to safeguarding your information and maintaining the highest levels of security.",
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
                <div className="mt-10 max-w-3xl space-y-6 text-gray-700 mx-auto">                  
                    <p>
                        SOC 2 compliance is the gold standard for data security in the tech industry, and achieving Type 1 means that we’ve successfully implemented rigorous internal controls. These controls cover everything from data access to system availability, and they’ve been independently reviewed to ensure we’re operating at the level our customers deserve. At Structured, we’ve always believed in building trust through transparency and accountability, and this certification reinforces our dedication to that principle.
                    </p>
                    
                    <p>
                        But Type 1 is just the beginning. While this validates that our systems are secure today, our sights are now set on achieving SOC 2 Type 2, which will demonstrate that our security practices hold up over time. We will continue refining our processes, so your data remains protected and our platform remains reliable as we grow.
                    </p>
                    
                    <p>
                        For our customers and partners, this is not just a compliance checkbox—it's a core part of how we operate. We’ll keep pushing the envelope to stay ahead of the curve, and you can rest assured that security will always be at the heart of Structured.
                    </p>
                </div>
            </BlogContent>
        </div>
    )
}

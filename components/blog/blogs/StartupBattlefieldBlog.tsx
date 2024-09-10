import MarkdownRenderer from "@/components/ui/markdown-renderer";
import BlogContent from "../blogcontent";

export default function StartupBattlefieldBlog({
    prefix = 'Introducing',
    title = "Structured Selected To Participate in Startup Battlefield 200 at TechCrunch Disrupt 2024",
    description = "",
}: {
    prefix?: string
    title: string
    description: string
}) {
    return (
        <BlogContent
            prefix={prefix}
            title={title}
            description={description}
        >
            <div className="w-full flex justify-center mx-auto text-base leading-7 text-gray-700">
                <MarkdownRenderer content={
                    `
TechCrunch Disrupt 2024 will be held from Mon, Oct. 28 - Wed, Oct. 30 at Moscone West in San Francisco. The event is known for debuting the hottest startups, introducing game-changing technologies and discussing what's top-of-mind for the tech industry's key innovators—and this year will be no different. Past companies launched at Disrupt include Dropbox, Mint, Cloudflare, Fitbit, Yammer and more.

For more information on TechCrunch Disrupt 2024 and Startup Battlefield 200 visit the conference's website [here](https://techcrunch.com/events/tc-disrupt-2024/). Disrupt passes can be purchased [here](https://techcrunch.com/events/tc-disrupt-2024/tickets/).

## About Startup Battlefield

TechCrunch's Startup Battlefield 200 is the world's preeminent startup competition. Startup Battlefield 200 will showcase the top 200 startups from around the globe, across multiple industries. All 200 companies will go through training, have access to masterclasses, private receptions, communities and investor meet and greets. Companies that launched on our stage include Vurb, Trello, Mint, Dropbox, Yammer, Tripit, Redbeacon, Qwiki, Getaround, and Soluto.

## About TechCrunch Disrupt

TechCrunch Disrupt is the world's leading authority in debuting revolutionary startups, introducing game-changing technologies, and discussing what's top of mind for the tech industry's key innovators. This year, Disrupt gathers the best and brightest entrepreneurs, investors, hackers, and tech fans in-person for interviews, demos, Startup Battlefield 200, Networking, and more.`
                } />
            </div>
        </BlogContent>
    )
}

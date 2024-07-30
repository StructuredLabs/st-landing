import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid'
import BlogContent from "../blogcontent";

export default function NextLevelDataMapping({
    prefix = 'Introducing',
    title = "JavaScript for Beginners",
    description = "Pariatur velit exercitation pariatur do et sunt. Occaecat irure officia pariatur voluptate ut dolore.",
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
            <div className="mt-10 max-w-2xl">
                <p>
                    {/* TODO */}
                </p>
            </div>
        </BlogContent>
    )
}
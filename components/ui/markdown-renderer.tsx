import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function MarkdownRenderer({ content }: { content: string }) {
    return (
        <div className="bg-white px-6 py-16 lg:px-8">
            <div className="mx-auto max-w-3xl leading-7 text-gray-700 text-sm">
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                        h1: ({ node, ...props }) => <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl" {...props} />,
                        h2: ({ node, ...props }) => <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900" {...props} />,
                        h3: ({ node, ...props }) => <h3 className="mt-8 text-xl font-bold tracking-tight text-gray-900" {...props} />,
                        h4: ({ node, ...props }) => <h3 className="mt-8 text-base font-bold tracking-tight text-gray-900" {...props} />,
                        p: ({ node, ...props }) => <p className="my-2 text-base leading-8" {...props} />,
                        ul: ({ node, ...props }) => <ul role="list" className="max-w-xl space-y-4 text-gray-600" {...props} />,
                        li: ({ node, ...props }) => <li className="flex max-h-fit text-base" {...props} />,
                    }}
                >
                    {content}
                </ReactMarkdown>
            </div>
        </div>
    );
}


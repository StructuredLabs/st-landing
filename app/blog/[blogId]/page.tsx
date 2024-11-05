import { getBlogPost } from '@/utils/blog'
import { redirect } from 'next/navigation'
import BlogContent from '@/components/blog/blogcontent'
import MarkdownRenderer from '@/components/ui/markdown-renderer'

export const metadata = {
  title: 'Blog Content | Structured',
  description: 'Page description',
}

export default function Page({ params }: { params: { blogId: string } }) {
  const post = getBlogPost(params.blogId)
  
  if (!post) {
    return redirect('/404')
  }

  return (
    <BlogContent
      title={post.title}
      description={post.description}
      imageUrl={post.image}
    >
      <div className="w-full flex justify-center mx-auto text-base leading-7 text-gray-700">
        <MarkdownRenderer content={post.content} />
      </div>
    </BlogContent>
  )
}
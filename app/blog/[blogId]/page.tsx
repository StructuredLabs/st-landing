import { posts } from "@/components/blog/blog"
import BlogContent from "@/components/blog/blogcontent"
import { redirect } from "next/navigation"

export const metadata = {
  title: 'Blog Content - Structured',
  description: 'Page description',
}

export default function Page({ params }: { params: { blogId: string } }) {
  // @todo: fetch blog content by id
  const blogId = decodeURIComponent(params.blogId)
  const blog = posts.find((post) => post.title === blogId)
  if (!blog) {
    return redirect('/404')
  }
  return <blog.component title={blog.title} description={blog.description} />
}
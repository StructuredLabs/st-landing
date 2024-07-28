import BlogContent from "@/components/blog/blogcontent"

export const metadata = {
  title: 'Blog Content - Structured',
  description: 'Page description',
}

export default function Page({ params }: { params: { blogId: string } }) {
  // @todo: fetch blog content by id
  console.log(params.blogId)
  return (
    <>
      <BlogContent />
    </>
  )
}
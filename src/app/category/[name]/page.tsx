import blogs from '../../../data/blogs.json'
import { notFound } from 'next/navigation'
import { Blog } from '@/src/types/blog'
import BlogCard from '@/src/components/BlogCard'

export default function CategoryPage({ params }: { params: { name: string } }) {
  const category = decodeURIComponent(params.name)
  const filtered = (blogs as Blog[]).filter(
    (b) => b.category.toLowerCase() === category.toLowerCase()
  )

  if (filtered.length === 0) return notFound()

  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">Category: {category}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((blog) => <BlogCard key={blog.id} blog={blog} />)}
      </div>
    </section>
  )
}

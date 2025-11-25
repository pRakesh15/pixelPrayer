'use client'
import { useState } from 'react'
import blogsData from '../../data/blogs.json'
import { Blog } from '@/src/types/blog'
import BlogCard from '@/src/components/BlogCard'


const ITEMS_PER_PAGE = 8

export default function BlogsPage() {
  const blogs = blogsData as Blog[]
  const [page, setPage] = useState(1)
  const totalPages = Math.ceil(blogs.length / ITEMS_PER_PAGE)

  const start = (page - 1) * ITEMS_PER_PAGE
  const current = blogs.slice(start, start + ITEMS_PER_PAGE)

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">All Blogs</h1>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
        {current.map((blog) => <BlogCard key={blog.id} blog={blog} />)}
      </div>

      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className="px-4 py-2 border rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button
          disabled={page === totalPages}
          onClick={() => setPage((p) => p + 1)}
          className="px-4 py-2 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  )
}

import Link from 'next/link'
import Image from 'next/image'
import { Blog } from '../types/blog'

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <Link
      href={`/blogs/${blog.slug}/${blog.id}`} // ✅ Updated for slug + id route
      className="block border border-gray-100 rounded-lg hover:shadow-lg transition-all duration-200 bg-white dark:bg-gray-800 dark:border-gray-700"
    >
      <div className="flex flex-col md:flex-row gap-6 p-5">
        {/* Text Content */}
        <div className="flex-1">
          <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded-md mb-1">
            {blog.category}
          </span>
          <h2 className="text-xl font-semibold mb-1 text-gray-900 dark:text-gray-100">
            {blog.title}
          </h2>
          <p className="text-xs text-gray-500 mb-2">{blog.date}</p>
          <p className="text-gray-700 dark:text-gray-200 line-clamp-3 leading-relaxed">
            {blog.excerpt}
          </p>
        </div>

        {/* Image */}
        {blog.image && (
          <div className="w-full md:w-40 h-28 relative flex-shrink-0">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              sizes="160px"
              className="object-cover rounded"
            />
          </div>
        )}
      </div>
    </Link>
  )
}

'use client'
import { useState } from 'react';
import { Blog } from '../types/blog';
import BlogCard from '../components/BlogCard';
import blogs from '../data/blogs.json';


export default function Home() {
  const allBlogs = blogs as Blog[];
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(allBlogs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentBlogs = allBlogs.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div className="px-6"> {/* add horizontal padding */}
      <h1 className="text-3xl font-bold mb-6 flex">Stories That Inspire</h1>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
        {currentBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      <div className="mt-8 border border-dashed border-gray-300 text-center py-10 text-gray-400">
        {/* AdSense responsive placeholder */}
        <div className="max-w-full">AdSense Banner Placeholder</div>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8 gap-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => handlePageChange(i + 1)}
              className={`px-3 py-1 border rounded ${currentPage === i + 1 ? 'bg-gray-800 text-white' : ''
                }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}


    </div>
  );
}

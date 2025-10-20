'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function MobileMenu() {
  const [open, setOpen] = useState(false)

  const handleClose = () => setOpen(false)

  return (
    <div className="md:hidden relative">
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        aria-label="Toggle mobile menu"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Backdrop (click outside to close) */}
      {open && (
        <div
          onClick={handleClose}
          className="fixed inset-0 bg-black/30 dark:bg-black/50 backdrop-blur-sm z-40"
        ></div>
      )}

      {/* Dropdown Menu */}
      <div
        className={`absolute top-14 right-0 w-56 rounded-lg border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-900 transform transition-all duration-300 origin-top-right z-50 ${
          open ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col space-y-3 p-4 text-sm">
          <Link
            href="/blogs"
            onClick={handleClose}
            className="block rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Blogs
          </Link>
          <Link
            href="/about"
            onClick={handleClose}
            className="block rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={handleClose}
            className="block rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  )
}

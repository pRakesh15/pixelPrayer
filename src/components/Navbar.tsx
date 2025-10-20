'use client'
import Link from 'next/link'
import MobileMenu from './MobileMenu'
import ThemeToggle from './ThemeToggle'
import { useState, useEffect } from 'react'
import blogs from '@/src/data/blogs.json'

export default function Navbar() {
    const [query, setQuery] = useState('')
    const [results, setResults] = useState<any[]>([])
    const [showResults, setShowResults] = useState(false)

    // Debounce timer
    useEffect(() => {
        if (!query.trim()) {
            setResults([])
            setShowResults(false)
            return
        }

        const timer = setTimeout(() => {
            const filtered = (blogs as any[]).filter((b) =>
                b.title.toLowerCase().includes(query.trim().toLowerCase())
            )
            setResults(filtered)
            setShowResults(true)
        }, 300) // 300ms debounce

        return () => clearTimeout(timer)
    }, [query])

    return (
        <nav className="sticky top-0 z-30 border-b border-gray-200 bg-white text-black dark:border-gray-700 dark:bg-black dark:text-white transition-colors duration-300">
            <div className="container mx-auto flex items-center justify-between px-4 py-4 gap-4">
                {/* Left: Logo */}
                <Link href="/" className="text-2xl font-semibold hover:underline underline-offset-4">
                    PixelPrayer
                </Link>

                {/* Search bar (desktop only) */}
                <div className="hidden md:flex relative flex-1 max-w-sm">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search..."
                        className="w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-1.5 text-sm text-black placeholder-gray-400 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:placeholder-gray-500 transition-colors duration-300 "
                    />

                    {/* Search results */}
                    {showResults && (
                        <div className="absolute top-10 left-0 right-0 mt-2 rounded-md border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900 shadow-lg max-h-64 overflow-auto z-50">
                            {results.length > 0 ? (
                                results.map((post) => (
                                    <Link
                                        key={post.id}
                                        href={`/blogs/${post.slug}/${post.id}`}
                                        className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
                                        onClick={() => setShowResults(false)}
                                    >
                                        {post.title}
                                    </Link>
                                ))
                            ) : (
                                <div className="px-4 py-2 text-sm text-gray-500 dark:text-gray-400">
                                    No results found
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Right: Links + ThemeToggle + Mobile */}
                <div className="flex items-center gap-4">
                    {/* Desktop nav links */}
                    <div className="hidden md:flex space-x-6 text-sm mr-2">
                        <Link href="/blogs" className="hover:underline">Blogs</Link>
                        <Link href="/about" className="hover:underline">About</Link>
                        <Link href="/contact" className="hover:underline">Contact</Link>
                    </div>

                    {/* Theme toggle */}
                    <ThemeToggle />

                    {/* Mobile menu */}
                    <div className="md:hidden">
                        <MobileMenu />
                    </div>
                </div>
            </div>
        </nav>
    )
}

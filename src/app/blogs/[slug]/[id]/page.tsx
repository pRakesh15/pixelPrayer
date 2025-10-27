import { Metadata } from 'next'
import blogs from '../../../../data/blogs.json'
import Script from 'next/script'
import Image from 'next/image'
import Link from 'next/link'

// ✅ Dynamic metadata for each blog
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const blog = blogs.find((b) => b.slug === params.slug)

  if (!blog) {
    return {
      title: 'Blog Not Found | PixelPrayer',
      description: 'This blog does not exist.',
    }
  }

  const url = `https://yourdomain.com/blogs/${blog.slug}`

  return {
    title: `${blog.title} | PixelPrayer`,
    description: blog.excerpt,
    keywords: blog.tags,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      url,
      images: [{ url: blog.image, width: 1200, height: 630, alt: blog.title }],
      type: 'article',
      publishedTime: blog.date,
      modifiedTime: blog.updateTime,
      authors: [blog.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.excerpt,
      images: [blog.image],
    },
  }
}

export default function BlogPage({ params }: { params: { slug: string } }) {
  const blog = blogs.find((b) => b.slug === params.slug)

  if (!blog) return <div>Blog not found</div>

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: blog.title,
    description: blog.excerpt,
    image: `https://yourdomain.com${blog.image}`,
    author: { '@type': 'Person', name: blog.author },
    datePublished: blog.date,
    dateModified: blog.updateTime,
    url: `https://yourdomain.com/blogs/${blog.slug}`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://yourdomain.com/blogs/${blog.slug}` },
  }

  // ✅ Related blogs (same category)
  const relatedBlogs = blogs
    .filter((b) => b.category === blog.category && b.slug !== blog.slug)
    .slice(0, 3)

  return (
    <article className="prose max-w-3xl mx-auto py-10">
      {/* SEO Schema */}
      <Script id="blog-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Blog content */}
      <h1 className="text-4xl font-bold mb-2">{blog.title}</h1>
      <p className="text-gray-500 text-sm mb-6">
        By {blog.author} • {blog.readingTime} • Published on {blog.date}
      </p>

      <div className="relative w-full h-96 mb-8 rounded-xl overflow-hidden">
        <Image src={blog.image} alt={blog.title} fill className="object-cover" priority />
      </div>

      <div className="text-gray-700 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: blog.content }} />

      {/* Related blogs */}
      {relatedBlogs.length > 0 && (
        <section className="mt-16 pt-10 border-t border-gray-200">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
            More in {blog.category}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedBlogs.map((related) => (
              <Link
                key={related.slug}
                href={`/blogs/${related.slug}/${related.id}`}
                className="block border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition"
              >
                <Image
                  src={related.image}
                  alt={related.title}
                  width={400}
                  height={250}
                  className="object-cover w-full h-40"
                />
                <div className="p-3">
                  <h3 className="font-semibold text-sm">{related.title}</h3>
                  <p className="text-xs text-gray-500">{related.readingTime}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  )
}

import { Metadata } from 'next'
import blogs from '../../../../data/blogs.json' // assuming you store blogs locally

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const blog = blogs.find((b) => b.slug === params.slug)

  if (!blog) {
    return {
      title: 'Blog Not Found',
      description: 'This blog does not exist.',
    }
  }

  const url = `https://yourdomain.com/blog/${blog.slug}`

  return {
    title: `${blog.title} | MindVibes`,
    description: blog.content,
    keywords: blog.category || [],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: blog.title,
      description: blog.content,
      url,
      siteName: 'MindVibes',
      images: [
        {
          url: blog.image || '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.content,
      images: [blog.image || '/og-image.jpg'],
    },
  }
}


import Script from 'next/script'
import Image from 'next/image'

export default function BlogPage({ params }: { params: { id: string } }) {
  const blog = blogs.find((b) => b.id === params.id)

  if (!blog) return <div>Blog not found</div>

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: blog.title,
    description: blog.category,
    image: blog.image || 'https://yourdomain.com/og-image.jpg',
    author: {
      '@type': 'Person',
      name: blog.author || 'MindVibes Author',
    },
    datePublished: blog.date,
    dateModified: blog.updateTime || blog.date,
    url: `https://yourdomain.com/blogs/${blog.id}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://yourdomain.com/blogs/${blog.id}`,
    },
  }

  return (
    <article className="prose max-w-3xl mx-auto py-10">
      {/* ✅ JSON-LD schema injection */}
      <Script
        id="blog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ✅ Blog Content */}
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-500 mb-6">Published on {blog.date}</p>
      <div className="relative w-full h-96 mb-8">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover rounded-xl"
        />
      </div>
      <div dangerouslySetInnerHTML={{ __html: blog.content }} />
    </article>
  )
}

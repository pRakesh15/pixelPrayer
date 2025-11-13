import { Metadata } from 'next'
import blogs from '../../../../data/blogs.json'
import Script from 'next/script'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, User, Tag } from 'lucide-react'
import React from 'react'

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
    id: blog.id,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const blog = blogs.find((b) => b.slug === params.slug)

  if (!blog) {
    return {
      title: 'Blog Not Found | bloghives',
      description: 'This blog does not exist.',
    }
  }

  const url = `https://www.bloghives.in/blogs/${blog.slug}`


  return {
    title: `${blog.title} | bloghives`,
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

  const url = `https://www.bloghives.in/blogs/${blog.slug}`

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: blog.title,
    description: blog.excerpt,
    image: `https://www.bloghives.in${blog.image}`,
    author: { '@type': 'Person', name: blog.author },
    publisher: {
      '@type': 'Organization',
      name: 'bloghives',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.bloghives.in/favicon-96x96.png' // replace with your logo path
      }
    },
    datePublished: blog.date,
    dateModified: blog.updateTime,
    url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  }

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.bloghives.in'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blogs',
        item: 'https://www.bloghives.in/blogs'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: blog.title,
        item: url
      }
    ]
  }

  const relatedBlogs = blogs
    .filter((b) => b.category === blog.category && b.slug !== blog.slug)
    .slice(0, 3)

  const formatContent = (content: string) => {
    const lines = content.split('\n');
    const elements: JSX.Element[] = [];
    let key = 0;

    lines.forEach((line) => {
      if (line.trim() === '') {
        elements.push(<div key={`space-${key++}`} className="h-6" />);
      } else if (line.startsWith('## ')) {
        const text = line.replace('## ', '');
        elements.push(
          <h2 key={`h2-${key++}`} className="text-2xl sm:text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-gray-200 tracking-tight">   {/* this  one for heading  */}
            {text}
          </h2>
        );
      } else if (line.startsWith('### ')) {
        const text = line.replace('### ', '');
        elements.push(
          <h3 key={`h3-${key++}`} className="text-xl sm:text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-gray-300"> {/* this one for h3 */}
            {text}
          </h3>
        );
      } else if (line.startsWith('- ')) {
        const text = line.substring(2);
        const parts = text.split('**');
        elements.push(
          <li key={`li-${key++}`} className="ml-6 mb-3 text-base sm:text-lg leading-relaxed text-gray-800 dark:text-gray-300"> {/* for bullet  points  */}
            {parts.map((part, i) =>
              i % 2 === 1 ? <strong key={i} className="font-semibold text-gray-900 dark:text-gray-300">{part}</strong> : part
            )}
          </li>
        );
      } else {
        const parts = line.split('**');
        elements.push(
          <p key={`p-${key++}`} className="text-base sm:text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-400">
            {parts.map((part, i) =>
              i % 2 === 1 ? <strong key={i} className="font-semibold text-gray-900 dark:text-gray-200">{part}</strong> : part
            )}</p>
        );
      }
    });

    return elements;
  };


  return (
    <article className="min-h-screen bg-background text-foreground" aria-labelledby="post-title">
      {/* Structured data (Article + Breadcrumb) */}
      <Script id="ld-json-article" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>

      <Script id="ld-json-breadcrumb" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumb)}
      </Script>

      {process.env.NEXT_PUBLIC_ADSENSE_CLIENT && (
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT}`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      )}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary dark:text-gray-700 text-secondary-foreground rounded-full text-sm font-medium mb-4">
            <Tag className="w-4 h-4" />
            {blog.category}
          </div>

          <h1
            id="post-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-foreground tracking-tight"
          >
            {blog.title}
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground  mb-8 leading-relaxed">{blog.excerpt}</p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-muted-foreground pb-8 border-b border-border">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span className="font-medium text-foreground">{blog.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time dateTime={blog.date}>{blog.date}</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{blog.readingTime}</span>
            </div>
          </div>
        </div>

        {/* Preload LCP image for faster loading */}
        <link rel="preload" as="image" href={blog.image} />

        <div className="relative w-full h-[250px] sm:h-[350px] lg:h-[450px] mb-12 rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src={blog.image || "/placeholder.svg"}
            alt={blog.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        <div className="max-w-none prose prose-neutral dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground prose-code:text-foreground prose-pre:bg-secondary prose-pre:text-secondary-foreground">
          {formatContent(blog.content).map((el) =>
            React.cloneElement(el, {
              className: el.props.className || "",
            }),
          )}
        </div>

        {/* Adsense in-article example (place only when approved) */}
        {process.env.NEXT_PUBLIC_ADSENSE_CLIENT && process.env.NEXT_PUBLIC_ADSENSE_SLOT && (
          <div className="my-8 flex justify-center">
            <ins
              className="adsbygoogle"
              style={{ display: "block", maxWidth: "728px", width: "100%", height: "90px" }}
              data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT}
              data-ad-slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT}
              data-ad-format="auto"
              data-full-width-responsive="true"
            />
            <Script id="ads-init" strategy="afterInteractive">
              {`(adsbygoogle = window.adsbygoogle || []).push({});`}
            </Script>
          </div>
        )}

        {blog.tags && blog.tags.length > 0 && (
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/tags/${encodeURIComponent(tag)}`}
                  className="px-4 py-2 bg-secondary text-secondary-foreground dark:text-gray-700 rounded-full text-sm font-medium hover:opacity-80 transition-opacity"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        )}

        {relatedBlogs.length > 0 && (
          <aside className="mt-12 pt-8 border-t border-border">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Related posts</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedBlogs.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blogs/${r.slug}`}
                  className="block p-4 rounded-xl border border-border bg-card hover:shadow-md transition text-card-foreground"
                >
                  <div className="text-sm text-muted-foreground mb-1">{r.category}</div>
                  <div className="font-medium text-card-foreground">{r.title}</div>
                  <div className="text-xs text-muted-foreground mt-2">{r.excerpt}</div>
                </Link>
              ))}
            </div>
          </aside>
        )}
      </div>
    </article>
  )

}

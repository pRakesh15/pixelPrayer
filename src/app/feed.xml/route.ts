import blogs from '../../data/blogs.json'
import { Blog } from '@/src/types/blog'

export async function GET() {
  const domain = process.env.NEXT_PUBLIC_DOMAIN || 'https://www.bloghives.in'
  const posts = blogs as Blog[]

  const items = posts
    .map(
      (b) => `
    <item>
      <title><![CDATA[${b.title}]]></title>
      <link>${domain}/blogs/${b.id}</link>
      <pubDate>${new Date(b.date).toUTCString()}</pubDate>
      <description><![CDATA[${b.excerpt}]]></description>
    </item>`
    )
    .join('')

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>bloghives RSS Feed</title>
      <link>${domain}</link>
      <description>Latest posts from bloghives</description>
      ${items}
    </channel>
  </rss>`

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml' },
  })
}

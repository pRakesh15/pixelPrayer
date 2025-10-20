import { remark } from 'remark'
import html from 'remark-html'

/**
 * Convert markdown string -> HTML (server-side)
 */
export async function markdownToHtml(markdown: string): Promise<string> {
  const processed = await remark().use(html).process(markdown)
  return processed.toString()
}

import blogs from '../../data/blogs.json'

export const GET = () => {
  const urls = [
    { loc: 'https://www.bloghives.in/', lastmod: new Date().toISOString().split('T')[0], priority: '1.0' },
    ...blogs.map(b => ({
      loc: `https://www.bloghives.in/blogs/${b.slug}`,
      lastmod: b.updateTime || b.date, 
      priority: '0.9',
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};

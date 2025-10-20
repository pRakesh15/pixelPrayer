export const GET = () => {
    const text = `
User-agent: *
Allow: /

Sitemap: https://yourdomain.com/sitemap.xml
`.trim();

    return new Response(text, {
        headers: {
            'Content-Type': 'text/plain',
        },
    });
};
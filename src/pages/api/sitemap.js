const BASE_URL = 'https://proyecto-seo.vercel.app';

export default async function handler(req, res) {
  const staticPages = ['/', '/blog', '/contacto'];

  let urls = staticPages.map(path => `
    <url>
      <loc>${BASE_URL}${path}</loc>
    </url>`).join('');

  urls += posts.map(post => `
    <url>
      <loc>${BASE_URL}/blog/${post.slug}</loc>
    </url>`).join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls}
  </urlset>`;

  res.setHeader('Content-Type', 'application/xml');
  res.write(sitemap);
  res.end();
}

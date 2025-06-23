const BASE_URL = 'https://proyecto-seo.vercel.app';

export default async function handler(req, res) {
  const staticPages = ['', '/blog', '/contacto'];

  // Datos simulados
  const posts = [
    { slug: 'post-1' },
    { slug: 'post-2' },
    { slug: 'post-3' }
  ];

  const urls = [
    ...staticPages.map(path => `<url><loc>${BASE_URL}${path}</loc></url>`),
    ...posts.map(post => `<url><loc>${BASE_URL}/blog/${post.slug}</loc></url>`)
  ].join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls}
</urlset>`;

  res.setHeader('Content-Type', 'application/xml');
  res.status(200).end(sitemap);
}

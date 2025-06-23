import { globby } from "globby";
import path from "path";

const BASE_URL = "https://proyecto-seo.vercel.app";

export default async function handler(req, res) {
  const pages = await globby([
    "pages/**/*.js",
    "!pages/_*.js",
    "!pages/api/**",
  ]);

  const urls = pages.map((file) => {
    const route = file
      .replace("pages", "")
      .replace(".js", "")
      .replace("/index", "")
      .replace(/\\/g, "/");

    return `${BASE_URL}${route === "" ? "/" : route}`;
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map((url) => `<url><loc>${url}</loc></url>`)
      .join("")}
  </urlset>`;

  res.setHeader("Content-Type", "application/xml");
  res.status(200).send(sitemap);
}

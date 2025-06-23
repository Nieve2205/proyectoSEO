import Head from 'next/head';

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog | MiSitio</title>
        <meta name="description" content="Lee los últimos artículos y noticias en el blog de MiSitio." />
        <meta property="og:title" content="Blog | MiSitio" />
        <meta property="og:description" content="Lee los últimos artículos y noticias en el blog de MiSitio." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://proyecto-seo.vercel.app/blog" />
      </Head>
      <main>
        <h1>Blog</h1>
        <p>Aquí van las publicaciones del blog.</p>
      </main>
    </>
  );
}

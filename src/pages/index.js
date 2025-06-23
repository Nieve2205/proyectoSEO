import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio | MiSitio</title>
        <meta name="description" content="Bienvenido a la página de inicio de MiSitio." />
        <meta property="og:title" content="Inicio | MiSitio" />
        <meta property="og:description" content="Bienvenido a la página de inicio de MiSitio." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://proyecto-seo.vercel.app/" />
      </Head>
      <main>Contenido</main>
    </>
  );
}

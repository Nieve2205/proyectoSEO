import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1>Bienvenido</h1>
      <Image
        src="/images/seo-image.jpg"
        width={800}
        height={400}
        alt="Ejemplo de imagen optimizada"
        priority
      />
    </>
  );
}

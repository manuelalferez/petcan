import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>GDG Jaén</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Bienvenido a{" "}
          <a
            className="text-blue-600"
            href="https://github.com/GDGJaen/website"
            target="_blank"
          >
            GDG Jaén!
          </a>
        </h1>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        Footer
      </footer>
    </div>
  );
}

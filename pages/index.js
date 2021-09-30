import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>GDG Jaén</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Navbar />
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        Footer
      </footer>
    </div>
  );
}

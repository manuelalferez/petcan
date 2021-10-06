import Head from "next/head";
import Navbar from "../components/Navbar";
import Image from "next/image";
import heroImage from "../public/heroImage.png";
import AboutUs from "../components/Aboutus";
import Social from "../components/Social";

export default function Home() {
  return (
    <div>
      <Head>
        <title>GDG Jaén</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <div className="w-full">
          <Image src={heroImage} />
        </div>
        <AboutUs />
        <Social />
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        Footer
      </footer>
    </div>
  );
}

import Head from "next/head";
import Navbar from "../components/Navbar";
import AboutUs from "../components/Aboutus";
import Footer from "../components/Footer";
import Team from "../components/Team";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>GDG Jaén</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <Hero />
        <AboutUs />
        <Team />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

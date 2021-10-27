import Head from "next/head";
import Navbar from "../components/Navbar";
import AboutUs from "../components/Aboutus";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Petcan</title>
        <link
          rel="icon"
          href="https://ik.imagekit.io/manuelalferez/petcan/logo_n2orS9MpsT.jpg?updatedAt=1635333942054"
        />
      </Head>

      <main>
        <Navbar />
        <Hero />
        <AboutUs />
        <Pricing />
        <Contact />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

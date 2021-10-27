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
        <Team />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

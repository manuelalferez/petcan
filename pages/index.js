import Head from "next/head";
import Navbar from "../components/Navbar";
import AboutUs from "../components/Aboutus";
import Footer from "../components/Footer";
import Team from "../components/Team";

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
          <img src="https://ik.imagekit.io/gdgjaen/images/hero_0G13xgQ3u.png?updatedAt=1633596181450" />
        </div>
        <AboutUs />
        <Team />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

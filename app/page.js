import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getConfig } from "@/lib/config";

export const revalidate = 3600;

export default async function Home() {
  const config = await getConfig();

  return (
    <>
      <Navbar />
      <Hero heroImage={config.hero.src} />
      <TrustBar />
      <Services />
      <Gallery items={config.gallery} categories={config.categories} />
      <About aboutImages={config.about} />
      <Contact />
      <Footer />
    </>
  );
}

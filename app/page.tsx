import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
// import About from "@/components/About";
import Events from "@/components/Events";
// import Speakers from "@/components/Speakers";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      {/* <About /> */}
      <Events />
      {/* <Speakers /> */}
      <Footer />
    </main>
  );
}


import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <div className="bg-navy">
        <Navbar />
        <Hero />
      </div>

      <Projects />
      <Experience />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}

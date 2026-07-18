import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Process from "@/components/Process";
import Specialties from "@/components/Specialties";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Reasons from "@/components/Reasons";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Intro />
        <Process />
        <Specialties />
        <About />
        <Gallery />
        <Testimonials />
        <Reasons />
        <Faq />
      </main>
      <Footer />
      <WhatsappButton />
    </div>
  );
}

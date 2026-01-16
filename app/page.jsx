import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedBooks from "@/components/FeaturedBooks";
import Categories from "@/components/Categories";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-amber-50 dark:bg-black">
      <Navbar />
      <Hero />
      <FeaturedBooks />
      <Categories />
      <About />
      <Testimonials />
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  );
}

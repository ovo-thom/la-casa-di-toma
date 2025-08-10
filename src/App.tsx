import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import PizzaPastaSection from "./components/PizzaPastaSection";
import FeaturedDish from "./components/FeaturedDish";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <div className="h-screen bg-[#81B29A] text-white">
        <div className="w-full h-screen max-w-6xl mx-auto">
          <Navbar />
          <Hero />
        </div>
        <AboutSection />
        <PizzaPastaSection />
        <FeaturedDish />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}

export default App;

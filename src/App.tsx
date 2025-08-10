import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import PizzaPastaSection from "./components/PizzaPastaSection";
import FeaturedDish from "./components/FeaturedDish";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <>
      <CartProvider>
        <div className="h-screen text-white">
          <div className="w-full max-w-6xl mx-auto">
            <Navbar />
            <div id="accueil">
              <Hero />
            </div>
          </div>
          <div id="about">
            <AboutSection />
          </div>
          <div id="menu">
            <PizzaPastaSection />
          </div>
          <FeaturedDish />
          <div id="contact">
            <ContactSection />
          </div>
          <Footer />
        </div>
      </CartProvider>
    </>
  );
}

export default App;

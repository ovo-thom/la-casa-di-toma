import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import PizzaPastaSection from "./components/PizzaPastaSection";
import FeaturedDish from "./components/FeaturedDish";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { CartProvider } from './context/CartContext';


function App() {
  return (
    <>
    <CartProvider>
      <div className="h-screen text-white">
        <div className="w-full max-w-6xl mx-auto">
          <Navbar />
          <Hero />
        </div>
        <AboutSection />
        <PizzaPastaSection />
        <FeaturedDish />
        <ContactSection />
        <Footer />
      </div>
      </CartProvider>
    </>
  );
}

export default App;

import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Home"
import AboutSection from "./components/AboutSection";

function App() {
  return (
    <>
      <div className="min-h-screen bg-[#81B29A] text-white">
        <div className="w-full h-screen max-w-6xl mx-auto">
        <Navbar />
        <Hero />
        </div>
        <AboutSection />
      </div>
    </>
  );
}

export default App;

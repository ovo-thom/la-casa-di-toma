import { useState } from "react";
import { useCart } from "../context/CartContext";
import CartDropdown from "./CartDropdown";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState<number | null>(null);
  const { getTotalItems } = useCart();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setIsMenuOpen(false);
  };

  const handleCartMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setIsCartVisible(true);
  };

  const handleCartMouseLeave = () => {
    const id = setTimeout(() => {
      setIsCartVisible(false);
    }, 300);
    setTimeoutId(id);
  };

  return (
    <nav className="relative w-full border-b rounded-lg border-b-sauge bg-[#f3e9dc] shadow-lg select-none">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-2 md:gap-4">
            <div className="p-2 bg-white rounded-full shadow-md border border-sauge">
              <img
                src="/assets/logo-pasta.jpg"
                alt="Logo La Casa Di Toma"
                className="w-12 h-12 md:w-16 md:h-16 rounded-full"
              />
            </div>
            <h1 className="font-italianno text-2xl md:text-4xl text-[#9a3737] drop-shadow-lg transform -rotate-1 tracking-wide">
              La Casa Di Toma
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <div
              className="relative -m-2 p-2"
              onMouseEnter={handleCartMouseEnter}
              onMouseLeave={handleCartMouseLeave}
            >
              <button className="hidden sm:flex bg-[#9a3737] hover:bg-[#7d2d2d] text-white px-4 md:px-6 py-2 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 items-center gap-2 border-2 border-sauge hover:border-[#6b9a82] text-sm md:text-base relative">
                <svg
                  className="w-4 h-4 md:w-5 md:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5.4M7 13v6a2 2 0 002 2h7.5M17 21v-2a2 2 0 00-2-2H7"
                  />
                </svg>
                <span className="hidden md:inline">Mes commandes</span>
                <span className="md:hidden">Panier</span>

                {getTotalItems() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {getTotalItems()}
                  </span>
                )}
              </button>

              <div className="hidden md:block absolute top-full -right-2 pt-2">
                <CartDropdown
                  isVisible={isCartVisible}
                  onClose={() => {
                    if (timeoutId) {
                      clearTimeout(timeoutId);
                      setTimeoutId(null);
                    }
                    setIsCartVisible(false);
                  }}
                />
              </div>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-white border-2 border-sauge shadow-md"
            >
              <svg
                className="w-6 h-6 text-[#9a3737]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div className="hidden md:flex justify-center pb-4">
          <ul className="flex flex-row gap-6 lg:gap-8">
            <li
              onClick={() => scrollToSection("accueil")}
              className="text-[#2d2d2d] text-base lg:text-lg font-medium hover:text-[#9a3737] transition-colors duration-200 cursor-pointer border-b-2 border-transparent hover:border-sauge px-2 py-1"
            >
              Accueil
            </li>
            <li
              onClick={() => scrollToSection("about")}
              className="text-[#2d2d2d] text-base lg:text-lg font-medium hover:text-[#9a3737] transition-colors duration-200 cursor-pointer border-b-2 border-transparent hover:border-sauge px-2 py-1"
            >
              À propos
            </li>
            <li
              onClick={() => scrollToSection("menu")}
              className="text-[#2d2d2d] text-base lg:text-lg font-medium hover:text-[#9a3737] transition-colors duration-200 cursor-pointer border-b-2 border-transparent hover:border-sauge px-2 py-1"
            >
              Menu
            </li>
            <li
              onClick={() => scrollToSection("contact")}
              className="text-[#2d2d2d] text-base lg:text-lg font-medium hover:text-[#9a3737] transition-colors duration-200 cursor-pointer border-b-2 border-transparent hover:border-sauge px-2 py-1"
            >
              Contact
            </li>
          </ul>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white rounded-lg border-2 border-sauge shadow-lg mx-2 mb-4">
            <ul className="flex flex-col">
              <li
                onClick={() => scrollToSection("accueil")}
                className="text-[#2d2d2d] text-lg font-medium hover:text-[#9a3737] hover:bg-[#f3e9dc] transition-all duration-200 cursor-pointer px-6 py-3 border-b border-sauge/20 last:border-b-0"
              >
                Accueil
              </li>
              <li
                onClick={() => scrollToSection("about")}
                className="text-[#2d2d2d] text-lg font-medium hover:text-[#9a3737] hover:bg-[#f3e9dc] transition-all duration-200 cursor-pointer px-6 py-3 border-b border-sauge/20 last:border-b-0"
              >
                À propos
              </li>
              <li
                onClick={() => scrollToSection("menu")}
                className="text-[#2d2d2d] text-lg font-medium hover:text-[#9a3737] hover:bg-[#f3e9dc] transition-all duration-200 cursor-pointer px-6 py-3 border-b border-sauge/20 last:border-b-0"
              >
                Menu
              </li>
              <li
                onClick={() => scrollToSection("contact")}
                className="text-[#2d2d2d] text-lg font-medium hover:text-[#9a3737] hover:bg-[#f3e9dc] transition-all duration-200 cursor-pointer px-6 py-3 border-b border-sauge/20 last:border-b-0"
              >
                Contact
              </li>
              <li className="px-6 py-3">
                <button
                  onClick={() => {
                    setIsCartVisible(!isCartVisible);
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-[#9a3737] hover:bg-[#7d2d2d] text-white px-4 py-2 rounded-full font-semibold transition-all duration-200 shadow-lg flex items-center justify-center gap-2 relative"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5.4M7 13v6a2 2 0 002 2h7.5M17 21v-2a2 2 0 00-2-2H7"
                    />
                  </svg>
                  Mes commandes
                  {getTotalItems() > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                      {getTotalItems()}
                    </span>
                  )}
                </button>
              </li>
            </ul>
          </div>
        )}
        {isCartVisible && (
          <div className="md:hidden absolute left-1 right-1 top-full mt-2 z-50">
            <CartDropdown
              isVisible={isCartVisible}
              onClose={() => setIsCartVisible(false)}
            />
          </div>
        )}

        <div className="hidden md:flex justify-center pb-2">
          <div className="flex items-center gap-2">
            <div className="w-8 lg:w-12 h-px bg-sauge"></div>
            <svg
              width="100"
              height="16"
              viewBox="0 0 120 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hover:scale-110 transition-transform duration-200 lg:w-[120px] lg:h-[18px]"
            >
              <path
                d="M2 9 Q 30 18, 60 9 Q 90 0, 118 9"
                stroke="#9a3737"
                strokeWidth="3"
                fill="none"
              />
            </svg>
            <div className="w-8 lg:w-12 h-px bg-sauge"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}

import { pizzas, pastas } from "../lib/menuDatas";
import type { MenuItem } from "../lib/menuDatas";
import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";

export default function PizzaPastaSection() {
  const { addItem } = useCart();
  return (
    <motion.section
      id="pizza-pasta-section"
      className="min-h-screen w-full py-16 px-4 bg-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-italianno text-[#9a3737] mb-2 drop-shadow-sm text-center">
          Nos Pizzas & Pâtes Artisanales
        </h2>
        <p className="text-base md:text-xl text-[#2d2d2d] mb-10 text-center max-w-2xl">
          Laissez-vous tenter par nos spécialités faites maison, préparées avec
          passion et des ingrédients de qualité. Découvrez la vraie saveur de
          l’Italie !
        </p>
        <div className="w-full flex flex-col md:flex-row gap-8">
          <div className="flex-1 bg-[#f3e9dc] rounded-xl shadow-md p-6 flex flex-col items-center">
            <h3 className="text-2xl font-semibold text-[#9a3737] mb-4 font-italianno">
              Pizzas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {pizzas.map((pizza: MenuItem, index: number) => (
                <div
                  key={index}
                  className="border bg-white border-sauge rounded-lg p-4 flex flex-col items-center shadow-lg shadow-sauge transition-transform duration-200 hover:-translate-y-1 hover:shadow-2xl hover:border-[#9a3737] min-h-[320px] justify-between"
                >
                  <h4 className="text-black text-xl font-semibold mb-2">
                    {pizza.name}
                  </h4>
                  <img
                    src={pizza.img}
                    alt="Pizza Margherita"
                    className="h-24 w-24 object-cover rounded-full mb-2"
                  />
                  <p className="text-[#2d2d2d] text-base mb-1 text-center italic">
                    {pizza.desc}
                  </p>
                  <div className="flex flex-col items-center gap-2 w-full">
                    <p className="text-[#9a3737] text-lg font-bold">
                      {pizza.price} €
                    </p>
                    <motion.button
                      onClick={() => addItem(pizza, "pizza")}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#9a3737] hover:bg-[#7d2d2d] text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2 w-full justify-center"
                    >
                      <motion.svg
                        whileHover={{ rotate: 90 }}
                        transition={{ duration: 0.2 }}
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </motion.svg>
                      Ajouter au panier
                    </motion.button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 bg-[#f3e9dc] rounded-xl shadow-md p-6 flex flex-col items-center">
            <h3 className="text-2xl font-semibold text-[#9a3737] mb-4 font-italianno">
              Pâtes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {pastas.map((pasta: MenuItem, index: number) => (
                <div
                  key={index}
                  className="border bg-white border-sauge rounded-lg p-4 flex flex-col items-center shadow-lg shadow-sauge transition-transform duration-200 hover:-translate-y-1 hover:shadow-2xl hover:border-[#9a3737] min-h-[320px] justify-between"
                >
                  <h4 className="text-black text-xl text-center font-semibold mb-2">
                    {pasta.name}
                  </h4>
                  <img
                    src={pasta.img}
                    alt="Tagliatelle al pesto"
                    className="h-24 w-24 object-cover rounded-full mb-2"
                  />
                  <p className="text-[#2d2d2d] italic text-base mb-1 text-center">
                    {pasta.desc}
                  </p>
                  <div className="flex flex-col items-center gap-2 w-full">
                    <p className="text-[#9a3737] text-lg font-bold">
                      {pasta.price} €
                    </p>
                    <motion.button
                      onClick={() => addItem(pasta, "pasta")}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#9a3737] hover:bg-[#7d2d2d] text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2 w-full justify-center"
                    >
                      <motion.svg
                        whileHover={{ rotate: 90 }}
                        transition={{ duration: 0.2 }}
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </motion.svg>
                      Ajouter au panier
                    </motion.button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

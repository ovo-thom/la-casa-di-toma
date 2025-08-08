import { pizzas, pastas } from "../lib/menuDatas";
import type { MenuItem } from "../lib/menuDatas";

export default function PizzaPastaSection() {
  return (
    <section className="min-h-screen w-full py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-italianno text-[#9a3737] mb-2 drop-shadow-sm text-center">
          Nos Pizzas & Pâtes Artisanales
        </h2>
        <p className="text-lg md:text-xl text-[#2d2d2d] mb-10 text-center max-w-2xl">
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
                  className="border bg-white border-sauge rounded-lg p-4 flex flex-col items-center shadow-lg shadow-sauge transition-transform duration-200 hover:-translate-y-1 hover:shadow-2xl hover:border-[#9a3737] min-h-[270px] justify-between"
                >
                  <h4 className="text-black text-lg font-semibold mb-2">
                    {pizza.name}
                  </h4>
                  <img
                    src="/assets/restaurant.jpg"
                    alt="Pizza Margherita"
                    className="h-24 w-24 object-cover rounded-full mb-2"
                  />
                  <p className="text-[#2d2d2d] text-sm mb-1 text-center">{pizza.desc}</p>
                  <p className="text-[#9a3737] font-bold">{pizza.price} €</p>
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
                  className="border bg-white border-sauge rounded-lg p-4 flex flex-col items-center shadow-lg shadow-sauge transition-transform duration-200 hover:-translate-y-1 hover:shadow-2xl hover:border-[#9a3737] min-h-[270px] justify-between"
                >
                  <h4 className="text-black text-lg font-semibold mb-2">
                    {pasta.name}
                  </h4>
                  <img
                    src="/assets/restaurant.jpg"
                    alt="Tagliatelle al pesto"
                    className="h-24 w-24 object-cover rounded-full mb-2"
                  />
                  <p className="text-[#2d2d2d] text-sm mb-1 text-center">{pasta.desc}</p>
                  <p className="text-[#9a3737] font-bold">{pasta.price} €</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

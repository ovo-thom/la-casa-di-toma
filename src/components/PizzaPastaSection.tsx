export default function PizzaPastaSection() {
  return (
    <section className="min-h-screen w-full py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-italianno text-[#9a3737] mb-2 drop-shadow-sm text-center">
          Nos Pizzas & Pâtes Artisanales
        </h2>
        <p className="text-lg md:text-xl text-[#2d2d2d] mb-10 text-center max-w-2xl">
          Laissez-vous tenter par nos spécialités faites maison, préparées avec passion et des ingrédients de qualité. Découvrez la vraie saveur de l’Italie !
        </p>
        <div className="w-full flex flex-col md:flex-row gap-8">
          {/* Pizzas */}
          <div className="flex-1 bg-[#f3e9dc] rounded-xl shadow-md p-6 flex flex-col items-center">
            <h3 className="text-2xl font-semibold text-[#9a3737] mb-4 font-italianno">Pizzas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {/* Exemple de pizza */}
              <div className="border bg-white border-sauge rounded-lg p-4 flex flex-col items-center shadow-lg shadow-sauge transition-transform duration-200 hover:-translate-y-1 hover:shadow-2xl hover:border-[#9a3737]">
                <h4 className="text-black text-lg font-semibold mb-2">Margherita</h4>
                <img src="/assets/restaurant.jpg" alt="Pizza Margherita" className="h-24 w-24 object-cover rounded-full mb-2" />
                <p className="text-[#2d2d2d] text-sm mb-1">Fromage, tomate, basilic</p>
                <p className="text-[#9a3737] font-bold">12 €</p>
              </div>
              {/* Ajoute d'autres pizzas ici */}
            </div>
          </div>
          {/* Pâtes */}
          <div className="flex-1 bg-[#f3e9dc] rounded-xl shadow-md p-6 flex flex-col items-center">
            <h3 className="text-2xl font-semibold text-[#9a3737] mb-4 font-italianno">Pâtes</h3>
            {/* Liste des pâtes ici */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {/* Exemple de pâte */}
              <div className="border bg-white border-sauge rounded-lg p-4 flex flex-col items-center shadow-lg shadow-sauge transition-transform duration-200 hover:-translate-y-1 hover:shadow-2xl hover:border-[#9a3737]">
                <h4 className="text-black text-lg font-semibold mb-2">Tagliatelle al pesto</h4>
                <img src="/assets/restaurant.jpg" alt="Tagliatelle al pesto" className="h-24 w-24 object-cover rounded-full mb-2" />
                <p className="text-[#2d2d2d] text-sm mb-1">Pesto maison, parmesan</p>
                <p className="text-[#9a3737] font-bold">13 €</p>
              </div>
              
              {/* Ajoute d'autres pâtes ici */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
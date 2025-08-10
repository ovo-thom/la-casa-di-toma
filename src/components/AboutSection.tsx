export default function AboutSection() {
  return (
    <section className="w-full bg-[#f3e9dc] py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-left">
          <h2 className="text-4xl md:text-5xl font-italianno text-[#9a3737] mb-4 drop-shadow-sm">
            Bienvenue à La Casa Di Toma
          </h2>
          <p className="text-base md:text-xl text-[#2d2d2d] mb-6 leading-relaxed">
            Découvrez l'authenticité de l'Italie dans un cadre chaleureux et
            raffiné. Notre équipe vous accueille avec passion pour partager le
            meilleur de la cuisine italienne, entre tradition et créativité.
            Pizzas au feu de bois, pâtes fraîches, antipasti et douceurs maison
            : chaque plat est une invitation au voyage.
          </p>
          <span className="block text-[#bfae9c] italic text-base md:text-lg">
            “La dolce vita, c'est ici.”
          </span>
        </div>
        <div className="flex-1 flex flex-col gap-6 items-center md:items-end">
          <div className="flex gap-4">
            <img
              src="/assets/gastropasta.jpg"
              alt="Salle du restaurant"
              className="w-44 h-44 object-cover rounded-xl shadow-md border-4 border-[#81B29A] bg-white"
            />
            <img
              src="/assets/restaurant.jpg"
              alt="Pizza artisanale"
              className="w-44 h-44 object-cover rounded-full shadow-md border-4 border-[#9a3737] bg-white hidden md:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

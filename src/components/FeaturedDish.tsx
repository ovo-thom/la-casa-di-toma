export default function FeaturedDish() {
  return (
    <section className="w-full flex justify-center py-12 bg-[#fff7f0]">
      <div className="max-w-3xl mx-5 w-full flex flex-col md:flex-row items-center gap-8 bg-white rounded-2xl shadow-2xl p-8 border-4 border-sauge relative">
        <span className="absolute top-4 left-4 bg-[#9a3737] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wider z-10">
          Recommandé
        </span>
        <img
          src="/assets/images/pizzas/chef.jpg"
          alt="Pizza du Chef"
          className="w-48 h-48 object-cover rounded-xl shadow-lg border-2 border-[#f3e9dc]"
        />
        <div className="flex-1 flex flex-col items-start">
          <h3 className="text-3xl font-italianno text-[#9a3737] mb-2">
            Pizza du Chef
          </h3>
          <p className="text-lg text-[#2d2d2d] mb-4 font-semibold">
            Tomate, mozzarella, poivrons, merguez
          </p>
          <p className="text-base text-[#444] mb-4">
            Notre pizza signature, généreusement garnie de produits frais et
            d’une touche d’originalité du chef. Un vrai coup de cœur pour les
            amateurs de saveurs relevées et authentiques !
          </p>
          <span className="text-xl font-bold text-[#9a3737]">14 €</span>
        </div>
      </div>
    </section>
  );
}

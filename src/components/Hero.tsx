export default function Home() {
  return (
    <div className="w-full my-10 max-w-6xl">
      <div className="relative w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-[#9a3737]/20 rounded-xl">
          <div className="flex flex-col justify-center items-center h-full px-6">
            <h2 className="font-italianno text-6xl text-[#f3e9dc] font-semibold drop-shadow-2xl mb-4 transform -rotate-1">
              La dolce vita commence ici
            </h2>
            <p className="text-xl text-white italic text-center max-w-2xl leading-relaxed drop-shadow-lg">
              Découvrez nos pizzas artisanales, préparées avec amour et des
              ingrédients authentiques directement importés d'Italie.
            </p>
            <button className="mt-8 bg-[#9a3737] hover:bg-[#7d2d2d] text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1">
              Découvrir notre carte
            </button>
          </div>
        </div>
        <video
          src="/assets/pizzahome.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-[60vh] object-cover rounded-xl"
        ></video>
      </div>
    </div>
  );
}

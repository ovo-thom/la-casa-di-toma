export default function Home() {
  return (
    <div className="w-full my-8 md:my-6 lg:my-10 max-w-6xl px-4 md:px-0">
      <div className="relative w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-[#9a3737]/20 rounded-xl">
          <div className="flex flex-col justify-center items-center h-full px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
            <h2 className="font-italianno text-4xl sm:text-4xl md:text-5xl lg:text-6xl text-[#f3e9dc] font-semibold drop-shadow-2xl mb-2 md:mb-4 transform -rotate-1 text-center pt-4 md:pt-6 lg:pt-8">
              La dolce vita commence ici
            </h2>
            <p className="text-sm sm:text-lg md:text-xl text-white italic text-center max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl leading-relaxed drop-shadow-lg px-2">
              Découvrez nos pizzas artisanales, préparées avec amour et des
              ingrédients authentiques directement importés d'Italie.
            </p>
            <button className="mt-6 md:mt-6 lg:mt-8 bg-[#9a3737] hover:bg-[#7d2d2d] text-white px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold text-sm sm:text-base md:text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1">
              <span className="hidden sm:inline">Découvrir notre carte</span>
              <span className="sm:hidden">Notre carte</span>
            </button>
          </div>
        </div>
        <video
          src="/assets/pizzahome.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-[40vh] sm:h-[50vh] md:h-[55vh] lg:h-[60vh] object-cover rounded-xl"
        ></video>
      </div>
    </div>
  );
}

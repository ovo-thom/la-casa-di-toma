import { motion } from "framer-motion";

export default function Home() {
  const scrollToPizzaSection = () => {
    const pizzaSection = document.getElementById("pizza-pasta-section");

    if (pizzaSection) {
      pizzaSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="w-full my-8 md:my-6 lg:my-10 max-w-6xl px-4 md:px-0"
    >
      <div className="relative w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-[#9a3737]/20 rounded-xl z-10"
        >
          <div className="flex flex-col justify-center items-center h-full px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16 relative z-20">
            <motion.h2
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="font-italianno text-4xl sm:text-4xl md:text-5xl lg:text-6xl text-[#f3e9dc] font-semibold drop-shadow-2xl mb-2 md:mb-4 transform -rotate-1 text-center pt-4 md:pt-6 lg:pt-8"
            >
              La dolce vita commence ici
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-sm sm:text-lg md:text-xl text-white italic text-center max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl leading-relaxed drop-shadow-lg px-2"
            >
              Découvrez nos pizzas artisanales, préparées avec amour et des
              ingrédients authentiques directement importés d'Italie.
            </motion.p>
            <motion.button
              onClick={scrollToPizzaSection}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 md:mt-6 lg:mt-8 bg-[#9a3737] hover:bg-[#7d2d2d] text-white px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold text-sm sm:text-base md:text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform cursor-pointer relative z-30"
            >
              <span className="hidden sm:inline">Découvrir notre carte</span>
              <span className="sm:hidden">Notre carte</span>
            </motion.button>
          </div>
        </motion.div>
        <motion.video
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          src="/assets/pizzahome.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-[40vh] sm:h-[50vh] md:h-[55vh] lg:h-[60vh] object-cover rounded-xl"
        ></motion.video>
      </div>
    </motion.div>
  );
}

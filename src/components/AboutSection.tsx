import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full bg-[#e8d6c0] py-16 px-4"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-1 text-left"
        >
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-italianno text-[#9a3737] mb-4 drop-shadow-sm"
          >
            Bienvenue à La Casa Di Toma
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-base md:text-xl text-[#2d2d2d] mb-6 leading-relaxed"
          >
            Découvrez l'authenticité de l'Italie dans un cadre chaleureux et
            raffiné. Notre équipe vous accueille avec passion pour partager le
            meilleur de la cuisine italienne, entre tradition et créativité.
            Pizzas au feu de bois, pâtes fraîches, antipasti et douceurs maison
            : chaque plat est une invitation au voyage.
          </motion.p>
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
            className="block text-[#bfae9c] italic text-base md:text-lg"
          >
            "La dolce vita, c'est ici."
          </motion.span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex-1 flex flex-col gap-6 items-center md:items-end"
        >
          <div className="flex gap-4">
            <motion.img
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              src="/assets/gastropasta.jpg"
              alt="Salle du restaurant"
              className="w-44 h-44 object-cover rounded-xl shadow-md border-4 border-[#81B29A] bg-white"
            />
            <motion.img
              initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: -2 }}
              src="/assets/restaurant.jpg"
              alt="Pizza artisanale"
              className="w-44 h-44 object-cover rounded-full shadow-md border-4 border-[#9a3737] bg-white hidden md:block"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

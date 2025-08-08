export default function Home() {
  return (
    <div className=" w-full my-10">
      <div className="relative w-full">
        <div className="absolute inset-0 bg-black/50 rounded-xl">
          <div className="flex flex-col justify-center items-center h-full">
            <h2 className="font-italianno text-6xl text-gray-200 font-semibold">
              La dolce vita commence ici
            </h2>
            <p className="text-lg text-gray-300 italic">
              Découvrez nos pizzas artisanales, préparées avec amour et des
              ingrédients authentiques.
            </p>
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

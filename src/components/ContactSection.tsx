import { useState, useEffect } from "react";

export default function ContactSection() {
  const [position, setPosition] = useState<{ lat: number; lng: number } | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formSend, setFormSend] = useState("");
  const [formSuccess, setFormSuccess] = useState<boolean | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("La géolocalisation n'est pas supportée par votre navigateur.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({ lat: pos.coords.latitude, lng: pos.coords.longitude });
        setError(null);
      },
      () => setError("Impossible d'obtenir votre position."),
      { enableHighAccuracy: true }
    );
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (name && email && message) {
      setFormSend("Le formulaire à bien été envoyé");
      setFormSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
      setTimeout(() => {
        setFormSend("");
      }, 4000);
    } else {
      setFormSend("Veuillez remplir correctement tout les champs");
      setFormSuccess(false);
    }
  };

  return (
    <section className="w-full py-16 bg-[#f3e9dc] flex flex-col items-center">
      <h2 className="text-5xl font-italianno text-[#9a3737] mb-8">
        Contactez-nous
      </h2>
      <div className="w-full max-w-4xl flex flex-col md:flex-row gap-8 items-stretch">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-md p-8 flex-1 flex flex-col gap-4"
        >
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Votre nom"
            className="border border-sauge rounded text-gray-900 px-4 py-2 focus:outline-none focus:border-[#9a3737]"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Votre email"
            className="border border-sauge rounded text-gray-900 px-4 py-2 focus:outline-none focus:border-[#9a3737]"
          />
          <textarea
            placeholder="Votre message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border border-sauge rounded text-gray-900 resize-none px-4 py-2 focus:outline-none focus:border-[#9a3737]"
            rows={4}
          />
          <button
            type="submit"
            className="bg-[#9a3737] text-white font-bold py-2 px-6 rounded hover:bg-[#7a2c2c] transition"
          >
            Envoyer
          </button>
          <p
            className={`${
              formSuccess === true
                ? "text-green-500"
                : formSuccess === false
                ? "text-red-500"
                : ""
            } text-lg text-center`}
          >
            {formSend}
          </p>
        </form>
        <div className="flex-1 flex flex-col items-center justify-center">
          {error && <p className="text-red-600 mb-2">{error}</p>}
          <div className="w-full h-64 rounded-xl overflow-hidden bg-gray-200 flex items-center justify-center">
            {position ? (
              <iframe
                title="Votre position"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${
                  position.lng - 0.01
                }%2C${position.lat - 0.01}%2C${position.lng + 0.01}%2C${
                  position.lat + 0.01
                }&layer=mapnik&marker=${position.lat}%2C${position.lng}`}
              />
            ) : (
              <span className="text-[#9a3737]">
                Votre position apparaîtra ici
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

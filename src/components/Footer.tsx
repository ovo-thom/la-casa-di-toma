export default function Footer() {
  return (
    <footer className="w-full bg-[#9a3737] text-white py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-italianno text-3xl mb-1">La Casa di Toma</h3>
          <p className="text-sm mb-2">Restaurant italien artisanal à votre service</p>
          <p className="text-xs text-[#f3e9dc]">© {new Date().getFullYear()} La Casa di Toma. Tous droits réservés.</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="font-semibold">Contact</span>
          <a href="tel:+33123456789" className="hover:underline text-[#f3e9dc]">01 23 45 67 89</a>
          <a href="mailto:contact@lacasaditoma.fr" className="hover:underline text-[#f3e9dc]">contact@lacasaditoma.fr</a>
          <span className="text-xs mt-2">12 rue de l'Italie, 75000 Paris</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="font-semibold mb-1">Suivez-nous</span>
          <div className="flex gap-3">
            <a href="#" aria-label="Instagram" className="hover:text-[#f3e9dc] transition"><svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.3.4.5.2.8.4 1.1.7.3.3.5.6.7 1.1.2.4.3 1.1.4 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.3-.2.5-.4.8-.7 1.1-.3.3-.6.5-1.1.7-.4.2-1.1.3-2.3.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.3-.4-.5-.2-.8-.4-1.1-.7-.3-.3-.5-.6-.7-1.1-.2-.4-.3-1.1-.4-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.3.2-.5.4-.8.7-1.1.3-.3.6-.5 1.1-.7.4-.2 1.1-.3 2.3-.4C8.4 2.2 8.8 2.2 12 2.2zm0-2.2C8.7 0 8.3 0 7 .1 5.7.2 4.7.4 3.9.7c-.8.3-1.5.7-2.1 1.3-.6.6-1 1.3-1.3 2.1C.4 4.7.2 5.7.1 7 0 8.3 0 8.7 0 12s0 3.7.1 5c.1 1.3.3 2.3.6 3.1.3.8.7 1.5 1.3 2.1.6.6 1.3 1 2.1 1.3.8.3 1.8.5 3.1.6C8.3 24 8.7 24 12 24s3.7 0 5-.1c1.3-.1 2.3-.3 3.1-.6.8-.3 1.5-.7 2.1-1.3.6-.6 1-1.3 1.3-2.1.3-.8.5-1.8.6-3.1.1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.3-.3-2.3-.6-3.1-.3-.8-.7-1.5-1.3-2.1-.6-.6-1.3-1-2.1-1.3-.8-.3-1.8-.5-3.1-.6C15.7 0 15.3 0 12 0z"/><circle cx="12" cy="12" r="3.2"/><circle cx="18.4" cy="5.6" r=".8"/></svg></a>
            <a href="#" aria-label="Facebook" className="hover:text-[#f3e9dc] transition"><svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

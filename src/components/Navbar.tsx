export default function Navbar() {
  return (
    <nav className="w-full border-b text-gray-50 border-b-gray-400 flex flex-col items-center py-4 bg-transparent select-none">
      <h1 className="font-italianno text-5xl text-gray-100 drop-shadow-lg transform -rotate-2 tracking-wide">
        La Casa Di Toma
      </h1>
      <ul className="flex flex-row gap-8 mt-2 mb-1">
        <li className="text-gray-200 text-lg font-light hover:text-[#9a3737] transition-colors duration-200 cursor-pointer">Accueil</li>
        <li className="text-gray-200 text-lg font-light hover:text-[#9a3737] transition-colors duration-200 cursor-pointer">Menu</li>
        <li className="text-gray-200 text-lg font-light hover:text-[#9a3737] transition-colors duration-200 cursor-pointer">Réservations</li>
        <li className="text-gray-200 text-lg font-light hover:text-[#9a3737] transition-colors duration-200 cursor-pointer">Contact</li>
      </ul>
      <svg width="120" height="18" viewBox="0 0 120 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-3 hover:translate hover:rotate-3">
        <path d="M2 9 Q 30 18, 60 9 Q 90 0, 118 9" stroke="#9a3737" strokeWidth="3" fill="none"/>
      </svg>
    </nav>
  )
}
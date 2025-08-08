 export interface MenuItem {
  name: string;
  desc: string;
  price: number;
  img: string;
}
 
export const pizzas: MenuItem[] = [
  { name: "Margherita", desc: "Tomate, mozzarella, basilic", price: 12, img: "/assets/margherita.jpg" },
  { name: "Basilic", desc: "Tomate, mozzarella, basilic", price: 9, img: "/assets/margherita.jpg" },
  { name: "4 Saisons", desc: "Tomate, mozzarella, champignon, artichaud, anchois", price: 10, img: "/assets/margherita.jpg" },
  { name: "Pizza Du chef", desc: "Tomate, mozzarella, poivrons, merguez", price: 14, img: "/assets/margherita.jpg" },
  { name: "Parmigiana", desc: "Tomate, mozzarella, aubergine", price: 12, img: "/assets/margherita.jpg" },
  { name: "La Norvégienne", desc: "Tomate, mozzarella, saumon, roquette", price: 15, img: "/assets/margherita.jpg" },
  { name: "4 Fromages", desc: "Tomate, mozzarella, saumon, roquette", price: 15, img: "/assets/margherita.jpg" },
  { name: "Calzone", desc: "Tomate, mozzarella, jambon, champignons, œuf", price: 13, img: "/assets/calzone.jpg" },
];
export const pastas: MenuItem[] = [
  { name: "Tagliatelle al pesto", desc: "Pesto maison, parmesan", price: 13, img: "/assets/pesto.jpg" },
  { name: "Spaghetti alla carbonara", desc: "Crème, lardons, œuf, parmesan", price: 12, img: "/assets/carbonara.jpg" },
  { name: "Penne all'arrabbiata", desc: "Sauce tomate épicée, ail, persil", price: 11, img: "/assets/arrabbiata.jpg" },
  { name: "Lasagnes maison", desc: "Viande hachée, sauce tomate, béchamel, fromage", price: 14, img: "/assets/lasagnes.jpg" },
  { name: "Raviolis ricotta épinards", desc: "Raviolis frais, ricotta, épinards, sauce tomate", price: 13, img: "/assets/raviolis.jpg" },
  { name: "Gnocchis à la sauce gorgonzola", desc: "Gnocchis maison, sauce gorgonzola, noix", price: 13, img: "/assets/gnocchis.jpg" },
  { name: "Linguine aux fruits de mer", desc: "Moules, crevettes, calamars, sauce tomate", price: 16, img: "/assets/linguine.jpg" },
  { name: "Cannelloni à la bolognaise", desc: "Pâtes farcies, viande hachée, sauce tomate, béchamel", price: 14, img: "/assets/cannelloni.jpg" },
];



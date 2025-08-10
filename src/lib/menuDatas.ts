export interface MenuItem {
  name: string;
  desc: string;
  price: number;
  img: string;
}

export const pizzas: MenuItem[] = [
  {
    name: "Margherita",
    desc: "Tomate, mozzarella, basilic",
    price: 12,
    img: "/assets/images/pizzas/margherita.jpg",
  },
  {
    name: "Basilic",
    desc: "Tomate, mozzarella, basilic",
    price: 9,
    img: "/assets/images/pizzas/basilic.jpg",
  },
  {
    name: "Quatre Saisons",
    desc: "Tomate, mozzarella, champignon, artichaud, anchois",
    price: 10,
    img: "/assets/images/pizzas/quatresaisons.jpg",
  },
  {
    name: "Pizza Du chef",
    desc: "Tomate, mozzarella, poivrons, merguez",
    price: 14,
    img: "/assets/images/pizzas/chef.jpg",
  },
  {
    name: "Parmigiana",
    desc: "Tomate, mozzarella, aubergine",
    price: 12,
    img: "/assets/images/pizzas/parmigiana.jpg",
  },
  {
    name: "La Norvégienne",
    desc: "Tomate, mozzarella, saumon, roquette",
    price: 15,
    img: "/assets/images/pizzas/saumon.jpg",
  },
  {
    name: "Quatre Fromages",
    desc: "Tomate, mozzarella, fromage",
    price: 15,
    img: "/assets/images/pizzas/quatrefromage.jpg",
  },
  {
    name: "Calzone",
    desc: "Tomate, mozzarella, jambon, champignons, œuf",
    price: 13,
    img: "/assets/images/pizzas/calzone.jpg",
  },
];
export const pastas: MenuItem[] = [
  {
    name: "Tagliatelle al pesto",
    desc: "Pesto maison, parmesan",
    price: 13,
    img: "/assets/images/pastas/pesto.jpg",
  },
  {
    name: "Spaghetti alla carbonara",
    desc: "Crème, lardons, œuf, parmesan",
    price: 12,
    img: "/assets/images/pastas/carbonara.jpg",
  },
  {
    name: "Penne all'arrabbiata",
    desc: "Sauce tomate épicée, ail, persil",
    price: 11,
    img: "/assets/images/pastas/arrabbiata.jpg",
  },
  {
    name: "Lasagnes maison",
    desc: "Viande hachée, sauce tomate, béchamel, fromage",
    price: 14,
    img: "/assets/images/pastas/lasagne.jpg",
  },
  {
    name: "Raviolis ricotta épinards",
    desc: "Raviolis frais, ricotta, épinards, sauce tomate",
    price: 13,
    img: "/assets/images/pastas/ricotta.jpg",
  },
  {
    name: "Gnocchis à la sauce gorgonzola",
    desc: "Gnocchis maison, sauce gorgonzola, noix",
    price: 13,
    img: "/assets/images/pastas/gnocchi.jpg",
  },
  {
    name: "Linguine aux fruits de mer",
    desc: "Moules, crevettes, calamars, sauce tomate",
    price: 16,
    img: "/assets/images/pastas/fruitsdemer.jpg",
  },
  {
    name: "Cannelloni à la bolognaise",
    desc: "Pâtes farcies, viande hachée, sauce tomate, béchamel",
    price: 14,
    img: "/assets/images/pastas/cannelloni.jpg",
  },
];

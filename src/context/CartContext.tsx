import { createContext, useContext, useState, type ReactNode } from "react";
import type { MenuItem } from "../lib/menuDatas";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  img: string;
  type: "pizza" | "pasta";
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: MenuItem, type: "pizza" | "pasta") => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (item: MenuItem, type: "pizza" | "pasta") => {
    const id = `${type}-${item.name}`;

    setItems((currentItems) => {
      const existingItem = currentItems.find((cartItem) => cartItem.id === id);

      if (existingItem) {
        return currentItems.map((cartItem) =>
          cartItem.id === id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [
          ...currentItems,
          {
            id,
            name: item.name,
            price: item.price,
            quantity: 1,
            img: item.img,
            type,
          },
        ];
      }
    });
  };

  const removeItem = (id: string) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  const value = {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    getTotalPrice,
    getTotalItems,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error("useCart doit être utilisé dans un CartProvider");
  }

  return context;
};

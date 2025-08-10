import { useCart } from "../context/CartContext";

interface CartDropdownProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function CartDropdown({
  isVisible,
  onClose,
}: CartDropdownProps) {
  const { items, removeItem, updateQuantity, getTotalPrice, clearCart } =
    useCart();

  if (!isVisible) return null;

  return (
    <div className="absolute top-full right-0 mt-2 w-full sm:w-80 sm:right-0 bg-white border-2 border-sauge rounded-xl shadow-2xl z-50">
      <div className="flex justify-between items-center p-4 border-b border-sauge/20">
        <h3 className="text-lg font-semibold text-[#9a3737]">Mon Panier</h3>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-[#9a3737] transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div className="max-h-64 overflow-y-auto">
        {items.length === 0 ? (
          <div className="p-6 text-center">
            <svg
              className="w-16 h-16 mx-auto text-gray-300 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5.4M7 13v6a2 2 0 002 2h7.5M17 21v-2a2 2 0 00-2-2H7"
              />
            </svg>
            <p className="text-gray-500 mb-2">Votre panier est vide</p>
            <p className="text-sm text-gray-400">
              Ajoutez vos pizzas et pâtes préférées !
            </p>
          </div>
        ) : (
          items.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3 p-3 border-b border-gray-100 last:border-b-0"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-12 h-12 object-cover rounded-full"
              />

              <div className="flex-1">
                <h4 className="font-medium text-sm text-gray-900">
                  {item.name}
                </h4>
                <div className="flex items-center gap-2">
                  <p className="text-xs text-[#9a3737] font-semibold">
                    {item.price} €
                  </p>
                  <span className="text-xs text-gray-500">
                    × {item.quantity}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="w-7 h-7 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-sm font-semibold transition-colors"
                >
                  −
                </button>
                <span className="w-8 text-center text-sm font-semibold bg-gray-50 rounded px-2 py-1">
                  {item.quantity}
                </span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="w-7 h-7 rounded-full bg-[#9a3737] hover:bg-[#7d2d2d] text-white flex items-center justify-center text-sm font-semibold transition-colors"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 hover:text-red-700 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
          ))
        )}
      </div>

      {items.length > 0 && (
        <div className="p-4 border-t border-sauge/20 bg-gray-50">
          <div className="flex justify-between items-center mb-3">
            <span className="font-semibold text-gray-900">Total:</span>
            <span className="font-bold text-lg text-[#9a3737]">
              {getTotalPrice().toFixed(2)} €
            </span>
          </div>

          <div className="flex gap-2">
            <button
              onClick={clearCart}
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-lg text-sm transition-colors"
            >
              Vider
            </button>
            <button
              onClick={() => {
                alert(`Commande de ${getTotalPrice().toFixed(2)}€ envoyée !`);
                clearCart();
                onClose();
              }}
              className="flex-2 bg-[#9a3737] hover:bg-[#7d2d2d] text-white py-2 px-6 rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              Commander
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

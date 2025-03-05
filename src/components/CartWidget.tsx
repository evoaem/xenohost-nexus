
import { useState } from 'react';
import { ShoppingCart, X, Trash2 } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { items, removeFromCart, totalItems, totalPrice } = useCart();

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-xenoblue/10 hover:bg-xenoblue/20 text-xenoblue rounded-lg transition-colors relative"
        aria-label="Shopping Cart"
      >
        <ShoppingCart className="w-6 h-6" />
        <span className="font-medium">Cart</span>
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-xenoblue text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-xenoblack/5 z-50 animate-fade-in-down">
          <div className="p-4 border-b border-xenoblack/10 flex justify-between items-center">
            <h3 className="font-bold">Your Cart</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-xenoblack/50 hover:text-xenoblack"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {items.length === 0 ? (
            <div className="p-4 text-center text-xenoblack/60">
              <p>Your cart is empty</p>
            </div>
          ) : (
            <>
              <div className="max-h-60 overflow-y-auto">
                {items.map(item => (
                  <div key={item.id} className="p-3 border-b border-xenoblack/5 flex justify-between items-center">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-xenoblack/60">${item.price}/mo</p>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700"
                      aria-label="Remove from cart"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="p-4 border-t border-xenoblack/10">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-medium">Total:</span>
                  <span className="font-bold">${totalPrice.toFixed(2)}/mo</span>
                </div>
                <Link 
                  to="/checkout" 
                  className="w-full py-2 px-4 rounded-lg bg-xenoblue text-white font-medium text-center block hover:bg-xenoblue-dark transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Checkout
                </Link>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default CartWidget;

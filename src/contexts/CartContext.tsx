import React, { createContext, useContext, useState } from 'react';
import { toast } from "sonner";

type CartItem = {
  id: string;
  name: string;
  price: number;
  type: 'vps' | 'domain';
  quantity?: number;
  details?: string;
};

type CartContextType = {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  total: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setItems([...items, item]);
    toast.success(`Added ${item.name} to cart`);
  };

  const removeFromCart = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
    toast.success("Item removed from cart");
  };

  const clearCart = () => {
    setItems([]);
    toast.success("Cart cleared");
  };

  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
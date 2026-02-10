'use client';

import { createContext, useContext, useState, useEffect } from 'react';

// 1. Define what a Cart Item looks like
type CartItem = {
  id: number;
  title: string;
  price: number;
  image: string;
  category?: string;
};

// 2. Define the "Rules" (Types)
type CartContextType = {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;      // <--- NEW: Missing piece
  toggleCart: () => void;   // <--- NEW: Missing piece
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false); // <--- NEW State

  // Load from LocalStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setItems(JSON.parse(savedCart));
    }
  }, []);

  // Save to LocalStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  const addToCart = (item: CartItem) => {
    setItems(prev => [...prev, item]);
    setIsCartOpen(true); // Open drawer automatically when adding
  };

  const removeFromCart = (id: number) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setItems([]);
  };

  const toggleCart = () => setIsCartOpen(prev => !prev);

  return (
    <CartContext.Provider value={{ 
      items, 
      addToCart, 
      removeFromCart, 
      clearCart,
      isCartOpen,  // <--- Passing the value
      toggleCart   // <--- Passing the function
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
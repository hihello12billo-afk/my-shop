'use client';

import { X, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { useCart } from '@/app/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';

export default function CartDrawer() {
  const { isCartOpen, toggleCart, items, removeFromCart } = useCart();
  
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      {/* Dark Overlay - High Contrast */}
      <div 
        className={`fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={toggleCart}
      />

      {/* Sliding Drawer */}
      <div className={`fixed inset-y-0 right-0 z-[100] w-full max-w-md bg-white border-l border-gray-200 shadow-2xl transform transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 flex items-center justify-between border-b border-gray-100 bg-white">
            <h2 className="text-xl font-bold flex items-center gap-2">
              YOUR BAG ({items.length})
            </h2>
            <button onClick={toggleCart} className="p-2 hover:bg-gray-100 rounded-full transition">
              <X size={24} />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50/50">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-400 space-y-4">
                <ShoppingBag size={64} className="opacity-20" />
                <p className="font-medium">Your bag is empty</p>
                <button onClick={toggleCart} className="text-sm border-b border-black text-black pb-1">
                  Start Shopping
                </button>
              </div>
            ) : (
              items.map((item, index) => (
                <div key={index} className="flex gap-4 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <div className="relative h-24 w-24 bg-gray-100 flex-shrink-0 rounded-md overflow-hidden">
                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-sm text-gray-900">{item.title}</h3>
                      <p className="text-gray-500 text-xs mt-1">$ {item.price.toFixed(2)}</p>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)} 
                      className="text-gray-400 hover:text-red-500 text-xs flex items-center gap-1 transition"
                    >
                      <Trash2 size={14} /> Remove
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer with Checkout */}
          <div className="p-6 border-t border-gray-100 bg-white">
            <div className="flex justify-between mb-6">
               <span className="text-gray-500">Subtotal</span>
               <span className="text-xl font-bold">$ {total.toFixed(2)}</span>
            </div>
            
            <Link href="/checkout" onClick={toggleCart}>
              <button className="w-full bg-black text-white py-4 font-bold uppercase tracking-widest hover:bg-gray-800 transition flex items-center justify-center gap-2">
                Checkout <ArrowRight size={18} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
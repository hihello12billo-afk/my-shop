'use client';

import Navbar from '../components/Navbar';
import { useCart } from '../context/CartContext';
import Link from 'next/link';
import Image from 'next/image';
import { Trash2, ArrowRight } from 'lucide-react';

export default function CartPage() {
  const { items, removeFromCart } = useCart();
  
  // Calculate Total
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <h1 className="text-4xl font-serif font-bold mb-10">Shopping Bag ({items.length})</h1>

        {items.length === 0 ? (
          // EMPTY STATE
          <div className="text-center py-20 border border-dashed border-stone-300 rounded-xl">
            <p className="text-stone-500 mb-6">Your bag is empty.</p>
            <Link href="/new-arrivals" className="bg-black text-white px-8 py-3 uppercase text-sm font-bold tracking-widest hover:bg-stone-800 transition">
              Start Shopping
            </Link>
          </div>
        ) : (
          // CART ITEMS
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              {items.map((item, index) => (
                <div key={index} className="flex gap-6 p-4 bg-white border border-stone-100 rounded-xl shadow-sm">
                  {/* Image */}
                  <div className="relative w-24 h-32 bg-stone-100 rounded-md overflow-hidden flex-shrink-0">
                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                  </div>
                  
                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="font-bold text-lg text-stone-900">{item.title}</h3>
                        <button onClick={() => removeFromCart(item.id)} className="text-stone-400 hover:text-red-500 transition">
                          <Trash2 size={18} />
                        </button>
                      </div>
                      <p className="text-stone-500 text-sm mt-1">$ {item.price}</p>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-green-600 font-bold">
                       In Stock
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CHECKOUT SUMMARY */}
            <div className="lg:col-span-1">
               <div className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm sticky top-28">
                  <h2 className="text-xl font-bold mb-6">Summary</h2>
                  <div className="space-y-4 text-sm text-stone-600 border-b border-stone-100 pb-6 mb-6">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>Free</span>
                    </div>
                  </div>
                  <div className="flex justify-between text-xl font-bold text-stone-900 mb-8">
                     <span>Total</span>
                     <span>${total.toFixed(2)}</span>
                  </div>
                  
                  <Link href="/checkout">
                    <button className="w-full bg-black text-white py-4 rounded-lg font-bold uppercase tracking-widest hover:bg-stone-800 transition flex items-center justify-center gap-2">
                       Checkout <ArrowRight size={18} />
                    </button>
                  </Link>
               </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
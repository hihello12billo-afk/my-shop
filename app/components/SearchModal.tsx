'use client';

import { useState, useEffect, useRef } from 'react';
import { X, Search as SearchIcon, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// --- DATA IS NOW INSIDE THE FILE (No more import errors!) ---
const products = [
  {
    id: 1,
    title: "The Minimalist Tote",
    price: 245,
    image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1000&auto=format&fit=crop",
    category: "Bags"
  },
  {
    id: 2,
    title: "Oxford Cotton Shirt",
    price: 110,
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1000&auto=format&fit=crop",
    category: "Clothing"
  },
  {
    id: 3,
    title: "Classic Leather Watch",
    price: 350,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1000&auto=format&fit=crop",
    category: "Accessories"
  },
  {
    id: 4,
    title: "Cashmere Scarf",
    price: 180,
    image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?q=80&w=1000&auto=format&fit=crop",
    category: "Accessories"
  },
  {
    id: 5,
    title: "Signature Scent",
    price: 150,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1000&auto=format&fit=crop",
    category: "Beauty"
  },
  {
    id: 6,
    title: "Weekender Bag",
    price: 420,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1000&auto=format&fit=crop",
    category: "Travel"
  }
];
// -----------------------------------------------------------

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const results = products.filter(product => 
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-white/95 backdrop-blur-xl z-[100] p-6 md:p-12 overflow-y-auto"
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-end mb-8">
            <button onClick={onClose} className="p-2 hover:bg-stone-100 rounded-full transition">
              <X size={32} />
            </button>
          </div>

          <div className="relative mb-16">
            <SearchIcon className="absolute left-0 top-1/2 -translate-y-1/2 text-stone-400" size={32} />
            <input 
              ref={inputRef}
              type="text" 
              placeholder="Search products..." 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full text-4xl md:text-6xl font-serif font-bold bg-transparent border-b-2 border-stone-200 py-6 pl-12 focus:outline-none focus:border-black placeholder-stone-200 transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {query.length > 0 && results.map((product) => (
              <Link href={`/product/${product.id}`} key={product.id} onClick={onClose}>
                <div className="group flex items-center gap-6 p-4 hover:bg-stone-50 rounded-xl transition cursor-pointer">
                  <div className="relative w-20 h-24 bg-stone-200 rounded-lg overflow-hidden shrink-0">
                    <Image src={product.image} alt={product.title} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold group-hover:underline">{product.title}</h4>
                    <p className="text-stone-500">${product.price}</p>
                  </div>
                  <ArrowRight className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            ))}
            
            {query.length > 0 && results.length === 0 && (
              <p className="text-stone-400 text-lg">No products found for "{query}"</p>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
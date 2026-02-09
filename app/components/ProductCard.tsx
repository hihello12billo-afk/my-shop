'use client';

import Image from 'next/image';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface ProductProps {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
}

export default function ProductCard({ id, title, price, image, category }: ProductProps) {
  const { addToCart } = useCart();

  return (
    <div className="group relative">
      <div className="aspect-[3/4] w-full overflow-hidden bg-gray-200 relative">
        <Image 
          src={image} 
          alt={title}
          fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* ADD TO CART BUTTON (Fixed) */}
        <div className="absolute bottom-0 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button 
            onClick={() => addToCart({ id, title, price, image })}
            className="w-full bg-black/90 text-white py-4 text-sm uppercase tracking-widest hover:bg-black flex items-center justify-center gap-2 cursor-pointer"
          >
            <ShoppingBag size={16} /> Add to Cart
          </button>
        </div>
      </div>

      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700 font-medium">{title}</h3>
          <p className="mt-1 text-sm text-gray-500">{category}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">${price}</p>
      </div>
    </div>
  );
}
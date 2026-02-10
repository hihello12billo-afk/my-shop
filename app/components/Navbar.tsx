'use client';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { ShoppingBag, Search, User } from 'lucide-react';
import { useCart } from '../context/CartContext'; // <--- FIXED THIS LINE (Removed "app/")
import CartDrawer from './CartDrawer';

export default function Navbar() {
  const { toggleCart, items } = useCart();

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold tracking-tighter text-black uppercase">
              LUXE.<span className="text-gray-400">STORE</span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex space-x-8">
              <Link href="/new-arrivals" className="text-sm font-medium text-gray-900 hover:text-gray-500 transition-colors">
                New Arrivals
              </Link>
              <Link href="/brands" className="text-sm font-medium text-gray-900 hover:text-gray-500 transition-colors">
                Brands
              </Link>
              <Link href="/accessories" className="text-sm font-medium text-gray-900 hover:text-gray-500 transition-colors">
                Accessories
              </Link>
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-6">
              
              {/* User / Login Icon */}
              <Link href="/login">
                <User className="w-5 h-5 cursor-pointer hover:text-gray-500 transition" />
              </Link>

              <Search className="w-5 h-5 cursor-pointer hover:text-gray-500 transition" />
              
              {/* Shopping Bag */}
              {/* ... keep your existing shopping bag code here ... */}
              
              {/* Shopping Bag - Click to Open Cart */}
              <button 
                onClick={toggleCart} 
                className="relative cursor-pointer hover:opacity-70 transition"
              >
                <ShoppingBag className="w-5 h-5" />
                {items.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                    {items.length}
                  </span>
                )}
              </button>
            </div>

          </div>
        </div>
      </nav>
      <CartDrawer />
    </>
  );
}
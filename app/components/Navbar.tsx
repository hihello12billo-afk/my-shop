'use client';

import Link from 'next/link';
import { ShoppingBag, Search, Menu, X, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useSession } from 'next-auth/react'; // Import Session Hook
import { useState } from 'react';

export default function Navbar() {
  const { items } = useCart();
  const { data: session } = useSession(); // Check if user is logged in
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-stone-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <Link href="/" className="text-2xl font-serif font-bold tracking-tighter hover:opacity-70 transition">
          LUXE.
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide text-stone-600">
          <Link href="/new-arrivals" className="hover:text-black transition">NEW ARRIVALS</Link>
          <Link href="#" className="hover:text-black transition">BAGS</Link>
          <Link href="#" className="hover:text-black transition">ACCESSORIES</Link>
          <Link href="#" className="hover:text-black transition">EDITORIAL</Link>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6">
          <Search size={20} className="text-stone-400 hover:text-black cursor-pointer transition" />
          
          {/* DYNAMIC PROFILE ICON */}
          {session ? (
            // IF LOGGED IN: Show User Icon -> Goes to Profile
            <Link href="/profile" className="hover:text-stone-600 transition" title="My Profile">
              <User size={22} />
            </Link>
          ) : (
            // IF LOGGED OUT: Show Login Text -> Goes to Login
            <Link href="/login" className="hidden md:block text-xs font-bold uppercase tracking-widest hover:text-stone-600 transition">
              Login
            </Link>
          )}

          {/* Cart Icon */}
          <Link href="/cart" className="relative">
            <ShoppingBag size={20} className="hover:text-stone-600 transition" />
            {items.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                {items.length}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-stone-100 p-6 flex flex-col gap-4 text-sm font-bold animate-in slide-in-from-top-5">
          <Link href="/new-arrivals" onClick={() => setIsMenuOpen(false)}>NEW ARRIVALS</Link>
          <Link href="#" onClick={() => setIsMenuOpen(false)}>BAGS</Link>
          <Link href="#" onClick={() => setIsMenuOpen(false)}>ACCESSORIES</Link>
          {!session && <Link href="/login" onClick={() => setIsMenuOpen(false)}>LOGIN</Link>}
          {session && <Link href="/profile" onClick={() => setIsMenuOpen(false)}>MY ACCOUNT</Link>}
        </div>
      )}
    </nav>
  );
}
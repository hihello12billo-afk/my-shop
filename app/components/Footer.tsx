'use client';

import Link from 'next/link';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        {/* Brand Column */}
        <div className="space-y-6">
          <h2 className="text-2xl font-serif font-bold">LUXE.</h2>
          <p className="text-stone-400 text-sm leading-relaxed">
            redefining modern luxury through minimalism and sustainable craftsmanship. Designed in Milan, worn worldwide.
          </p>
          <div className="flex gap-4">
            <Instagram size={20} className="text-stone-400 hover:text-white cursor-pointer transition" />
            <Twitter size={20} className="text-stone-400 hover:text-white cursor-pointer transition" />
            <Facebook size={20} className="text-stone-400 hover:text-white cursor-pointer transition" />
            <Linkedin size={20} className="text-stone-400 hover:text-white cursor-pointer transition" />
          </div>
        </div>

        {/* Shop Column */}
        <div>
          <h3 className="font-bold text-sm tracking-widest uppercase mb-6">Shop</h3>
          <ul className="space-y-4 text-stone-400 text-sm">
            <li><Link href="/new-arrivals" className="hover:text-white transition">New Arrivals</Link></li>
            <li><Link href="#" className="hover:text-white transition">Bags & Accessories</Link></li>
            <li><Link href="#" className="hover:text-white transition">Watches</Link></li>
            <li><Link href="#" className="hover:text-white transition">Gift Cards</Link></li>
          </ul>
        </div>

        {/* Support Column */}
        <div>
          <h3 className="font-bold text-sm tracking-widest uppercase mb-6">Support</h3>
          <ul className="space-y-4 text-stone-400 text-sm">
            <li><Link href="#" className="hover:text-white transition">Contact Us</Link></li>
            <li><Link href="#" className="hover:text-white transition">Shipping & Returns</Link></li>
            <li><Link href="#" className="hover:text-white transition">FAQ</Link></li>
            <li><Link href="#" className="hover:text-white transition">Size Guide</Link></li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div>
          <h3 className="font-bold text-sm tracking-widest uppercase mb-6">Stay Updated</h3>
          <p className="text-stone-400 text-sm mb-4">Subscribe to receive early access to new drops.</p>
          <div className="flex border-b border-stone-700 pb-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-transparent w-full outline-none text-white placeholder-stone-600"
            />
            <button className="text-stone-400 hover:text-white text-sm font-bold uppercase transition">Join</button>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500">
        <p>© 2026 LUXE Store. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-stone-300">Privacy Policy</Link>
          <Link href="#" className="hover:text-stone-300">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
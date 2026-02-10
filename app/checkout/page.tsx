'use client';

// FIXED IMPORT: Only 2 dots to go up to 'app'
import Navbar from '../components/Navbar'; 
import { useCart } from '../context/CartContext';
import Image from 'next/image';
import { useState } from 'react';
import { ShieldCheck, Lock } from 'lucide-react';
import Link from 'next/link';

export default function CheckoutPage() {
  const { items, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Calculate Total
  const total = items.reduce((sum, item) => sum + item.price, 0);

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate Payment Delay (2 seconds)
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      clearCart(); // Empty the cart after purchase
    }, 2000);
  };

  if (isSuccess) {
    return (
      <main className="min-h-screen bg-[#FDFBF7] flex items-center justify-center p-6">
        <div className="bg-white p-12 rounded-2xl shadow-xl max-w-lg w-full text-center border border-stone-100">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShieldCheck size={40} className="text-green-600" />
          </div>
          <h1 className="text-3xl font-serif font-bold text-stone-900 mb-4">Order Confirmed!</h1>
          <p className="text-stone-500 mb-8">Thank you for your purchase. We have sent a confirmation email to your inbox.</p>
          <Link href="/new-arrivals">
            <button className="w-full bg-black text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-stone-800 transition">
              Continue Shopping
            </button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <h1 className="text-4xl font-serif font-bold mb-10 text-center md:text-left">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* LEFT: Shipping Form */}
          <div>
            <form onSubmit={handlePayment} className="space-y-8">
              
              {/* Section 1: Email */}
              <div className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm">
                <h2 className="text-lg font-bold mb-4">Contact Information</h2>
                <input required type="email" placeholder="Email Address" className="w-full p-4 bg-stone-50 rounded-lg outline-none border border-transparent focus:border-stone-900 transition" />
              </div>

              {/* Section 2: Shipping */}
              <div className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm space-y-4">
                <h2 className="text-lg font-bold mb-4">Shipping Address</h2>
                <div className="grid grid-cols-2 gap-4">
                  <input required type="text" placeholder="First Name" className="w-full p-4 bg-stone-50 rounded-lg outline-none border border-transparent focus:border-stone-900 transition" />
                  <input required type="text" placeholder="Last Name" className="w-full p-4 bg-stone-50 rounded-lg outline-none border border-transparent focus:border-stone-900 transition" />
                </div>
                <input required type="text" placeholder="Address" className="w-full p-4 bg-stone-50 rounded-lg outline-none border border-transparent focus:border-stone-900 transition" />
                <div className="grid grid-cols-2 gap-4">
                  <input required type="text" placeholder="City" className="w-full p-4 bg-stone-50 rounded-lg outline-none border border-transparent focus:border-stone-900 transition" />
                  <input required type="text" placeholder="Postal Code" className="w-full p-4 bg-stone-50 rounded-lg outline-none border border-transparent focus:border-stone-900 transition" />
                </div>
              </div>

              {/* Section 3: Payment */}
              <div className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm space-y-4">
                <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Lock size={16} className="text-stone-400" /> Payment
                </h2>
                <input required type="text" placeholder="Card Number" className="w-full p-4 bg-stone-50 rounded-lg outline-none border border-transparent focus:border-stone-900 transition" />
                <div className="grid grid-cols-2 gap-4">
                  <input required type="text" placeholder="MM / YY" className="w-full p-4 bg-stone-50 rounded-lg outline-none border border-transparent focus:border-stone-900 transition" />
                  <input required type="text" placeholder="CVC" className="w-full p-4 bg-stone-50 rounded-lg outline-none border border-transparent focus:border-stone-900 transition" />
                </div>
              </div>

              <button disabled={isProcessing} className="w-full bg-black text-white py-5 rounded-xl font-bold uppercase tracking-widest text-lg hover:bg-stone-800 transition shadow-lg flex items-center justify-center gap-3">
                {isProcessing ? "Processing..." : `Pay $${total.toFixed(2)}`}
              </button>
            </form>
          </div>

          {/* RIGHT: Order Summary */}
          <div className="hidden lg:block">
            <div className="sticky top-32">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>
              <div className="bg-white p-8 rounded-xl border border-stone-100 shadow-sm space-y-6">
                
                {items.length === 0 ? (
                  <p className="text-stone-400">Your cart is empty.</p>
                ) : (
                  items.map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="relative w-16 h-20 bg-stone-100 rounded-md overflow-hidden shrink-0">
                         <Image src={item.image} alt={item.title} fill className="object-cover" />
                      </div>
                      <div>
                        <p className="font-bold text-sm">{item.title}</p>
                        <p className="text-stone-500 text-sm">${item.price}</p>
                      </div>
                    </div>
                  ))
                )}

                <div className="h-px bg-stone-100 my-4"></div>
                
                <div className="flex justify-between font-bold text-xl">
                   <span>Total</span>
                   <span>${total.toFixed(2)}</span>
                </div>
                
                <div className="bg-stone-50 p-4 rounded-lg flex gap-3 text-xs text-stone-500">
                   <ShieldCheck size={32} />
                   <p>Your payment information is encrypted and secure. We do not store your credit card details.</p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
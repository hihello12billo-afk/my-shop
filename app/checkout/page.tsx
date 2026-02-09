'use client';

import Navbar from '../components/Navbar'; // <--- FIXED: Only 2 dots
import { useCart } from '../context/CartContext'; // <--- FIXED: Only 1 dot to get to app/context
import { useState } from 'react';
import Image from 'next/image';
import { CreditCard, Truck, ShieldCheck, Lock } from 'lucide-react';

export default function CheckoutPage() {
  const { items } = useCart();
  const total = items.reduce((sum, item) => sum + item.price, 0);
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate Payment Processing
    setTimeout(() => {
        setIsProcessing(false);
        alert("Payment Successful! Your order has been placed.");
        window.location.href = "/";
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-gray-100 text-black">
      <Navbar />
      
      <div className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-10 tracking-tight text-black">CHECKOUT</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* LEFT COLUMN: FORMS */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* 1. Contact Info Section */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="bg-black text-white w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold">1</span>
                Shipping Details
              </h2>
              
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Email Address</label>
                  <input type="email" placeholder="you@example.com" className="w-full p-4 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none font-medium" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">First Name</label>
                      <input type="text" placeholder="John" className="w-full p-4 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none font-medium" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">Last Name</label>
                      <input type="text" placeholder="Doe" className="w-full p-4 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none font-medium" />
                    </div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Address</label>
                  <input type="text" placeholder="123 Luxury Lane" className="w-full p-4 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none font-medium" />
                </div>

                <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">City</label>
                      <input type="text" placeholder="New York" className="w-full p-4 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none font-medium" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">ZIP / Postal</label>
                      <input type="text" placeholder="10001" className="w-full p-4 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none font-medium" />
                    </div>
                </div>
              </div>
            </div>

            {/* 2. Payment Section */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="bg-black text-white w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold">2</span>
                Payment Method
              </h2>
              
              {/* Payment Tabs */}
              <div className="flex gap-4 mb-8">
                <button className="flex-1 py-4 border-2 border-black bg-black text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-md">
                    <CreditCard size={20} /> Credit Card
                </button>
                <button className="flex-1 py-4 border-2 border-gray-200 bg-white text-gray-500 font-bold rounded-xl hover:bg-gray-50 transition">
                    PayPal
                </button>
              </div>

              <form onSubmit={handlePayment} className="space-y-5">
                <div>
                   <label className="block text-sm font-bold text-gray-700 mb-1">Card Number</label>
                   <div className="relative">
                     <Lock className="absolute left-4 top-4 text-gray-400" size={18} />
                     <input type="text" placeholder="0000 0000 0000 0000" className="w-full pl-12 p-4 bg-gray-50 border border-gray-300 rounded-lg font-mono focus:ring-2 focus:ring-black outline-none" />
                   </div>
                </div>

                <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">Expiry Date</label>
                      <input type="text" placeholder="MM / YY" className="w-full p-4 bg-gray-50 border border-gray-300 rounded-lg text-center font-medium focus:ring-2 focus:ring-black outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">CVC</label>
                      <input type="text" placeholder="123" className="w-full p-4 bg-gray-50 border border-gray-300 rounded-lg text-center font-medium focus:ring-2 focus:ring-black outline-none" />
                    </div>
                </div>
                
                <button 
                  disabled={isProcessing}
                  className="w-full bg-black text-white py-5 text-lg font-bold rounded-xl hover:bg-gray-800 transition mt-6 flex items-center justify-center gap-3 shadow-xl transform active:scale-95 duration-200"
                >
                  {isProcessing ? "Processing..." : `PAY $${total.toFixed(2)}`}
                </button>
                
                <p className="text-xs text-center text-gray-400 mt-4 flex items-center justify-center gap-1">
                   <ShieldCheck size={14} /> 256-bit SSL Secure Payment
                </p>
              </form>
            </div>

          </div>

          {/* RIGHT COLUMN: ORDER SUMMARY */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 sticky top-28">
              <h2 className="text-xl font-bold mb-6 border-b pb-4 text-black">Order Summary</h2>
              
              <div className="space-y-6 mb-8 max-h-[400px] overflow-y-auto custom-scrollbar">
                {items.map((item, i) => (
                  <div key={i} className="flex gap-4 items-center">
                    <div className="relative w-20 h-20 bg-gray-100 rounded-lg overflow-hidden border border-gray-200 flex-shrink-0">
                      <Image src={item.image} alt={item.title} fill className="object-cover" />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-gray-900 line-clamp-2">{item.title}</p>
                      <p className="text-gray-500 text-sm font-medium mt-1">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 text-sm pt-4 border-t border-gray-100">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-medium">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="text-green-600 font-bold uppercase text-xs bg-green-100 px-2 py-1 rounded">Free</span>
                </div>
              </div>
              
              <div className="flex justify-between text-2xl font-extrabold border-t border-gray-200 mt-6 pt-6 text-black">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <div className="mt-8 bg-gray-50 p-4 rounded-xl flex items-start gap-3 text-xs text-gray-600 border border-gray-200">
                <Truck className="shrink-0 text-black" size={18} />
                <p className="leading-relaxed">
                  <strong>Free Express Shipping.</strong><br/>
                  All orders are processed in USD. Returns accepted within 30 days.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
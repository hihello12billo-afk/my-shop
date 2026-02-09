'use client';

import Link from 'next/link';
import Navbar from '../components/Navbar';
import { useState } from 'react';

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
        setIsLoading(false);
        alert("Account created!");
        window.location.href = "/";
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-[#FDFBF7]"> {/* Premium Cream Background */}
      <Navbar />
      
      <div className="flex items-center justify-center min-h-screen px-4 pt-20">
        <div className="bg-white p-10 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-2xl w-full max-w-md border border-stone-100">
          
          <div className="text-center mb-10">
            <h1 className="text-4xl font-serif font-bold mb-3 text-stone-900">Create Account</h1>
            <p className="text-stone-500">Join us for a personalized luxury experience.</p>
          </div>

          {/* Google Button */}
          <button className="w-full flex items-center justify-center gap-3 bg-white border border-stone-200 text-stone-700 py-4 rounded-xl font-bold hover:bg-stone-50 transition mb-6 shadow-sm group">
            <div className="w-5 h-5 relative">
               <svg viewBox="0 0 24 24" className="w-5 h-5">
                 <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                 <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                 <path d="M5.84 14.11c-.22-.66-.35-1.36-.35-2.11s.13-1.45.35-2.11V7.05H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.95l3.66-2.84z" fill="#FBBC05"/>
                 <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.05l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
               </svg>
            </div>
            <span className="group-hover:text-black transition">Sign up with Google</span>
          </button>

          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-stone-200"></div>
            <span className="flex-shrink mx-4 text-stone-400 text-xs uppercase tracking-widest">Or register with email</span>
            <div className="flex-grow border-t border-stone-200"></div>
          </div>

          <form onSubmit={handleRegister} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="w-full px-4 py-4 rounded-xl bg-stone-50 border-2 border-transparent focus:border-stone-900 focus:bg-white outline-none transition font-medium" />
                <input type="text" placeholder="Last Name" className="w-full px-4 py-4 rounded-xl bg-stone-50 border-2 border-transparent focus:border-stone-900 focus:bg-white outline-none transition font-medium" />
            </div>

            <div>
              <input 
                type="email" 
                required 
                className="w-full px-4 py-4 rounded-xl bg-stone-50 border-2 border-transparent focus:border-stone-900 focus:bg-white outline-none transition font-medium"
                placeholder="Email Address"
              />
            </div>

            <div>
              <input 
                type="password" 
                required 
                className="w-full px-4 py-4 rounded-xl bg-stone-50 border-2 border-transparent focus:border-stone-900 focus:bg-white outline-none transition font-medium"
                placeholder="Password"
              />
            </div>

            <button 
              disabled={isLoading}
              className="w-full bg-stone-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-black hover:scale-[1.02] active:scale-[0.98] transition shadow-lg"
            >
              {isLoading ? "Creating Account..." : "CREATE ACCOUNT"}
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-stone-500">
            Already have an account? {' '}
            <Link href="/login" className="font-bold text-stone-900 hover:underline">
              Log In
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
}
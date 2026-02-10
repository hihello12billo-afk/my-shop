'use client';

import Navbar from '../components/Navbar';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Package, MapPin, CreditCard, LogOut, User } from 'lucide-react';
import FadeIn from '../components/FadeIn';

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") return <div className="min-h-screen bg-[#FDFBF7]" />;
  
  // Protect the page: If not logged in, kick them out
  if (status === "unauthenticated") {
    router.push('/login');
    return null;
  }

  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <FadeIn>
          <h1 className="text-4xl font-serif font-bold mb-12 text-stone-900">My Account</h1>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* LEFT: Sidebar Navigation */}
          <div className="lg:col-span-1">
             <div className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm sticky top-28">
                <div className="flex items-center gap-4 mb-8">
                   {session?.user?.image ? (
                     <Image src={session.user.image} alt="Profile" width={60} height={60} className="rounded-full border border-stone-200" />
                   ) : (
                     <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center">
                        <User size={24} className="text-stone-400" />
                     </div>
                   )}
                   <div>
                      <p className="font-bold text-stone-900">{session?.user?.name || "Valued Customer"}</p>
                      <p className="text-xs text-stone-500 truncate max-w-[120px]">{session?.user?.email}</p>
                   </div>
                </div>
                
                <nav className="space-y-2">
                   <button className="w-full flex items-center gap-3 px-4 py-3 bg-stone-900 text-white rounded-lg text-sm font-bold transition">
                      <Package size={18} /> Orders
                   </button>
                   <button className="w-full flex items-center gap-3 px-4 py-3 text-stone-500 hover:bg-stone-50 rounded-lg text-sm font-bold transition">
                      <MapPin size={18} /> Addresses
                   </button>
                   <button className="w-full flex items-center gap-3 px-4 py-3 text-stone-500 hover:bg-stone-50 rounded-lg text-sm font-bold transition">
                      <CreditCard size={18} /> Payment Methods
                   </button>
                   <div className="h-px bg-stone-100 my-2"></div>
                   <button 
                     onClick={() => signOut({ callbackUrl: '/' })}
                     className="w-full flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 rounded-lg text-sm font-bold transition"
                   >
                      <LogOut size={18} /> Sign Out
                   </button>
                </nav>
             </div>
          </div>

          {/* RIGHT: Content Area (Order History) */}
          <div className="lg:col-span-3 space-y-6">
             {/* Fake Recent Order */}
             <FadeIn delay={0.2}>
               <div className="bg-white p-8 rounded-xl border border-stone-100 shadow-sm">
                  <div className="flex justify-between items-center mb-6 pb-6 border-b border-stone-100">
                     <div>
                        <p className="text-xs text-stone-500 uppercase tracking-widest mb-1">Order #LK-8832</p>
                        <p className="text-sm font-bold text-green-600 flex items-center gap-2">
                           <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                           Processing
                        </p>
                     </div>
                     <button className="text-sm font-bold underline">View Details</button>
                  </div>
                  
                  <div className="flex gap-4">
                     <div className="w-20 h-24 bg-stone-100 rounded-md relative overflow-hidden">
                        <Image src="https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1000" fill className="object-cover" alt="Product" />
                     </div>
                     <div className="w-20 h-24 bg-stone-100 rounded-md relative overflow-hidden">
                        <Image src="https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1000" fill className="object-cover" alt="Product" />
                     </div>
                  </div>
               </div>
             </FadeIn>
             
             {/* Empty State Message */}
             <div className="text-center py-12">
                <p className="text-stone-400 text-sm">You have no other recent orders.</p>
             </div>

          </div>

        </div>
      </div>
    </main>
  );
}
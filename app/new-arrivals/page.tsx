'use client';

import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';

export default function NewArrivals() {
  // Real product data with high-quality Unsplash images
  const newArrivals = [
    {
      id: 101,
      title: "The Weekend Tote",
      price: 245,
      category: "Bags",
      image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 102,
      title: "Oxford Cotton Shirt",
      price: 120,
      category: "Apparel",
      image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 103,
      title: "Minimalist Sneaker",
      price: 185,
      category: "Footwear",
      image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 104,
      title: "Gold Link Chain",
      price: 350,
      category: "Jewelry",
      image: "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 105,
      title: "Silk Evening Dress",
      price: 590,
      category: "Dresses",
      image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 106,
      title: "Leather Chronograph",
      price: 420,
      category: "Watches",
      image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      <Navbar />
      
      <div className="pt-32 px-6 max-w-7xl mx-auto pb-20">
        <div className="text-center mb-16">
            <h1 className="text-5xl font-serif font-bold mb-4 text-stone-900">New Arrivals</h1>
            <p className="text-stone-500 max-w-2xl mx-auto">
                Discover the latest additions to our collection. Meticulously crafted for the modern individual.
            </p>
        </div>
        
        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {newArrivals.map((product) => (
            <ProductCard 
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              category={product.category}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';

export default function Home() {
  const products = [
    {
      id: 1,
      title: "Obsidian Chronograph",
      price: 1250,
      category: "Timepieces",
      image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Italian Leather Weekender",
      price: 895,
      category: "Travel",
      image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Minimalist Trench",
      price: 450,
      category: "Apparel",
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Noir Sunglasses",
      price: 220,
      category: "Eyewear",
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      
      {/* HERO SECTION - Full Width Video/Image feel */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop"
            className="h-full w-full object-cover brightness-75"
            alt="Hero Background"
          />
        </div>
        
        {/* Hero Text */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
          <p className="text-sm md:text-base uppercase tracking-[0.3em] mb-4">New Season 2026</p>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8">
            ELEVATED <br /> ESSENTIALS
          </h1>
          <button className="bg-white text-black px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-gray-200 transition">
            Discover Collection
          </button>
        </div>
      </div>

      {/* FEATURED PRODUCTS */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Latest Drops</h2>
          <a href="/new-arrivals" className="hidden md:block text-sm font-medium border-b border-black pb-1">View All</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {products.map((product) => (
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
      </section>

      {/* PROMO SECTION */}
      <section className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">THE MEMBERS CLUB.</h2>
            <p className="text-gray-400 mb-8 max-w-md">
              Join our exclusive membership to receive early access to new drops, private sales, and personalized styling services.
            </p>
            <div className="flex gap-4">
              <input type="email" placeholder="ENTER YOUR EMAIL" className="bg-transparent border-b border-white py-2 w-full focus:outline-none" />
              <button className="text-sm font-bold uppercase whitespace-nowrap">Join Now</button>
            </div>
          </div>
          <div className="h-96 relative bg-gray-900 overflow-hidden">
             <img 
               src="https://images.unsplash.com/photo-1507680434567-5739c80be1ac?q=80&w=2070" 
               className="object-cover h-full w-full opacity-80"
             />
          </div>
        </div>
      </section>

    </main>
  );
}
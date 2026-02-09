import Navbar from '../components/Navbar';

export default function Brands() {
  const brands = ["Gucci", "Prada", "Louis Vuitton", "Balenciaga", "Nike", "Adidas"];
  
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 px-6 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 tracking-tighter">OUR BRANDS</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {brands.map((brand) => (
            <div key={brand} className="h-48 bg-black text-white flex items-center justify-center text-3xl font-bold uppercase hover:bg-gray-800 cursor-pointer transition">
              {brand}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
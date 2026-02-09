import Navbar from '../components/Navbar';

export default function Accessories() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 px-6 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">ACCESSORIES</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div key={item} className="group cursor-pointer">
              <div className="aspect-square bg-gray-100 mb-2 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-xs">
                  Accessory {item}
                </div>
              </div>
              <p className="text-sm font-medium">Luxury Item {item}</p>
              <p className="text-xs text-gray-500">$85.00</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
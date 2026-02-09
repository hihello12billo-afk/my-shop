import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function NewArrivals() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-32 px-6 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">New Arrivals</h1>
        
        {/* Placeholder Grid for Products */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="group cursor-pointer">
              <div className="h-80 bg-gray-100 mb-4 flex items-center justify-center text-gray-400">
                Product Image {item}
              </div>
              <h3 className="font-medium">Premium Item {item}</h3>
              <p className="text-gray-500">$199.00</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
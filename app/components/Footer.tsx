export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">LUXE.STORE</h3>
          <p className="text-gray-400 text-sm"> redefining luxury for the modern era.</p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Help</h4>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>Shipping</li>
            <li>Returns</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Legal</h4>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Subscribe</h4>
          <input type="email" placeholder="Email Address" className="w-full bg-gray-900 border-none p-2 text-sm text-white" />
        </div>
      </div>
    </footer>
  );
}
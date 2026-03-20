export default function Footer() {
  return (
    <footer className="bg-white text-black py-12 px-4 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/logo.png"
                alt="Poonyra Luxe Logo"
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="font-serif text-lg font-semibold">
                Poonyra Luxe
              </span>
            </div>

            <p className="text-sm text-gray-600">
              Affordable luxury jewelry for everyday elegance.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <a href="/" className="hover:text-black transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#shop" className="hover:text-black transition">
                  Shop
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-black transition">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-black transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <a
              href="https://www.instagram.com/poonyra.luxe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-700 hover:text-black transition"
            >
              Instagram
            </a>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-6">
          <p className="text-center text-sm text-gray-500">
            © 2026 Poonyra Luxe. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
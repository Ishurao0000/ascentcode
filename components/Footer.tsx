export default function Footer() {
  return (
    <footer className="bg-white text-black py-10 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
          <h2 className="text-xl font-bold mb-4">Ascent Standard</h2>
          <p className="text-gray-700 mb-3">
            A modern marketing services company, providing insights powered by analytics and deep human understanding
          </p>
          <a
            href="mailto:info@ascentstandard.com"
            className="font-semibold hover:text-gray-600 transition"
          >
            info@ascentstandard.com
          </a>
          <br />
           <a
            href="mailto:bids@ascentstandard.com"
            className="font-semibold hover:text-gray-600 transition"
          >
            bids@ascentstandard.com
          </a>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-700">
            <li><a href="/" className="hover:text-black">Home</a></li>
            <li><a href="/about" className="hover:text-black">About</a></li>
            <li><a href="/services" className="hover:text-black">Services</a></li>
            <li><a href="/blogs" className="hover:text-black">Blogs</a></li>
            {/* <li><a href="/contact" className="hover:text-black">Contact</a></li> */}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-gray-700">
            <a href="#" className="hover:text-black">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-600 mt-10 border-t border-gray-200 pt-4">
        © {new Date().getFullYear()} Ascent Standard. All rights reserved.
      </div>
    </footer>
  )
}

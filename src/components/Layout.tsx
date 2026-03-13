import { Link, Outlet } from 'react-router-dom';
import { Search, Menu, X, DownloadCloud, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans text-gray-900">
      {/* Header */}
      <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 flex-shrink-0">
              <div className="bg-emerald-500 p-2 rounded-xl">
                <DownloadCloud className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-gray-900">
                HMAPK<span className="text-emerald-500">.xyz</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-600 hover:text-emerald-600 font-medium transition-colors">Home</Link>
              <Link to="/categories" className="text-gray-600 hover:text-emerald-600 font-medium transition-colors">Categories</Link>
              <Link to="/blog" className="text-gray-600 hover:text-emerald-600 font-medium transition-colors">Blog</Link>
              <Link to="/about" className="text-gray-600 hover:text-emerald-600 font-medium transition-colors">About Us</Link>
            </nav>

            {/* Search Bar (Desktop) */}
            <div className="hidden md:flex flex-1 max-w-md ml-8">
              <div className="relative w-full group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-full leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm transition-all"
                  placeholder="Search for apps & games..."
                />
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <div className="p-2 mb-2">
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                    placeholder="Search apps..."
                  />
                </div>
              </div>
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-50">Home</Link>
              <Link to="/categories" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-50">Categories</Link>
              <Link to="/blog" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-50">Blog</Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-50">About Us</Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <Link to="/" className="flex items-center gap-2">
                <div className="bg-emerald-500 p-2 rounded-xl">
                  <DownloadCloud className="w-6 h-6 text-white" />
                </div>
                <span className="font-bold text-xl tracking-tight text-gray-900">
                  HMAPK<span className="text-emerald-500">.xyz</span>
                </span>
              </Link>
              <p className="text-gray-500 text-base">
                Your trusted source for fast, safe, and free APK downloads. We provide the latest versions of your favorite apps and games.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Categories</h3>
                  <ul className="mt-4 space-y-4">
                    <li><Link to="/categories" className="text-base text-gray-500 hover:text-emerald-600">Games</Link></li>
                    <li><Link to="/categories" className="text-base text-gray-500 hover:text-emerald-600">Social</Link></li>
                    <li><Link to="/categories" className="text-base text-gray-500 hover:text-emerald-600">Tools</Link></li>
                    <li><Link to="/categories" className="text-base text-gray-500 hover:text-emerald-600">Video Players</Link></li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                  <ul className="mt-4 space-y-4">
                    <li><Link to="/about" className="text-base text-gray-500 hover:text-emerald-600">About Us</Link></li>
                    <li><Link to="/contact" className="text-base text-gray-500 hover:text-emerald-600">Contact</Link></li>
                    <li><Link to="/blog" className="text-base text-gray-500 hover:text-emerald-600">Blog</Link></li>
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
                  <ul className="mt-4 space-y-4">
                    <li><Link to="/privacy-policy" className="text-base text-gray-500 hover:text-emerald-600">Privacy Policy</Link></li>
                    <li><Link to="/dmca" className="text-base text-gray-500 hover:text-emerald-600">DMCA</Link></li>
                    <li><Link to="/terms" className="text-base text-gray-500 hover:text-emerald-600">Terms of Service</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-base text-gray-400 xl:text-center">
              &copy; {new Date().getFullYear()} HMAPK.xyz. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

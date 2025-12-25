import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logoImage from "../../assets/logo.png";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-[1200px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img
                src={logoImage}
                alt="CloudPe"
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/products" className="text-white/80 hover:text-white transition-colors" style={{ fontFamily: 'Sansation, sans-serif' }}>
              Products
            </Link>
            <Link to="/solutions" className="text-white/70 hover:text-white transition-colors relative group">
              Solutions
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8154EF] transition-all group-hover:w-full" />
            </Link>
            <Link to="/pricing" className="text-white/80 hover:text-white transition-colors" style={{ fontFamily: 'Sansation, sans-serif' }}>
              Pricing
            </Link>
            <Link to="/contact" className="text-white/80 hover:text-white transition-colors" style={{ fontFamily: 'Sansation, sans-serif' }}>
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="px-4 py-2 text-white/80 hover:text-white transition-colors" style={{ fontFamily: 'Sansation, sans-serif' }}>
              Sign In
            </button>
            <button
              className="px-6 py-2 bg-[#8154EF] hover:bg-[#9066FF] text-white rounded-lg transition-all shadow-lg shadow-[#8154EF]/25 hover:shadow-[#8154EF]/40"
              style={{ fontFamily: 'Sansation, sans-serif' }}
            >
              Start Free
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link to="/products" className="block text-white/80 hover:text-white transition-colors" style={{ fontFamily: 'Sansation, sans-serif' }} onClick={() => setMobileMenuOpen(false)}>
              Products
            </Link>
            <Link to="/solutions" className="block text-white/80 hover:text-white transition-colors" style={{ fontFamily: 'Sansation, sans-serif' }} onClick={() => setMobileMenuOpen(false)}>
              Solutions
            </Link>
            <Link to="/developers" className="block text-white/80 hover:text-white transition-colors" style={{ fontFamily: 'Sansation, sans-serif' }} onClick={() => setMobileMenuOpen(false)}>
              Developers
            </Link>
            <Link to="/pricing" className="block text-white/80 hover:text-white transition-colors" style={{ fontFamily: 'Sansation, sans-serif' }} onClick={() => setMobileMenuOpen(false)}>
              Pricing
            </Link>
            <Link to="/contact" className="block text-white/80 hover:text-white transition-colors" style={{ fontFamily: 'Sansation, sans-serif' }} onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
            <div className="flex flex-col gap-3 pt-4">
              <button className="px-4 py-2 text-white/80 hover:text-white transition-colors text-left" style={{ fontFamily: 'Sansation, sans-serif' }}>
                Sign In
              </button>
              <button
                className="px-6 py-2 bg-[#8154EF] hover:bg-[#9066FF] text-white rounded-lg transition-all"
                style={{ fontFamily: 'Sansation, sans-serif' }}
              >
                Start Free
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
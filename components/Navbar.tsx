'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '#services' },
    { name: 'Success Stories', href: '#success-stories' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo - Matrix */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-3 group">
            <div className="relative w-10 h-10 overflow-hidden rounded-full shadow-lg border border-slate-200 group-hover:scale-105 transition-transform">
              <img
                src="/logo.jpg"
                alt="Matrix Logo"
                className="object-cover w-full h-full"
              />
            </div>
            <span className={`font-bold text-2xl tracking-tight transition-colors ${scrolled ? 'text-slate-900' : 'text-slate-900'}`}>
              Matrix
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors uppercase tracking-wide"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-primary px-6 py-2.5 rounded-full font-bold text-sm uppercase tracking-wide"
            >
              Consult Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-900 hover:text-blue-600 focus:outline-none transition-colors p-2"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-xl transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out border-l border-slate-200 shadow-2xl`}
      >
        <div className="flex justify-end p-6">
          {/* Close button handled by the overlay logic usually, but here we reuse the toggle */}
        </div>
        <div className="pt-24 pb-8 px-8 h-full overflow-y-auto">
          <div className="flex flex-col space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-3xl font-bold text-slate-900 hover:text-blue-600 transition-colors tracking-tight"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-b-2xl border-t border-slate-100">
              <Link href="/services/student-visa" className="block px-3 py-2 text-slate-600 hover:text-blue-600 font-medium">Student Visa</Link>
              <Link href="/about" className="block px-3 py-2 text-slate-600 hover:text-blue-600 font-medium">About Us</Link>
              <Link href="/why-choose-us" className="block px-3 py-2 text-slate-600 hover:text-blue-600 font-medium">Why Choose Us</Link>
              <Link href="/contact" className="block px-3 py-2 text-slate-600 hover:text-blue-600 font-medium">Contact</Link>
              <Link href="/contact" className="block px-3 py-2 text-blue-600 font-bold">Book Consultation</Link>
            </div>
            <div className="pt-8 border-t border-slate-100">
              <Link
                href="/contact"
                className="btn-primary w-full py-4 rounded-xl font-bold text-lg justify-center flex shadow-xl shadow-blue-600/20"
                onClick={() => setIsOpen(false)}
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

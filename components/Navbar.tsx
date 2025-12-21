'use client';

import Link from 'next/link';
import { Menu, Phone, User, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              UK
            </div>
            <span className="font-bold text-2xl text-slate-900 tracking-tight">
              VisaExperts<span className="text-blue-600">.</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-slate-600 hover:text-blue-900 font-medium transition-colors">
              Home
            </Link>
            <Link href="#services" className="text-slate-600 hover:text-blue-900 font-medium transition-colors">
              Services
            </Link>
            <Link href="#success-stories" className="text-slate-600 hover:text-blue-900 font-medium transition-colors">
              Success Stories
            </Link>
            <Link href="/contact" className="text-slate-600 hover:text-blue-900 font-medium transition-colors">
              Contact
            </Link>
            <Link
              href="/contact"
              className="bg-blue-900 text-white px-6 py-2.5 rounded-full font-medium hover:bg-blue-800 transition-all shadow-lg hover:shadow-blue-900/20 flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-blue-900 focus:outline-none"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link
              href="/"
              className="block px-4 py-3 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-900"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#services"
              className="block px-4 py-3 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-900"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#success-stories"
              className="block px-4 py-3 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-900"
              onClick={() => setIsOpen(false)}
            >
              Success Stories
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-3 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-900"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4 px-4">
              <Link
                href="/contact"
                className="block w-full text-center bg-blue-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-800"
                onClick={() => setIsOpen(false)}
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

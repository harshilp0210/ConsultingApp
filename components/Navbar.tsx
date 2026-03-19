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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/#services', dropdown: [
      { name: 'Skilled Worker Visa', href: '/services/skilled-worker' },
      { name: 'Student Visa', href: '/services/student-visa' },
      { name: 'Spouse & Family', href: '/services/family' },
      { name: 'Visitor Visas', href: '/services/visitor' },
      { name: 'Citizenship', href: '/services/citizenship' },
      { name: 'Passport & OCI', href: '/services/passport' }
    ]},
    { name: 'Process', href: '/#process' },
    { name: 'Testimonials', href: '/#success-stories' },
    { name: 'Pricing', href: '/pricing' }
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo - Matrix */}
            <Link href="/" className="flex-shrink-0 flex items-center gap-3 group">
              <div className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 overflow-hidden rounded-full shadow-lg border-2 border-slate-700 group-hover:border-amber-500 transition-colors">
                <img
                  src="/logo-new.png"
                  alt="Matrix Logo"
                  className="object-cover w-full h-full"
                />
              </div>
              <span className={`font-bold text-xl lg:text-2xl tracking-tight transition-colors ${scrolled ? 'text-slate-100' : 'text-slate-100'}`}>
                Matrix
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group py-2">
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-amber-500 transition-colors uppercase tracking-wide"
                  >
                    {link.name}
                    {link.dropdown && (
                      <svg className="w-4 h-4 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>
                  {link.dropdown && (
                    <div className="absolute top-full left-0 w-64 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="bg-slate-900 border border-slate-800 rounded-xl shadow-xl overflow-hidden py-1">
                        {link.dropdown.map((sublink) => (
                          <Link
                            key={sublink.name}
                            href={sublink.href}
                            className="block px-5 py-3 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-amber-500 transition-colors"
                          >
                            {sublink.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                className="btn-primary px-6 py-2.5 rounded-full font-bold text-sm uppercase tracking-wide"
              >
                Book Consultation
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-100 hover:text-amber-500 focus:outline-none transition-colors p-2 relative z-[60]"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
              >
                {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 z-[55] bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-full max-w-sm z-[56] bg-slate-950 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out border-l border-slate-800 shadow-2xl`}
      >
        {/* Close button inside menu */}
        <div className="flex justify-end p-6">
          <button
            onClick={() => setIsOpen(false)}
            className="text-slate-100 hover:text-amber-500 transition-colors p-2"
            aria-label="Close menu"
          >
            <X className="h-7 w-7" />
          </button>
        </div>

        <div className="px-8 pb-8 h-[calc(100%-80px)] overflow-y-auto">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  href={link.href}
                  className="text-2xl font-bold text-slate-100 hover:text-amber-500 transition-colors tracking-tight py-2 block"
                  onClick={() => !link.dropdown && setIsOpen(false)}
                >
                  {link.name}
                </Link>
                {link.dropdown && (
                  <div className="pl-4 mt-2 space-y-3 border-l-2 border-slate-800">
                    {link.dropdown.map((sublink) => (
                      <Link
                        key={sublink.name}
                        href={sublink.href}
                        className="block text-lg text-slate-400 hover:text-amber-500 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-6 border-t border-slate-800">
              <Link
                href="/contact"
                className="btn-primary w-full py-4 rounded-xl font-bold text-lg justify-center flex shadow-xl shadow-amber-500/20"
                onClick={() => setIsOpen(false)}
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


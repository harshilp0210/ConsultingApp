import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, MessageCircle, Clock } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 border-t border-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="relative w-24 h-24 overflow-hidden rounded-full border-2 border-slate-700">
                                <img
                                    src="/logo-new.png"
                                    alt="Matrix Logo"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <span className="font-bold text-xl text-white tracking-tight">
                                Matrix
                            </span>
                        </div>
                        <p className="text-slate-500 mb-6 leading-relaxed">
                            Regulated immigration advice for peace of mind. Your trusted partner for all UK visa and citizenship applications.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><Link href="/about" className="hover:text-amber-500 transition-colors">About Us</Link></li>
                            <li><Link href="/why-choose-us" className="hover:text-amber-500 transition-colors">Why Choose Us</Link></li>
                            <li><Link href="/#services" className="hover:text-amber-500 transition-colors">Our Services</Link></li>
                            <li><Link href="/#success-stories" className="hover:text-amber-500 transition-colors">Testimonials</Link></li>
                            <li><Link href="/contact" className="hover:text-amber-500 transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Services</h4>
                        <ul className="space-y-3">
                            <li><Link href="/services/skilled-worker" className="hover:text-amber-500 transition-colors">Skilled Worker Visa</Link></li>
                            <li><Link href="/services/student-visa" className="hover:text-amber-500 transition-colors">Student Visa</Link></li>
                            <li><Link href="/services/business" className="hover:text-amber-500 transition-colors">Business Migration</Link></li>
                            <li><Link href="/services/family" className="hover:text-amber-500 transition-colors">Spouse & Family</Link></li>
                            <li><Link href="/services/visitor" className="hover:text-amber-500 transition-colors">Tourist & Visitor Visas</Link></li>
                            <li><Link href="/services/passport" className="hover:text-amber-500 transition-colors">Passport Services</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-amber-500 shrink-0" />
                                <span className="font-medium">London, United Kingdom</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-amber-500 shrink-0" />
                                <span className="font-medium">+44 7404 408 648</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-amber-500 shrink-0" />
                                <a href="mailto:matrixvisa07@gmail.com" className="font-medium hover:text-amber-500 transition-colors">
                                    matrixvisa07@gmail.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Clock className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
                                <div className="font-medium">
                                    <p>Mon-Fri: 9am - 5pm (UK)</p>
                                    <p>Sat: 10am - 4pm</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-slate-600">
                        © 2024 Matrix Visa Consultancy. All rights reserved. Regulated by OISC.
                    </p>
                    <div className="flex gap-4 md:pr-24">
                        <Link href="#" className="text-slate-500 hover:text-amber-500 transition-colors"><Facebook className="w-5 h-5" /></Link>
                        <Link href="#" className="text-slate-500 hover:text-amber-500 transition-colors"><Twitter className="w-5 h-5" /></Link>
                        <Link href="https://www.instagram.com/matrixvisa07/" className="text-slate-500 hover:text-amber-500 transition-colors"><Instagram className="w-5 h-5" /></Link>
                        <Link href="#" className="text-slate-500 hover:text-amber-500 transition-colors"><Linkedin className="w-5 h-5" /></Link>
                    </div>
                </div>
            </div>

            {/* Floating WhatsApp Button */}
            <Link
                href="https://wa.me/447404408648"
                target="_blank"
                className="fixed bottom-6 right-6 bg-amber-500 text-slate-950 p-4 rounded-full shadow-lg hover:bg-amber-400 transition-all hover:scale-110 z-50 flex items-center gap-2 font-bold shadow-amber-500/20"
            >
                <MessageCircle className="w-6 h-6" />
                <span className="hidden md:inline">Chat with us</span>
            </Link>
        </footer>
    );
}

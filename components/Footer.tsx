import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, MessageCircle } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                                UK
                            </div>
                            <span className="font-bold text-xl text-white tracking-tight">
                                VisaExperts<span className="text-blue-500">.</span>
                            </span>
                        </div>
                        <p className="text-slate-400 mb-6 leading-relaxed">
                            Regulated immigration advice for peace of mind. Your trusted partner for all UK visa and citizenship applications.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><Link href="#" className="hover:text-blue-400 transition-colors">About Us</Link></li>
                            <li><Link href="#services" className="hover:text-blue-400 transition-colors">Our Services</Link></li>
                            <li><Link href="#success-stories" className="hover:text-blue-400 transition-colors">Testimonials</Link></li>
                            <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Services</h4>
                        <ul className="space-y-3">
                            <li><Link href="#" className="hover:text-blue-400 transition-colors">Skilled Worker Visa</Link></li>
                            <li><Link href="#" className="hover:text-blue-400 transition-colors">Student Visa</Link></li>
                            <li><Link href="#" className="hover:text-blue-400 transition-colors">Spouse Visa</Link></li>
                            <li><Link href="#" className="hover:text-blue-400 transition-colors">British Citizenship</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                                <span>123 Visa Street, London, EC1A 1BB, United Kingdom</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                                <span>+44 20 7123 4567</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                                <span>info@ukvisaexperts.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-slate-500">
                        © 2024 VisaExperts Ltd. All rights reserved. Regulated by OISC.
                    </p>
                    <div className="flex gap-4">
                        <Link href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></Link>
                        <Link href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></Link>
                        <Link href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></Link>
                        <Link href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></Link>
                    </div>
                </div>
            </div>

            {/* Floating WhatsApp Button */}
            <Link
                href="https://wa.me/447123456789"
                target="_blank"
                className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 z-50 flex items-center gap-2 font-bold"
            >
                <MessageCircle className="w-6 h-6" />
                <span className="hidden md:inline">Chat with us</span>
            </Link>
        </footer>
    );
}

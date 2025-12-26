'use client';

import { Target, Flag, Handshake } from 'lucide-react';
import Link from 'next/link';

export default function AboutUs() {
    return (
        <div className="bg-slate-950 min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-24 bg-slate-950 text-white">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-amber-500 text-sm font-medium mb-6">
                        <Target className="w-4 h-4" />
                        <span>Our Vision</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Turning Dreams Into <span className="text-amber-500">Your New Reality</span>
                    </h1>
                    <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
                        At Matrix Visa Consultancy, we believe that your ambitions shouldn’t be sidelined by hesitation or complex paperwork. We founded this consultancy with a simple mission: to bridge the gap between where you are and where you deserve to be.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">

                        {/* Mission */}
                        <div className="bg-slate-900 p-10 rounded-3xl shadow-sm border border-slate-800 hover:border-amber-500/20 transition-colors">
                            <div className="w-14 h-14 bg-slate-950 rounded-2xl flex items-center justify-center text-amber-500 mb-6 border border-slate-800">
                                <Flag className="w-7 h-7" />
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-6">Why We Do It</h2>
                            <p className="text-slate-400 leading-relaxed mb-6">
                                We know that for many, a move or a career shift isn't just about a job—it’s about providing a better lifestyle for your loved ones and securing a future in a stronger currency.
                            </p>
                            <p className="text-slate-300 leading-relaxed font-medium">
                                We handle the complexities so you can focus on the destination.
                            </p>
                        </div>

                        {/* Promise */}
                        <div className="bg-slate-900 p-10 rounded-3xl shadow-sm border border-slate-800 hover:border-amber-500/20 transition-colors">
                            <div className="w-14 h-14 bg-slate-950 rounded-2xl flex items-center justify-center text-amber-500 mb-6 border border-slate-800">
                                <Handshake className="w-7 h-7" />
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-6">Our Promise</h2>
                            <p className="text-slate-400 leading-relaxed mb-6">
                                We provide a seamless, "one-stop" experience. From navigating intricate documentation to breaking down language barriers, our experienced consultants are here to ensure your transition is smooth, fast, and successful.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-slate-900 border-t border-slate-800">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-3xl font-bold text-white mb-6">Ready to Bridge the Gap?</h2>
                    <Link href="/contact" className="btn-primary px-10 py-4 rounded-full text-lg inline-block">
                        Contact Us Today
                    </Link>
                </div>
            </section>
        </div>
    );
}

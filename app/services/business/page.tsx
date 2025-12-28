'use client';

import { Building2, Clock, CheckCircle, ArrowRight, FileText, Send, TrendingUp, Banknote } from 'lucide-react';
import Link from 'next/link';

export default function BusinessVisa() {
    const visaTypes = [
        {
            title: "Innovator Founder Visa",
            description: "For experienced business people seeking to establish an innovative business in the UK.",
            requirements: ["Innovative, viable, scalable business idea", "Endorsement from approved body", "Investment funds available"]
        },
        {
            title: "Start-up Visa",
            description: "For first-time entrepreneurs with an innovative business idea.",
            requirements: ["Novel business idea", "Endorsement from university or business organisation", "English language proficiency"]
        },
        {
            title: "Global Talent Visa",
            description: "For leaders and potential leaders in academia, research, arts, or digital technology.",
            requirements: ["Endorsement from recognised UK body", "Exceptional talent or promise", "No job offer required"]
        }
    ];

    return (
        <div className="bg-slate-950 min-h-screen">
            {/* Hero Section */}
            <section className="bg-slate-900 text-white relative overflow-hidden py-24">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-amber-500 text-sm font-medium mb-6">
                            <Building2 className="w-4 h-4" />
                            <span>Business Immigration</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            Establish Your Business in the <span className="text-amber-500">UK</span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                            Whether you're an entrepreneur, investor, or global talent, we provide strategic guidance to help you build and grow your business in one of the world's leading economies.
                        </p>
                        <div className="flex gap-4">
                            <Link href="/contact" className="bg-amber-500 text-slate-950 font-bold px-8 py-4 rounded-full hover:bg-amber-400 transition-all">
                                Get Started
                            </Link>
                        </div>
                    </div>
                    <div className="md:w-1/2 bg-slate-950/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-2xl">
                        <h3 className="text-2xl font-bold mb-6 text-white">Why UK for Business?</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center shrink-0 text-slate-950">
                                    <TrendingUp className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-bold text-lg text-white">6th Largest Economy</p>
                                    <p className="text-sm text-slate-400">Access to global markets</p>
                                </div>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center shrink-0 text-slate-950">
                                    <Banknote className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-bold text-lg text-white">Business-Friendly Environment</p>
                                    <p className="text-sm text-slate-400">Low corporation tax rates</p>
                                </div>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center shrink-0 text-slate-950">
                                    <Building2 className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-bold text-lg text-white">Innovation Hub</p>
                                    <p className="text-sm text-slate-400">World-class tech ecosystem</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Visa Types */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Business Visa Options</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {visaTypes.map((visa, idx) => (
                            <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-amber-500/50 transition-all">
                                <h3 className="text-xl font-bold text-amber-500 mb-4">{visa.title}</h3>
                                <p className="text-slate-400 mb-6">{visa.description}</p>
                                <ul className="space-y-2">
                                    {visa.requirements.map((req, reqIdx) => (
                                        <li key={reqIdx} className="flex items-start gap-2 text-slate-300 text-sm">
                                            <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                                            <span>{req}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-16 bg-amber-500 rounded-2xl p-8 md:p-12 text-center">
                        <h3 className="text-3xl font-bold text-slate-950 mb-4">Ready to Start Your UK Business Journey?</h3>
                        <p className="text-slate-900 mb-8 max-w-2xl mx-auto font-medium">
                            Our business immigration specialists will assess your profile and recommend the best visa route for your entrepreneurial goals.
                        </p>
                        <Link href="/contact" className="inline-block bg-slate-950 text-white font-bold px-10 py-4 rounded-full hover:bg-slate-800 transition-colors shadow-lg">
                            Book Free Consultation
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

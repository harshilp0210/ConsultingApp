'use client';

import { Plane, Globe, CheckCircle, Send, Clock, MapPin, Flag } from 'lucide-react';
import Link from 'next/link';

export default function VisitorVisa() {
    const countries = [
        { name: "USA", flag: "🇺🇸", processing: "3-5 weeks", popular: true },
        { name: "Canada", flag: "🇨🇦", processing: "4-8 weeks", popular: true },
        { name: "Australia", flag: "🇦🇺", processing: "2-4 weeks", popular: true },
        { name: "New Zealand", flag: "🇳🇿", processing: "2-3 weeks", popular: false },
        { name: "Schengen (Europe)", flag: "🇪🇺", processing: "2-3 weeks", popular: true },
        { name: "Japan", flag: "🇯🇵", processing: "1-2 weeks", popular: false },
        { name: "China", flag: "🇨🇳", processing: "1-2 weeks", popular: false },
        { name: "UAE", flag: "🇦🇪", processing: "3-5 days", popular: false },
    ];

    const visaTypes = [
        "Tourist Visa", "Business Visitor", "Family Visit", "Medical Treatment",
        "Transit Visa", "Conference/Events", "Academic Visitor"
    ];

    return (
        <div className="bg-slate-950 min-h-screen">
            {/* Hero Section */}
            <section className="bg-slate-900 text-white relative overflow-hidden py-24">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-amber-500 text-sm font-medium mb-6">
                            <Plane className="w-4 h-4" />
                            <span>Tourist & Visitor Visas</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            Travel the World with <span className="text-amber-500">Confidence</span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                            Expert visa assistance for USA, Canada, Australia, Schengen Europe, and more. We handle the paperwork so you can focus on planning your trip.
                        </p>
                        <div className="flex gap-4">
                            <Link href="/contact" className="bg-amber-500 text-slate-950 font-bold px-8 py-4 rounded-full hover:bg-amber-400 transition-all">
                                Apply Now
                            </Link>
                        </div>
                    </div>
                    <div className="md:w-1/2 bg-slate-950/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-2xl">
                        <h3 className="text-2xl font-bold mb-6 text-white">Why Choose Us?</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center shrink-0 text-slate-950">
                                    <Globe className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-bold text-lg text-white">40+ Countries</p>
                                    <p className="text-sm text-slate-400">Visa expertise worldwide</p>
                                </div>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center shrink-0 text-slate-950">
                                    <Clock className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-bold text-lg text-white">Fast Processing</p>
                                    <p className="text-sm text-slate-400">Priority handling available</p>
                                </div>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center shrink-0 text-slate-950">
                                    <CheckCircle className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-bold text-lg text-white">95%+ Approval Rate</p>
                                    <p className="text-sm text-slate-400">Expert document preparation</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Countries Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-white mb-4 text-center">Countries We Cover</h2>
                    <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">Select your destination and we'll guide you through the visa requirements and application process.</p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {countries.map((country, idx) => (
                            <div key={idx} className={`bg-slate-900 border rounded-2xl p-6 hover:border-amber-500/50 transition-all cursor-pointer ${country.popular ? 'border-amber-500/30' : 'border-slate-800'}`}>
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-3xl">{country.flag}</span>
                                    <div>
                                        <h3 className="font-bold text-white">{country.name}</h3>
                                        {country.popular && <span className="text-xs text-amber-500">Popular</span>}
                                    </div>
                                </div>
                                <p className="text-sm text-slate-400">
                                    <Clock className="w-3 h-3 inline mr-1" />
                                    {country.processing}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Visa Types */}
                    <div className="mt-16 bg-slate-900 border border-slate-800 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-white mb-6 text-center">Types of Visitor Visas We Handle</h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            {visaTypes.map((type, idx) => (
                                <span key={idx} className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 hover:border-amber-500 transition-colors">
                                    {type}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-16 bg-amber-500 rounded-2xl p-8 md:p-12 text-center">
                        <h3 className="text-3xl font-bold text-slate-950 mb-4">Ready to Plan Your Trip?</h3>
                        <p className="text-slate-900 mb-8 max-w-2xl mx-auto font-medium">
                            Contact us today for a free assessment. We'll review your travel plans and guide you through the visa application process.
                        </p>
                        <Link href="/contact" className="inline-block bg-slate-950 text-white font-bold px-10 py-4 rounded-full hover:bg-slate-800 transition-colors shadow-lg">
                            Get Free Assessment
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

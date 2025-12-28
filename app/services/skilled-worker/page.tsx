'use client';

import { Briefcase, Clock, CheckCircle, ArrowRight, FileText, Send, Shield, Users } from 'lucide-react';
import Link from 'next/link';

export default function SkilledWorkerVisa() {
    const eligibilityPoints = [
        "Job offer from a UK employer with a valid sponsor licence",
        "Certificate of Sponsorship (CoS) from your employer",
        "Job at appropriate skill level (RQF Level 3 or above)",
        "English language proficiency (B1 level minimum)",
        "Minimum salary threshold met (generally £26,200 or going rate)",
        "Enough personal savings to support yourself"
    ];

    const sectors = [
        "Healthcare & NHS", "Information Technology", "Engineering",
        "Finance & Banking", "Education", "Scientific Research",
        "Construction", "Hospitality Management"
    ];

    return (
        <div className="bg-slate-950 min-h-screen">
            {/* Hero Section */}
            <section className="bg-slate-900 text-white relative overflow-hidden py-24">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-amber-500 text-sm font-medium mb-6">
                            <Briefcase className="w-4 h-4" />
                            <span>Work in UK</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            Build Your Career in the <span className="text-amber-500">United Kingdom</span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                            The Skilled Worker visa allows you to work for an approved UK employer. We guide you through the points-based immigration system with expert precision.
                        </p>
                        <div className="flex gap-4">
                            <Link href="/contact" className="bg-amber-500 text-slate-950 font-bold px-8 py-4 rounded-full hover:bg-amber-400 transition-all">
                                Check Eligibility
                            </Link>
                        </div>
                    </div>
                    <div className="md:w-1/2 bg-slate-950/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-2xl">
                        <h3 className="text-2xl font-bold mb-6 text-white">Key Benefits</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center shrink-0 text-slate-950">
                                    <Clock className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-bold text-lg text-white">Stay up to 5 Years</p>
                                    <p className="text-sm text-slate-400">Extendable and leads to settlement</p>
                                </div>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center shrink-0 text-slate-950">
                                    <Users className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-bold text-lg text-white">Bring Your Family</p>
                                    <p className="text-sm text-slate-400">Spouse and children can join you</p>
                                </div>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center shrink-0 text-slate-950">
                                    <Shield className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-bold text-lg text-white">Path to Settlement</p>
                                    <p className="text-sm text-slate-400">Apply for ILR after 5 years</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16">
                        {/* Eligibility */}
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                                <FileText className="w-8 h-8 text-amber-500" />
                                Eligibility Requirements
                            </h2>
                            <div className="bg-slate-900 rounded-2xl shadow-sm border border-slate-800 p-8">
                                <ul className="space-y-4">
                                    {eligibilityPoints.map((point, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-slate-300">
                                            <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Sectors */}
                        <div className="space-y-8">
                            <div className="bg-slate-900 border border-slate-800 text-white rounded-2xl p-8 shadow-xl">
                                <h3 className="text-2xl font-bold mb-4 text-amber-500">In-Demand Sectors</h3>
                                <p className="mb-6 opacity-90 text-slate-300">We have experience placing skilled workers in these key industries:</p>
                                <div className="flex flex-wrap gap-3">
                                    {sectors.map((sector, idx) => (
                                        <span key={idx} className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg font-medium hover:border-amber-500 transition-colors">
                                            {sector}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-amber-500 rounded-2xl p-8 shadow-lg shadow-amber-500/10">
                                <h3 className="text-2xl font-bold text-slate-950 mb-4">Ready to Apply?</h3>
                                <p className="text-slate-900 mb-6 font-medium">
                                    Our immigration experts will assess your eligibility and guide you through every step of the application process.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-slate-900">
                                        <div className="w-10 h-10 rounded-full bg-slate-950/10 flex items-center justify-center shrink-0">
                                            <Send className="w-5 h-5 text-slate-900" />
                                        </div>
                                        <div>
                                            <p className="font-bold">Contact Us Directly</p>
                                            <p className="text-sm">matrixvisa07@gmail.com</p>
                                        </div>
                                    </div>
                                    <Link href="/contact" className="block w-full bg-slate-950 text-white font-bold py-3 rounded-xl text-center hover:bg-slate-800 transition-colors shadow-lg">
                                        Book Consultation
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

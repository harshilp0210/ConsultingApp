'use client';

import { Scale, Heart, Users, CheckCircle, Send, Clock, Shield } from 'lucide-react';
import Link from 'next/link';

export default function FamilyVisa() {
    const visaCategories = [
        {
            title: "Spouse/Partner Visa",
            description: "Join your British citizen or settled partner in the UK.",
            timeline: "12-24 weeks processing",
            requirements: [
                "Genuine and subsisting relationship",
                "Financial requirement (minimum £29,000 income)",
                "English language requirement",
                "Adequate accommodation"
            ]
        },
        {
            title: "Parent Visa",
            description: "Join your child who is settled in the UK.",
            timeline: "12-24 weeks processing",
            requirements: [
                "Proof of family relationship",
                "Financial support evidence",
                "Healthcare requirement",
                "English language test"
            ]
        },
        {
            title: "Child Visa",
            description: "Bring your children to join you in the UK.",
            timeline: "8-12 weeks processing",
            requirements: [
                "Under 18 years of age",
                "Parent with valid UK visa/status",
                "Financial maintenance proof",
                "Suitable living arrangements"
            ]
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
                            <Heart className="w-4 h-4" />
                            <span>Family Reunification</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            Reunite with Your <span className="text-amber-500">Loved Ones</span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                            We understand how important family is. Our experts handle complex family visa applications with care, precision, and compassion.
                        </p>
                        <div className="flex gap-4">
                            <Link href="/contact" className="bg-amber-500 text-slate-950 font-bold px-8 py-4 rounded-full hover:bg-amber-400 transition-all">
                                Start Your Application
                            </Link>
                        </div>
                    </div>
                    <div className="md:w-1/2 bg-slate-950/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-2xl">
                        <h3 className="text-2xl font-bold mb-6 text-white">Our Commitment</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center shrink-0 text-slate-950">
                                    <Shield className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-bold text-lg text-white">98% Success Rate</p>
                                    <p className="text-sm text-slate-400">Family visa applications</p>
                                </div>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center shrink-0 text-slate-950">
                                    <Users className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-bold text-lg text-white">500+ Families Reunited</p>
                                    <p className="text-sm text-slate-400">Across 40+ countries</p>
                                </div>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center shrink-0 text-slate-950">
                                    <Clock className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-bold text-lg text-white">Priority Processing</p>
                                    <p className="text-sm text-slate-400">Super priority options available</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Visa Categories */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Family Visa Categories</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {visaCategories.map((visa, idx) => (
                            <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-amber-500/50 transition-all">
                                <h3 className="text-xl font-bold text-amber-500 mb-2">{visa.title}</h3>
                                <p className="text-sm text-slate-500 mb-4">{visa.timeline}</p>
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
                        <h3 className="text-3xl font-bold text-slate-950 mb-4">Bring Your Family Together</h3>
                        <p className="text-slate-900 mb-8 max-w-2xl mx-auto font-medium">
                            Our compassionate team understands the emotional importance of family reunification. Let us handle the paperwork while you focus on what matters most.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="inline-block bg-slate-950 text-white font-bold px-10 py-4 rounded-full hover:bg-slate-800 transition-colors shadow-lg">
                                Book Free Consultation
                            </Link>
                            <a href="https://wa.me/447878626326" className="inline-block bg-green-600 text-white font-bold px-10 py-4 rounded-full hover:bg-green-500 transition-colors shadow-lg">
                                WhatsApp Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

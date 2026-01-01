'use client';

import { Crown, Clock, CheckCircle, Shield, Users, FileText, Send } from 'lucide-react';
import Link from 'next/link';

export default function CitizenshipPage() {
    const pathways = [
        {
            title: "Naturalisation",
            description: "For adults who have lived in the UK for 5+ years with Indefinite Leave to Remain (ILR).",
            requirements: [
                "5 years residence in the UK",
                "Indefinite Leave to Remain (ILR)",
                "Pass Life in the UK test",
                "Meet English language requirement",
                "Good character requirement"
            ]
        },
        {
            title: "Registration (Adults)",
            description: "For British nationals overseas, those with British ancestry, or stateless persons.",
            requirements: [
                "British connection through descent",
                "Good character requirement",
                "Supporting documentation",
                "Application fee payment"
            ]
        },
        {
            title: "Registration (Children)",
            description: "For children born in the UK or with British parent(s).",
            requirements: [
                "Born in UK after parent gained settlement",
                "Or parent is British citizen",
                "Parental consent required",
                "Birth certificate and ID documents"
            ]
        }
    ];

    const benefits = [
        "Right to live and work in the UK permanently",
        "Vote in all UK elections",
        "Stand for public office",
        "Apply for a British passport",
        "Pass citizenship to your children",
        "Access to consular support worldwide"
    ];

    return (
        <div className="bg-slate-950 min-h-screen">
            {/* Hero Section */}
            <section className="bg-slate-900 text-white relative overflow-hidden py-24">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-amber-500 text-sm font-medium mb-6">
                            <Crown className="w-4 h-4" />
                            <span>British Citizenship</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            Become a <span className="text-amber-500">British Citizen</span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                            Take the final step in your UK journey. Our experts guide you through naturalisation and registration applications with precision and care.
                        </p>
                        <div className="flex gap-4">
                            <Link href="/contact" className="bg-amber-500 text-slate-950 font-bold px-8 py-4 rounded-full hover:bg-amber-400 transition-all">
                                Check Eligibility
                            </Link>
                        </div>
                    </div>
                    <div className="md:w-1/2 bg-slate-950/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-2xl">
                        <h3 className="text-2xl font-bold mb-6 text-white">Why Become British?</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center shrink-0 text-slate-950">
                                    <Shield className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-bold text-lg text-white">Permanent Security</p>
                                    <p className="text-sm text-slate-400">No visa renewals ever again</p>
                                </div>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center shrink-0 text-slate-950">
                                    <Users className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-bold text-lg text-white">Full Civic Rights</p>
                                    <p className="text-sm text-slate-400">Vote and stand for office</p>
                                </div>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center shrink-0 text-slate-950">
                                    <Crown className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-bold text-lg text-white">British Passport</p>
                                    <p className="text-sm text-slate-400">Travel freely to 180+ countries</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Pathways */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Pathways to British Citizenship</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {pathways.map((pathway, idx) => (
                            <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-amber-500/50 transition-all">
                                <h3 className="text-xl font-bold text-amber-500 mb-2">{pathway.title}</h3>
                                <p className="text-slate-400 mb-6 text-sm">{pathway.description}</p>
                                <ul className="space-y-2">
                                    {pathway.requirements.map((req, reqIdx) => (
                                        <li key={reqIdx} className="flex items-start gap-2 text-slate-300 text-sm">
                                            <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                                            <span>{req}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Benefits Section */}
                    <div className="mt-16 bg-slate-900 border border-slate-800 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-white mb-6 text-center">Benefits of British Citizenship</h3>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {benefits.map((benefit, idx) => (
                                <div key={idx} className="flex items-center gap-3 text-slate-300">
                                    <CheckCircle className="w-5 h-5 text-amber-500 shrink-0" />
                                    <span>{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-16 bg-amber-500 rounded-2xl p-8 md:p-12 text-center">
                        <h3 className="text-3xl font-bold text-slate-950 mb-4">Ready to Become British?</h3>
                        <p className="text-slate-900 mb-8 max-w-2xl mx-auto font-medium">
                            Let our experienced team assess your eligibility and guide you through every step of your citizenship application.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="inline-block bg-slate-950 text-white font-bold px-10 py-4 rounded-full hover:bg-slate-800 transition-colors shadow-lg">
                                Book Free Consultation
                            </Link>
                            <a href="https://wa.me/447404408648" className="inline-block bg-green-600 text-white font-bold px-10 py-4 rounded-full hover:bg-green-500 transition-colors shadow-lg">
                                WhatsApp Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

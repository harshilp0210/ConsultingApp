'use client';

import { Scale, Clock, CheckCircle, Shield, Users, FileText, Send, Crown } from 'lucide-react';
import Link from 'next/link';

export default function ILRPage() {
    const pathways = [
        {
            title: "5-Year Pathway",
            description: "The most common route for those on Skilled Worker, Spouse, or Tier 2 visas.",
            requirements: [
                "5 years lawful residence in the UK",
                "Minimum income requirements met",
                "Knowledge of Life in the UK test",
                "English language proficiency",
                "Absences not exceeding 180 days in any 12 months"
            ]
        },
        {
            title: "10-Year Pathway",
            description: "Long residence route for those who have lived in the UK legally for a continuous decade.",
            requirements: [
                "10 years continuous lawful residence",
                "Pass Life in the UK test",
                "Meet English language requirement",
                "No public interest reasons for refusal",
                "Clean immigration history"
            ]
        },
        {
            title: "Business & Investor",
            description: "Accelerated routes for high-value migrants and innovators.",
            requirements: [
                "2, 3, or 5 year residency (depending on investment/success)",
                "Full business compliance",
                "Pass Life in the UK test",
                "English language proficiency",
                "Sustained investment/business activity"
            ]
        }
    ];

    const benefits = [
        "Right to live in the UK permanently",
        "Freedom to work for any employer or be self-employed",
        "Access to public funds and services",
        "Path to British Citizenship (usually after 12 months)",
        "No more visa renewals or immigration restrictions",
        "Right to bring eligible family members"
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
                            <span>Indefinite Leave to Remain</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            Secure Your <span className="text-amber-500">Permanent Future</span> in the UK
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                            Indefinite Leave to Remain (ILR) is the ultimate goal for most migrants. Our expert solicitors handle even the most complex cases to ensure your success.
                        </p>
                        <div className="flex gap-4">
                            <Link href="/contact" className="bg-amber-500 text-slate-950 font-bold px-8 py-4 rounded-full hover:bg-amber-400 transition-all">
                                Check Your Eligibility
                            </Link>
                        </div>
                    </div>
                    <div className="md:w-1/2 bg-slate-950/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-2xl">
                        <h3 className="text-2xl font-bold mb-6 text-white">Why Choose Our Experts?</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center shrink-0 text-slate-950">
                                    <Shield className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-bold text-lg text-white">Any Complexity Handled</p>
                                    <p className="text-sm text-slate-400">Past refusals or complex gaps? We can help.</p>
                                </div>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center shrink-0 text-slate-950">
                                    <Scale className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-bold text-lg text-white">Expert Solicitors</p>
                                    <p className="text-sm text-slate-400">Direct access to qualified legal professionals.</p>
                                </div>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center shrink-0 text-slate-950">
                                    <CheckCircle className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-bold text-lg text-white">High Success Rate</p>
                                    <p className="text-sm text-slate-400">Proven track record with ILR applications.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Pathways */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Pathways to Settlement</h2>
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
                        <h3 className="text-2xl font-bold text-white mb-6 text-center">Benefits of Indefinite Leave to Remain</h3>
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
                        <h3 className="text-3xl font-bold text-slate-950 mb-4">Ready to Secure Your Future?</h3>
                        <p className="text-slate-900 mb-8 max-w-2xl mx-auto font-medium">
                            Don't leave your settlement to chance. Let our expert solicitor team handle your ILR application with the care and expertise it deserves.
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

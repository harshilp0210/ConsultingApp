'use client';

import { Flag, Clock, CheckCircle, Shield, Globe, FileText, DollarSign, Users } from 'lucide-react';
import Link from 'next/link';

export default function USCitizenshipPage() {
    const pathways = [
        {
            title: "Naturalization",
            description: "The most common path for Green Card holders to become US citizens.",
            requirements: [
                "5 years as a permanent resident (3 if married to US citizen)",
                "Physical presence in the US for 30 months",
                "Good moral character",
                "Pass English and civics tests",
                "Take the Oath of Allegiance"
            ]
        },
        {
            title: "Citizenship by Investment",
            description: "The EB-5 Immigrant Investor Program for those willing to invest in the US economy.",
            requirements: [
                "Investment of $800,000 - $1,050,000",
                "Create at least 10 full-time jobs",
                "Investment in a USCIS-approved project",
                "Lawful source of funds documentation"
            ]
        },
        {
            title: "Citizenship Through Parents",
            description: "Acquire citizenship at birth or through derivative citizenship.",
            requirements: [
                "At least one US citizen parent",
                "Meet physical presence requirements",
                "Born abroad to US citizen parent(s)",
                "Child under 18 when parent naturalized"
            ]
        }
    ];

    const benefits = [
        "Right to vote in federal elections",
        "Eligibility for federal jobs and security clearances",
        "Protection from deportation",
        "Sponsor family members for Green Cards",
        "US passport with visa-free travel to 180+ countries",
        "Equal access to government benefits"
    ];

    const services = [
        {
            icon: FileText,
            title: "N-400 Application Assistance",
            description: "Complete preparation and review of your naturalization application."
        },
        {
            icon: Users,
            title: "Interview Preparation",
            description: "Mock interviews and civics test practice with experienced coaches."
        },
        {
            icon: DollarSign,
            title: "EB-5 Investment Guidance",
            description: "Strategic advice on qualifying investments and regional center selection."
        },
        {
            icon: Globe,
            title: "Green Card Processing",
            description: "Family and employment-based Green Card applications and renewals."
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
                            <Flag className="w-4 h-4" />
                            <span>US Citizenship</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            Become a <span className="text-amber-500">US Citizen</span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                            Navigate the path to American citizenship with confidence. Our experts guide you through naturalization, investment visas, and citizenship applications.
                        </p>
                        <div className="flex gap-4">
                            <Link href="/contact" className="bg-amber-500 text-slate-950 font-bold px-8 py-4 rounded-full hover:bg-amber-400 transition-all">
                                Check Eligibility
                            </Link>
                        </div>
                    </div>
                    <div className="md:w-1/2 bg-slate-950/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-2xl">
                        <h3 className="text-2xl font-bold mb-6 text-white">Why US Citizenship?</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center shrink-0 text-slate-950">
                                    <Shield className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-bold text-lg text-white">Full Rights & Protections</p>
                                    <p className="text-sm text-slate-400">Constitutional protections and voting rights</p>
                                </div>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center shrink-0 text-slate-950">
                                    <Globe className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-bold text-lg text-white">Global Mobility</p>
                                    <p className="text-sm text-slate-400">Powerful passport with visa-free access to 180+ countries</p>
                                </div>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center shrink-0 text-slate-950">
                                    <Users className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-bold text-lg text-white">Family Sponsorship</p>
                                    <p className="text-sm text-slate-400">Bring your loved ones to the United States</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16 bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Our US Immigration Services</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, idx) => (
                            <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-amber-500/50 transition-all">
                                <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center text-slate-950 mb-4">
                                    <service.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                                <p className="text-slate-400 text-sm">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pathways */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Pathways to US Citizenship</h2>
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
                        <h3 className="text-2xl font-bold text-white mb-6 text-center">Benefits of US Citizenship</h3>
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
                        <h3 className="text-3xl font-bold text-slate-950 mb-4">Ready to Become American?</h3>
                        <p className="text-slate-900 mb-8 max-w-2xl mx-auto font-medium">
                            Let our experienced team assess your eligibility and guide you through every step of your US citizenship journey.
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

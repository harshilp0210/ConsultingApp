'use client';

import { Users2, Clock, CheckCircle, FileText, RefreshCw, AlertCircle, Globe, Shield } from 'lucide-react';
import Link from 'next/link';

export default function OCIPage() {
    const services = [
        {
            title: "New OCI Card Application",
            description: "First-time OCI card application for eligible foreign nationals of Indian origin.",
            requirements: [
                "Former Indian citizens who acquired foreign citizenship",
                "Children or grandchildren of Indian citizens",
                "Spouse of Indian citizen or OCI cardholder",
                "Minor children of OCI cardholders"
            ]
        },
        {
            title: "OCI Card Renewal",
            description: "Renewal of existing OCI cards upon passport change or reaching certain ages.",
            requirements: [
                "Renewal when passport is renewed/changed",
                "Mandatory re-registration at age 20 and 50",
                "Update of personal details",
                "Change in appearance or biometrics"
            ]
        },
        {
            title: "Miscellaneous Services",
            description: "Various OCI-related document services and corrections.",
            requirements: [
                "Name or address corrections",
                "Change in visa status",
                "Lost or damaged card replacement",
                "Transfer of visa to new passport"
            ]
        }
    ];

    const benefits = [
        "Lifelong multiple entry visa to India",
        "No registration required regardless of stay duration",
        "Parity with NRIs in economic, financial, and educational matters",
        "No visa required for travel to India",
        "Eligible for Aadhaar card",
        "Open NRO/NRE bank accounts in India"
    ];

    const eligibilityCategories = [
        {
            icon: Globe,
            title: "Former Indian Citizens",
            description: "Indian citizens who acquired other citizenship after 26 January 1950"
        },
        {
            icon: Users2,
            title: "Family of Indian Origin",
            description: "Children, grandchildren, or great-grandchildren of Indian citizens"
        },
        {
            icon: Shield,
            title: "Spouse of OCI/PIO",
            description: "Foreign spouse of Indian citizen or OCI cardholder for 2+ years"
        }
    ];

    const documents = [
        "Valid foreign passport with at least 6 months validity",
        "Proof of Indian origin (old Indian passport, birth certificate)",
        "Current passport-sized photographs",
        "Proof of address in country of residence",
        "Marriage certificate (for spouse applications)",
        "Application fee payment receipt"
    ];

    return (
        <div className="bg-slate-950 min-h-screen">
            {/* Hero Section */}
            <section className="bg-slate-900 text-white relative overflow-hidden py-24">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-amber-500 text-sm font-medium mb-6">
                            <Users2 className="w-4 h-4" />
                            <span>OCI Services</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            Overseas Citizen of <span className="text-amber-500">India</span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                            Stay connected to your Indian roots. We simplify OCI card applications, renewals, and miscellaneous services for the global Indian diaspora.
                        </p>
                        <div className="flex gap-4">
                            <Link href="/contact" className="bg-amber-500 text-slate-950 font-bold px-8 py-4 rounded-full hover:bg-amber-400 transition-all">
                                Apply Now
                            </Link>
                        </div>
                    </div>
                    <div className="md:w-1/2 bg-slate-950/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-2xl">
                        <h3 className="text-2xl font-bold mb-6 text-white">Why Get an OCI Card?</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center shrink-0 text-slate-950">
                                    <Globe className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-bold text-lg text-white">Lifelong Visa</p>
                                    <p className="text-sm text-slate-400">Multiple entry visa to India for life</p>
                                </div>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center shrink-0 text-slate-950">
                                    <Clock className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-bold text-lg text-white">No Registration</p>
                                    <p className="text-sm text-slate-400">Stay any duration without FRRO registration</p>
                                </div>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center shrink-0 text-slate-950">
                                    <Shield className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-bold text-lg text-white">NRI Parity</p>
                                    <p className="text-sm text-slate-400">Equal rights in economic and financial matters</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Eligibility Section */}
            <section className="py-16 bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Who is Eligible?</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {eligibilityCategories.map((category, idx) => (
                            <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-amber-500/50 transition-all text-center">
                                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-slate-950 mx-auto mb-4">
                                    <category.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                                <p className="text-slate-400 text-sm">{category.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 bg-slate-900 border border-amber-500/30 rounded-xl p-6">
                        <div className="flex items-start gap-4">
                            <AlertCircle className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
                            <div>
                                <h4 className="text-white font-bold mb-2">Important Note</h4>
                                <p className="text-slate-400 text-sm">
                                    Citizens of Pakistan and Bangladesh, or those who were citizens of these countries, are not eligible for OCI.
                                    Additionally, children or grandchildren of Pakistan/Bangladesh citizens are also ineligible.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Our OCI Services</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map((service, idx) => (
                            <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-amber-500/50 transition-all">
                                <h3 className="text-xl font-bold text-amber-500 mb-2">{service.title}</h3>
                                <p className="text-slate-400 mb-6 text-sm">{service.description}</p>
                                <ul className="space-y-2">
                                    {service.requirements.map((req, reqIdx) => (
                                        <li key={reqIdx} className="flex items-start gap-2 text-slate-300 text-sm">
                                            <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                                            <span>{req}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Documents Required */}
                    <div className="mt-16 bg-slate-900 border border-slate-800 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-white mb-6 text-center">Documents Required</h3>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {documents.map((doc, idx) => (
                                <div key={idx} className="flex items-center gap-3 text-slate-300">
                                    <FileText className="w-5 h-5 text-amber-500 shrink-0" />
                                    <span>{doc}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Benefits Section */}
                    <div className="mt-16 bg-slate-900 border border-slate-800 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-white mb-6 text-center">Benefits of OCI Card</h3>
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
                        <h3 className="text-3xl font-bold text-slate-950 mb-4">Ready to Apply for OCI?</h3>
                        <p className="text-slate-900 mb-8 max-w-2xl mx-auto font-medium">
                            Let our experienced team handle your OCI application with precision and care. We ensure a smooth process from start to finish.
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

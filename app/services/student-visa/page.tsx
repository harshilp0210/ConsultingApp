'use client';

import { GraduationCap, Clock, CheckCircle, ArrowRight, BookOpen, Send } from 'lucide-react';
import Link from 'next/link';

export default function StudentVisa() {
    const universities = [
        "University of Hertfordshire", "University of Ravensbourne", "University of Roehampton",
        "University of Bedfordshire", "University of East London", "University of Coventry",
        "University of Huddersfield", "University of Portsmouth", "Lincoln Bishop University",
        "University of Winchester", "University of Sunderland", "University of Greenwich"
    ];

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Hero Section */}
            <section className="bg-slate-900 text-white relative overflow-hidden py-24">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium mb-6">
                            <GraduationCap className="w-4 h-4" />
                            <span>Study in UK</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            Unlock Your Future with a UK Degree
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                            We guide you through every step of your journey—from university selection to visa approval. Secure your place at top-ranked institutions.
                        </p>
                        <div className="flex gap-4">
                            <Link href="/contact" className="btn-primary px-8 py-4 rounded-full text-lg">
                                Apply Now
                            </Link>
                        </div>
                    </div>
                    {/* Visual Placeholder or Hero Image could go here */}
                    <div className="md:w-1/2 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-2xl">
                        <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                                    <span className="font-serif font-bold text-lg">£</span>
                                </div>
                                <div>
                                    <p className="font-bold text-lg">Up to £10,000 Scholarship</p>
                                    <p className="text-sm text-slate-400">Financial aid support available</p>
                                </div>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                                    <Clock className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-bold text-lg">Offer Letter Within 72 Hours</p>
                                    <p className="text-sm text-slate-400">Fast-tracked application process</p>
                                </div>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                                    <BookOpen className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-bold text-lg">140+ Partnered Universities</p>
                                    <p className="text-sm text-slate-400">Wide range of courses & locations</p>
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
                        {/* Universities List */}
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                                <BookOpen className="w-8 h-8 text-blue-600" />
                                Top-ranked UK Universities
                            </h2>
                            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
                                <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                                    {universities.map((uni, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-slate-700">
                                            <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                            <span>{uni}</span>
                                        </li>
                                    ))}
                                    <li className="col-span-full pt-4 text-blue-600 font-semibold italic">
                                        + Many more Universities are Available
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Application Info */}
                        <div className="space-y-8">
                            <div className="bg-blue-600 text-white rounded-2xl p-8 shadow-xl shadow-blue-900/10">
                                <h3 className="text-2xl font-bold mb-4">Accepting English Tests</h3>
                                <p className="mb-6 opacity-90">We help you prepare and apply with scores from all major accepted providers.</p>
                                <div className="flex flex-wrap gap-3">
                                    <span className="px-4 py-2 bg-white/20 rounded-lg font-bold">IELTS</span>
                                    <span className="px-4 py-2 bg-white/20 rounded-lg font-bold">PTE</span>
                                    <span className="px-4 py-2 bg-white/20 rounded-lg font-bold">Duolingo</span>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Start Your Journey Today</h3>
                                <p className="text-slate-600 mb-6">
                                    Don't let complex paperwork hold you back. Our experts are ready to secure your offer letter and visa.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-slate-700">
                                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                                            <Send className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <p className="font-bold">Contact Us Directly</p>
                                            <p className="text-sm">matrixvisa07@gmail.com</p>
                                        </div>
                                    </div>
                                    <Link href="/contact" className="btn-primary w-full py-3 rounded-xl flex items-center justify-center gap-2">
                                        Book Consultation <ArrowRight className="w-5 h-5" />
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

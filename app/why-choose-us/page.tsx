'use client';

import { Zap, ShieldCheck, Layers, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function WhyChooseUs() {
    const benefits = [
        {
            icon: ShieldCheck,
            title: "A Stress-Free Process",
            description: "Forget the headache of documents. We manage the bureaucracy so you don't have to.",
            color: "text-green-600 bg-green-100"
        },
        {
            icon: Zap,
            title: "Total Transparency",
            description: "No language barriers, no hidden fees. Just clear, honest guidance from expert consultants.",
            color: "text-blue-600 bg-blue-100"
        },
        {
            icon: Layers,
            title: "All-in-One Solution",
            description: "From initial consultation to final approval, we are your single point of contact for a global lifestyle.",
            color: "text-purple-600 bg-purple-100"
        },
        {
            icon: Clock,
            title: "Speed to Success",
            description: "We help you take action before the best opportunities pass you by.",
            color: "text-orange-600 bg-orange-100"
        }
    ];

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-10 bg-cover bg-center"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                        Stop Overthinking. <br /> <span className="text-yellow-400">Start Living.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto font-medium">
                        The difference between a dream and a reality is action. While others are waiting for the "perfect time," you could be earning more, living better, and securing your family's future.
                    </p>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Why Clients Trust Us</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {benefits.map((benefit, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-300 flex items-start gap-6">
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 ${benefit.color}`}>
                                    <benefit.icon className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-slate-900 text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-8">Don't Let Opportunities Pass You By</h2>
                    <Link href="/contact" className="inline-flex items-center gap-2 bg-yellow-400 text-slate-900 px-10 py-5 rounded-full text-xl font-bold hover:bg-yellow-300 transition-colors transform hover:-translate-y-1">
                        Book Your Free Consultation Today <ArrowRight className="w-6 h-6" />
                    </Link>
                </div>
            </section>
        </div>
    );
}

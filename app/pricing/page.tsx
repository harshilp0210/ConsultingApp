import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Check } from 'lucide-react';

const tiers = [
    {
        name: "Standard Assistance",
        description: "Perfect for clear-cut applications needing professional review.",
        price: "£499",
        features: [
            "Eligibility Assessment",
            "Document Checklist",
            "Application Review",
            "Basic Email Support"
        ],
        cta: "Choose Standard"
    },
    {
        name: "Premium Service",
        description: "Comprehensive support from start to finish.",
        price: "£899",
        features: [
            "Everything in Standard",
            "Application Form Filling",
            "Cover Letter Preparation",
            "Interview Preparation",
            "Priority Support"
        ],
        cta: "Choose Premium"
    },
    {
        name: "Full Service Package",
        description: "End-to-end handling with extended follow-ups and appeals if needed.",
        price: "£1,499",
        features: [
            "Everything in Premium",
            "Dedicated Case Manager",
            "Complex Case Handling",
            "Appeals & Administrative Reviews",
            "24/7 WhatsApp Support"
        ],
        cta: "Choose Full Service"
    }
];

export default function Pricing() {
    return (
        <div className="bg-slate-950 min-h-screen flex flex-col">
            <Navbar />
            
            <main className="flex-grow pt-32 pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Transparent <span className="text-amber-500">Pricing</span>
                        </h1>
                        <p className="text-xl text-slate-400">
                            Clear, upfront costs with no hidden fees. Choose the level of support that best fits your needs.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {tiers.map((tier, index) => (
                            <div key={index} className="bg-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col relative group hover:-translate-y-2 transition-transform duration-300">
                                {index === 1 && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-500 text-slate-950 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                                        Most Popular
                                    </div>
                                )}
                                
                                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                                <p className="text-slate-400 mb-6 h-12">{tier.description}</p>
                                
                                <div className="mb-8 p-6 bg-slate-950 rounded-xl border border-slate-800">
                                    <span className="text-3xl font-bold text-white">Starting at {tier.price}</span>
                                </div>
                                
                                <ul className="space-y-4 mb-8 flex-grow">
                                    {tier.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                                            <span className="text-slate-300">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                
                                <Link 
                                    href={`/contact?package=${encodeURIComponent(tier.name)}`}
                                    className={`block w-full text-center py-4 rounded-xl font-bold transition-all ${index === 1 ? 'bg-amber-500 text-slate-950 hover:bg-amber-400 shadow-xl shadow-amber-500/20' : 'bg-slate-800 text-white hover:bg-slate-700'}`}
                                >
                                    {tier.cta}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

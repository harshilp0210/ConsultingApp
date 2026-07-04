'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
    {
        question: "How long does a typical visa application take?",
        answer: "Processing times vary significantly depending on the visa type and current Home Office wait times. Standard applications can take 3-8 weeks, while priority services can reduce this to a few days. We will provide a specific timeline for your case during consultation."
    },
    {
        question: "Do you guarantee visa approval?",
        answer: "No legitimate consultancy can guarantee visa approval as the final decision rests with the immigration authorities. However, our 98% success rate shows our commitment to submitting perfectly prepared applications that have the highest possible chance of success."
    },
    {
        question: "What happens if my visa is refused?",
        answer: "If your visa is refused, we will thoroughly review the refusal letter and advise you on the best course of action, which may include submitting an administrative review, an appeal, or a fresh application."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-slate-950 border-t border-slate-900">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="w-16 h-16 bg-slate-900 border border-slate-800 flex items-center justify-center rounded-2xl mx-auto mb-6">
                        <HelpCircle className="w-8 h-8 text-amber-500" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-xl text-slate-400">
                        Clear answers to common questions about our services and the immigration process.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div 
                            key={index}
                            className={`border ${openIndex === index ? 'border-amber-500/50 bg-slate-900' : 'border-slate-800 bg-slate-950 hover:bg-slate-900'} rounded-2xl transition-all duration-300 overflow-hidden`}
                        >
                            <button
                                className="w-full px-6 py-6 text-left flex justify-between items-center focus:outline-none"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span className="font-bold text-lg text-white pr-8">{faq.question}</span>
                                <ChevronDown className={`w-5 h-5 text-amber-500 transition-transform duration-300 shrink-0 ${openIndex === index ? 'rotate-180' : ''}`} />
                            </button>
                            <div 
                                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <p className="text-slate-400 leading-relaxed border-t border-slate-800 pt-4">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

import { Star, Quote, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
    {
        name: "Mehul Kiritbhai Patel",
        role: "Skilled Worker Visa",
        image: "/success-stories/mehul-patel.png",
        content: "Successfully switched to a Skilled Worker Visa. Matrix Visa Consultancy made the process seamless and stress-free.",
        rating: 5
    },
    {
        name: "Pithadiya Dhrumi",
        role: "Skilled Worker Visa",
        image: "/success-stories/pithadiya-dhrumi.png",
        content: "Grateful for the expert guidance in securing my Skilled Worker Visa. Highly recommended for their professionalism.",
        rating: 5
    },
    {
        name: "Sharma Dimple & Family",
        role: "Skilled Worker & Dependents",
        image: "/success-stories/sharma-family.png",
        content: "A big thank you to the team for helping our entire family move to the UK. Excellent support throughout the journey!",
        rating: 5
    }
];

export default function SuccessStories() {
    return (
        <section id="success-stories" className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Verified <span className="text-amber-500">Success Stories</span>
                        </h2>
                        <p className="text-xl text-slate-400 leading-relaxed font-medium">
                            Don't just take our word for it. Read what our successful clients have to say about their journey to the UK.
                        </p>
                    </div>
                    <div className="shrink-0">
                        <a href="https://www.instagram.com/matrixvisa07/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-amber-500 font-bold hover:text-amber-400 transition-colors border-b-2 border-amber-500 hover:border-amber-400 pb-1">
                            View more on Instagram
                            <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-slate-900 p-8 rounded-2xl shadow-lg border border-slate-800 flex flex-col h-full relative group hover:-translate-y-1 transition-transform duration-300">
                            <Quote className="absolute top-8 right-8 text-slate-700 w-12 h-12 rotate-180" />

                            <div className="flex gap-1 text-amber-500 mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-current" />
                                ))}
                            </div>

                            <p className="text-slate-300 text-lg leading-relaxed mb-8 flex-grow italic relative z-10">
                                "{testimonial.content}"
                            </p>

                            <div className="flex items-center gap-4 pt-6 border-t border-slate-800">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-amber-500/50">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                                    <p className="text-slate-500 text-sm font-medium">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

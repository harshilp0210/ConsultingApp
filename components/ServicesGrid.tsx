import Link from 'next/link';
import { ArrowRight, Plane, Scale, GraduationCap, Building2, Globe, Briefcase, Book } from 'lucide-react';

const services = [
    {
        icon: Briefcase,
        title: "Skilled Worker Visa",
        description: "Secure your future in the UK with expert guidance on employer sponsorship and point-based system requirements.",
        link: "/services/skilled-worker"
    },
    {
        icon: GraduationCap,
        title: "Student Visa",
        description: "Comprehensive support for international students, from university acceptance to visa issuance.",
        link: "/services/student-visa"
    },
    {
        icon: Building2,
        title: "Business Migration",
        description: "Strategic advice for entrepreneurs and investors looking to establish or expand their business in the UK.",
        link: "/services/business"
    },
    {
        icon: Scale,
        title: "Spouse & Family",
        description: "Reunite with your loved ones. We handle complex family visa applications with care and precision.",
        link: "/services/family"
    },
    {
        icon: Globe,
        title: "British Citizenship",
        description: "The final step in your journey. Expert assistance with naturalisation and registration applications.",
        link: "/services/citizenship"
    },
    {
        icon: Plane,
        title: "Visitor Visas",
        description: "Expert assistance for USA, Canada, Australia, New Zealand, Schengen Countries, Japan, and China.",
        link: "/services/visitor"
    },
    {
        icon: Book,
        title: "Passport Services",
        description: "Expedited passport applications, renewals, and replacements for UK citizens.",
        link: "/services/passport"
    }
];

export default function ServicesGrid() {
    return (
        <section id="services" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        Our Expertise. <span className="text-blue-600">Your Success.</span>
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        Navigating UK immigration law can be complex. We provide clear, strategic advice tailored to your specific circumstances.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-white border border-slate-200 p-8 rounded-2xl hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                <service.icon className="w-7 h-7" />
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                {service.title}
                            </h3>

                            <p className="text-slate-600 mb-6 leading-relaxed">
                                {service.description}
                            </p>

                            <Link
                                href={service.link}
                                className="inline-flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all"
                            >
                                Learn more <ArrowRight className="w-4 h-4 ml-1" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

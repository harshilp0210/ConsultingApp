import Link from 'next/link';
import { ArrowRight, Plane, Scale, GraduationCap, Building2, Globe, Briefcase, Book, Crown, Flag, Users2 } from 'lucide-react';

const services = [
    {
        icon: Briefcase,
        title: "Skilled Worker Visa",
        description: "Employer sponsorship & point-based support. Secure your future in the UK.",
        link: "/services/skilled-worker"
    },
    {
        icon: GraduationCap,
        title: "Student Visa",
        description: "From university acceptance to issuance. Comprehensive support for international students.",
        link: "/services/student-visa"
    },
    {
        icon: Scale,
        title: "Spouse & Family Visa",
        description: "Reunite with your loved ones smoothly. We handle complex family visa applications with care.",
        link: "/services/family"
    },
    {
        icon: Plane,
        title: "Visitor & Tourist Visas",
        description: "Expert assistance for UK, USA, Canada, Australia, and Schengen visa applications.",
        link: "/services/visitor"
    },
    {
        icon: Crown,
        title: "Citizenship & Settlement",
        description: "Guidance through naturalisation and settlement process. Make your permanent home.",
        link: "/services/citizenship"
    },
    {
        icon: Book,
        title: "Passport & OCI Services",
        description: "Renewals, replacements, OCI card support, and miscellaneous services for the Indian diaspora.",
        link: "/services/passport"
    }
];

export default function ServicesGrid() {
    return (
        <section id="services" className="py-24 bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Our Expertise. <span className="text-amber-500">Your Success.</span>
                    </h2>
                    <p className="text-xl text-slate-400 leading-relaxed">
                        Navigating UK immigration law can be complex. We provide clear, strategic advice tailored to your specific circumstances.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:shadow-xl hover:shadow-amber-500/5 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                            <div className="w-14 h-14 bg-slate-950 rounded-xl flex items-center justify-center text-amber-500 mb-6 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors duration-300">
                                <service.icon className="w-7 h-7" />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-500 transition-colors">
                                {service.title}
                            </h3>

                            <p className="text-slate-400 mb-6 leading-relaxed">
                                {service.description}
                            </p>

                            <Link
                                href={service.link}
                                className="inline-flex items-center text-amber-500 font-semibold group-hover:gap-2 transition-all"
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

import Link from 'next/link';
import { Briefcase, GraduationCap, Users, Plane, Globe, FileText, ArrowRight } from 'lucide-react';

const services = [
    {
        icon: Briefcase,
        title: 'Skilled Worker Visa',
        description: 'Secure your future in the UK with a sponsored work placement. We guide you through the point-based system.',
        href: '/services/skilled-worker'
    },
    {
        icon: GraduationCap,
        title: 'Student Visa',
        description: 'Start your educational journey at top UK universities. Full assistance with CAS and application process.',
        href: '/services/student'
    },
    {
        icon: Users,
        title: 'Family & Spouse Visa',
        description: 'Reunite with your loved ones. Expert handling of financial requirements and relationship proof.',
        href: '/services/family'
    },
    {
        icon: Plane,
        title: 'Visitor Visa',
        description: 'For tourism, business, or family visits. Comprehensive support to demonstrate strong ties to home.',
        href: '/services/visitor'
    },
    {
        icon: Globe,
        title: 'British Citizenship',
        description: 'The final step in your journey. We assist with naturalisation and registration applications.',
        href: '/services/citizenship'
    },
    {
        icon: FileText,
        title: 'Passport Services',
        description: 'Renewals, first-time applications, and lost passport replacements handled efficiently.',
        href: '/services/passport'
    }
];

export default function ServicesGrid() {
    return (
        <section id="services" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Comprehensive Immigration Services
                    </h2>
                    <p className="text-lg text-slate-600">
                        Whether you're looking to work, study, or settle in the UK, our expert consultants are here to guide you through every step.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-blue-100"
                        >
                            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                                <service.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                {service.description}
                            </p>
                            <Link
                                href={service.href}
                                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                            >
                                Learn More <ArrowRight className="w-4 h-4 ml-1" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

import { ClipboardCheck, FileText, Send, HeadphonesIcon } from 'lucide-react';

const steps = [
    {
        icon: ClipboardCheck,
        title: "Free Assessment",
        description: "Evaluate eligibility and get a clear understanding of your visa options."
    },
    {
        icon: FileText,
        title: "Documentation Support",
        description: "Prepare accurate paperwork with our expert guidance to avoid delays."
    },
    {
        icon: Send,
        title: "Submission & Tracking",
        description: "We submit your application to the embassy and track its progress."
    },
    {
        icon: HeadphonesIcon,
        title: "Follow-up & Support",
        description: "We respond to any queries from authorities and monitor until approval."
    }
];

export default function HowItWorks() {
    return (
        <section id="process" className="py-24 bg-slate-900 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        How It <span className="text-amber-500">Works</span>
                    </h2>
                    <p className="text-xl text-slate-400 leading-relaxed">
                        A streamlined, transparent process designed to reduce confusion and ensure your visa application is handled properly.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connecting Line */}
                    <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-slate-800 z-0"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="relative z-10 flex flex-col items-center text-center group">
                            <div className="w-24 h-24 rounded-full bg-slate-950 border-4 border-slate-800 flex items-center justify-center text-amber-500 mb-6 group-hover:border-amber-500 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300">
                                <step.icon className="w-10 h-10" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">
                                {index + 1}. {step.title}
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

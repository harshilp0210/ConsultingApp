import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
    return (
        <div className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50/50 to-white"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="space-y-8 animate-in slide-in-from-left-4 fade-in duration-700">
                        <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5">
                            <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
                            <span className="text-sm font-medium text-blue-900">Rated #1 for UK Immigration Advice</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                            Your Gateway to the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">
                                United Kingdom
                            </span>
                        </h1>

                        <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
                            Expert guidance for Visas, Citizenship, and Settlement. We simplify the complex UK immigration rules so you can focus on your future.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex justify-center items-center px-8 py-4 text-base font-bold text-white bg-blue-900 rounded-lg hover:bg-blue-800 transition-all shadow-lg hover:shadow-blue-900/25 ring-offset-2 focus:ring-2 ring-blue-900"
                            >
                                Start Your Application
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                            <Link
                                href="#services"
                                className="inline-flex justify-center items-center px-8 py-4 text-base font-bold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-all shadow-sm hover:shadow-md"
                            >
                                Explore Services
                            </Link>
                        </div>

                        <div className="pt-8 border-t border-slate-200 grid grid-cols-3 gap-8">
                            <div>
                                <p className="text-3xl font-bold text-slate-900">98%</p>
                                <p className="text-sm text-slate-600 mt-1">Success Rate</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-slate-900">5k+</p>
                                <p className="text-sm text-slate-600 mt-1">Visas Approved</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-slate-900">15+</p>
                                <p className="text-sm text-slate-600 mt-1">Years Experience</p>
                            </div>
                        </div>
                    </div>

                    {/* Hero Image / Visual */}
                    <div className="relative lg:ml-auto animate-in slide-in-from-right-4 fade-in duration-700 delay-200">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] md:aspect-square bg-slate-100">
                            {/* Abstract Representation of UK/Travel */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-slate-900">
                                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
                                {/* Placeholder for "Big Ben" or "Passport" visual - generating generic UI for now */}
                                <div className="h-full w-full flex items-center justify-center">
                                    <div className="text-center p-8">
                                        <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full mx-auto mb-6 flex items-center justify-center border border-white/20">
                                            <CheckCircle2 className="w-12 h-12 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-2">Visa Approved</h3>
                                        <p className="text-blue-100">Your dream, our mission.</p>

                                        {/* Card Decoration */}
                                        <div className="absolute top-10 right-10 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 transform rotate-12">
                                            <span className="block w-12 h-2 bg-white/40 rounded mb-2"></span>
                                            <span className="block w-8 h-2 bg-white/20 rounded"></span>
                                        </div>
                                        <div className="absolute bottom-20 left-10 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 transform -rotate-6">
                                            <span className="block w-16 h-2 bg-white/40 rounded mb-2"></span>
                                            <span className="block w-10 h-2 bg-white/20 rounded"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

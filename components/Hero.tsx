import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck, TrendingUp } from 'lucide-react';

export default function Hero() {
    return (
        <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-950">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 translate-y-24 -translate-x-24 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Text Content */}
                    <div className="space-y-8 animate-in slide-in-from-left-4 fade-in duration-1000 max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-amber-500 font-semibold text-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                            </span>
                            #1 Visa Consultancy in London
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                            Your Gateway to <br />
                            <span className="text-amber-500">the UK.</span>
                        </h1>

                        <p className="text-xl text-slate-400 max-w-lg leading-relaxed">
                            Expert guidance for Visas, Citizenship, and Settlement. We simplify the complex immigration process for you.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link
                                href="/contact"
                                className="inline-flex justify-center items-center px-8 py-4 text-base font-bold text-slate-950 bg-amber-500 rounded-full hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/25 active:scale-95"
                            >
                                Start Application
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                            <Link
                                href="#services"
                                className="inline-flex justify-center items-center px-8 py-4 text-base font-bold text-slate-300 bg-slate-900 border border-slate-700 rounded-full hover:bg-slate-800 hover:text-white transition-all shadow-sm active:scale-95"
                            >
                                Explore Services
                            </Link>
                        </div>

                        <div className="pt-8 border-t border-slate-800 grid grid-cols-3 gap-8">
                            <div>
                                <p className="text-3xl font-bold text-white">98%</p>
                                <p className="text-sm text-slate-500 mt-1 font-medium">Success Rate</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-white">500+</p>
                                <p className="text-sm text-slate-500 mt-1 font-medium">Visas Approved</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-white">5+</p>
                                <p className="text-sm text-slate-500 mt-1 font-medium">Years Experience</p>
                            </div>
                        </div>
                    </div>

                    {/* Hero Image / Visual - Clean Professional */}
                    <div className="relative lg:ml-auto animate-in slide-in-from-right-4 fade-in duration-1000 delay-200 w-full">
                        <div className="relative rounded-2xl overflow-hidden aspect-[4/5] md:aspect-square lg:aspect-[4/5] bg-slate-900 border border-slate-800 shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50"></div>

                            {/* Abstract UI Representation */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-center items-center">
                                {/* Card 1 */}
                                <div className="w-full max-w-xs bg-slate-950 rounded-xl shadow-xl border border-slate-800 p-6 mb-6 transform -rotate-3 transition-transform hover:rotate-0 duration-300">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 bg-green-900/30 rounded-full flex items-center justify-center text-green-500">
                                            <CheckCircle2 className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white">Visa Approved</h3>
                                            <p className="text-xs text-slate-500">Just now</p>
                                        </div>
                                    </div>
                                    <div className="h-2 bg-slate-800 rounded-full w-3/4 mb-2"></div>
                                    <div className="h-2 bg-slate-800 rounded-full w-1/2"></div>
                                </div>

                                {/* Card 2 */}
                                <div className="w-full max-w-xs bg-slate-950 rounded-xl shadow-xl border border-slate-800 p-6 transform rotate-3 transition-transform hover:rotate-0 duration-300 relative z-10">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 bg-amber-900/30 rounded-full flex items-center justify-center text-amber-500">
                                            <ShieldCheck className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white">Document Verified</h3>
                                            <p className="text-xs text-slate-500">2 mins ago</p>
                                        </div>
                                    </div>
                                    <div className="h-2 bg-slate-800 rounded-full w-full mb-2"></div>
                                    <div className="h-2 bg-slate-800 rounded-full w-2/3"></div>
                                </div>

                                {/* Card 3 - Special Offer */}
                                {/* Card 3 - Special Offer */}
                                <div className="absolute bottom-4 right-4 z-20 max-w-[200px] animate-float">
                                    <div className="bg-amber-500 text-slate-950 rounded-xl shadow-xl shadow-amber-500/20 p-4 transform rotate-6 transition-transform hover:rotate-0 duration-300">
                                        <div className="flex items-start gap-3">
                                            <div className="bg-slate-950/10 p-2 rounded-lg">
                                                <TrendingUp className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold leading-tight text-sm">'Life in UK' Course</h3>
                                                <p className="text-xs opacity-80 mt-1 font-medium">Included with visa services</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Blobs */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-500/20 rounded-full blur-2xl"></div>
                            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

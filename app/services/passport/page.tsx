'use client';

import Navbar from '../../../components/Navbar';
import { ShieldCheck, Calendar, Zap, FileText, CheckCircle2, Clock, Award, Coffee, ClipboardCheck, Send } from 'lucide-react';
import Link from 'next/link';

export default function PassportServices() {
    return (
        <main className="min-h-screen bg-slate-950">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-amber-500 font-semibold mb-6 shadow-lg shadow-amber-500/10">
                            Expert Intermediaries
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Passport <span className="text-amber-500">Consultancy Services</span>
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed mb-8">
                            We act as expert intermediaries between you and the government's passport issuance office. Perfect if you are short on time, have a complex case, or find the official paperwork overwhelming.
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Services */}
            <section className="py-20 bg-slate-900 border-y border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Core Services <span className="text-amber-500">Provided</span></h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Service 1 */}
                        <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-amber-500/30 transition-all hover:-translate-y-1 group">
                            <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-amber-500 mb-6 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                                <FileText className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Application Pre-Check</h3>
                            <p className="text-slate-400">
                                Experts review your forms and supporting documents (birth certificates, ID proofs, photos) to ensure they meet strict government standards before submission.
                            </p>
                        </div>

                        {/* Service 2 */}
                        <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-amber-500/30 transition-all hover:-translate-y-1 group">
                            <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-amber-500 mb-6 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                                <Calendar className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Appointment Management</h3>
                            <p className="text-slate-400">
                                We handle the scheduling of your appointment at the Passport Office or Kendra, often finding slots that might appear "full" or unavailable to the general public.
                            </p>
                        </div>

                        {/* Service 3 */}
                        <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-amber-500/30 transition-all hover:-translate-y-1 group">
                            <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-amber-500 mb-6 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                                <Zap className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Expedited Processing</h3>
                            <p className="text-slate-400">
                                Many agencies offer "Tatkal" or expedited services, guiding you on how to jump the queue legally for urgent travel needs.
                            </p>
                        </div>

                        {/* Service 4 */}
                        <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-amber-500/30 transition-all hover:-translate-y-1 group">
                            <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-amber-500 mb-6 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Handling Complex Cases</h3>
                            <ul className="text-slate-400 space-y-2 list-disc list-inside">
                                <li>Passport for a minor with a single parent.</li>
                                <li>Name changes after marriage or divorce.</li>
                                <li>Lost, stolen, or damaged passport replacements.</li>
                                <li>Renewal of expired passports.</li>
                            </ul>
                        </div>

                        {/* Service 5 */}
                        <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-amber-500/30 transition-all hover:-translate-y-1 group">
                            <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-amber-500 mb-6 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                                <CheckCircle2 className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Police Verification Guidance</h3>
                            <p className="text-slate-400">
                                In regions where police verification is mandatory, we advise on the necessary local documents to ensure the visit goes smoothly.
                            </p>
                        </div>

                        {/* Service 6 */}
                        <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-amber-500/30 transition-all hover:-translate-y-1 group">
                            <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-amber-500 mb-6 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                                <Clock className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Status Tracking</h3>
                            <p className="text-slate-400">
                                We provide real-time updates on your application's progress so you don’t have to manually check the portal.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Use a Consultant */}
            <section className="py-20 bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Why Use a <span className="text-amber-500">Consultant?</span></h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 text-center hover:border-amber-500/50 transition-colors group">
                            <div className="mx-auto w-12 h-12 rounded-full bg-slate-950 flex items-center justify-center text-amber-500 mb-4 group-hover:scale-110 transition-transform">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">Error Reduction</h3>
                            <p className="text-slate-400 text-sm">Minimizes the risk of rejection due to minor typos or incorrect document formats.</p>
                        </div>

                        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 text-center hover:border-amber-500/50 transition-colors group">
                            <div className="mx-auto w-12 h-12 rounded-full bg-slate-950 flex items-center justify-center text-amber-500 mb-4 group-hover:scale-110 transition-transform">
                                <Clock className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">Time Savings</h3>
                            <p className="text-slate-400 text-sm">You skip the hours spent researching rules and trying to find appointment slots.</p>
                        </div>

                        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 text-center hover:border-amber-500/50 transition-colors group">
                            <div className="mx-auto w-12 h-12 rounded-full bg-slate-950 flex items-center justify-center text-amber-500 mb-4 group-hover:scale-110 transition-transform">
                                <Award className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">Expertise</h3>
                            <p className="text-slate-400 text-sm">They stay updated on the latest policy changes and specific document requirements for your region.</p>
                        </div>

                        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 text-center hover:border-amber-500/50 transition-colors group">
                            <div className="mx-auto w-12 h-12 rounded-full bg-slate-950 flex items-center justify-center text-amber-500 mb-4 group-hover:scale-110 transition-transform">
                                <Coffee className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">Convenience</h3>
                            <p className="text-slate-400 text-sm">Some premium services offer doorstep document pickup and photo-taking.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Workflow */}
            <section className="py-20 bg-slate-900 border-t border-slate-800">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">The Typical <span className="text-amber-500">Workflow</span></h2>

                    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">

                        {/* Step 1 */}
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-900 bg-amber-500 group-[.is-active]:bg-amber-500 text-slate-950 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_4px_#0f172a] z-10">
                                <span className="font-bold text-sm">1</span>
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-950 p-6 rounded-xl border border-slate-800 shadow-lg">
                                <div className="flex items-center justify-between space-x-2 mb-1">
                                    <div className="font-bold text-white">Initial Assessment</div>
                                </div>
                                <div className="text-slate-400">The consultant reviews your eligibility and lists the documents you need.</div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-900 bg-amber-500 group-[.is-active]:bg-amber-500 text-slate-950 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_4px_#0f172a] z-10">
                                <span className="font-bold text-sm">2</span>
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-950 p-6 rounded-xl border border-slate-800 shadow-lg">
                                <div className="flex items-center justify-between space-x-2 mb-1">
                                    <div className="font-bold text-white">Form Filling</div>
                                </div>
                                <div className="text-slate-400">They fill out the online application on your behalf.</div>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-900 bg-amber-500 group-[.is-active]:bg-amber-500 text-slate-950 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_4px_#0f172a] z-10">
                                <span className="font-bold text-sm">3</span>
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-950 p-6 rounded-xl border border-slate-800 shadow-lg">
                                <div className="flex items-center justify-between space-x-2 mb-1">
                                    <div className="font-bold text-white">Payment & Booking</div>
                                </div>
                                <div className="text-slate-400">They pay the government fees and secure an appointment.</div>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-900 bg-amber-500 group-[.is-active]:bg-amber-500 text-slate-950 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_4px_#0f172a] z-10">
                                <span className="font-bold text-sm">4</span>
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-950 p-6 rounded-xl border border-slate-800 shadow-lg">
                                <div className="flex items-center justify-between space-x-2 mb-1">
                                    <div className="font-bold text-white">Preparation</div>
                                </div>
                                <div className="text-slate-400">They provide a final checklist and a mock-up of what to expect at the passport center.</div>
                            </div>
                        </div>

                        {/* Step 5 */}
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-900 bg-amber-500 group-[.is-active]:bg-amber-500 text-slate-950 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_4px_#0f172a] z-10">
                                <span className="font-bold text-sm">5</span>
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-950 p-6 rounded-xl border border-slate-800 shadow-lg">
                                <div className="flex items-center justify-between space-x-2 mb-1">
                                    <div className="font-bold text-white">Dispatch</div>
                                </div>
                                <div className="text-slate-400">Once approved, they track the delivery of the passport to your home.</div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-slate-950 border-t border-slate-800">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Need Help with Your Passport?
                    </h2>
                    <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                        Skip the confusion and long wait times. Let our experts handle your passport application with precision.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-amber-500 text-slate-950 font-bold px-10 py-4 rounded-full shadow-xl shadow-amber-500/20 hover:bg-amber-400 transition-all transform hover:-translate-y-1"
                    >
                        Get Started Now
                        <Send className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </main>
    );
}

'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle, Loader2 } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        visaType: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            // Using Web3Forms - free email service, no backend needed
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_key: 'YOUR_ACCESS_KEY', // User needs to get this from web3forms.com
                    to_email: 'matrixvisa07@gmail.com',
                    from_name: `${formData.firstName} ${formData.lastName}`,
                    subject: `New Visa Inquiry: ${formData.visaType || 'General'}`,
                    email: formData.email,
                    phone: formData.phone,
                    visa_type: formData.visaType,
                    message: formData.message,
                }),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ firstName: '', lastName: '', email: '', phone: '', visaType: '', message: '' });
            } else {
                // Fallback: Open email client
                const mailtoLink = `mailto:matrixvisa07@gmail.com?subject=Visa Inquiry: ${formData.visaType}&body=Name: ${formData.firstName} ${formData.lastName}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AVisa Type: ${formData.visaType}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
                window.location.href = mailtoLink;
                setStatus('success');
            }
        } catch (error) {
            // Fallback: Open email client
            const mailtoLink = `mailto:matrixvisa07@gmail.com?subject=Visa Inquiry: ${formData.visaType}&body=Name: ${formData.firstName} ${formData.lastName}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AVisa Type: ${formData.visaType}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
            window.location.href = mailtoLink;
            setStatus('success');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
    };

    return (
        <div className="pt-32 pb-24 bg-slate-950 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Get in Touch</h1>
                    <p className="text-xl text-slate-400 leading-relaxed">
                        Have questions about your visa application? Our team is here to help. Reach out to us directly or fill out the form below.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Contact Info Cards */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-800 flex items-start gap-4 hover:shadow-md hover:border-amber-500/30 transition-all group">
                            <div className="w-12 h-12 bg-slate-950 rounded-xl flex items-center justify-center text-amber-500 shrink-0 border border-slate-800 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-lg">Call Us</h3>
                                <p className="text-slate-500 mb-1 text-sm font-medium">Mon-Fri: 9am - 5pm (UK Time)</p>
                                <p className="text-slate-500 mb-1 text-sm font-medium">Sat: 10am - 4pm</p>
                                <a href="tel:+447404408648" className="text-amber-500 font-bold hover:underline">+44 7404 408 648</a>
                            </div>
                        </div>

                        <div className="bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-800 flex items-start gap-4 hover:shadow-md hover:border-amber-500/30 transition-all group">
                            <div className="w-12 h-12 bg-slate-950 rounded-xl flex items-center justify-center text-amber-500 shrink-0 border border-slate-800 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                                <MessageCircle className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-lg">WhatsApp</h3>
                                <p className="text-slate-500 mb-1 text-sm font-medium">Instant chat support</p>
                                <a href="https://wa.me/447404408648" className="text-amber-500 font-bold hover:underline">Chat Now</a>
                            </div>
                        </div>

                        <div className="bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-800 flex items-start gap-4 hover:shadow-md hover:border-amber-500/30 transition-all group">
                            <div className="w-12 h-12 bg-slate-950 rounded-xl flex items-center justify-center text-amber-500 shrink-0 border border-slate-800 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-lg">Email Us</h3>
                                <p className="text-slate-500 mb-1 text-sm font-medium">We reply within 24 hours</p>
                                <a href="mailto:matrixvisa07@gmail.com" className="text-amber-500 font-bold hover:underline">matrixvisa07@gmail.com</a>
                            </div>
                        </div>

                        <div className="bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-800 flex items-start gap-4 hover:shadow-md hover:border-amber-500/30 transition-all group">
                            <div className="w-12 h-12 bg-slate-950 rounded-xl flex items-center justify-center text-amber-500 shrink-0 border border-slate-800 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-lg">Visit Us</h3>
                                <p className="text-slate-400">
                                    London,<br />
                                    United Kingdom
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2 bg-slate-900 rounded-2xl shadow-lg border border-slate-800 p-8">
                        <h2 className="text-2xl font-bold text-white mb-8">Send us a Message</h2>

                        {status === 'success' ? (
                            <div className="text-center py-12">
                                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                                <p className="text-slate-400 mb-6">We'll get back to you within 24 hours.</p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className="text-amber-500 font-bold hover:underline"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-semibold text-slate-300 mb-2">First Name</label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-950 text-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all placeholder:text-slate-600"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-semibold text-slate-300 mb-2">Last Name</label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-950 text-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all placeholder:text-slate-600"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-2">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-950 text-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all placeholder:text-slate-600"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-semibold text-slate-300 mb-2">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-950 text-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all placeholder:text-slate-600"
                                            placeholder="+44 7404 408 648"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="visaType" className="block text-sm font-semibold text-slate-300 mb-2">Visa Type Interest</label>
                                    <select
                                        id="visaType"
                                        value={formData.visaType}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-950 text-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all cursor-pointer"
                                    >
                                        <option value="" className="bg-slate-900">Select a visa type...</option>
                                        <option value="skilled-worker" className="bg-slate-900">Skilled Worker Visa</option>
                                        <option value="student" className="bg-slate-900">Student Visa</option>
                                        <option value="spouse" className="bg-slate-900">Spouse / Family Visa</option>
                                        <option value="visitor" className="bg-slate-900">Visitor Visa</option>
                                        <option value="business" className="bg-slate-900">Business Migration</option>
                                        <option value="passport" className="bg-slate-900">Passport Services</option>
                                        <option value="other" className="bg-slate-900">Other / Not Sure</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-slate-300 mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-950 text-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all placeholder:text-slate-600"
                                        placeholder="Tell us a bit about your situation..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="w-full bg-amber-500 text-slate-950 font-bold py-4 rounded-xl hover:bg-amber-400 transition-all shadow-lg hover:shadow-amber-500/25 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {status === 'loading' ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Start Consultation
                                            <Send className="w-5 h-5" />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

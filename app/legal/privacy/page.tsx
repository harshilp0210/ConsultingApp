import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
    return (
        <div className="bg-slate-950 min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow pt-32 pb-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-300">
                    <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
                    <div className="prose prose-invert max-w-none">
                        <p className="mb-4 text-slate-400">
                            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </p>
                        <p className="mb-6">
                            This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from Matrix Visa Consultancy.
                        </p>
                        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Information We Collect</h2>
                        <p className="mb-6">
                            When you submit an inquiry through our contact form, we collect your name, email, phone number, and any information you choose to provide about your visa situation.
                        </p>
                        <p className="italic text-slate-500">
                            *This is a placeholder for the full privacy policy. We recommend having a legal professional draft the final version.*
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

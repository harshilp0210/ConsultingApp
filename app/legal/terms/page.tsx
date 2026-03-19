import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsOfService() {
    return (
        <div className="bg-slate-950 min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow pt-32 pb-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-300">
                    <h1 className="text-4xl font-bold text-white mb-8">Terms & Conditions</h1>
                    <div className="prose prose-invert max-w-none">
                        <p className="mb-4 text-slate-400">
                            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </p>
                        <p className="mb-6">
                            By accessing and using the services of Matrix Visa Consultancy, you accept and agree to be bound by the terms and provision of this agreement.
                        </p>
                        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Service Engagement</h2>
                        <p className="mb-6">
                            Our consultation and visa processing services are subject to client eligibility and submission of truthful information. We reserve the right to refuse service if any fraudulent documents are presented.
                        </p>
                        <p className="italic text-slate-500">
                            *This is a placeholder for the full terms and conditions. We recommend having a legal professional draft the final version.*
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

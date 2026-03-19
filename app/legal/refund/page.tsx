import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function RefundPolicy() {
    return (
        <div className="bg-slate-950 min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow pt-32 pb-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-300">
                    <h1 className="text-4xl font-bold text-white mb-8">Cancellation & Refund Policy</h1>
                    <div className="prose prose-invert max-w-none">
                        <p className="mb-4 text-slate-400">
                            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </p>
                        <p className="mb-6">
                            We strive to ensure complete satisfaction with our consulting services. This policy outlines exactly what you can expect if our services are cancelled.
                        </p>
                        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Refund Eligibility</h2>
                        <p className="mb-6">
                            Consultation fees are non-refundable once the consultation has occurred. For full-service packages, partial refunds may be issued if the cancellation occurs before significant processing or documentation review has begun.
                        </p>
                        <p className="italic text-slate-500">
                            *This is a placeholder for the full cancellation and refund policy. We recommend having a legal professional draft the final version.*
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

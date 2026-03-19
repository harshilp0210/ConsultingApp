import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function BlogPost({ params }: { params: { slug: string } }) {
    return (
        <div className="bg-slate-950 min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow pt-32 pb-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-12">
                        <h1 className="text-4xl font-bold mb-8">
                            {params.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                        </h1>
                        <p className="text-slate-400 leading-loose text-left text-lg">
                            This is a placeholder for the blog post content. Detailed guides and articles will be placed here to help applicants with their visa journey.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

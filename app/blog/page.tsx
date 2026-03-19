import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

const posts = [
    {
        title: "How to Prepare Your UK Student Visa Application",
        excerpt: "Learn the essential steps and documents required for a successful UK Student Visa application.",
        slug: "student-visa-prep",
        date: "Oct 15, 2023"
    },
    {
        title: "Top Tips for Securing a Tourist Visa",
        excerpt: "Planning a trip? Follow these top tips to ensure your tourist visa application is approved without delays.",
        slug: "tourist-visa-tips",
        date: "Oct 22, 2023"
    },
    {
        title: "Common Mistakes That Delay Visa Approvals",
        excerpt: "Avoid these frequent errors that cause unnecessary delays or refusals in the visa process.",
        slug: "visa-approval-mistakes",
        date: "Nov 05, 2023"
    }
];

export default function Blog() {
    return (
        <div className="bg-slate-950 min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow pt-32 pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Immigration <span className="text-amber-500">Insights</span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                            Expert advice, updates, and tips to help you navigate the complex world of visas and immigration.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {posts.map((post, index) => (
                            <Link href={`/blog/${post.slug}`} key={index} className="block group">
                                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 h-full hover:border-amber-500/50 transition-colors duration-300 border-t-4 border-t-amber-500">
                                    <p className="text-amber-500 text-sm font-bold mb-3">{post.date}</p>
                                    <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-500 transition-colors duration-300">
                                        {post.title}
                                    </h2>
                                    <p className="text-slate-400">
                                        {post.excerpt}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

import { Star } from 'lucide-react';

const stories = [
    {
        name: "Priya Sharma",
        visa: "Skilled Worker Visa",
        quote: "The team made the complex skilled worker application process incredibly simple. I secured my visa in just 3 weeks!",
        location: "IT Professional, London"
    },
    {
        name: "Ahmed Al-Fayed",
        visa: "Student Visa",
        quote: "Expert guidance on my financial documents was crucial. I'm now happily studying at Manchester University.",
        location: "Student, Manchester"
    },
    {
        name: "Sarah Johnson",
        visa: "Spouse Visa",
        quote: "Reuniting with my husband seemed impossible due to the strict requirements, but VisaExperts guided us perfectly.",
        location: "Teacher, Birmingham"
    }
];

export default function SuccessStories() {
    return (
        <section id="success-stories" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            Success Stories
                        </h2>
                        <p className="text-lg text-slate-600">
                            Join thousands of satisfied clients who have successfully started their new lives in the UK.
                        </p>
                    </div>
                    <div className="flex gap-2">
                        {/* Decorative elements or navigation could go here */}
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {stories.map((story, index) => (
                        <div key={index} className="bg-slate-50 rounded-2xl p-8 border border-slate-100 relative">
                            <div className="flex gap-1 mb-6 text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-current" />
                                ))}
                            </div>
                            <p className="text-slate-700 text-lg mb-6 italic">"{story.quote}"</p>
                            <div>
                                <p className="font-bold text-slate-900">{story.name}</p>
                                <p className="text-sm text-blue-600 font-medium">{story.visa}</p>
                                <p className="text-sm text-slate-500 mt-1">{story.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

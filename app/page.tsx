import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ServicesGrid from '../components/ServicesGrid';
import SuccessStories from '../components/SuccessStories';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      <Hero />
      <ServicesGrid />
      <SuccessStories />

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-medium">
            Book a consultation with our experts today and get a clear roadmap for your UK visa application.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 font-bold px-10 py-4 rounded-full shadow-xl shadow-blue-900/10 hover:bg-blue-50 transition-all transform hover:-translate-y-1"
          >
            Book Free Consultation
          </a>
        </div>
      </section>


    </main>
  );
}

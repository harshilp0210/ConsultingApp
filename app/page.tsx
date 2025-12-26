import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ServicesGrid from '../components/ServicesGrid';
import SuccessStories from '../components/SuccessStories';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <ServicesGrid />
      <SuccessStories />

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 relative overflow-hidden border-t border-slate-800">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto font-medium">
            Book a consultation with our experts today and get a clear roadmap for your UK visa application.
          </p>
          <a
            href="/contact"
            className="inline-block bg-amber-500 text-slate-950 font-bold px-10 py-4 rounded-full shadow-xl shadow-amber-500/20 hover:bg-amber-400 transition-all transform hover:-translate-y-1"
          >
            Book Free Consultation
          </a>
        </div>
      </section>


    </main>
  );
}

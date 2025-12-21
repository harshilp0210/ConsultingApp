import Hero from '@/components/Hero';
import ServicesGrid from '@/components/ServicesGrid';
import SuccessStories from '@/components/SuccessStories';

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <ServicesGrid />
      <SuccessStories />

      {/* CTA Section */}
      <section className="bg-blue-900 py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Book a consultation with our experts today and get a clear roadmap for your UK visa application.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-900 font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-blue-50 transition-colors"
          >
            Book Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
}

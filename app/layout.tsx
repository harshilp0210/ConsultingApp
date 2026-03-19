import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'Matrix Visa Consultancy — UK, US, Canada & Schengen Visa Experts',
  description: 'Expert visa and immigration services for the UK, USA, Canada, Schengen, and more. Get a free consultation and secure your visa with our 98% success rate.',
  verification: {
    other: {
      'msvalidate.01': 'EAAB6B56735D1CE8A6881C818A7AED2B',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} text-slate-50 bg-slate-950 antialiased`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Contact SkipIt Digital | Start Scaling Your Growth",
  description: "Ready to scale your business? Contact SkipIt Digital to discuss AI-powered digital marketing strategies tailored to your growth goals.",
};

export default function ContactUs() {
  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-[#0b1020]">
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
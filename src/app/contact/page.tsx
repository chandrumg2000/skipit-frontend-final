'use client';

import ContactForm from '@/components/ContactForm';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Services from '@/components/Services';
import Process from '@/components/Process';
import CaseStudies from '@/components/CaseStudies';
import Pricing from '@/components/Pricing';
import ContactForm from '@/components/ContactForm';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import SEOModal from '@/components/SEOModal';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Hero setShowModal={setShowModal} />
      <Features />
      <Services />
      <Process />
      <CaseStudies />
      <Pricing />
      <ContactForm />
      <FAQ />
      <Footer />
      <SEOModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
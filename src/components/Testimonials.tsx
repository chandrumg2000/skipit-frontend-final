'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    title: 'CMO, Finlytics',
    image: '/testimonials/sarah.jpg',
    quote:
      'SkipIt Digital scaled our paid campaigns with 3x ROI. Their AI-driven strategy and team collaboration are unmatched.',
  },
  {
    name: 'Ravi Kumar',
    title: 'Founder, GrowthNest',
    image: '/testimonials/ravi.jpg',
    quote:
      'SEO, paid ads, content — everything just clicked. Truly impressed with the results and execution.',
  },
  {
    name: 'Elena Petrova',
    title: 'Marketing Lead, SaaSly',
    image: '/testimonials/elena.jpg',
    quote:
      'Their team built our lead gen funnel from scratch and nailed the CAC within the first month.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-[#0f172a] text-white relative z-10">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-4xl font-extrabold mb-4">What Our Clients Say</h2>
        <p className="text-lg text-gray-400">Real results. Real impact.</p>
      </div>
      <div className="flex md:grid md:grid-cols-3 gap-6 md:gap-10 max-w-6xl mx-auto overflow-x-auto md:overflow-visible pb-8 md:pb-0 snap-x snap-mandatory no-scrollbar px-1">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.04 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="flex-shrink-0 w-[85vw] md:w-auto snap-center bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl backdrop-blur-lg hover:shadow-neon"
          >
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={48}
                height={48}
                className="rounded-full border border-white/20"
              />
              <div className="text-left">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-xs text-gray-400">{testimonial.title}</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed whitespace-normal">{testimonial.quote}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
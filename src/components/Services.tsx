'use client';

import { motion, Variants } from 'framer-motion';
import Lottie from 'react-lottie-player';
import Link from 'next/link';
import serviceData from '@/data/serviceData';

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 0.61, 0.36, 1]
    }
  }
};

export default function Services() {
  return (
    <section id="services" className="relative z-10 bg-[#0b1020] py-24 px-6 text-white transition-colors duration-300">
      {/* soft halo */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-100">
        <div
          className="absolute left-1/2 top-0 h-72 w-[70rem] -translate-x-1/2 rounded-full blur-3xl"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(139,92,246,0.25), rgba(236,72,153,0.18), rgba(56,189,248,0.12) 60%, transparent 70%)'
          }}
        />
      </div>

      {/* header */}
      <div className="mx-auto mb-16 max-w-7xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight md:text-5xl text-white">
          <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
            Our Services
          </span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-balance text-slate-300">
          We craft **AI-assisted, performance-first** strategies across paid media, SEO, and content to drive measurable growth.
        </p>
        <div className="mx-auto mt-6 h-[2px] w-24 rounded-full bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-300 opacity-80" />
      </div>

      {/* grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {serviceData.map((service, i) => (
          <motion.article
            key={service.title ?? i}
            variants={item}
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition-all shadow-none"
          >
            <Link href={`/services/${service.slug}`} className="block h-full">
              {/* animated gradient ring on hover */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  boxShadow:
                    '0 0 0 1px rgba(255,255,255,0.06), 0 0 40px rgba(139,92,246,0.18)'
                }}
              />
              <div
                className="absolute -inset-px rounded-2xl opacity-0 blur-xl transition duration-300 group-hover:opacity-100"
                style={{
                  background:
                    'linear-gradient(90deg, rgba(139,92,246,0.18), rgba(236,72,153,0.14), rgba(56,189,248,0.12))'
                }}
              />

              {/* icon */}
              <div className="mx-auto mb-5 h-16 w-16">
                <Lottie loop animationData={service.icon} play />
              </div>

              {/* title */}
              <h3 className="text-center text-xl font-semibold md:text-[1.35rem] text-white">
                {service.title}
              </h3>

              {/* copy */}
              <p className="mx-auto mt-2 max-w-[48ch] text-center text-sm leading-relaxed text-slate-300">
                {service.description}
              </p>

              {/* small divider */}
              <div className="mx-auto mt-6 h-px w-20 bg-white/10" />

              {/* micro bullets */}
              {'highlights' in service && Array.isArray((service as any).highlights) && (
                <ul className="mt-4 space-y-2 text-sm text-slate-300/90">
                  {(service as any).highlights.slice(0, 3).map((h: string) => (
                    <li key={h} className="flex items-start gap-2">
                      <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-400 to-cyan-300" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}
            </Link>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
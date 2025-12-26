'use client';

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { TrendingUp, MousePointerClick, Users, Rocket, Quote } from 'lucide-react';

type Metric = { label: string; value: string; icon?: React.ComponentType<{ className?: string }> };

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  photoSrc?: string;
  photoAlt?: string;
};

type Study = {
  id: string;
  title: string;
  category: 'SaaS' | 'E-commerce' | 'Local / Services';
  summary: string;
  actions: string[];
  metrics: Metric[];
  highlightBadge: string;
  testimonial?: Testimonial;
  featured?: boolean;
  heroSrc?: string;
  heroAlt?: string;
};

const STUDIES: Study[] = [
  {
    id: 'saas-1',
    title: 'Self-Serve Funnel Overhaul for a B2B SaaS',
    category: 'SaaS',
    summary:
      'Scaled qualified sign-ups while lowering CAC via funnel, creatives, and channel mix.',
    actions: [
      'Revamped onboarding funnel & paywall prompts',
      'Audience + creative testing across themes',
      'Search (Exact + PMax) with automated negatives',
      'Landing page speed/CRO quick wins (hero clarity, proof, CTA)',
    ],
    metrics: [
      { label: 'MRR', value: '+54%', icon: TrendingUp },
      { label: 'CAC', value: '-27%', icon: Rocket },
      { label: 'CVR', value: '+38%', icon: MousePointerClick },
    ],
    highlightBadge: '↑ MRR +54%',
    testimonial: {
      quote:
        'SkipIt cut our CAC while boosting trials. They moved fast and knew exactly what to test.',
      author: 'Ananya K.',
      role: 'Head of Growth, B2B SaaS',
      photoSrc: '/images/people/ananya-k.jpg',
      photoAlt: 'Ananya K profile photo',
    },
    heroSrc: '/images/case-studies/saas-hero.jpg',
    heroAlt: 'SaaS dashboard',
  },
  {
    id: 'ecom-1',
    title: 'E-commerce Scale with UGC + Advantage Shopping',
    category: 'E-commerce',
    summary:
      'UGC pipeline + catalog ads unlocked profitable scale at a higher AOV.',
    actions: [
      'UGC creatives pipeline (hooks, angles, 1:1 & 9:16)',
      'Meta Advantage+ Shopping + broad with guardrails',
      'Granular Search queries + shopping feed clean-up',
      'LP speed fixes & CRO (social proof, bundles, sticky ATC)',
    ],
    metrics: [
      { label: 'Revenue', value: '+92%', icon: TrendingUp },
      { label: 'ROAS', value: '3.4x', icon: Rocket },
      { label: 'AOV', value: '+18%', icon: Users },
    ],
    highlightBadge: '↑ Revenue +92%',
    featured: true,
    testimonial: {
      quote:
        'Finally hit scale without killing margins. Reporting was crisp; decisions were easy.',
      author: 'Rahul M.',
      role: 'Founder, D2C Apparel',
      photoSrc: '/images/people/rahul-m.jpg',
      photoAlt: 'Rahul M profile photo',
    },
    heroSrc: '/images/case-studies/ecommerce-hero.jpg',
    heroAlt: 'Product grid',
  },
  {
    id: 'local-1',
    title: 'Local Services Lead Engine',
    category: 'Local / Services',
    summary:
      'Captured high-intent local demand and improved close rates with tighter routing.',
    actions: [
      'GMB optimization + review velocity framework',
      'Geo-mod + service-term search clusters',
      'Local links & citations clean-up',
      'Lead routing & follow-up SLAs with call-tracking',
    ],
    metrics: [
      { label: 'Leads', value: '+130%', icon: Users },
      { label: 'CPL', value: '-41%', icon: Rocket },
      { label: 'Lead→Sale', value: '+22%', icon: MousePointerClick },
    ],
    highlightBadge: '↑ Leads +130%',
    testimonial: {
      quote:
        'The phone finally rings with the right customers. CPL is sane now.',
      author: 'Priya S.',
      role: 'Owner, Home Services',
      photoSrc: '/images/people/priya-s.jpg',
      photoAlt: 'Priya S profile photo',
    },
    heroSrc: '/images/case-studies/local-hero.jpg',
    heroAlt: 'Service team',
  },
  {
    id: 'real-estate-1',
    title: 'High-Ticket Real Estate Lead Gen',
    category: 'Local / Services',
    summary: 'Generated qualified buyer leads for a luxury developer using geo-fenced Meta Ads and search intent.',
    actions: [
      'Geo-fenced FB/IG campaigns targeting HNI areas',
      'Google Search for high-intent luxury keywords',
      'WhatsApp lead nurture automation',
      'Virtual tour video creatives',
    ],
    metrics: [
      { label: 'Leads', value: '+210%', icon: Users },
      { label: 'CPL', value: '-35%', icon: TrendingUp },
      { label: 'Sales', value: '+$12M', icon: Rocket },
    ],
    highlightBadge: '↑ Sales +$12M',
    testimonial: {
      quote: 'Sold 12 luxury units in 3 months. Lead quality was superior to portal inquiries.',
      author: 'Sarah J.',
      role: 'Marketing Director, LuxeSpaces',
    },
    heroSrc: '/images/case-studies/real-estate-hero.jpg',
    heroAlt: 'Luxury real estate',
  },
  {
    id: 'saas-health',
    title: 'Scaling Telehealth App Adoption',
    category: 'SaaS',
    summary: 'Doubled active patient users for a healthcare app via trust-based content and app store ads.',
    actions: [
      'Apple Search Ads (ASA) aggressive scaling',
      'Trust-based video ads with doctor testimonials',
      'Retargeting churned sign-ups via email/SMS',
      'App store page A/B testing (CRO)',
    ],
    metrics: [
      { label: 'Installs', value: '+18K', icon: Rocket },
      { label: 'CPI', value: '-12%', icon: TrendingUp },
      { label: 'MAU', value: '+115%', icon: Users },
    ],
    highlightBadge: '↑ MAU +115%',
    testimonial: {
      quote: 'Patient intake volume doubled without adding support headcount. Efficient growth.',
      author: 'Dr. Arun P.',
      role: 'Founder, HealthFirst',
    },
    heroSrc: '/images/case-studies/health-hero.jpg',
    heroAlt: 'Health app dashboard',
  },
];

const filters = ['All', 'SaaS', 'E-commerce', 'Local / Services'] as const;
type Filter = (typeof filters)[number];

const cardVariants: Variants = {
  initial: { opacity: 0, x: 20 },
  animate: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function CaseStudiesSection() {
  const [active, setActive] = React.useState<Filter>('All');
  const visible = STUDIES.filter((s) => active === 'All' || s.category === active);

  return (
    <section
      id="case-studies"
      className="relative py-24 md:py-28 text-white bg-[#0b1220] overflow-hidden"
    >
      {/* backdrop glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-16 -translate-x-1/2 h-72 w-[52rem] rounded-full blur-3xl opacity-20 bg-cyan-400" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Real wins from campaigns we’ve run.
          </h2>
          <p className="mt-3 text-slate-300">
            A quick look at what we tested, how we executed, and the results that followed.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={[
                'rounded-full border px-4 py-1.5 text-sm transition',
                active === f
                  ? 'border-cyan-400/60 bg-cyan-400/15 text-cyan-200'
                  : 'border-white/10 bg-white/[0.02] text-slate-300 hover:bg-white/[0.05]',
              ].join(' ')}
              aria-pressed={active === f}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Horizontal Slider Container */}
        <div className="mt-12 flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar px-1">
          {visible.map((s, i) => (
            <motion.article
              key={s.id}
              custom={i}
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.1 }}
              className={[
                'relative flex flex-col flex-shrink-0 snap-center rounded-2xl p-6 md:p-8',
                'w-[90vw] md:w-[450px]', // Fixed width for slider items
                'border border-white/10 bg-white/[0.02] backdrop-blur',
                'transition-all hover:border-cyan-500/30', // Removed hover transform to avoid scroll glitches
                s.featured ? 'ring-1 ring-cyan-300/60' : '',
              ].join(' ')}
            >
              {s.featured && (
                <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl shadow-[0_0_80px_20px_rgba(34,211,238,0.35)]" />
              )}

              {/* Optional hero image */}
              {s.heroSrc && (
                <div className="mb-4 overflow-hidden rounded-xl border border-white/10">
                  <Image
                    src={s.heroSrc}
                    alt={s.heroAlt ?? s.title}
                    width={960}
                    height={640}
                    className="h-40 w-full object-cover"
                    priority={false}
                  />
                </div>
              )}

              {/* Category pill */}
              <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/50 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                {s.category}
              </div>

              <h3 className="text-2xl font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-2 text-slate-300">{s.summary}</p>

              <div className="my-6 h-px bg-white/10" />

              {/* Metrics */}
              <div className="mb-5 flex flex-wrap gap-2">
                {s.metrics.map((m, idx) => {
                  const Icon = m.icon ?? TrendingUp;
                  return (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm text-slate-200"
                    >
                      <Icon className="h-4 w-4 text-cyan-300" />
                      <span className="font-medium">{m.label}:</span>
                      <span className="font-semibold text-white">{m.value}</span>
                    </span>
                  );
                })}
              </div>

              {/* Actions */}
              <ul className="space-y-2 text-[15px] leading-6 text-slate-200">
                {s.actions.map((a, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="mt-2 block h-1.5 w-1.5 rounded-full bg-cyan-300/80" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>

              {/* Push footer down */}
              <div className="mt-auto" />

              {/* Footer: highlight + testimonial with HUMAN PHOTO */}
              <div className="mt-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/50 bg-emerald-400/10 px-3 py-1 text-sm font-semibold text-emerald-200">
                  <TrendingUp className="h-4 w-4" />
                  {s.highlightBadge}
                </div>

                {s.testimonial && (
                  <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="flex items-start gap-3">
                      {s.testimonial.photoSrc ? (
                        <Image
                          src={s.testimonial.photoSrc}
                          alt={s.testimonial.photoAlt ?? s.testimonial.author}
                          width={40}
                          height={40}
                          className="h-10 w-10 rounded-full object-cover ring-2 ring-cyan-400/40"
                        />
                      ) : (
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-200 font-bold">
                          {s.testimonial.author.split(' ').map(n => n[0]).slice(0, 2)}
                        </div>
                      )}

                      <div className="text-sm">
                        <div className="flex items-start gap-2 text-slate-200">
                          <Quote className="mt-0.5 h-4 w-4 opacity-60" />
                          <span className="italic">{s.testimonial.quote}</span>
                        </div>
                        <div className="mt-1 text-xs text-slate-400">
                          — {s.testimonial.author}, {s.testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Card CTAs (subtle) */}
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-lg bg-cyan-400 px-4 py-2 text-sm font-bold text-black hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70"
                >
                  Book a Strategy Call
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/[0.02] px-4 py-2 text-sm font-semibold text-slate-200 hover:bg-white/[0.06]"
                >
                  See Full Case Study
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
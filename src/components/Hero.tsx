'use client';

import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle, Sparkles } from 'lucide-react';
import AIWave from './AIWave';

type Props = { setShowModal?: (v: boolean) => void };

export default function Hero({ setShowModal }: Props) {
  return (
    <section className="relative overflow-hidden bg-[#0b1020] text-white" aria-label="Hero">
      {/* Aurora gradient sweep (looping, SSR-safe) */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 opacity-100"
        style={{
          background:
            'linear-gradient(120deg, rgba(139,92,246,0.18), rgba(236,72,153,0.14), rgba(56,189,248,0.14))',
          backgroundSize: '200% 200%',
        }}
        animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
        transition={{ duration: 18, ease: 'easeInOut', repeat: Infinity }}
      />

      {/* Breathing glow blobs (fixed positions; no AnimatePresence) */}
      <div>
        <GlowBlobs />
      </div>

      {/* AI Wave Animation */}
      <AIWave />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-16 sm:pt-40 md:pt-48 md:pb-24">
        {/* Micro badge */}
        <motion.div
          initial={{ y: -8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.45 }}
          className="mx-auto mb-6 w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 backdrop-blur shadow-none"
        >
          <span className="inline-flex items-center gap-1">
            <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
            AI-assisted, revenue-first marketing
          </span>
        </motion.div>

        {/* Headline + shimmer overlay */}
        <motion.h1
          initial={{ y: 14, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="mx-auto max-w-6xl text-center text-[2.4rem] font-extrabold leading-[1.07] tracking-tight sm:text-6xl md:text-[4.25rem] text-white"
        >
          Grow Faster with{' '}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
              Proven Digital
            </span>
            <div><Shimmer /></div>
          </span>{' '}
          Marketing{' '}
          <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-emerald-300 bg-clip-text text-transparent">
            Strategies
          </span>
          .
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="mx-auto mt-6 max-w-2xl text-center text-lg text-slate-300"
        >
          We blend performance strategy with rapid creative testing to lower CAC, grow qualified traffic,
          and turn clicks into customers.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.45, delay: 0.12 }}
          className="mx-auto mt-10 flex w-full flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <button
            onClick={() => setShowModal?.(true)}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-400 px-8 py-4 text-sm font-bold text-black shadow-[0_10px_30px_rgba(34,211,238,0.25)] transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          >
            Generate Free SEO Audit
            <ArrowRight className="h-4.5 w-4.5" />
          </button>

          <a
            href="#case-studies"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/5 px-8 py-4 text-sm font-semibold text-white shadow-none hover:bg-white/10 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-300"
          >
            <PlayCircle className="h-5 w-5 text-fuchsia-300" />
            Watch Demo
          </a>
        </motion.div>

        {/* Stats */}
        <motion.ul
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.45, delay: 0.18 }}
          className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-6 text-center sm:grid-cols-3"
        >
          <Stat kpi="98%" label="Client Satisfaction" />
          <Stat kpi="3.2x" label="Average ROI" />
          <Stat kpi="150+" label="Projects Completed" />
        </motion.ul>
      </div>

      {/* Subtle bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[#0b1020]" />
    </section>
  );
}

/* ---------- small pieces ---------- */

function Stat({ kpi, label }: { kpi: string; label: string }) {
  return (
    <li className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-6 shadow-none backdrop-blur transition-colors">
      <div className="text-3xl font-bold text-white">{kpi}</div>
      <div className="mt-2 text-sm text-slate-300">{label}</div>
    </li>
  );
}

function Shimmer() {
  return (
    <motion.span
      aria-hidden
      initial={{ x: '-110%' }}
      animate={{ x: '110%' }}
      transition={{ repeat: Infinity, duration: 7, ease: 'linear', delay: 1 }}
      className="pointer-events-none absolute inset-y-0 -inset-x-10 bg-gradient-to-r from-transparent via-white/10 to-transparent"
      style={{ mixBlendMode: 'overlay' }}
    />
  );
}

function GlowBlobs() {
  return (
    <>
      {/* Left-top cyan/emerald blob */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-[-6%] top-[-8%] -z-10 h-[26rem] w-[40rem] rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(34,211,238,0.26), rgba(16,185,129,0.16), transparent 70%)',
        }}
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Right-top violet/fuchsia blob */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-[-6%] -z-10 h-[34rem] w-[50rem] rounded-full blur-[90px]"
        style={{
          background:
            'radial-gradient(60% 40% at 50% 40%, rgba(139,92,246,0.24), rgba(236,72,153,0.18), rgba(59,130,246,0.12) 60%, transparent 70%)',
        }}
        animate={{ y: [0, 14, 0] }}
        transition={{ duration: 9.5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Bottom center soft blue/pink blob */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 bottom-[-14%] -z-10 h-[28rem] w-[46rem] -translate-x-1/2 rounded-full blur-[80px]"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(59,130,246,0.16), rgba(236,72,153,0.12), transparent 70%)',
        }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
    </>
  );
}
'use client';

import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Compass,
  Lightbulb,
  Rocket as RocketIcon,
  Wrench,
  LineChart,
  Trophy,
} from 'lucide-react';

/* ----------------------------- DATA ----------------------------- */

type Stage = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  headline: string;
  sub: string;
  bullets: string[];
  chips: string[];
};

const STAGES: Stage[] = [
  {
    icon: Compass,
    title: 'Discover',
    headline: 'Discover: get context & truth',
    sub: 'Align on goals, users, constraints, and what “good” looks like.',
    bullets: [
      'Stakeholder sync & success criteria',
      'Funnel & analytics read-out',
      'User/JTBD + competitive sweep',
      'Unknowns, risks & dependencies surfaced',
    ],
    chips: ['North-star metrics', 'Problem framing', 'Shared context'],
  },
  {
    icon: Lightbulb,
    title: 'Audit & Strategy',
    headline: 'Audit & Strategy: choose the shortest path',
    sub: 'Translate insights into a focused, testable plan.',
    bullets: [
      'Owned/paid/earned audit + data QA',
      'Hypothesis backlog w/ impact–effort',
      '90-day roadmap & guardrails',
      'Success thresholds + stop rules',
    ],
    chips: ['Clarity', 'Speed to signal', 'Confidence'],
  },
  {
    icon: RocketIcon,
    title: 'Launch',
    headline: 'Launch: ship the MVP safely',
    sub: 'Smallest viable slice live with telemetry from day one.',
    bullets: [
      'Tracking, alerts & runbooks in place',
      'Assets/flows live across channels',
      'Budget caps & fail-safes',
      'Live dashboard for signal',
    ],
    chips: ['TTS ↓', 'Baseline set', 'Trusted data'],
  },
  {
    icon: Wrench,
    title: 'Iterate',
    headline: 'Iterate: compound quick wins',
    sub: 'Relentless tests on creative, audience, UX, and offers.',
    bullets: [
      'Creative/copy rotations weekly',
      'Audience & query shaping',
      'CRO micro-tests (friction ↓, proof ↑)',
      'Speed/SEO hygiene',
    ],
    chips: ['CVR ↑', 'CPA ↓', 'Quality ↑'],
  },
  {
    icon: LineChart,
    title: 'Scale',
    headline: 'Scale: double-down & expand',
    sub: 'Roll winners to new segments/geos and automate ops.',
    bullets: [
      'Budget unlocks with guardrails',
      'New segments/geos & channel mix',
      'Automations & playbooks',
      'Capacity planning & SLAs',
    ],
    chips: ['Volume ↑', 'Consistency', 'Predictability'],
  },
  {
    icon: Trophy,
    title: 'Sustain',
    headline: 'Sustain: keep the gains',
    sub: 'Reviews, alerts, and knowledge compounding for durability.',
    bullets: [
      'QBRs & scorecards',
      'Learning library & post-mortems',
      'Backlog grooming',
      'Roadmap refresh',
    ],
    chips: ['Durability', 'Lower risk', 'Faster learning'],
  },
];

/* ---------------------------- COMPONENT ---------------------------- */

export default function ProcessJourneyInline() {
  const [active, setActive] = React.useState(0);
  const pct = (active + 1) / STAGES.length; // 0..1
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <section id="process" className="relative py-16 md:py-20 bg-[#0a0f1c] text-white transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header (subtitle removed per request) */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[2.25rem] md:text-5xl font-semibold tracking-tight text-white">Our Process</h2>
        </div>

        {/* INLINE STAGE ROW */}
        <div ref={containerRef} className="mt-8">
          <div className="relative">
            {/* Row of stages (icons + labels) */}
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {STAGES.map((s, i) => {
                const Icon = s.icon;
                const activeStage = i === active;
                return (
                  <li key={s.title}>
                    <button
                      onClick={() => setActive(i)}
                      className="group inline-flex items-center gap-2 focus:outline-none"
                      aria-current={activeStage ? 'step' : undefined}
                    >
                      <span
                        className={[
                          'flex h-8 w-8 items-center justify-center rounded-full ring-1 transition',
                          activeStage
                            ? 'ring-cyan-400/50 bg-cyan-400/15'
                            : 'ring-white/10 bg-white/[0.03] group-hover:ring-white/20',
                        ].join(' ')}
                      >
                        <Icon className={activeStage ? 'h-4.5 w-4.5 text-cyan-300' : 'h-4.5 w-4.5 text-slate-300'} />
                      </span>
                      <span
                        className={[
                          'text-sm tracking-wide',
                          activeStage ? 'text-cyan-200 font-semibold' : 'text-slate-300 group-hover:text-slate-200',
                        ].join(' ')}
                      >
                        {i + 1}. {s.title}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Journey line under the row */}
            <div className="relative mt-4 h-[2px] w-full rounded-full bg-white/10">
              <motion.div
                className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-300 shadow-[0_0_12px_2px_rgba(34,211,238,0.45)]"
                style={{ width: `${pct * 100}%` }}
                transition={{ type: 'spring', stiffness: 140, damping: 18 }}
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,transparent_0%,transparent_60%,rgba(255,255,255,0.10)_62%,transparent_70%)] bg-[length:200%_100%] animate-[shine_2.2s_linear_infinite]" />
            </div>
          </div>
        </div>

        {/* ROCKET + CONTENT */}
        {/* Increased top margin so the rocket sits further below the line */}
        <div className="mt-16 grid gap-10 lg:grid-cols-[420px_1fr] items-start">
          {/* ROCKET (standalone, lowered) */}
          <div className="relative h-[260px]">
            {/* subtle stars - Dark Mode Only */}
            <div className="absolute inset-0 pointer-events-none opacity-100 transition-opacity duration-300">
              <div className="animate-pulse absolute top-5 left-16 h-1 w-1 rounded-full bg-white/40" />
              <div className="animate-pulse absolute top-12 right-28 h-1 w-1 rounded-full bg-white/30" />
              <div className="animate-pulse absolute top-24 left-1/2 h-1 w-1 rounded-full bg-white/30" />
            </div>

            {/* pad */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 h-1.5 w-40 rounded bg-white/10" />
            <div className="absolute bottom-7 left-1/2 -translate-x-1/2 h-4 w-28 rounded bg-white/5 border border-white/10" />

            {/* soft ground haze */}
            <motion.div
              className="absolute bottom-6 left-1/2 -translate-x-1/2"
              animate={{ opacity: [0.12, 0.25, 0.12] }}
              transition={{ duration: 2.2, repeat: Infinity }}
            >
              <div className="h-6 w-48 rounded-full bg-white/5 blur-md" />
            </motion.div>

            {/* exhaust smoke puffs (multiple layers for smoother effect) */}
            {['-10px', '0px', '10px'].map((x, idx) => (
              <motion.div
                key={idx}
                className="absolute bottom-9 left-1/2"
                style={{ translateX: `calc(-50% + ${x})` }}
                initial={{ opacity: 0, y: 0, scale: 0.9 }}
                animate={
                  pct > 0.12
                    ? { opacity: [0.15, 0.55, 0], y: [-2, -20, -36], scale: [0.9, 1, 1.05] }
                    : { opacity: 0 }
                }
                transition={{ duration: 1.8, repeat: Infinity, delay: idx * 0.2 }}
              >
                <div className="relative">
                  <span className="block h-7 w-7 rounded-full bg-white/10 blur-sm" />
                </div>
              </motion.div>
            ))}

            {/* rocket container handles vertical lift (spring) */}
            <motion.div
              className="absolute bottom-9 left-1/2 -translate-x-1/2"
              animate={{ y: -pct * 160 }} // higher range, but the whole block is lower on the page now
              transition={{ type: 'spring', stiffness: 120, damping: 14 }}
            >
              {/* inner handles rotate jiggle (tween to avoid spring keyframe error) */}
              <motion.div
                animate={pct === 1 ? { rotate: [-2, 2, 0] } : { rotate: 0 }}
                transition={pct === 1 ? { duration: 0.5, ease: 'easeInOut' } : { duration: 0.2 }}
              >
                <div className="relative">
                  {/* flame */}
                  <motion.div
                    className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-4 w-2 rounded-full"
                    animate={{ scaleY: pct > 0.1 ? [1, 1.45, 1] : 0 }}
                    transition={{ duration: 0.35, repeat: Infinity }}
                    style={{
                      background:
                        'radial-gradient(circle at 50% 30%, rgba(251,191,36,0.9), rgba(59,130,246,0.0) 60%), linear-gradient(to bottom, #fb923c, #f59e0b)',
                      filter: 'drop-shadow(0 0 8px rgba(251,191,36,0.8))',
                    }}
                  />
                  {/* body */}
                  <div className="flex h-16 w-10 items-center justify-center rounded-[12px] border border-white/10 bg-white/10 backdrop-blur shadow-none">
                    <RocketIcon className="h-8 w-8 text-cyan-300" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* CONTENT PANEL */}
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-cyan-400/5 blur-[40px] opacity-100 transition-opacity" />
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur p-6 md:p-8 shadow-none">
              <AnimatePresence mode="wait">
                <motion.div
                  key={STAGES[active].title}
                  initial={{ y: 8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -8, opacity: 0 }}
                  transition={{ duration: 0.22 }}
                >
                  <h3 className="text-2xl md:text-[1.75rem] font-semibold tracking-tight text-white">
                    {STAGES[active].headline}
                  </h3>
                  <p className="mt-2 text-slate-300">{STAGES[active].sub}</p>

                  <div className="mt-5 grid gap-4">
                    <ul className="space-y-2 text-[15px] leading-6 text-slate-200">
                      {STAGES[active].bullets.map((b) => (
                        <li key={b} className="flex gap-2">
                          <span className="mt-[9px] block h-1.5 w-1.5 rounded-full bg-cyan-300/80" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {STAGES[active].chips.map((c) => (
                        <span
                          key={c}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm text-slate-200"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* MOBILE: simple accordion using same data */}
        <div className="lg:hidden mt-10 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.02] shadow-none">
          {STAGES.map((s, i) => {
            const Icon = s.icon;
            const open = i === active;
            return (
              <div key={s.title} className="p-4">
                <button
                  onClick={() => setActive(i === active ? -1 : i)}
                  className="flex w-full items-center justify-between gap-3 text-left"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                      <Icon className="h-5 w-5 text-cyan-300" />
                    </span>
                    <span className="font-semibold text-white">{i + 1}. {s.title}</span>
                  </div>
                  <motion.span
                    initial={false}
                    animate={{ rotate: open ? 45 : 0 }}
                    className="text-xl leading-none text-slate-400"
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-3 text-slate-300">{s.sub}</p>
                      <ul className="mt-3 space-y-2 text-[15px] leading-6 text-slate-200">
                        {s.bullets.map((b) => (
                          <li key={b} className="flex gap-2">
                            <span className="mt-[9px] block h-1.5 w-1.5 rounded-full bg-cyan-300/80" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {s.chips.map((c) => (
                          <span key={c} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm text-slate-200">
                            {c}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* shimmer keyframes */}
      <style jsx>{`
        @keyframes shine {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </section>
  );
}
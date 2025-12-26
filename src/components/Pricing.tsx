'use client';

import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, Reorder } from 'framer-motion';
import {
  // Pricing icons
  CheckCircle2,
  Star,
  Sparkles,
  BadgePercent,
  // Builder icons
  Plus,
  Check,
  X,
  Wand2,
  ArrowUpDown,
  Minus,
  FileText,
} from 'lucide-react';

/* =========================================================================
   PRICING + CUSTOM BUILDER IN ONE FILE
   ========================================================================= */

/* --------------------------- Shared helpers --------------------------- */

const fmt = (n: number) => `$${Math.round(n).toLocaleString()}`;

/** Glitter background (tint: 'violet' | 'teal') */
function Glitter({ count = 36, tint = 'violet' as 'violet' | 'teal' }) {
  const items = React.useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 60}%`,
        size: 1.1 + Math.random() * 2.2,
        delay: Math.random() * 2,
        dur: 1.6 + Math.random() * 1.6,
      })),
    [count]
  );

  const shadow =
    tint === 'teal'
      ? 'drop-shadow(0 0 6px rgba(56,189,248,0.55))'
      : 'drop-shadow(0 0 6px rgba(139,92,246,0.55))';

  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      {items.map((s) => (
        <motion.span
          key={s.id}
          className="absolute rounded-full"
          style={{
            left: s.left,
            top: s.top,
            width: s.size,
            height: s.size,
            background:
              'radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.15) 70%, rgba(255,255,255,0) 100%)',
            filter: shadow,
          }}
          initial={{ opacity: 0.15, scale: 0.85 }}
          animate={{ opacity: [0.15, 0.9, 0.15], scale: [0.85, 1.08, 0.85] }}
          transition={{ duration: s.dur, delay: s.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}

/** Tiny celebratory particle burst (used on yearly switch) */
function BurstParticles() {
  const N = 16;
  const particles = Array.from({ length: N }).map((_, i) => ({
    id: i,
    x: (Math.random() - 0.5) * 220,
    y: -Math.random() * 100 - 20,
    scale: 0.8 + Math.random() * 0.6,
    rot: (Math.random() - 0.5) * 90,
    delay: Math.random() * 0.05,
  }));

  return (
    <motion.div
      className="pointer-events-none absolute left-1/2 top-28 z-10"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1.4, ease: 'easeOut' }}
    >
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute block h-2 w-2 rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0.2) 70%, rgba(255,255,255,0) 100%)',
            filter: 'drop-shadow(0 0 6px rgba(56,189,248,0.7))',
          }}
          initial={{ x: 0, y: 0, scale: p.scale, rotate: 0 }}
          animate={{ x: p.x, y: p.y, rotate: p.rot }}
          transition={{ duration: 0.9, delay: p.delay, ease: 'easeOut' }}
        />
      ))}
    </motion.div>
  );
}

/* ============================= PRICING ============================== */

type Plan = {
  id: string;
  name: string;
  monthly: number;
  blurb: string;
  features: string[];
  cta: string;
  popular?: boolean;
};

const PLANS: Plan[] = [
  {
    id: 'basic',
    name: 'Basic',
    monthly: 200,
    blurb: 'Essentials to establish presence and start capturing demand.',
    features: [
      'Google Ads (up to $800 budget)',
      'Meta Ads (up to $300 budget)',
      'Basic on-page SEO & keywords',
      'Social media optimization',
      '5 graphic designs',
      'Monthly performance review',
    ],
    cta: 'Get started',
  },
  {
    id: 'business',
    name: 'Business',
    monthly: 500,
    popular: true,
    blurb: 'Growing teams who want dependable traffic and reporting.',
    features: [
      'Google Ads (up to $2k budget)',
      'Meta Ads (up to $800 budget)',
      'Advanced SEO (on-page + technical)',
      'Social media management',
      '10 graphic designs',
      'Bi-weekly content updates',
      'Monthly analytics report',
    ],
    cta: 'Get started',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    monthly: 750,
    blurb: 'Advanced features, content, and scale for unlimited users.',
    features: [
      'Google Ads (>$4k budget)',
      'Meta Ads (>$2k budget)',
      'Full SEO (content + links)',
      'Complete social strategy',
      '20 graphic designs & banners',
      '1–2 blog posts/month',
      'Advanced analytics report',
    ],
    cta: 'Get started',
  },
];

const SAVE_RATE = 0.17; // 17% off yearly

function PricingStellarToggle() {
  const [yearly, setYearly] = React.useState(false);
  const [burstKey, setBurstKey] = React.useState(0);

  const toggle = () => {
    setYearly((y) => {
      const next = !y;
      if (next) setBurstKey((k) => k + 1);
      return next;
    });
  };

  const bgVariants = {
    monthly: {
      background:
        'radial-gradient(60% 40% at 50% 0%, rgba(139,92,246,0.24), rgba(236,72,153,0.18), rgba(59,130,246,0.12) 60%, transparent 70%)',
    },
    yearly: {
      background:
        'radial-gradient(60% 40% at 50% 0%, rgba(34,211,238,0.28), rgba(56,189,248,0.2), rgba(16,185,129,0.16) 60%, transparent 70%)',
    },
  } as const;

  return (
    <section id="pricing-main" className="relative overflow-hidden bg-[#0b1020] py-20 text-white md:py-24">
      <motion.div
        className="pointer-events-none absolute left-1/2 top-0 -z-20 h-[22rem] w-[80rem] -translate-x-1/2 blur-3xl"
        variants={bgVariants}
        animate={yearly ? 'yearly' : 'monthly'}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      />
      <Glitter tint={yearly ? 'teal' : 'violet'} count={40} />
      <AnimatePresence>{yearly && <BurstParticles key={`burst-${burstKey}`} />}</AnimatePresence>

      <div className="mx-auto max-w-7xl px-6">
        {/* Header + Toggle */}
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">Plans that scale with you</h2>
          <p className="mt-3 text-slate-300">Transparent pricing. Upgrade any time.</p>

          <div className="mt-6 flex flex-col items-center gap-4">
            <div className="flex items-center justify-center gap-3">
              <span className={`text-sm ${!yearly ? 'text-white' : 'text-slate-400'}`}>Monthly</span>

              <button
                onClick={toggle}
                className="relative h-9 w-[86px] rounded-full bg-white/10 ring-1 ring-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400/60"
                aria-label="Toggle yearly billing"
              >
                <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/10 to-white/[0.02]" />
                <motion.span
                  layout
                  className="absolute left-1 top-1 h-7 w-7 rounded-full bg-white"
                  animate={{ x: yearly ? 48 : 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                />
                <motion.span className="absolute left-2 top-[11px] h-2 w-2 rounded-full" animate={{ backgroundColor: yearly ? '#2dd4bf' : '#a78bfa' }} />
                <motion.span className="absolute right-2 top-[11px] h-2 w-2 rounded-full" animate={{ backgroundColor: yearly ? '#2dd4bf' : '#a78bfa' }} />
              </button>

              <span className={`text-sm ${yearly ? 'text-white' : 'text-slate-400'}`}>Yearly</span>

              <AnimatePresence>
                {yearly && (
                  <motion.span
                    initial={{ y: -8, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -8, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="inline-flex items-center gap-1 rounded-full bg-emerald-400/15 px-2.5 py-1 text-xs font-semibold text-emerald-200 ring-1 ring-emerald-400/40"
                  >
                    <BadgePercent className="h-3.5 w-3.5" />
                    Save 17% (2 months free)
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
            <p className="md:hidden text-xs text-slate-500 flex items-center justify-center gap-1">
              <span className="animate-pulse">←</span> Swipe cards <span className="animate-pulse">→</span>
            </p>

            <motion.div
              className="mx-auto mt-6 h-[1px] w-28 rounded-full"
              animate={{
                background: yearly
                  ? 'linear-gradient(90deg, rgba(45,212,191,0.9), rgba(56,189,248,0.9), rgba(34,211,238,0.9))'
                  : 'linear-gradient(90deg, rgba(139,92,246,0.9), rgba(236,72,153,0.9), rgba(59,130,246,0.9))',
                boxShadow: yearly ? '0 0 18px rgba(56,189,248,0.4)' : '0 0 18px rgba(236,72,153,0.35)',
              }}
              transition={{ duration: 0.45, ease: 'easeInOut' }}
            />
          </div>
        </div>

        {/* Cards */}
        <div className="mt-12 flex md:grid gap-6 sm:gap-7 md:grid-cols-3 overflow-x-auto md:overflow-visible pb-8 md:pb-0 snap-x snap-mandatory no-scrollbar px-1">
          {PLANS.map((p, i) => {
            const isPopular = !!p.popular;
            const yearlyTotal = Math.round(p.monthly * 12 * (1 - SAVE_RATE));
            const perMonthYearly = Math.round(yearlyTotal / 12);
            return (
              <motion.article
                key={p.id + (yearly ? '-y' : '-m')}
                initial={{ y: 14, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.35, ease: 'easeOut', delay: i * 0.06 }}
                className={[
                  'relative flex flex-col overflow-hidden rounded-2xl border p-6 md:p-8',
                  'flex-shrink-0 w-[85vw] md:w-auto snap-center',
                  'bg-white/[0.02] backdrop-blur',
                  'border-white/10 transition-all duration-300',
                  isPopular
                    ? yearly
                      ? 'ring-1 ring-teal-300/50 shadow-[0_0_48px_rgba(56,189,248,0.22)]'
                      : 'ring-1 ring-violet-400/50 shadow-[0_0_44px_rgba(139,92,246,0.22)]'
                    : 'hover:shadow-[0_0_30px_rgba(148,163,184,0.08)]',
                ].join(' ')}
              >
                {/* sheen */}
                <motion.div
                  className="pointer-events-none absolute inset-x-0 -top-[2px] h-[3px] rounded-t-2xl"
                  animate={{
                    background: yearly
                      ? 'linear-gradient(90deg, transparent, rgba(56,189,248,0.7), transparent)'
                      : 'linear-gradient(90deg, transparent, rgba(139,92,246,0.7), transparent)',
                  }}
                  transition={{ duration: 0.5 }}
                />

                {isPopular && (
                  <div
                    className={[
                      'mb-3 inline-flex w-fit items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ring-1',
                      yearly ? 'bg-teal-500/15 text-teal-200 ring-teal-400/40' : 'bg-violet-500/15 text-violet-200 ring-violet-400/40',
                    ].join(' ')}
                  >
                    <Star className="h-3.5 w-3.5" />
                    Most popular
                  </div>
                )}

                <h3 className="text-2xl font-semibold tracking-tight">{p.name}</h3>
                <p className="mt-2 text-sm text-slate-300">{p.blurb}</p>

                <motion.div layout className="mt-6 rounded-xl bg-white/[0.02] p-4 ring-1 ring-white/10">
                  <div className="text-center">
                    <AnimatePresence mode="wait" initial={false}>
                      {!yearly ? (
                        <motion.div
                          key="m-price"
                          initial={{ y: 8, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -8, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <span className="text-5xl font-bold md:text-6xl">{fmt(p.monthly)}</span>
                          <span className="pl-1 text-lg font-normal text-slate-400">/Monthly</span>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="y-price"
                          initial={{ y: 8, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -8, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <div className="text-[15px] text-slate-300">Billed yearly — <span className="font-semibold">{fmt(yearlyTotal)}</span></div>
                          <div className="mt-1">
                            <span className="text-5xl font-bold md:text-6xl">{fmt(perMonthYearly)}</span>
                            <span className="pl-1 text-lg font-normal text-slate-400">/mo effective</span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Link href={`/contact?plan=${p.id}`} className="w-full block">
                    <motion.button
                      layout
                      className={[
                        'mt-4 w-full rounded-lg py-3 text-sm font-bold',
                        yearly
                          ? 'bg-gradient-to-r from-teal-400 via-sky-400 to-cyan-400 text-black hover:brightness-110'
                          : 'bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 text-black hover:brightness-110',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40',
                      ].join(' ')}
                    >
                      {p.cta}
                    </motion.button>
                  </Link>

                  <AnimatePresence>
                    {yearly && (
                      <motion.div
                        initial={{ y: -6, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -6, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="mt-3 flex items-center justify-center gap-1 text-xs font-semibold text-emerald-200"
                      >
                        <BadgePercent className="h-3.5 w-3.5" />
                        You’re saving 17% vs monthly
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                <div className="my-6 h-px bg-white/10" />

                <ul className="space-y-3 text-[15px] leading-6">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-slate-200">
                      <CheckCircle2 className={`${yearly ? 'text-teal-300/90' : 'text-violet-300/90'} mt-0.5 h-4.5 w-4.5`} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="pointer-events-none absolute right-3 top-3 opacity-70">
                  <Sparkles className={`${yearly ? 'text-teal-300/60' : 'text-violet-300/60'} h-4 w-4`} />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ========================= CUSTOM PLANS BUILDER ========================= */

type Service = {
  id: string;
  name: string;
  price: number; // monthly base
  type: 'fixed' | 'perUnit';
  blurb?: string;
};

const SERVICES: Service[] = [
  { id: 'google', name: 'Google Ads', price: 75, type: 'fixed', blurb: 'Includes setup & management' },
  { id: 'meta', name: 'Meta Ads', price: 75, type: 'fixed', blurb: 'Includes setup & management' },
  { id: 'smm', name: 'Social Media Mgmt (10 posts)', price: 100, type: 'fixed', blurb: 'Creative, captions & scheduling' },
  { id: 'seo', name: 'Complete SEO', price: 150, type: 'fixed', blurb: 'On-page, off-page & technical' },
  { id: 'blogs', name: 'Blog Writing', price: 50, type: 'perUnit', blurb: 'SEO-optimized, 800–1000 words' },
];

const YEARLY_DISCOUNT = 0.15; // 15%
const BUNDLE_DISCOUNT_THRESHOLD = 3;
const BUNDLE_DISCOUNT = 0.10; // 10%

function Row({ label, value, dim = false }: { label: string; value: string; dim?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <div className={dim ? 'text-slate-400' : 'text-slate-300'}>{label}</div>
      <div className={dim ? 'text-slate-300' : 'text-slate-100'}>{value}</div>
    </div>
  );
}

function CustomPackageBuilder() {
  const [selected, setSelected] = React.useState<string[]>([]);
  const [order, setOrder] = React.useState<string[]>([]);
  const [blogQty, setBlogQty] = React.useState<number>(0);
  const [yearly, setYearly] = React.useState(false);

  React.useEffect(() => {
    const next = selected.filter((id) => order.includes(id)).concat(selected.filter((id) => !order.includes(id)));
    setOrder(next);
  }, [selected]);

  const add = (id: string) => {
    if (id === 'blogs') {
      setBlogQty((q) => q + 1);
      return;
    }
    if (!selected.includes(id)) setSelected((s) => [...s, id]);
  };

  const remove = (id: string) => {
    if (id === 'blogs') {
      setBlogQty(0);
      return;
    }
    setSelected((s) => s.filter((x) => x !== id));
    setOrder((o) => o.filter((x) => x !== id));
  };

  const incBlog = () => setBlogQty((q) => Math.min(q + 1, 50));
  const decBlog = () => setBlogQty((q) => Math.max(q - 1, 0));

  // Pricing
  const fixedServices = selected.map((id) => SERVICES.find((s) => s.id === id)!).filter(Boolean);
  const fixedSubtotal = fixedServices.reduce((sum, s) => sum + s.price, 0);
  const blogsSubtotal = blogQty * SERVICES.find((s) => s.id === 'blogs')!.price;
  const baseMonthly = fixedSubtotal + blogsSubtotal;

  // bundle discount counts blogs as one choice if qty>0
  const serviceCount = selected.length + (blogQty > 0 ? 1 : 0);
  const bundleSavings = serviceCount >= BUNDLE_DISCOUNT_THRESHOLD ? baseMonthly * BUNDLE_DISCOUNT : 0;
  const monthlyAfterBundle = baseMonthly - bundleSavings;

  const yearlySavings = yearly ? monthlyAfterBundle * YEARLY_DISCOUNT : 0;
  const monthlyFinal = yearly ? monthlyAfterBundle - yearlySavings : monthlyAfterBundle;
  const billedYearlyTotal = yearly ? Math.round(monthlyFinal * 12) : null;

  const themeGlow = yearly ? 'from-teal-400 via-sky-400 to-cyan-400' : 'from-violet-500 via-fuchsia-500 to-cyan-400';

  return (
    <section className="relative bg-[#0b1020] text-white py-20 md:py-24 overflow-hidden">
      <motion.div
        className="pointer-events-none absolute left-1/2 top-0 -z-20 h-[24rem] w-[78rem] -translate-x-1/2 blur-3xl"
        animate={{
          background: yearly
            ? 'radial-gradient(60% 40% at 50% 0%, rgba(34,211,238,0.28), rgba(56,189,248,0.2), rgba(16,185,129,0.16) 60%, transparent 70%)'
            : 'radial-gradient(60% 40% at 50% 0%, rgba(139,92,246,0.26), rgba(236,72,153,0.2), rgba(59,130,246,0.12) 60%, transparent 70%)',
        }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      />
      <Glitter tint={yearly ? 'teal' : 'violet'} />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-[2.25rem] md:text-5xl font-semibold tracking-tight">Build your custom package</h2>
          <p className="mt-3 text-slate-300">Pick what you need. The total updates in real time. Drag to re-order.</p>
          <motion.div
            className="mx-auto mt-6 h-[2px] w-28 rounded-full"
            animate={{
              background: yearly
                ? 'linear-gradient(90deg, rgba(45,212,191,0.9), rgba(56,189,248,0.9), rgba(34,211,238,0.9))'
                : 'linear-gradient(90deg, rgba(139,92,246,0.9), rgba(236,72,153,0.9), rgba(59,130,246,0.9))',
              boxShadow: yearly ? '0 0 18px rgba(56,189,248,0.4)' : '0 0 18px rgba(236,72,153,0.35)',
            }}
            transition={{ duration: 0.45, ease: 'easeInOut' }}
          />
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* LEFT: services */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur p-5 md:p-6">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Wand2 className="h-5 w-5 text-violet-300" />
                <h3 className="text-lg font-semibold">Available services</h3>
              </div>
              <span className="text-xs text-slate-400">Click to add • Blogs have quantity</span>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              {SERVICES.map((s) => {
                const isSelected = selected.includes(s.id) || (s.id === 'blogs' && blogQty > 0);
                return (
                  <li key={s.id}>
                    <motion.button
                      whileTap={{ scale: 0.98 }}
                      onClick={() => add(s.id)}
                      className={[
                        'group w-full rounded-xl border p-4 text-left transition',
                        'bg-white/[0.02] backdrop-blur',
                        isSelected ? 'border-violet-400/40 ring-1 ring-violet-400/30' : 'border-white/10 hover:bg-white/[0.04]',
                      ].join(' ')}
                    >
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <div className="font-semibold">{s.name}</div>
                          <div className="text-xs text-slate-400">
                            {s.type === 'fixed' ? `${fmt(s.price)}/mo` : `${fmt(s.price)}/each`} {s.blurb ? `— ${s.blurb}` : ''}
                          </div>
                        </div>
                        <div
                          className={[
                            'flex h-9 w-9 items-center justify-center rounded-lg ring-1',
                            isSelected ? 'bg-violet-500/15 ring-violet-400/50 text-violet-200' : 'bg-white/[0.03] ring-white/10 text-slate-200',
                          ].join(' ')}
                        >
                          {isSelected ? <Check className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                        </div>
                      </div>

                      {s.id === 'blogs' && blogQty > 0 && (
                        <div className="mt-3 flex items-center gap-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              decBlog();
                            }}
                            className="rounded-md border border-white/10 bg-white/[0.02] p-1 hover:bg-white/[0.06]"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <div className="rounded-md border border-white/10 bg-white/[0.02] px-3 py-1 text-sm">{blogQty} {blogQty === 1 ? 'blog' : 'blogs'}</div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              incBlog();
                            }}
                            className="rounded-md border border-white/10 bg-white/[0.02] p-1 hover:bg-white/[0.06]"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setBlogQty(0);
                            }}
                            className="ml-2 text-xs text-slate-400 hover:text-slate-200"
                          >
                            Clear blogs
                          </button>
                        </div>
                      )}
                    </motion.button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* RIGHT: calculator */}
          <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur p-5 md:p-6">
            <div className="absolute right-3 top-3 flex items-center gap-1 text-xs text-slate-400">
            </div>

            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-cyan-300" />
                <h3 className="text-lg font-semibold">Your selection</h3>
              </div>

              <div className="flex items-center gap-3">
                <span className={`text-xs ${!yearly ? 'text-white' : 'text-slate-400'}`}>Monthly</span>
                <button onClick={() => setYearly((y) => !y)} className="relative h-8 w-[80px] rounded-full bg-white/10 ring-1 ring-white/10 focus:outline-none">
                  <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/10 to-white/[0.02]" />
                  <motion.span layout className="absolute left-1 top-1 h-6 w-6 rounded-full bg-white" animate={{ x: yearly ? 48 : 0 }} transition={{ type: 'spring', stiffness: 280, damping: 22 }} />
                  <motion.span className="absolute left-2 top-[10px] h-1.5 w-1.5 rounded-full" animate={{ backgroundColor: yearly ? '#2dd4bf' : '#a78bfa' }} />
                  <motion.span className="absolute right-2 top-[10px] h-1.5 w-1.5 rounded-full" animate={{ backgroundColor: yearly ? '#2dd4bf' : '#a78bfa' }} />
                </button>
                <span className={`text-xs ${yearly ? 'text-white' : 'text-slate-400'}`}>Yearly</span>
                <AnimatePresence>
                  {yearly && (
                    <motion.span
                      initial={{ y: -6, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -6, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="inline-flex items-center gap-1 rounded-full bg-emerald-400/15 px-2.5 py-1 text-[11px] font-semibold text-emerald-200 ring-1 ring-emerald-400/40"
                    >
                      <BadgePercent className="h-3.5 w-3.5" />
                      Save 15%
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              {order.length === 0 && blogQty === 0 ? (
                <div className="text-sm text-slate-400">No services yet. Click items on the left to add them. Blogs let you choose quantity.</div>
              ) : (
                <>
                  <Reorder.Group values={order} onReorder={setOrder} axis="y" className="space-y-2">
                    {order.map((id) => {
                      const s = SERVICES.find((x) => x.id === id)!;
                      return (
                        <Reorder.Item key={id} value={id} className="flex items-center justify-between gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2">
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-gradient-to-r from-violet-400 to-cyan-300" />
                            <div className="text-sm">{s.name}</div>
                            <div className="text-xs text-slate-400">• {fmt(s.price)}/mo</div>
                          </div>
                          <button onClick={() => remove(id)} className="rounded-md border border-white/10 bg-white/[0.02] p-1 hover:bg-white/[0.06]">
                            <X className="h-4 w-4" />
                          </button>
                        </Reorder.Item>
                      );
                    })}
                  </Reorder.Group>

                  {blogQty > 0 && (
                    <div className="mt-2 flex items-center justify-between gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-gradient-to-r from-violet-400 to-cyan-300" />
                        <div className="text-sm">Blog Writing</div>
                        <div className="text-xs text-slate-400">• {fmt(50)}/each</div>
                        <div className="ml-2 flex items-center gap-2">
                          <button onClick={decBlog} className="rounded-md border border-white/10 bg-white/[0.02] p-1 hover:bg-white/[0.06]">
                            <Minus className="h-4 w-4" />
                          </button>
                          <div className="rounded-md border border-white/10 bg-white/[0.02] px-2 py-0.5 text-xs">{blogQty}</div>
                          <button onClick={incBlog} className="rounded-md border border-white/10 bg-white/[0.02] p-1 hover:bg-white/[0.06]">
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                      <button onClick={() => setBlogQty(0)} className="rounded-md border border-white/10 bg-white/[0.02] p-1 hover:bg-white/[0.06]">
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Totals */}
            <div className="mt-4 grid gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4 text-sm">
              <Row label="Base monthly" value={fmt(baseMonthly)} />
              <AnimatePresence>
                {serviceCount >= BUNDLE_DISCOUNT_THRESHOLD && (
                  <motion.div
                    initial={{ y: -6, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -6, opacity: 0 }}
                    className="flex items-center justify-between text-emerald-300"
                  >
                    <div className="inline-flex items-center gap-2 font-medium">
                      <BadgePercent className="h-4 w-4" /> Bundle discount (3+ services)
                    </div>
                    <div>-{fmt(baseMonthly * BUNDLE_DISCOUNT)}</div>
                  </motion.div>
                )}
              </AnimatePresence>
              <Row label="After bundle" value={fmt(monthlyAfterBundle)} dim />
              <AnimatePresence>
                {yearly && (
                  <motion.div
                    initial={{ y: -6, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -6, opacity: 0 }}
                    className="flex items-center justify-between text-emerald-300"
                  >
                    <div className="inline-flex items-center gap-2 font-medium">
                      <BadgePercent className="h-4 w-4" /> Yearly discount (15%)
                    </div>
                    <div>-{fmt(monthlyAfterBundle * YEARLY_DISCOUNT)}</div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="my-1 h-px bg-white/10" />

              <div className="flex items-end justify-between">
                <div className="text-slate-300">Total</div>
                <div className="text-right">
                  <div className="text-3xl font-bold md:text-4xl">{fmt(monthlyFinal)}</div>
                  <div className="text-xs text-slate-400">{yearly ? '/mo effective (billed yearly)' : '/Monthly'}</div>
                </div>
              </div>

              <AnimatePresence>
                {yearly && billedYearlyTotal && (
                  <motion.div
                    initial={{ y: -6, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -6, opacity: 0 }}
                    className="mt-1 text-right text-xs text-slate-400"
                  >
                    Billed yearly total: <span className="font-semibold text-slate-200">{fmt(billedYearlyTotal)}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA */}
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <Link href="/contact" className="w-full sm:w-auto">
                <button className={`w-full sm:w-auto rounded-lg bg-gradient-to-r ${themeGlow} px-4 py-2 text-sm font-bold text-black hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40`}>
                  Request Quote
                </button>
              </Link>
              <button
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2 text-sm text-slate-200 hover:bg-white/[0.06]"
                onClick={() => console.log('Export estimate')}
              >
                <FileText className="h-4 w-4" />
                Export estimate
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================== DEFAULT EXPORT =========================== */

export default function Pricing() {
  return (
    <>
      <PricingStellarToggle />
      <CustomPackageBuilder />
    </>
  );
}
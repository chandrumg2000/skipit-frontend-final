'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Link2, CheckCircle2, Sparkles } from 'lucide-react';

type QA = {
  id: string;
  q: string;
  a: React.ReactNode;
};

const FAQS: QA[] = [
  {
    id: 'ppc-optimizations',
    q: 'How often should PPC campaigns be optimized for best ROI?',
    a: (
      <>
        We perform **daily bid and budget optimizations**, weekly keyword expansion/negative keyword updates, and
        monthly strategy reviews.  
        PPC is highly dynamic — ad performance can shift within hours due to competitors, trends, or platform updates.  
        Our process ensures your campaigns remain competitive and cost-effective 24/7.
      </>
    ),
  },
  {
    id: 'seo-results',
    q: 'How long does it take to see SEO results?',
    a: (
      <>
        SEO is a **long-term investment**.  
        For competitive keywords, expect **3–6 months** to see measurable ranking improvements.  
        Factors like domain authority, content quality, backlink profile, and technical health all play a role.  
        With consistent efforts, many clients see **traffic growth within the first 90 days**.
      </>
    ),
  },
  {
    id: 'tracking-setup',
    q: 'Do you set up advanced tracking & analytics?',
    a: (
      <>
        Yes — we implement **GA4**, **Google Tag Manager**, **Meta Pixel**, and platform-specific tracking (LinkedIn, Bing, TikTok).  
        This includes **event tracking** for leads, purchases, form submissions, and phone calls.  
        We also set up dashboards so you can monitor KPIs live.
      </>
    ),
  },
  {
    id: 'ad-copywriting',
    q: 'Do you provide ad copywriting and creative testing?',
    a: (
      <>
        Absolutely. Our creative process includes:  
        - Writing **high-converting ad headlines & descriptions** based on audience psychology  
        - Running **A/B tests** to refine messaging  
        - Applying platform-specific best practices for higher CTR and lower CPC  
        Creative testing is a **continuous process**, not a one-time task.
      </>
    ),
  },
  {
    id: 'remarketing',
    q: 'How do you use remarketing to increase conversions?',
    a: (
      <>
        We retarget visitors who didn’t convert using **custom audience segments** and **personalized ad creatives**.  
        Strategies include:  
        - **Dynamic product ads** for e-commerce  
        - **Lead nurturing funnels** for service businesses  
        - **Cross-platform retargeting** on Google, Meta, and LinkedIn  
        This often results in **20–30% more conversions** at a lower CPA.
      </>
    ),
  },
  {
    id: 'budget-recommendation',
    q: 'What budget do I need for PPC campaigns?',
    a: (
      <>
        Budgets depend on industry CPCs and conversion goals.  
        As a rule of thumb:  
        - **Lead gen**: $500–$1,500/mo minimum for Google or Meta  
        - **E-commerce**: $1,000–$3,000/mo for meaningful volume  
        We use forecast tools to estimate expected clicks, conversions, and CPA before launch.
      </>
    ),
  },
  {
    id: 'keyword-strategy',
    q: 'Do you target the same keywords across Google & Bing Ads?',
    a: (
      <>
        Not always. We adapt keyword targeting based on **platform audience behavior**.  
        Bing often performs well for **older, higher-income demographics**, so we sometimes prioritize higher-intent,
        niche keywords there while using broader targeting on Google.
      </>
    ),
  },
  {
    id: 'competitor-analysis',
    q: 'Do you analyze competitor ad strategies?',
    a: (
      <>
        Yes — we use tools like **SEMrush, SpyFu, and Auction Insights** to monitor competitor keywords, ad copy, and landing pages.  
        This helps us **identify gaps** and **capitalize on missed opportunities** in your market.
      </>
    ),
  },
];

export default function FAQ() {
  const [openId, setOpenId] = React.useState<string | null>(null);
  const [copied, setCopied] = React.useState<string | null>(null);

  const copyLink = async (id: string) => {
    const url = `${window.location.origin}${window.location.pathname}#faq-${id}`;
    await navigator.clipboard.writeText(url);
    setCopied(id);
    setTimeout(() => setCopied(null), 1200);
  };

  return (
    <section id="faq" className="relative bg-[#0b1020] text-white py-20 md:py-24">
      {/* Glow effect */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-72 w-[70rem] rounded-full blur-3xl"
             style={{ background: 'radial-gradient(ellipse at center, rgba(139,92,246,0.25), rgba(236,72,153,0.18), rgba(56,189,248,0.12) 60%, transparent 70%)' }} />
      </div>

      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Frequently Asked Questions</h2>
          <p className="mt-3 text-slate-300">Everything you need to know about PPC, SEO, and digital marketing services.</p>
          <div className="mx-auto mt-6 h-[2px] w-28 rounded-full bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-300 opacity-80" />
        </div>

        <div className="mt-10 space-y-4">
          {FAQS.map((item) => (
            <div
              key={item.id}
              id={`faq-${item.id}`}
              className="rounded-xl border border-white/10 bg-white/5 backdrop-blur"
            >
              <button
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
                aria-expanded={openId === item.id}
              >
                <span className="font-medium">{item.q}</span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${openId === item.id ? 'rotate-180 text-fuchsia-300' : 'text-slate-400'}`}
                />
              </button>

              <AnimatePresence initial={false}>
                {openId === item.id && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22, ease: 'easeOut' }}
                    className="overflow-hidden border-t border-white/10"
                  >
                    <div className="px-4 py-4 text-slate-300">
                      {item.a}
                      <div className="mt-3 flex items-center justify-between text-xs">
                        <span className="inline-flex items-center gap-1 text-slate-400">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-300/80" />
                          Digital Marketing Expertise
                        </span>
                        <button
                          onClick={() => copyLink(item.id)}
                          className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-slate-300 hover:bg-white/10"
                        >
                          <Link2 className="h-3.5 w-3.5" />
                          {copied === item.id ? 'Link copied' : 'Copy link'}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex items-center justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 px-5 py-3 text-sm font-bold text-black hover:brightness-110"
          >
            <Sparkles className="h-4 w-4" />
            Still have questions? Talk to us
          </a>
        </div>
      </div>
    </section>
  );
}
'use client';

import { motion } from 'framer-motion';
import { AlertCircle, XCircle, CheckCircle2, AlertTriangle, Clock, TrendingDown } from 'lucide-react';
import Image from 'next/image';

export default function PainPoints() {
    return (
        <section className="py-16 relative overflow-hidden">
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-stretch">

                    {/* Visual/Image Side */}
                    <div className="relative mb-10 lg:mb-0 w-full h-full">
                        {/* Abstract background blobs */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-rose-500/20 to-orange-500/20 blur-3xl rounded-full -z-10" />

                        <div className="relative h-full rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-sm flex flex-col">
                            {/* User's image container */}
                            <div className="relative w-full flex-grow min-h-[350px] overflow-hidden rounded-xl bg-[#0F1629] border border-white/5 shadow-2xl">
                                <Image
                                    src="/bad-website-example.png"
                                    alt="Example of an outdated and cluttered website"
                                    fill
                                    className="object-cover opacity-90"
                                />
                            </div>

                            {/* Floating Badges - Compact */}
                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="absolute -left-4 top-8 rounded-lg border border-rose-500/30 bg-[#0F1629]/95 p-3 shadow-lg backdrop-blur min-w-[140px]"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="rounded-full bg-rose-500/20 p-2 text-rose-400">
                                        <TrendingDown className="h-4 w-4" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Conversion</div>
                                        <div className="font-bold text-white text-sm">-45% Drop</div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ x: 20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="absolute -right-4 bottom-8 rounded-lg border border-orange-500/30 bg-[#0F1629]/95 p-3 shadow-lg backdrop-blur min-w-[140px]"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="rounded-full bg-orange-500/20 p-2 text-orange-400">
                                        <Clock className="h-4 w-4" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Load Time</div>
                                        <div className="font-bold text-white text-sm">Slow & Laggy</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="flex flex-col justify-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl font-bold tracking-tight text-white sm:text-3xl mb-6 leading-tight"
                        >
                            Is Your Business Losing Customers Because Your Website Looks
                            <span className="text-rose-400"> Outdated?</span>
                        </motion.h2>

                        <ul className="space-y-4">
                            {[
                                "People judge your business in 3–5 seconds based on your website",
                                "A slow or messy site silently kills trust and conversions",
                                "DIY builders and bloated templates hurt speed, SEO, and credibility",
                                "No website or a bad one = customers choosing competitors instead",
                                "A professional website shouldn’t take months or drain your budget"
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="flex items-start gap-3"
                                >
                                    <div className="flex-shrink-0 mt-1.5">
                                        <div className="h-1.5 w-1.5 rounded-full bg-rose-400 shadow-[0_0_8px_rgba(251,113,133,0.6)]" />
                                    </div>
                                    <span className="text-base text-slate-300 leading-snug">{item}</span>
                                </motion.li>
                            ))}
                        </ul>

                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="mt-8 rounded-xl bg-white/5 border border-white/10 p-4"
                        >
                            <div className="flex gap-3 items-start">
                                <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                <p className="text-slate-200 text-sm leading-relaxed">
                                    <span className="font-bold text-white">SkipIt</span> builds fast, clean, conversion-focused static websites that make small businesses look legit and trustworthy.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}

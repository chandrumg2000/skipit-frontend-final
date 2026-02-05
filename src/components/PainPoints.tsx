'use client';

import { motion } from 'framer-motion';
import { AlertCircle, XCircle, CheckCircle2, AlertTriangle, Clock, TrendingDown } from 'lucide-react';
import Image from 'next/image';

export default function PainPoints() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">

                    {/* Visual/Image Side */}
                    <div className="relative mb-14 lg:mb-0 w-full">
                        {/* Abstract background blobs for the image */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-tr from-rose-500/20 to-orange-500/20 blur-3xl rounded-full -z-10" />

                        <div className="relative rounded-3xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm">
                            {/* User's image container - Made larger */}
                            <div className="aspect-[4/3] relative overflow-hidden rounded-2xl bg-[#0F1629] flex items-center justify-center border border-white/5 shadow-2xl">
                                <Image
                                    src="/bad-website-example.png"
                                    alt="Example of an outdated and cluttered website"
                                    fill
                                    className="object-cover opacity-90"
                                />
                            </div>

                            {/* Floating Badges */}
                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="absolute -left-6 top-12 rounded-xl border border-rose-500/30 bg-[#0F1629]/95 p-4 shadow-xl backdrop-blur min-w-[180px]"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="rounded-full bg-rose-500/20 p-2.5 text-rose-400">
                                        <TrendingDown className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-400 font-medium">Conversion Rate</div>
                                        <div className="font-bold text-white text-base">-45% Drop</div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ x: 20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="absolute -right-6 bottom-12 rounded-xl border border-orange-500/30 bg-[#0F1629]/95 p-4 shadow-xl backdrop-blur min-w-[170px]"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="rounded-full bg-orange-500/20 p-2.5 text-orange-400">
                                        <Clock className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-400 font-medium">Load Time</div>
                                        <div className="font-bold text-white text-base">Slow & Laggy</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-8 leading-tight"
                        >
                            Is Your Business Losing Customers Because Your Website Looks
                            <span className="text-rose-400"> Outdated?</span>
                        </motion.h2>

                        <ul className="space-y-6">
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
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-start gap-4"
                                >
                                    <div className="flex-shrink-0 mt-1.5">
                                        <div className="h-2 w-2 rounded-full bg-rose-400 shadow-[0_0_10px_rgba(251,113,133,0.5)]" />
                                    </div>
                                    <span className="text-lg text-slate-300 leading-snug">{item}</span>
                                </motion.li>
                            ))}
                        </ul>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="mt-10 rounded-2xl bg-white/5 border border-white/10 p-6"
                        >
                            <div className="flex gap-4">
                                <CheckCircle2 className="h-6 w-6 text-emerald-400 flex-shrink-0" />
                                <p className="text-slate-200 text-base leading-relaxed">
                                    <span className="font-bold text-white">SkipIt</span> builds fast, clean, conversion-focused static websites that make small businesses look legit and trustworthy — without complexity or ongoing headaches.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}

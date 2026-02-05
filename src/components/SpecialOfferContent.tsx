'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Code, FileText, Globe, Layers, CheckCircle, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import IndustryTabs from './IndustryTabs';
import PainPoints from './PainPoints';

export default function SpecialOfferContent() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-[#0b1020] text-white">
            {/* Background Effects */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
                <GlowBlobs />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">

                {/* Header Section */}
                <div className="mx-auto max-w-4xl text-center">
                    <motion.div
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mx-auto mb-8 w-fit rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 px-4 py-1.5 text-sm font-medium text-fuchsia-300 backdrop-blur"
                    >
                        <span className="flex items-center gap-2">
                            <Sparkles className="h-4 w-4" />
                            Limited Time Special Offer
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl font-extrabold tracking-tight sm:text-7xl mb-6"
                    >
                        Get a Website for Just{' '}
                        <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                            €150
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-6 text-lg leading-8 text-slate-300 max-w-2xl mx-auto"
                    >
                        From content, planning, development to deployment — we take care of everything.
                        <span className="block mt-2 font-semibold text-white">
                            Just pay once your website is live.
                        </span>
                    </motion.p>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mt-10 flex items-center justify-center gap-x-6"
                    >
                        <Link
                            href="/contact?offer=special-150"
                            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-8 py-3.5 text-base font-bold text-black transition-transform hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                        >
                            <span className="relative z-10">Get Started Now</span>
                            <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-cyan-300 opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
                        </Link>
                    </motion.div>

                    {/* Hero Image */}

                </div>

                {/* Pain Points Section */}
                <PainPoints />

                {/* Features Grid */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mx-auto mt-24 max-w-7xl sm:mt-32"
                >
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        <FeatureCard
                            icon={<FileText className="h-6 w-6 text-violet-400" />}
                            title="Content Strategy"
                            description="We craft compelling content that speaks to your audience and drives conversions."
                            delay={0.1}
                        />
                        <FeatureCard
                            icon={<Layers className="h-6 w-6 text-fuchsia-400" />}
                            title="Strategic Planning"
                            description="Customized sitemap and user journey planning tailored to your business goals."
                            delay={0.2}
                        />
                        <FeatureCard
                            icon={<Code className="h-6 w-6 text-cyan-400" />}
                            title="Pro Development"
                            description="Fast, responsive, and modern code using the latest web technologies."
                            delay={0.3}
                        />
                        <FeatureCard
                            icon={<Globe className="h-6 w-6 text-emerald-400" />}
                            title="Deployment"
                            description="Secure hosting setup and domain connection. We handle the technical launch."
                            delay={0.4}
                        />
                    </div>
                </motion.div>

                {/* Industry Tabs Section */}
                <IndustryTabs />

                {/* Trust/Guarantee Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto mt-24 max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur sm:p-12"
                >
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 ring-1 ring-emerald-500/50">
                        <CheckCircle className="h-8 w-8 text-emerald-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Risk-Free Guarantee</h3>
                    <p className="mt-4 text-slate-300">
                        We are confident in our quality. You don't pay a single cent until you see your website live and are approved. No hidden fees, no upfront risks.
                    </p>
                </motion.div>

            </div>
        </div>
    );
}

function FeatureCard({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: string, delay: number }) {
    return (
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: delay }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-colors hover:bg-white/[0.06] group"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative z-10">
                <div className="mb-4 inline-flex rounded-lg bg-white/5 p-3 ring-1 ring-white/10">
                    {icon}
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{description}</p>
            </div>
        </motion.div>
    );
}

function GlowBlobs() {
    return (
        <>
            <motion.div
                className="pointer-events-none absolute top-[-10%] left-[-10%] h-[30rem] w-[30rem] rounded-full bg-violet-600/20 blur-[100px]"
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className="pointer-events-none absolute bottom-[-10%] right-[-10%] h-[35rem] w-[35rem] rounded-full bg-cyan-600/20 blur-[100px]"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            />
            <motion.div
                className="pointer-events-none absolute top-[40%] left-[50%] h-[25rem] w-[25rem] -translate-x-1/2 rounded-full bg-fuchsia-600/15 blur-[120px]"
                animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            />
        </>
    );
}

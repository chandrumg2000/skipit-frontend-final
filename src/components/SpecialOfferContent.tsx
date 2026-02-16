'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Code, FileText, Globe, Layers, CheckCircle, Sparkles, Users, Rocket } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import IndustryTabs from './IndustryTabs';
import PainPoints from './PainPoints';
import SpecialOfferForm from './SpecialOfferForm';

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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center mb-24">
                    {/* Left Column: Text Content */}
                    <div className="text-center lg:text-left">
                        <motion.div
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="mx-auto lg:mx-0 mb-8 w-fit rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 px-4 py-1.5 text-sm font-medium text-fuchsia-300 backdrop-blur"
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
                                $150
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mt-6 text-lg leading-8 text-slate-300 max-w-2xl mx-auto lg:mx-0"
                        >
                            From content, planning, development to deployment — we take care of everything.
                            <span className="block mt-2 font-semibold text-white">
                                Just pay once your website is live.
                            </span>
                        </motion.p>

                        {/* Animated Wave Decoration */}
                        <div className="relative mt-12 h-24 w-full max-w-lg mx-auto lg:mx-0 opacity-80">
                            <WaveDecoration />
                        </div>
                    </div>

                    {/* Right Column: Special Offer Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="w-full max-w-md mx-auto lg:mr-0"
                    >
                        <SpecialOfferForm />
                    </motion.div>
                </div>

                {/* Pain Points Section */}
                {/* Pain Points Section */}
                <div className="mt-24 sm:mt-32">
                    <PainPoints />
                </div>

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

                {/* empowerment section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mx-auto mt-32 max-w-4xl text-center"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Empowering Local Businesses & Entrepreneurs
                    </h2>
                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                        We believe every business deserves a world-class digital presence. Our mission is to level the playing field, making premium web design accessible to everyone—from solo founders to growing local brands.
                    </p>
                    <div className="mt-10 flex justify-center gap-8 opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0">
                        {/* Simple decorative icons/text for "Local", "Global", "Growth" using lucide icons or simple spans */}
                        <div className="flex flex-col items-center gap-2">
                            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                                <Globe className="h-6 w-6 text-cyan-400" />
                            </span>
                            <span className="text-sm font-medium text-slate-400">Digital Presence</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                                <Users className="h-6 w-6 text-fuchsia-400" />
                            </span>
                            <span className="text-sm font-medium text-slate-400">Community Growth</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                                <Rocket className="h-6 w-6 text-emerald-400" />
                            </span>
                            <span className="text-sm font-medium text-slate-400">Business Scale</span>
                        </div>
                    </div>
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

function WaveDecoration() {
    return (
        <svg
            className="w-full h-full"
            viewBox="0 0 400 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
        >
            <defs>
                <linearGradient id="wave-gradient-sm" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stopColor="rgba(34, 211, 238, 0)" />
                    <stop offset="50%" stopColor="rgba(34, 211, 238, 0.5)" />
                    <stop offset="100%" stopColor="rgba(34, 211, 238, 0)" />
                </linearGradient>
            </defs>
            <motion.path
                d="M0 50 Q 100 20 200 50 T 400 50"
                stroke="url(#wave-gradient-sm)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                    pathLength: [0, 1, 1],
                    opacity: [0, 1, 0],
                    pathOffset: [0, 0, 1]
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                    times: [0, 0.5, 1]
                }}
            />
            <motion.path
                d="M0 50 Q 100 80 200 50 T 400 50"
                stroke="url(#wave-gradient-sm)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                    pathLength: [0, 1, 1],
                    opacity: [0, 1, 0],
                    pathOffset: [0, 0, 1]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 0.5,
                    times: [0, 0.5, 1]
                }}
            />
            {[...Array(3)].map((_, i) => (
                <motion.circle
                    key={i}
                    r="2"
                    fill="#22d3ee"
                    initial={{ cx: "0%", cy: "50%", opacity: 0 }}
                    animate={{
                        cx: ["0%", "100%"],
                        cy: ["50%", `${50 + (i % 2 === 0 ? 20 : -20)}%`, "50%"],
                        opacity: [0, 1, 0]
                    }}
                    transition={{
                        duration: 3 + i,
                        repeat: Infinity,
                        ease: "linear",
                        delay: i * 0.8
                    }}
                />
            ))}
        </svg>
    );
}

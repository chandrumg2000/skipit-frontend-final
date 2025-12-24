'use client';

import React from 'react';
import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Lottie from 'react-lottie-player';
import serviceData from '@/data/serviceData';
import { ArrowLeft, CheckCircle2, Zap, AlertCircle, BarChart3 } from 'lucide-react';

export default function ServicePage() {
    const params = useParams();
    const slug = params?.slug as string;

    const service = serviceData.find((s) => s.slug === slug);

    if (!service) {
        return notFound();
    }

    return (
        <main className="min-h-screen bg-[#0b1020] text-white selection:bg-violet-500/30">
            {/* Background Gradients */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-violet-600/20 blur-[100px]" />
                <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-cyan-600/20 blur-[100px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32">
                {/* Back Button */}
                <Link
                    href="/#services"
                    className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors mb-12 group"
                >
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    Back to Services
                </Link>

                {/* Hero Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-block rounded-full bg-white/5 px-3 py-1 text-sm text-violet-300 backdrop-blur border border-white/10 mb-6">
                            Our Expertise
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                            {service.title}
                        </h1>
                        <p className="text-lg text-slate-300 leading-relaxed mb-8">
                            {service.details?.longDescription || service.description}
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-violet-500/20 transition-all hover:bg-slate-200 hover:scale-105 active:scale-95"
                        >
                            Get Started
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/20 to-cyan-500/20 rounded-3xl blur-2xl" />
                        <div className="relative bg-white/5 border border-white/10 rounded-3xl p-12 backdrop-blur-sm flex items-center justify-center aspect-square">
                            <div className="w-48 h-48 sm:w-64 sm:h-64">
                                <Lottie loop animationData={service.icon} play />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Pain Points Section */}
                {service.details?.painPoints && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-24"
                    >
                        <div className="rounded-3xl bg-red-500/5 border border-red-500/10 p-8 sm:p-12">
                            <h2 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
                                <AlertCircle className="w-6 h-6 text-red-400" />
                                Is this happening to you?
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {service.details.painPoints.map((point, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className="mt-1 w-2 h-2 rounded-full bg-red-400 shrink-0" />
                                        <p className="text-slate-300">{point}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Features & Benefits Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-24">
                    {/* Key Features */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
                            <Zap className="w-6 h-6 text-yellow-400" />
                            Key Features
                        </h2>
                        <div className="space-y-4">
                            {service.details?.features?.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
                                >
                                    <div className="mt-1 w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                                    <p className="text-slate-300">{feature}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Benefits */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h2 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
                            <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                            Why Choose Us
                        </h2>
                        <div className="space-y-4">
                            {service.details?.benefits?.map((benefit, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
                                >
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                                    <p className="text-slate-300">{benefit}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Process Section */}
                {service.details?.process && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-24"
                    >
                        <h2 className="text-2xl font-semibold text-white mb-12 flex items-center gap-3 justify-center">
                            <BarChart3 className="w-6 h-6 text-violet-400" />
                            Our Proven Process
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {service.details.process.map((step, index) => (
                                <div
                                    key={index}
                                    className="relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-colors"
                                >
                                    <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                                        {index + 1}
                                    </div>
                                    <h3 className="text-lg font-semibold text-white mb-3 mt-2">{step.title}</h3>
                                    <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="rounded-3xl bg-gradient-to-r from-violet-900/50 to-cyan-900/50 border border-white/10 p-8 sm:p-12 text-center relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold text-white mb-4">Ready to elevate your {service.title}?</h2>
                        <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                            Let's discuss how we can tailor our strategies to meet your specific business goals and drive real growth.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-slate-900 shadow-lg transition-all hover:bg-slate-200 hover:scale-105 active:scale-95"
                        >
                            Contact Us Today
                        </Link>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}

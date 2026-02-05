'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Utensils, Wrench, Package, ShoppingBag, Briefcase, Scale, ArrowRight, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const industries = [
    {
        id: 'real-estate',
        label: 'Real Estate',
        icon: Building2,
        title: 'Showcase properties. Build trust. Win more clients.',
        points: [
            'Post new listings across all platforms instantly',
            'Share client testimonials and market updates',
            'Track which content generates the most inquiries'
        ],
        cta: 'Get Real Estate Plan',
        color: 'from-cyan-400 to-blue-500'
    },
    {
        id: 'restaurants',
        label: 'Restaurants',
        icon: Utensils,
        title: 'Fill more tables. Promote specials. Loyal customers.',
        points: [
            'Showcase your daily specials and menu items',
            'Take reservations directly from your website',
            'Display customer reviews to build social proof'
        ],
        cta: 'Get Restaurant Plan',
        color: 'from-orange-400 to-red-500'
    },
    {
        id: 'services',
        label: 'Plumbing & HVAC',
        icon: Wrench,
        title: 'Get more emergency calls. Book appointments.',
        points: [
            'Highlight your services and areas of operation',
            'Allow customers to book appointments online',
            'Showcase before and after project photos'
        ],
        cta: 'Get Service Plan',
        color: 'from-blue-400 to-indigo-500'
    },
    {
        id: 'ecommerce',
        label: 'Ecommerce',
        icon: ShoppingBag,
        title: 'Sell more products. Retain customers. Scale fast.',
        points: [
            'Showcase your product catalog beautifully',
            'Integrate secure payment gateways',
            'Run seamless promotional campaigns'
        ],
        cta: 'Get Ecommerce Plan',
        color: 'from-pink-400 to-rose-500'
    },
    {
        id: 'consultants',
        label: 'Consultants',
        icon: Briefcase,
        title: 'Establish authority. Generate high-quality leads.',
        points: [
            'Publish thought leadership content',
            'Capture leads with whitepapers and webinars',
            'Schedule consultations automatically'
        ],
        cta: 'Get Consultant Plan',
        color: 'from-emerald-400 to-green-500'
    }
];

export default function IndustryTabs() {
    const [activeTab, setActiveTab] = useState(industries[0]);

    return (
        <section className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Mobile Dropdown (visible on small screens) */}
                <div className="md:hidden mb-8">
                    <label htmlFor="tabs" className="sr-only">Select your industry</label>
                    <select
                        id="tabs"
                        name="tabs"
                        className="block w-full rounded-md border-gray-700 bg-white/5 py-3 pl-3 pr-10 text-white focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
                        value={activeTab.id}
                        onChange={(e) => setActiveTab(industries.find(i => i.id === e.target.value) || industries[0])}
                    >
                        {industries.map((tab) => (
                            <option key={tab.id} value={tab.id}>{tab.label}</option>
                        ))}
                    </select>
                </div>

                {/* Desktop Tabs (hidden on mobile) */}
                <div className="hidden md:block">
                    <div className="flex w-full items-center justify-center gap-x-8 border-b border-white/10 pb-4">
                        {industries.map((tab) => {
                            const isActive = activeTab.id === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab)}
                                    className={`group flex items-center gap-2 px-1 pb-4 text-sm font-medium transition-all ${isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                                        } relative`}
                                >
                                    <tab.icon className={`h-5 w-5 ${isActive ? 'text-cyan-400' : 'text-slate-500 group-hover:text-slate-300'}`} />
                                    {tab.label}
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute -bottom-[1px] left-0 right-0 h-0.5 bg-cyan-400"
                                        />
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Content Area */}
                <div className="mt-12 md:mt-16">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center"
                        >
                            {/* Text Content */}
                            <div>
                                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                    {activeTab.title}
                                </h2>
                                <ul className="mt-8 space-y-5">
                                    {activeTab.points.map((point, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <CheckCircle2 className={`h-6 w-6 shrink-0 bg-gradient-to-r ${activeTab.color} bg-clip-text text-transparent`} />
                                            {/* Note: bg-clip-text doesn't work on SVGs directly usually, so let's fallback to coloring the text-cyan-400 or using a div wrapper if needed. tailored color below. */}
                                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/5">
                                                <motion.div
                                                    className={`h-2.5 w-2.5 rounded-full bg-gradient-to-r ${activeTab.color}`}
                                                />
                                            </div>
                                            <span className="text-lg text-slate-300">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-10">
                                    <a
                                        href={`/contact?offer=${activeTab.id}`}
                                        className={`inline-flex items-center gap-2 rounded-xl bg-gradient-to-r ${activeTab.color} px-6 py-3 text-sm font-bold text-white transition hover:brightness-110`}
                                    >
                                        {activeTab.cta}
                                        <ArrowRight className="h-4 w-4" />
                                    </a>
                                </div>
                            </div>

                            {/* Image Placeholder */}
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm lg:aspect-[16/10]">
                                {/* This is where you put your image */}
                                <div className="flex h-full w-full items-center justify-center flex-col gap-4 p-8 text-center">
                                    <div className={`h-20 w-20 rounded-2xl bg-gradient-to-br ${activeTab.color} opacity-20 flex items-center justify-center`}>
                                        <activeTab.icon className="h-10 w-10 text-white opacity-80" />
                                    </div>
                                    <p className="text-slate-400">
                                        <span className="font-semibold text-white">Image Slot:</span> {activeTab.label} Dashboard/Preview
                                    </p>
                                    <p className="text-xs text-slate-500">
                                        (Place your specific "{activeTab.id}.png" image here)
                                    </p>
                                </div>

                                {/* Optional: if you have images, uncomment this:
                <Image 
                    src={`/images/${activeTab.id}.png`} 
                    alt={activeTab.label}
                    fill
                    className="object-cover"
                /> 
                */}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}

'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Utensils, Wrench, Briefcase, ArrowRight, CheckCircle2, Hammer, Wind } from 'lucide-react';
import Image from 'next/image';

const industries = [
    {
        id: 'plumbing',
        label: 'Plumbing',
        icon: Wrench,
        title: 'Get more emergency calls. Book appointments.',
        points: [
            'Highlight your emergency services clearly',
            'Allow customers to book appointments online',
            'Showcase before and after project photos'
        ],
        cta: 'Get Plumbing Plan',
        color: 'from-blue-400 to-indigo-500'
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
        id: 'home-improvement',
        label: 'Home Improvement',
        icon: Hammer,
        title: 'Showcase your craftsmanship. Inspire homeowners.',
        points: [
            'Gallery of renovation projects and transformations',
            'Request a quote forms for easy lead capture',
            'Client testimonials and service area maps'
        ],
        cta: 'Get Renovation Plan',
        color: 'from-amber-400 to-orange-500'
    },
    {
        id: 'hvac',
        label: 'HVAC',
        icon: Wind,
        title: 'Comfort for your clients. Growth for you.',
        points: [
            'Seasonal promotion strategies for heating/cooling',
            'Maintenance plan subscription sign-ups',
            'Trust-building certifications display'
        ],
        cta: 'Get HVAC Plan',
        color: 'from-cyan-400 to-sky-500'
    },
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
        color: 'from-indigo-400 to-violet-500'
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
    const [mobileActiveIndex, setMobileActiveIndex] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            // Get all children (cards)
            const cards = Array.from(container.children);

            // Find the card closest to the center of the container
            const containerRect = container.getBoundingClientRect();
            const containerCenter = containerRect.left + containerRect.width / 2;

            let closestIndex = 0;
            let minDistance = Number.MAX_VALUE;

            cards.forEach((card, index) => {
                const rect = card.getBoundingClientRect();
                const cardCenter = rect.left + rect.width / 2;
                const distance = Math.abs(containerCenter - cardCenter);

                if (distance < minDistance) {
                    minDistance = distance;
                    closestIndex = index;
                }
            });

            setMobileActiveIndex(closestIndex);
        }
    };

    return (
        <section className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Mobile Carousel (visible on small screens) */}
                <div
                    ref={scrollContainerRef}
                    onScroll={handleScroll}
                    className="md:hidden mt-8 -mx-6 px-6 overflow-x-auto no-scrollbar snap-x snap-mandatory flex gap-4 pb-8"
                >
                    {industries.map((ind) => (
                        <div key={ind.id} className="snap-center min-w-[85vw] sm:min-w-[600px] flex-shrink-0 relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 flex flex-col h-full">
                            <div className="relative aspect-[16/9] w-full bg-slate-800">
                                <Image
                                    src={`/images/${ind.id}.jpeg`}
                                    alt={ind.label}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex-1 p-6 flex flex-col">
                                <div className="flex items-center gap-2 mb-3">
                                    <ind.icon className="h-5 w-5 text-cyan-400" />
                                    <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">{ind.label}</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4 line-clamp-2">
                                    {ind.title}
                                </h3>
                                <ul className="mb-6 space-y-3 flex-1">
                                    {ind.points.map((point, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r ${ind.color}`} />
                                            <span className="text-sm text-slate-300">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href={`/contact?offer=${ind.id}`}
                                    className={`mt-auto block w-full text-center rounded-xl bg-gradient-to-r ${ind.color} px-6 py-3 text-sm font-bold text-white transition hover:brightness-110`}
                                >
                                    {ind.cta}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile Pagination Dots */}
                <div className="md:hidden flex justify-center gap-2 mb-12">
                    {industries.map((_, index) => (
                        <div
                            key={index}
                            className={`h-2 rounded-full transition-all duration-300 ${index === mobileActiveIndex
                                    ? 'w-8 bg-cyan-400'
                                    : 'w-2 bg-white/20'
                                }`}
                        />
                    ))}
                </div>

                {/* Desktop Tabs (hidden on mobile) */}
                <div className="hidden md:block">
                    <div className="flex w-full items-center justify-center gap-x-8 border-b border-white/10 pb-4 overflow-x-auto">
                        {industries.map((tab) => {
                            const isActive = activeTab.id === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab)}
                                    className={`group flex items-center gap-2 px-1 pb-4 text-sm font-medium transition-all whitespace-nowrap ${isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
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

                {/* Content Area (Desktop Only) */}
                <div className="mt-12 md:mt-16 hidden md:block">
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
                                <Image
                                    src={`/images/${activeTab.id}.jpeg`}
                                    alt={activeTab.label}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}

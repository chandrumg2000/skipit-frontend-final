'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function ChennaiPopup() {
    const [isVisible, setIsVisible] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        // Don't show if already on the Chennai Growth page
        if (pathname === '/chennai-growth') return;

        // Check if already closed in this session
        if (sessionStorage.getItem('chennaiPopupClosed')) return;

        const checkLocation = async () => {
            try {
                // DEV: Always show on localhost for testing purposes
                if (window.location.hostname === 'localhost') {
                    setTimeout(() => setIsVisible(true), 2000);
                    return;
                }

                // PROD: Check real location
                const res = await fetch('https://ipapi.co/json/');
                const data = await res.json();

                if (data.city && data.city.toLowerCase() === 'chennai') {
                    setTimeout(() => setIsVisible(true), 2000);
                }
            } catch (error) {
                console.error('Location check failed', error);
            }
        };

        checkLocation();
    }, []);

    const closePopup = () => {
        setIsVisible(false);
        sessionStorage.setItem('chennaiPopupClosed', 'true');
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.9 }}
                    className="fixed bottom-6 right-6 z-50 max-w-sm w-full"
                >
                    <div className="relative bg-[#0f172a]/90 backdrop-blur-xl border border-cyan-500/30 p-5 rounded-2xl shadow-2xl shadow-cyan-900/40">
                        {/* Close Button */}
                        <button
                            onClick={closePopup}
                            className="absolute top-2 right-2 p-1 text-slate-400 hover:text-white transition-colors"
                        >
                            <X className="w-4 h-4" />
                        </button>

                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0 border border-cyan-500/30">
                                <MapPin className="w-5 h-5 text-cyan-400 animate-pulse" />
                            </div>

                            <div>
                                <h3 className="font-bold text-white text-lg leading-tight mb-1">
                                    In Chennai?
                                </h3>
                                <p className="text-sm text-slate-300 mb-3 leading-relaxed">
                                    We have a special <strong>Growth Offer</strong> exclusively for Chennai business owners.
                                </p>

                                <Link
                                    href="/chennai-growth"
                                    onClick={closePopup}
                                    className="inline-flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                                >
                                    View Offer <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>

                        {/* Glowing border effect */}
                        <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-tr from-cyan-500/10 to-transparent mask-image-linear-to-b pointer-events-none" />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

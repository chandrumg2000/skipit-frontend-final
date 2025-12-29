'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';

const globalNavLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/#services' },
    { name: 'About Us', href: '/#about' },
    { name: 'Contact Us', href: '/contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    // Check if we are on the Chennai Growth Landing Page (Light Theme)
    const isLightPage = pathname === '/chennai-growth';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Theme Variables
    const textColor = isLightPage && !scrolled ? 'text-slate-600' : (isLightPage && scrolled ? 'text-slate-800' : 'text-slate-300');
    const hoverColor = isLightPage ? 'hover:text-blue-600' : 'hover:text-white';
    const logoTextColor = isLightPage ? 'text-slate-900' : 'text-white';

    // Background Logic
    const navBackground = scrolled
        ? (isLightPage
            ? 'bg-white/80 backdrop-blur-md border-b border-slate-200 py-4 shadow-sm'
            : 'bg-[#0b1020]/80 backdrop-blur-md border-b border-white/10 py-4 shadow-lg shadow-cyan-900/5')
        : 'bg-transparent py-6';

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBackground}`}
            >
                <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20 transition-transform group-hover:scale-105">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 5L12 12L4 19V5Z" />
                                <path d="M12 5L20 12L12 19V5Z" />
                            </svg>
                        </div>
                        <span className={`text-2xl font-black tracking-tighter lowercase leading-none pb-1 transition-colors ${logoTextColor}`}>
                            skip it<span className="text-cyan-400">.</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-1">
                        <div className={`flex items-center rounded-full px-2 py-1.5 backdrop-blur-sm transition-colors ${scrolled ? '' : (isLightPage ? 'bg-white/50 border border-slate-200' : 'border border-white/10 bg-white/5')}`}>
                            {globalNavLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`relative px-5 py-2 text-sm font-medium transition-colors ${textColor} ${hoverColor}`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Link
                            href="/contact"
                            className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-2.5 text-sm font-bold transition-transform hover:scale-105 ${isLightPage ? 'bg-slate-900 text-white hover:bg-slate-800' : 'bg-white text-black hover:bg-cyan-50'}`}
                        >
                            <span>Get Started</span>
                            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className={`md:hidden p-2 transition-colors ${textColor} ${hoverColor}`}
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className={`fixed inset-0 z-40 pt-20 px-6 md:hidden overflow-y-auto ${isLightPage ? 'bg-white' : 'bg-[#0b1020]'}`}
                    >
                        <div className="flex flex-col gap-6 text-center pb-8">
                            {globalNavLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`text-xl font-semibold py-2 ${isLightPage ? 'text-slate-800 hover:text-blue-600' : 'text-slate-300 hover:text-cyan-400'}`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                onClick={() => setMobileMenuOpen(false)}
                                className="mt-2 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-base font-bold text-white shadow-lg shadow-cyan-500/20"
                            >
                                Get Started
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

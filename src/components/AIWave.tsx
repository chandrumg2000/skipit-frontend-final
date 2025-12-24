'use client';

import { motion } from 'framer-motion';

export default function AIWave() {
    return (
        <div className="absolute top-24 left-0 right-0 h-32 overflow-hidden pointer-events-none z-0 flex items-center justify-center opacity-60">
            <svg
                className="w-full h-full"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="wave-gradient" x1="0" x2="1" y1="0" y2="0">
                        <stop offset="0%" stopColor="rgba(34, 211, 238, 0)" />
                        <stop offset="50%" stopColor="rgba(34, 211, 238, 0.4)" />
                        <stop offset="100%" stopColor="rgba(34, 211, 238, 0)" />
                    </linearGradient>
                </defs>

                {/* Wave 1 */}
                <motion.path
                    fill="none"
                    stroke="url(#wave-gradient)"
                    strokeWidth="2"
                    d="M0,160 C320,180 420,100 640,160 C860,220 960,140 1440,160"
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
                        times: [0, 0.5, 1]
                    }}
                />

                {/* Wave 2 (Offset) */}
                <motion.path
                    fill="none"
                    stroke="url(#wave-gradient)"
                    strokeWidth="2"
                    d="M0,160 C320,140 420,220 640,160 C860,100 960,180 1440,160"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                        pathLength: [0, 1, 1],
                        opacity: [0, 1, 0],
                        pathOffset: [0, 0, 1]
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 0.5,
                        times: [0, 0.5, 1]
                    }}
                />

                {/* Particles */}
                {[...Array(5)].map((_, i) => (
                    <motion.circle
                        key={i}
                        r="2"
                        fill="#22d3ee"
                        initial={{ cx: "0%", cy: "50%", opacity: 0 }}
                        animate={{
                            cx: ["0%", "100%"],
                            cy: ["50%", `${50 + (i % 2 === 0 ? 10 : -10)}%`, "50%"],
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
        </div>
    );
}

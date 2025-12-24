'use client';

import { motion } from 'framer-motion';
import {
  FaRobot,
  FaBullseye,
  FaChartLine,
  FaRocket,
} from 'react-icons/fa';

const features = [
  {
    title: 'AI Campaign Optimization',
    description: 'Automatically adjust bids, budgets, and creatives using real-time AI insights.',
    icon: <FaRobot className="text-4xl text-cyan-400 animate-pulse" />,
  },
  {
    title: 'Smart Audience Targeting',
    description: 'Leverage AI to build precise audience segments for better ROAS.',
    icon: <FaBullseye className="text-4xl text-pink-400 animate-bounce" />,
  },
  {
    title: 'Insightful Dashboards',
    description: 'Monitor performance with beautiful, real-time analytics powered by AI.',
    icon: <FaChartLine className="text-4xl text-green-400 animate-pulse" />,
  },
  {
    title: 'SaaS Growth',
    description: 'Drive sustainable SaaS growth by improving CAC, maximizing MRR, and scaling ARR efficiently.',
    icon: <FaRocket className="text-4xl text-yellow-400 animate-spin-slow" />,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-6 bg-[#0f172a] text-white text-center">
      <h2 className="text-4xl font-bold mb-12 text-white">AI-Powered Features</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            className="bg-[#0b1120] rounded-2xl p-8 border border-cyan-800/20 transition-all duration-300 shadow-[0_0_20px_#0ff2] hover:shadow-[0_0_40px_#0ff] relative"
            whileHover={{ scale: 1.05 }}
          >
            <div className="mb-4 flex justify-center">{feature.icon}</div>
            <h3 className="text-2xl font-semibold mb-2 text-cyan-300">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
            <div className="absolute inset-0 rounded-2xl pointer-events-none z-[-1] bg-gradient-to-br from-cyan-500/10 to-blue-500/5 blur-2xl opacity-100" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
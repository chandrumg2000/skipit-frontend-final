import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
    Building2,
    MapPin,
    Store,
    Briefcase,
    RefreshCw,
    ArrowRight,
    TrendingUp,
    ShieldCheck,
    Zap,
    BarChart3,
    Search,
    Megaphone,
    CheckCircle2,
    Users
} from 'lucide-react';

export const metadata: Metadata = {
    title: 'Chennai Business Growth Partner | SkipIt Digital',
    description: 'Digital growth systems designed for Chennai business owners. No advance, pay after delivery.',
};

export default function ChennaiGrowthPage() {
    return (
        <main className="min-h-screen bg-[#0b1020] text-white overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">

            {/* ================= HERO SECTION ================= */}
            <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 px-6">
                {/* Abstract Background Elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] -z-10 opacity-50" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[100px] -z-10 opacity-40" />

                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Text Content */}
                    <div className="space-y-8 animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950/30 border border-cyan-500/20 text-cyan-300 text-sm font-semibold tracking-wide">
                            <MapPin className="w-4 h-4" /> Built for Chennai Business Owners
                        </div>

                        <h1 className="text-4xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                            Built on <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Hustle</span>. <br />
                            Run Through Chaos. <br />
                            Grown with <span className="text-white">Clarity</span>.
                        </h1>

                        <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
                            From shop floors to home offices, streets to screens — Chennai’s business owners juggle more than most.
                            We help turn that daily chaos into predictable, scalable growth.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link
                                href="#audit"
                                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all transform hover:-translate-y-1"
                            >
                                Get Free Growth Audit
                            </Link>
                            <Link
                                href="#how-it-works"
                                className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-white/10 bg-white/5 text-slate-200 font-semibold text-lg hover:bg-white/10 transition-all text-center"
                            >
                                See How It Works <ArrowRight className="ml-2 w-5 h-5 hidden sm:inline" />
                            </Link>
                        </div>

                        <div className="flex items-center gap-4 text-sm text-slate-400 pt-2">
                            <div className="flex -space-x-2">
                                <div className="relative w-8 h-8 rounded-full border-2 border-[#0b1020] overflow-hidden">
                                    <Image src="/images/people/rahul-m.jpg" alt="Client" fill className="object-cover" />
                                </div>
                                <div className="relative w-8 h-8 rounded-full border-2 border-[#0b1020] overflow-hidden">
                                    <Image src="/images/people/priya-s.jpg" alt="Client" fill className="object-cover" />
                                </div>
                                <div className="relative w-8 h-8 rounded-full border-2 border-[#0b1020] overflow-hidden">
                                    <Image src="/images/people/ananya-k.jpg" alt="Client" fill className="object-cover" />
                                </div>
                            </div>
                            <span>Trusted by 50+ local businesses</span>
                        </div>
                    </div>

                    {/* Hero Image / Visual */}
                    <div className="relative mt-12 lg:mt-0">
                        <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-cyan-900/40 group">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1020] via-transparent to-transparent z-10 opacity-60" />
                            <Image
                                src="/images/chennai-lp/hero.jpg"
                                alt="Chennai Business Growth"
                                width={800}
                                height={900}
                                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                                priority
                            />

                            {/* Floating Cards (Infographical Elements) */}
                            <div className="absolute bottom-10 left-6 z-20 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl max-w-[200px] animate-badge-float">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                                        <TrendingUp className="w-5 h-5" />
                                    </div>
                                    <span className="text-xs font-bold text-green-300">+240% Growth</span>
                                </div>
                                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-green-400 w-[75%]" />
                                </div>
                            </div>

                            <div className="absolute top-10 right-6 z-20 bg-[#0b1020]/80 backdrop-blur-md border border-cyan-500/30 p-4 rounded-xl shadow-lg animate-badge-float-delayed">
                                <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Active Campaigns</div>
                                <div className="text-2xl font-bold text-white">12,450+</div>
                                <div className="text-xs text-cyan-400 mt-1">Leads Generated</div>
                            </div>
                        </div>

                        {/* Decorative Pattern */}
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[url('/grid.svg')] opacity-20" />
                    </div>
                </div>
            </section>


            {/* ================= PROBLEM SECTION ================= */}
            <section className="py-24 bg-[#080c19] relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                        If running a business feels like <span className="text-red-400 line-through decoration-red-400/50">juggling</span>, <br />
                        this is for you.
                    </h2>
                    <p className="text-xl text-slate-400 mb-12">
                        Every Chennai business owner knows this reality: You aren't short on effort. You're just short on clarity.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: Zap, title: "Constant Firefighting", desc: "Customers, potential suppliers, payments—all demanding attention at once." },
                        { icon: BarChart3, title: "Zero Data Clarity", desc: "No clear signal on what’s actually driving your monthly revenue." },
                        { icon: RefreshCw, title: "Wasted Ad Spend", desc: "Boosting posts or running ads without knowing if they actually convert." },
                        { icon: Briefcase, title: "Manual Overload", desc: "Doing everything yourself because explaining it to others takes too long." }
                    ].map((item, i) => (
                        <div key={i} className="bg-white/[0.03] border border-white/5 p-8 rounded-2xl hover:bg-white/[0.05] transition-colors">
                            <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center text-red-400 mb-6">
                                <item.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                            <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>


            {/* ================= INSIGHT SECTION ================= */}
            <section className="py-24 px-6 relative">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                    {/* Dashboard Illustration - Complex 3D Design */}
                    <div className="relative order-2 lg:order-1 flex justify-center items-center perspective-[2000px]">
                        {/* Background Floor / Glow */}
                        <div className="absolute bottom-10 w-[70%] h-20 bg-cyan-500/30 blur-[60px] rounded-full scale-150" />

                        {/* Floating Image Container with 3D Tilt */}
                        <div className="relative z-10 transform transition-all duration-700 ease-out preserve-3d group hover:scale-105 hover:-translate-y-4 hover:rotate-x-2 hover:rotate-y-2">
                            <Image
                                src="/images/chennai-lp/dashboard-3d-complex.png"
                                alt="Growth Analytics Illustration"
                                width={900}
                                height={700}
                                className="w-full h-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)] rounded-3xl"
                            />

                            {/* Reflection Effect */}
                            <div className="absolute -bottom-16 left-0 right-0 h-40 bg-gradient-to-b from-cyan-500/20 to-transparent blur-xl opacity-40 transform scale-y-[-0.6] mask-image-linear-to-b rounded-3xl" />
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <h2 className="text-4xl font-bold mb-6">Chaos is part of business. <br /><span className="text-cyan-400">Confusion doesn’t have to be.</span></h2>
                        <div className="space-y-6 text-lg text-slate-300">
                            <p>
                                Growth becomes sustainable only when effort is structured, decisions are data-backed, and systems support your daily work instead of adding to the burden.
                            </p>
                            <p>
                                That’s where the right growth partner makes the difference. We bring order to the chaos.
                            </p>
                        </div>

                        <ul className="mt-10 space-y-4">
                            {[
                                "Deep understanding of Chennai market behavior",
                                "Simple strategies, zero jargon",
                                "Automation that saves time",
                                "Clear reporting on what works"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                                    <span className="text-slate-200">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>


            {/* ================= SERVICES SECTION ================= */}
            <section className="py-24 bg-[#080c19]" id="how-it-works">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold">What We Help You With</h2>
                        <p className="mt-4 text-slate-400">A complete growth stack for modern businesses.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: Megaphone, title: "Google & Meta Ads", desc: "Consistent leads without the budget burn. We target high-intent buyers." },
                            { icon: Search, title: "SEO & Local Visibility", desc: "Be found exactly when Chennai customers are searching for your service." },
                            { icon: Store, title: "Social Media Marketing", desc: "Build trust and brand recall. Don't just chase likes—chase influence." },
                            { icon: TrendingUp, title: "SaaS & Growth", desc: "Testing, iterating, and scaling digital-first products specifically." },
                            { icon: RefreshCw, title: "AI Automation", desc: "Reduce manual work. Automate follow-ups, invoices, and lead routing." },
                            { icon: ShieldCheck, title: "Analytics & Systems", desc: "We build the dashboards that give you 100% clarity on expected revenue." },
                        ].map((s, i) => (
                            <div key={i} className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 hover:bg-cyan-500/[0.02] transition-all">
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-cyan-900/40 to-blue-900/40 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                                    <s.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                                <p className="text-slate-400 text-sm">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>





            {/* ================= LOCAL POSITIONING ================= */}
            <section className="py-24 px-6 border-y border-white/5 bg-[#0b1020]">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-12">Built for Chennai. Designed for <span className="text-cyan-400">Real Businesses</span>.</h2>

                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {['Retail Stores', 'Service Businesses', 'Consultants', 'Family-run Business', 'Growing Startups'].map(tag => (
                            <span key={tag} className="px-6 py-2 rounded-full border border-white/10 bg-white/5 text-slate-300">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto">
                        <div className="p-6 rounded-xl bg-cyan-950/20 border border-cyan-500/10">
                            <h4 className="font-bold text-cyan-200 mb-2">Local Buying Cycles</h4>
                            <p className="text-sm text-slate-400">We know when Chennai spends and when it saves. We time campaigns accordingly.</p>
                        </div>
                        <div className="p-6 rounded-xl bg-cyan-950/20 border border-cyan-500/10">
                            <h4 className="font-bold text-cyan-200 mb-2">Budget Sensitivity</h4>
                            <p className="text-sm text-slate-400">We don't waste. Every rupee is accounted for and optimized for ROI.</p>
                        </div>
                        <div className="p-6 rounded-xl bg-cyan-950/20 border border-cyan-500/10">
                            <h4 className="font-bold text-cyan-200 mb-2">Decision Pace</h4>
                            <p className="text-sm text-slate-400">We build funnels that nurture trust, moving customers from "looking" to "booking".</p>
                        </div>
                    </div>
                </div>
            </section>


            {/* ================= UPDATED OFFER / FINAL CTA ================= */}
            <section id="audit" className="py-24 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/10 to-[#0b1020]" />

                <div className="max-w-5xl mx-auto relative z-10 grid lg:grid-cols-2 gap-0 lg:gap-8 items-center">

                    {/* Left: Persuasion */}
                    <div className="text-center lg:text-left mb-12 lg:mb-0">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Ready to Turn Chaos <br />
                            Into <span className="text-cyan-400">Growth?</span>
                        </h2>
                        <p className="text-xl text-slate-400 mb-8 max-w-lg mx-auto lg:mx-0">
                            You’re already managing a lot. You don’t have to manage growth alone. Let's build a predictable system for your business.
                        </p>
                        <div className="flex flex-col gap-3 text-slate-300 text-sm">
                            <div className="flex items-center gap-2 justify-center lg:justify-start">
                                <CheckCircle2 className="w-5 h-5 text-emerald-400" /> No long-term contracts
                            </div>
                            <div className="flex items-center gap-2 justify-center lg:justify-start">
                                <CheckCircle2 className="w-5 h-5 text-emerald-400" /> Pay only when satisfied
                            </div>
                        </div>
                    </div>

                    {/* Right: The Offer Card */}
                    <div className="relative transform hover:scale-[1.02] transition-transform duration-300">
                        <div className="absolute -inset-1 bg-gradient-to-r from-amber-300 to-orange-500 rounded-2xl blur opacity-30 animate-pulse" />
                        <div className="relative bg-[#0f172a] border border-white/10 rounded-2xl p-8 shadow-2xl">

                            <div className="absolute -top-4 right-8 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold px-4 py-1 rounded-full text-xs uppercase tracking-wider shadow-lg transform rotate-2">
                                Limited Time Offer
                            </div>

                            <div className="text-center border-b border-white/10 pb-6 mb-6">
                                <h3 className="text-slate-400 font-medium mb-2">Flat Monthly Retainer</h3>
                                <div className="flex items-baseline justify-center gap-1">
                                    <span className="text-2xl text-slate-400">₹</span>
                                    <span className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">5,000</span>
                                </div>
                                <p className="text-cyan-400 font-bold mt-2 text-sm uppercase tracking-wide">
                                    Pay After 1 Month of Delivery
                                </p>
                            </div>

                            <div className="mb-8">
                                <p className="text-white font-semibold mb-3 border-b border-white/10 pb-2">Get all services:</p>
                                <ul className="space-y-4">
                                    {[
                                        "SEO & Social Media Marketing",
                                        "Google Ads & Meta Ads",
                                        "Growth Strategy"
                                    ].map((feat, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                                            <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                                                <CheckCircle2 className="w-3 h-3" />
                                            </div>
                                            {feat}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link
                                href="https://wa.me/919003805951?text=I%27m%20interested%20in%20the%20Chennai%20Growth%20Offer"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full block text-center bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-emerald-500/25 transition-all group"
                            >
                                <span className="flex items-center justify-center gap-2">
                                    Claim Offer Now <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                </span>
                            </Link>
                            <p className="text-center text-xs text-slate-500 mt-4">
                                Valid for first 10 Chennai businesses only.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Simple */}
            <footer className="py-8 text-center text-slate-600 text-sm bg-[#080c19]">
                <p>© {new Date().getFullYear()} SkipIt Digital. Built for Chennai.</p>
            </footer>
        </main>
    );
}

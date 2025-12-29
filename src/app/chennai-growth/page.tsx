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
        <main className="min-h-screen bg-white text-slate-900 overflow-x-hidden selection:bg-blue-100 selection:text-blue-900 font-sans">

            {/* ================= HERO SECTION ================= */}
            <section className="relative pt-24 lg:pt-32 pb-20 px-6 overflow-hidden">
                {/* Abstract Background Elements (Light Theme) */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/60 rounded-full blur-[120px] -z-10 opacity-70" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-100/60 rounded-full blur-[100px] -z-10 opacity-60" />

                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Text Content */}
                    <div className="space-y-8 animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold tracking-wide">
                            <MapPin className="w-4 h-4" /> Chennai's Premier AI Mar-Tech Agency
                        </div>

                        <h1 className="text-4xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-slate-900">
                            Great Product. But <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">Invisible Online?</span>
                        </h1>

                        <p className="text-2xl font-medium text-slate-900">
                            We Fix That.
                        </p>

                        <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                            Stop being Chennai's best kept secret. We turn "just browsing" into "ready to buy" using laser-focused <strong>Google Ads, Meta Ads & SEO</strong>.
                            Your customers are searching—make sure they find <span className="text-blue-600 font-bold underline decoration-blue-300 decoration-4">YOU</span>.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link
                                href="#audit"
                                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-slate-900 text-white font-bold text-lg hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/20 transition-all transform hover:-translate-y-1"
                            >
                                Get Free Growth Audit
                            </Link>
                            <Link
                                href="#how-it-works"
                                className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-slate-200 bg-white text-slate-600 font-semibold text-lg hover:bg-slate-50 transition-all text-center"
                            >
                                See How It Works <ArrowRight className="ml-2 w-5 h-5 hidden sm:inline" />
                            </Link>
                        </div>

                        <div className="flex items-center gap-4 text-sm text-slate-500 pt-2">
                            <div className="flex -space-x-2">
                                <div className="relative w-8 h-8 rounded-full border-2 border-white overflow-hidden shadow-sm">
                                    <Image src="/images/people/rahul-m.jpg" alt="Client" fill className="object-cover" />
                                </div>
                                <div className="relative w-8 h-8 rounded-full border-2 border-white overflow-hidden shadow-sm">
                                    <Image src="/images/people/priya-s.jpg" alt="Client" fill className="object-cover" />
                                </div>
                                <div className="relative w-8 h-8 rounded-full border-2 border-white overflow-hidden shadow-sm">
                                    <Image src="/images/people/ananya-k.jpg" alt="Client" fill className="object-cover" />
                                </div>
                            </div>
                            <span>Trusted by 50+ local businesses</span>
                        </div>
                    </div>

                    {/* Hero Image / Visual */}
                    <div className="relative mt-12 lg:mt-0">
                        <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl shadow-blue-900/10 group bg-white">
                            <Image
                                src="/images/chennai-lp/hero.jpg"
                                alt="Chennai Business Growth"
                                width={800}
                                height={900}
                                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                                priority
                            />

                            {/* Floating Cards (Infographical Elements) */}
                            <div className="absolute bottom-10 left-6 z-20 bg-white/90 backdrop-blur-md border border-slate-100 p-4 rounded-xl max-w-[200px] shadow-xl animate-badge-float">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                        <TrendingUp className="w-5 h-5" />
                                    </div>
                                    <span className="text-xs font-bold text-slate-900">+240% Growth</span>
                                </div>
                                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-green-500 w-[75%]" />
                                </div>
                            </div>

                            <div className="absolute top-10 right-6 z-20 bg-slate-900/95 backdrop-blur-md border border-slate-800 p-4 rounded-xl shadow-xl animate-badge-float-delayed">
                                <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Active Campaigns</div>
                                <div className="text-2xl font-bold text-white">12,450+</div>
                                <div className="text-xs text-blue-400 mt-1">Leads Generated</div>
                            </div>
                        </div>

                        {/* Decorative Pattern */}
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[url('/grid.svg')] opacity-10 bg-black/5" />
                    </div>
                </div>
            </section>


            {/* ================= PROBLEM SECTION ================= */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-slate-900">
                        If running a business feels like <span className="text-red-500 line-through decoration-red-300 decoration-4">juggling</span>, <br />
                        this is for you.
                    </h2>
                    <p className="text-xl text-slate-500 mb-12">
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
                        <div key={i} className="bg-white border border-slate-200 p-8 rounded-2xl hover:shadow-lg transition-all hover:-translate-y-1">
                            <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-500 mb-6">
                                <item.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                            <p className="text-slate-500 leading-relaxed text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= PUNCH / CATCHY SECTION (Compact Card) ================= */}
            <section className="py-12 px-6">
                <div className="max-w-6xl mx-auto bg-slate-900 rounded-2xl p-8 md:px-12 md:py-10 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl group">

                    {/* Living Gradient Background */}
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,107,158,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-[position:0_0] animate-[gradient_3s_ease-in-out_infinite_alternate]" />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 opacity-90" />

                    {/* Content Left */}
                    <div className="relative z-10 text-left md:max-w-xl">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                            <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">Reality Check</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug">
                            Competitors are moving Digital. <br />
                            <span className="text-blue-400">The Market won't wait.</span>
                        </h2>
                    </div>

                    {/* Content Right (Quote) */}
                    <div className="relative z-10 md:w-1/2 md:text-right border-l-2 border-blue-500/30 pl-6 md:border-l-0 md:border-r-2 md:pr-6 md:pl-0">
                        <p className="text-lg text-slate-300 italic">
                            "In Chennai, if you are not visible, you are invisible. <br className="hidden md:block" />
                            <span className="text-white font-bold not-italic">Be the landmark.</span>"
                        </p>
                    </div>

                </div>
            </section>


            {/* ================= INSIGHT SECTION ================= */}
            <section className="py-24 px-6 relative bg-white">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                    {/* Dashboard Illustration */}
                    <div className="relative order-2 lg:order-1 flex justify-center items-center">
                        {/* Background Glow */}
                        <div className="absolute bottom-10 w-[70%] h-20 bg-blue-100 rounded-full blur-[60px] scale-150" />

                        {/* Floating Image Container */}
                        <div className="relative z-10 transform transition-all duration-700 hover:scale-105">
                            <Image
                                src="/images/chennai-lp/dashboard-3d-complex.png"
                                alt="Growth Analytics Illustration"
                                width={900}
                                height={700}
                                className="w-full h-auto drop-shadow-2xl rounded-3xl"
                            />
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <h2 className="text-4xl font-bold mb-6 text-slate-900">
                            Chaos is part of business. <br />
                            <span className="text-blue-600">Confusion doesn’t have to be.</span>
                        </h2>
                        <div className="space-y-6 text-lg text-slate-600">
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
                                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                                    <span className="text-slate-700 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>


            {/* ================= SERVICES SECTION ================= */}
            <section className="py-24 bg-slate-50" id="how-it-works">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900">What We Help You With</h2>
                        <p className="mt-4 text-slate-500">A complete growth stack for modern businesses.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: Megaphone, title: "Google Ads", desc: "Get in front of customers exactly when they search for your service. High intent, fast results." },
                            { icon: Zap, title: "Meta Ads (FB/Insta)", desc: "Target specific audiences in Chennai based on interests and behavior. Great for brand awareness." },
                            { icon: Search, title: "SEO", desc: "Rank higher on Google for the long term. Get organic traffic without paying for every click." },
                            { icon: Store, title: "Social Media Marketing", desc: "Engage with your community. Build a brand that Chennai people love and trust." },
                            { icon: TrendingUp, title: "Growth Strategy", desc: "A clear roadmap to scale your revenue. We analyze what works and double down on it." },
                            { icon: RefreshCw, title: "AI Mar-Tech & Automation", desc: "Use AI to automate leads, follow-ups, and customer data. Save time and money." },
                        ].map((s, i) => (
                            <div key={i} className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-blue-200 hover:shadow-xl transition-all hover:-translate-y-1">
                                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                                    <s.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ================= LOCAL POSITIONING ================= */}
            <section className="py-24 px-6 border-y border-slate-200 bg-white">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-12 text-slate-900">
                        Built for Chennai. Designed for <span className="text-blue-600">Real Businesses</span>.
                    </h2>

                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {['Retail Stores', 'Service Businesses', 'Consultants', 'Family-run Business', 'Growing Startups'].map(tag => (
                            <span key={tag} className="px-6 py-2 rounded-full border border-slate-200 bg-slate-50 text-slate-600 font-medium">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto">
                        <div className="p-6 rounded-xl bg-blue-50 border border-blue-100">
                            <h4 className="font-bold text-blue-900 mb-2">Local Buying Cycles</h4>
                            <p className="text-sm text-blue-800/80">We know when Chennai spends and when it saves. We time campaigns accordingly.</p>
                        </div>
                        <div className="p-6 rounded-xl bg-blue-50 border border-blue-100">
                            <h4 className="font-bold text-blue-900 mb-2">Budget Sensitivity</h4>
                            <p className="text-sm text-blue-800/80">We don't waste. Every rupee is accounted for and optimized for ROI.</p>
                        </div>
                        <div className="p-6 rounded-xl bg-blue-50 border border-blue-100">
                            <h4 className="font-bold text-blue-900 mb-2">Decision Pace</h4>
                            <p className="text-sm text-blue-800/80">We build funnels that nurture trust, moving customers from "looking" to "booking".</p>
                        </div>
                    </div>
                </div>
            </section>


            {/* ================= UPDATED OFFER / FINAL CTA ================= */}
            <section id="audit" className="py-24 px-6 relative overflow-hidden bg-slate-50">
                <div className="absolute inset-0 bg-white/50" />

                <div className="max-w-5xl mx-auto relative z-10 grid lg:grid-cols-2 gap-0 lg:gap-8 items-center">

                    {/* Left: Persuasion */}
                    <div className="text-center lg:text-left mb-12 lg:mb-0">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                            Ready to Turn Chaos <br />
                            Into <span className="text-blue-600">Growth?</span>
                        </h2>
                        <p className="text-xl text-slate-500 mb-8 max-w-lg mx-auto lg:mx-0">
                            You’re already managing a lot. You don’t have to manage growth alone. Let's build a predictable system for your business.
                        </p>
                        <div className="flex flex-col gap-3 text-slate-600 text-sm font-medium">
                            <div className="flex items-center gap-2 justify-center lg:justify-start">
                                <CheckCircle2 className="w-5 h-5 text-green-500" /> No long-term contracts
                            </div>
                            <div className="flex items-center gap-2 justify-center lg:justify-start">
                                <CheckCircle2 className="w-5 h-5 text-green-500" /> Pay only when satisfied
                            </div>
                        </div>
                    </div>

                    {/* Right: The Offer Card */}
                    <div className="relative transform hover:scale-[1.02] transition-transform duration-300">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-2xl blur opacity-40" />

                        {/* Dark Card for High Contrast Pop */}
                        <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">

                            <div className="absolute -top-4 right-8 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold px-4 py-1 rounded-full text-xs uppercase tracking-wider shadow-lg transform rotate-2">
                                Limited Time Offer
                            </div>

                            <div className="text-center border-b border-white/10 pb-6 mb-6">
                                <h3 className="text-slate-400 font-medium mb-2">Flat Monthly Retainer</h3>
                                <div className="flex items-baseline justify-center gap-1">
                                    <span className="text-2xl text-slate-400">₹</span>
                                    <span className="text-6xl font-black text-white">5,000</span>
                                </div>
                                <p className="text-blue-400 font-bold mt-2 text-sm uppercase tracking-wide">
                                    Pay After 1 Month of Delivery
                                </p>
                            </div>

                            <div className="mb-8">
                                <p className="text-white font-semibold mb-3 border-b border-white/10 pb-2">Get all services:</p>
                                <ul className="space-y-4">
                                    {[
                                        "Google Ads & Meta Ads",
                                        "SEO & Social Media Marketing",
                                        "Growth Strategy & AI Tech"
                                    ].map((feat, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                                            <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
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
                                className="w-full block text-center bg-white text-slate-900 hover:bg-slate-100 font-bold text-lg py-4 rounded-xl shadow-lg transition-all group"
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
            <footer className="py-8 text-center text-slate-400 text-sm bg-white border-t border-slate-100">
                <p>© {new Date().getFullYear()} SkipIt Digital. Built with <span className="text-red-500">❤️</span> for Chennai.</p>
            </footer>
        </main>
    );
}

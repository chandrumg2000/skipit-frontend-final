'use client';

import { useState } from 'react';
import { sendLead } from '@/lib/sendLead';
import { Loader2 } from 'lucide-react';

export default function HeroContactForm() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        consent: false,
        honeypot: '',
    });

    const [loading, setLoading] = useState(false);
    const [ok, setOk] = useState<null | boolean>(null);
    const [error, setError] = useState<string | null>(null);

    const submit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setOk(null);
        setError(null);
        try {
            if (form.honeypot) return; // Silent fail for bots

            await sendLead({
                name: form.name,
                email: form.email,
                phone: form.phone || undefined,
                company: form.company || undefined,
                message: form.message || undefined,
                consent: form.consent,
                source: 'HeroForm',
            });
            setOk(true);
            setForm({
                name: '',
                email: '',
                phone: '',
                company: '',
                message: '',
                consent: false,
                honeypot: '',
            });
        } catch (err: any) {
            setOk(false);
            setError(err?.message || 'Failed to send');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative isolate overflow-hidden rounded-2xl bg-black/40 backdrop-blur-xl p-6 sm:p-8 border border-white/10 shadow-[0_0_40px_-10px_rgba(34,211,238,0.3)] hover:shadow-[0_0_60px_-10px_rgba(34,211,238,0.5)] transition-shadow duration-500 group">
            {/* Neon Glow Lines */}
            <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-white/10 group-hover:ring-cyan-500/50 transition-all duration-500" />
            <div className="absolute -inset-[1px] -z-10 rounded-2xl bg-gradient-to-b from-cyan-500/20 to-transparent opacity-50 blur-sm group-hover:opacity-100 transition-opacity" />

            <div className="mb-6">
                <h3 className="text-xl font-bold text-white sm:text-2xl">
                    Get Your Free <span className="text-cyan-400">Growth Plan</span>
                </h3>
                <p className="mt-2 text-sm text-slate-300">
                    Fill out the form below and we'll get back to you within 24 hours.
                </p>
            </div>

            <form onSubmit={submit} className="space-y-4">
                <div className="space-y-4">
                    <input
                        type="text"
                        required
                        placeholder="Name *"
                        value={form.name}
                        onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                        className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
                    />
                    <input
                        type="email"
                        required
                        placeholder="Email *"
                        value={form.email}
                        onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                        className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
                    />
                    <div className="grid grid-cols-2 gap-4">
                        <input
                            type="tel"
                            placeholder="Phone"
                            value={form.phone}
                            onChange={(e) => setForm((s) => ({ ...s, phone: e.target.value }))}
                            className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
                        />
                        <input
                            type="text"
                            placeholder="Company"
                            value={form.company}
                            onChange={(e) => setForm((s) => ({ ...s, company: e.target.value }))}
                            className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
                        />
                    </div>
                    <textarea
                        rows={3}
                        placeholder="How can we help?"
                        value={form.message}
                        onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
                        className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors resize-none"
                    />
                </div>

                {/* HoneyPot */}
                <input
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.honeypot}
                    onChange={(e) => setForm((s) => ({ ...s, honeypot: e.target.value }))}
                />

                <div className="flex flex-col gap-4">
                    <label className="flex items-start gap-2 text-xs text-slate-400 cursor-pointer">
                        <input
                            type="checkbox"
                            required
                            checked={form.consent}
                            onChange={(e) => setForm((s) => ({ ...s, consent: e.target.checked }))}
                            className="mt-0.5 rounded border-white/20 bg-white/5 text-cyan-400 focus:ring-cyan-400"
                        />
                        <span>I agree to the privacy policy and to receive communications.</span>
                    </label>

                    <button
                        type="submit"
                        disabled={loading || ok === true}
                        className="group relative flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all hover:shadow-cyan-500/40 hover:brightness-110 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {loading ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                        ) : ok ? (
                            'Sent Successfully!'
                        ) : (
                            'Get Started Now'
                        )}
                    </button>
                </div>

                {error && (
                    <p className="text-center text-xs text-rose-400 mt-2">{error}</p>
                )}
            </form>
        </div>
    );
}

'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { sendLead } from '@/lib/sendLead';
import { MapPin, Instagram, Facebook, Linkedin, Mail, Phone } from 'lucide-react';

export default function ContactForm() {
  return (
    <Suspense fallback={<div className="h-[600px] w-full animate-pulse rounded-2xl bg-white/5" />}>
      <ContactFormContent />
    </Suspense>
  );
}

function ContactFormContent() {
  const searchParams = useSearchParams();
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    consent: false,
    honeypot: '',
  });

  useEffect(() => {
    const offer = searchParams.get('offer');
    if (offer === 'special-150') {
      setForm(prev => ({
        ...prev,
        message: 'I am interested in the Special Website Offer for €150. Please tell me more!'
      }));
    }
  }, [searchParams]);

  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<null | boolean>(null);
  const [error, setError] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setOk(null);
    setError(null);
    try {
      await sendLead({
        name: form.name,
        email: form.email,
        phone: form.phone || undefined,
        company: form.company || undefined,
        message: form.message || undefined,
        consent: form.consent,
        source: 'ContactPage',
        honeypot: form.honeypot,
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
    <section className="relative bg-[#0b1020] py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          {/* Left Column: Contact Info */}
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Contact us</h2>
            <p className="mt-4 text-lg text-slate-300">
              Ready to skip the noise and start growing? Tell us about your goals, and we’ll get back to you within one business day.
            </p>

            <div className="mt-10 space-y-8">
              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10">
                  <MapPin className="h-5 w-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Our Location</h3>
                  <p className="mt-1 text-slate-400 leading-relaxed">
                    S22, Govind Apartment, Sastri Nagar,<br />
                    Adyar, Chennai - 600 020
                  </p>
                </div>
              </div>

              {/* Socials */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10">
                  <Mail className="h-5 w-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Connect with us</h3>
                  <p className="mt-1 text-slate-400 mb-4">
                    Follow our journey on social media.
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://www.instagram.com/skipit_digital/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition hover:bg-cyan-500 hover:text-black"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a
                      href="https://www.facebook.com/skipitdigital"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition hover:bg-cyan-500 hover:text-black"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/skipit-digital/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition hover:bg-cyan-500 hover:text-black"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur sm:p-8">
            <form onSubmit={submit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Name *" value={form.name} onChange={(v) => setForm((s) => ({ ...s, name: v }))} />
                <Field label="Email *" type="email" value={form.email} onChange={(v) => setForm((s) => ({ ...s, email: v }))} />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Phone" value={form.phone} onChange={(v) => setForm((s) => ({ ...s, phone: v }))} />
                <Field label="Company" value={form.company} onChange={(v) => setForm((s) => ({ ...s, company: v }))} />
              </div>
              <label className="block text-sm text-slate-300">
                Message
                <textarea
                  value={form.message}
                  onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
                  rows={4}
                  className="mt-1 w-full rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-white outline-none placeholder:text-slate-400 focus:border-cyan-300/50"
                  placeholder="What are you trying to achieve?"
                />
              </label>

              {/* Honeypot (hidden) */}
              <input
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                value={form.honeypot}
                onChange={(e) => setForm((s) => ({ ...s, honeypot: e.target.value }))}
                placeholder="Leave blank"
              />

              <label className="mt-2 flex items-start gap-2 text-xs text-slate-300">
                <input
                  type="checkbox"
                  className="mt-[2px]"
                  checked={form.consent}
                  onChange={(e) => setForm((s) => ({ ...s, consent: e.target.checked }))}
                  required
                />
                I agree to be contacted and accept the privacy policy.
              </label>

              <button
                type="submit"
                disabled={loading}
                className="mt-2 w-full rounded-lg bg-cyan-400 px-4 py-3 text-sm font-bold text-black transition hover:brightness-110 disabled:opacity-60"
              >
                {loading ? 'Sending…' : 'Submit Message'}
              </button>

              {ok && <p className="text-center text-emerald-300">Thanks! We’ll be in touch shortly.</p>}
              {error && <p className="text-center text-rose-300">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  type = 'text',
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <label className="block text-sm text-slate-300">
      {label}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-white outline-none placeholder:text-slate-400 focus:border-cyan-300/50"
        placeholder=""
      />
    </label>
  );
}
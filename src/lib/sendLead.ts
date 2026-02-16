// src/lib/sendLead.ts
export type LeadPayload = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message?: string;
  consent: boolean;
  source?: 'FooterForm' | 'ContactPage' | 'PricingBuilder' | 'PlanCard' | 'SEOAudit' | 'HeroForm' | 'SpecialOfferForm';
  plan?: string;
  selections?: string[];
  totals?: {
    baseMonthly?: number;
    bundleSavings?: number;
    monthlyFinal?: number;
    billedYearlyTotal?: number | null;
    yearly?: boolean;
  };
  honeypot?: string; // should be empty (spam trap)
};

export async function sendLead(payload: LeadPayload) {
  const res = await fetch('/api/lead', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  if (!res.ok || !data.ok) {
    throw new Error(data?.error || 'Failed to send lead');
  }
  return data;
}
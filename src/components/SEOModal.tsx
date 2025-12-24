'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sendLead } from '@/lib/sendLead';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function SEOModal({ isOpen, onClose }: Props) {
  const [formData, setFormData] = useState({
    name: '',
    business_name: '',
    email: '',
    phone: '',
    url: ''
  });
  const [consent, setConsent] = useState(false);

  const [loading, setLoading] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setPdfUrl('');

    try {
      // 1. Send Lead Email
      await sendLead({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.business_name,
        message: `Requested SEO Audit for: ${formData.url}`,
        consent: consent,
        source: 'SEOAudit'
      });

      // 2. Generate Audit (Backend)
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';
      const res = await fetch(`${apiUrl}/generate-audit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          business: formData.business_name,
          email: formData.email,
          phone: formData.phone,
          domain: formData.url
        })
      });

      if (res.ok) {
        const blob = await res.blob();
        const url = window.URL.createObjectURL(blob);
        setPdfUrl(url);

        // Auto-trigger download
        const a = document.createElement('a');
        a.href = url;
        a.download = `skipit-seo-audit-${formData.url.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.pdf`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } else {
        // Even if audit fails, lead was sent.
        alert('Request received! We are generating your report. If it fails to download, we will email it to you.');
      }
    } catch (error) {
      console.error(error);
      alert('Request received! We will email you the report shortly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-[#111827] text-white p-8 rounded-xl w-full max-w-lg shadow-xl border border-cyan-500 relative"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={onClose} className="absolute top-3 right-4 text-gray-400 hover:text-red-400 text-xl">
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-6 text-cyan-400">Generate Free SEO Audit Report</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {['name', 'business_name', 'email', 'phone', 'url'].map((field) => (
                <input
                  key={field}
                  type={field === 'email' ? 'email' : 'text'}
                  name={field}
                  value={(formData as any)[field]}
                  onChange={handleChange}
                  placeholder={field.replace('_', ' ').toUpperCase()}
                  className="w-full px-4 py-2 rounded bg-[#1f2937] border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                  required
                />
              ))}

              <label className="flex items-start gap-2 text-xs text-slate-300 mt-2">
                <input
                  type="checkbox"
                  className="mt-[2px]"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  required
                />
                I agree to be contacted and accept the privacy policy.
              </label>

              <button
                type="submit"
                className="w-full py-2 rounded bg-cyan-500 hover:bg-cyan-600 font-semibold text-black transition-colors"
                disabled={loading}
              >
                {loading ? 'Processing...' : 'Generate Report'}
              </button>
            </form>
            {pdfUrl && (
              <div className="mt-4 text-center">
                <a
                  href={pdfUrl}
                  download
                  className="text-green-400 underline hover:text-green-500"
                >
                  Download SEO Audit PDF
                </a>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import React from 'react';
import { Metadata } from 'next';
import ServicePageContent from '@/components/ServicePageContent';
import serviceData from '@/data/serviceData';
import { notFound } from 'next/navigation';

type Props = {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {
    // read route params
    const slug = (await params).slug;

    // fetch data (simulated check from static data)
    const service = serviceData.find((s) => s.slug === slug);

    if (!service) {
        return {
            title: 'Service Not Found | SkipIt Digital',
        }
    }

    // Map slugs to specific titles/descriptions provided by the user
    const metadataMap: Record<string, { title: string; description: string }> = {
        'google-ads': {
            title: "Google Ads Management for High-Intent Leads | SkipIt Digital",
            description: "Drive qualified leads and sales with data-backed Google Ads management. SkipIt Digital optimizes search, display, and performance campaigns for ROI."
        },
        'meta-ads': {
            title: "Meta Ads Agency for Scalable Paid Growth | SkipIt Digital",
            description: "Scale faster with high-performing Facebook and Instagram ads. SkipIt Digital uses AI insights and funnel optimization to maximize ROAS."
        },
        'seo': {
            title: "SEO Services for Sustainable Organic Growth | SkipIt Digital",
            description: "Boost rankings, traffic, and conversions with AI-powered SEO strategies. SkipIt Digital delivers technical SEO, content, and growth-focused optimization."
        },
        'saas-growth': { // Assuming slug is saas-growth
            title: "SaaS Growth Marketing Agency | SkipIt Digital",
            description: "Accelerate SaaS growth with full-funnel marketing strategies. SkipIt Digital drives trials, upgrades, and retention using paid + organic performance data."
        },
        'content-marketing': { // Assuming slug is content-marketing
            title: "Content Marketing That Drives Demand | SkipIt Digital",
            description: "Turn content into a growth engine. SkipIt Digital creates SEO-led, conversion-focused content that attracts, educates, and converts buyers."
        }
    };

    const customMeta = metadataMap[slug];

    if (customMeta) {
        return {
            title: customMeta.title,
            description: customMeta.description,
        };
    }

    // Fallback for other services (using service title)
    return {
        title: `${service.title} | AI-Powered Digital Marketing Services`,
        description: `Expert ${service.title} services by SkipIt Digital. Drive growth with AI-powered strategies.`,
    };
}

export default async function ServicePage({ params }: Props) {
    const slug = (await params).slug;
    const service = serviceData.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    return <ServicePageContent slug={slug} />;
}

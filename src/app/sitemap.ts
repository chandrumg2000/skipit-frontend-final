import { MetadataRoute } from 'next';
import serviceData from '@/data/serviceData';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://skipitdigital.com';

    // Static routes
    const routes = [
        '',
        '/contact',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic service routes
    const serviceRoutes = serviceData.map((service) => ({
        url: `${baseUrl}/services/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    return [...routes, ...serviceRoutes];
}

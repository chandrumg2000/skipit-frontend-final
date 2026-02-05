import type { Metadata } from 'next';
import SpecialOfferContent from '@/components/SpecialOfferContent';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: "Get a Website for Just €150 | Special Offer | SkipIt Digital",
    description: "Limited time offer: Get a complete website for your business for just €150. Includes content, planning, development, and deployment. Pay only when live.",
};

export default function SpecialOfferPage() {
    return (
        <>
            <Navbar />
            <SpecialOfferContent />
            <Footer />
        </>
    );
}

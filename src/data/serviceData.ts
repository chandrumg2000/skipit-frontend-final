import googleAds from '../assets/googleads.json';
import metaAds from '../assets/metaads.json';
import seo from '@/assets/seo.json';
import social from '@/assets/social.json';
import saas from '@/assets/saas.json';
import content from '@/assets/content.json';

const serviceData = [
  {
    title: 'Google Ads',
    slug: 'google-ads',
    description: 'Precision-targeted campaigns across Search, Display, and YouTube to drive measurable ROI.',
    icon: googleAds,
    details: {
      longDescription: 'Stop wasting budget on clicks that don’t convert. Our Google Ads strategies are engineered for one thing: **Profitability**. We don’t just set up campaigns; we build high-octane acquisition engines that target your ideal customers at the exact moment they are ready to buy. From hyper-targeted Search ads to visually compelling Display and YouTube campaigns, we ensure every dollar spent contributes to your bottom line.',
      features: [
        'Sniper-Focused Keyword Research & Negative Keyword Lists',
        'High-Converting Ad Copy & Creative A/B Testing',
        'Smart Bidding Strategies & Budget Optimization',
        'Granular Conversion Tracking (Calls, Leads, Sales)',
        'Remarketing to Re-engage Lost Visitors',
        'Competitor Analysis & Market Share Capture'
      ],
      benefits: [
        'Immediate Influx of High-Intent Traffic',
        'Drastically Reduced Cost Per Acquisition (CPA)',
        'Transparent ROI Tracking & Reporting',
        'Scalable Campaigns that Grow with Your Business',
        'First-Page Visibility for High-Value Keywords'
      ],
      process: [
        { title: 'Audit & Strategy', description: 'We analyze your current account (or competitors) to identify wasted spend and untapped opportunities.' },
        { title: 'Setup & Launch', description: 'We build granular campaign structures with compelling copy and precise targeting settings.' },
        { title: 'Optimization', description: 'Daily monitoring and adjustments to bids, keywords, and creatives to maximize performance.' },
        { title: 'Scaling', description: 'Once profitability is proven, we strategically increase budget to drive more volume.' }
      ],
      painPoints: [
        'High Cost Per Click (CPC) with low conversion rates',
        'Difficulty tracking which ads are actually driving sales',
        'Wasting budget on irrelevant search terms',
        'Struggling to scale without destroying ROI'
      ]
    }
  },
  {
    title: 'Meta Ads',
    slug: 'meta-ads',
    description: 'Engaging campaigns on Facebook & Instagram optimized for leads, conversions, and reach.',
    icon: metaAds,
    details: {
      longDescription: 'Turn social scrolling into serious revenue. On Facebook and Instagram, your customers aren’t searching—they’re discovering. We create scroll-stopping creative and leverage Meta’s powerful AI to put your brand in front of the people most likely to buy. Whether you need to generate qualified leads, drive e-commerce sales, or build a cult-like brand following, our full-funnel strategies deliver consistent results.',
      features: [
        'Advanced Audience Segmentation & Lookalike Modeling',
        'Direct Response Creative Strategy (Video & Image)',
        'Full-Funnel Campaign Architecture (Top, Middle, Bottom)',
        'Pixel & CAPI Setup for Accurate Tracking',
        'Dynamic Product Ads (DPA) for E-commerce',
        'Interactive Lead Form Campaigns'
      ],
      benefits: [
        'Reach Millions of Potential Customers Instantly',
        'Lower Lead Costs Compared to Search Channels',
        'Build a Retargeting Pool for Long-Term Growth',
        'Increase Brand Recall and Affinity',
        'Drive Sales Directly from Social Feeds'
      ],
      process: [
        { title: 'Audience Deep Dive', description: 'We identify your perfect customer avatars and build audiences to match.' },
        { title: 'Creative Production', description: 'Our team designs high-impact visuals and writes copy that hooks attention immediately.' },
        { title: 'Testing Phase', description: 'We rapidly test multiple angles and creatives to find the winners.' },
        { title: 'Scale & Sustain', description: 'We double down on winning ads while constantly refreshing creative to prevent fatigue.' }
      ],
      painPoints: [
        'Ads getting plenty of likes but zero sales',
        'Creative fatigue causing performance to drop',
        'Uncertainty about iOS14+ tracking and attribution',
        'Difficulty reaching new audiences profitably'
      ]
    }
  },
  {
    title: 'SEO',
    slug: 'seo',
    description: 'Comprehensive on-page and off-page SEO strategies to improve rankings and organic visibility.',
    icon: seo,
    details: {
      longDescription: 'Own the search results and stop renting your traffic. SEO is your long-term wealth builder. We move beyond basic "optimizations" to build a digital fortress for your brand. By combining technical excellence, content authority, and high-quality backlinks, we help you dominate the keywords that matter most. The result? A consistent stream of free, high-intent traffic that compounds over time.',
      features: [
        'Technical SEO Audits & Site Health Fixes',
        'Revenue-Focused Keyword Research',
        'On-Page Optimization & Content Siloing',
        'High-Authority Link Building & Digital PR',
        'Local SEO & Google Business Profile Optimization',
        'Core Web Vitals & Page Speed Enhancement'
      ],
      benefits: [
        'Sustainable, "Free" Traffic Flow 24/7',
        'Establish Industry Authority & Trust',
        'Reduce Reliance on Paid Advertising',
        'Capture Customers Early in the Buying Journey',
        'Higher Conversion Rates from Organic Visitors'
      ],
      process: [
        { title: 'Technical Foundation', description: 'We fix site errors, speed issues, and structure to ensure Google loves your site.' },
        { title: 'Content Strategy', description: 'We map out content that answers your customers’ questions and targets high-value keywords.' },
        { title: 'Authority Building', description: 'We secure quality backlinks from reputable sites to boost your domain power.' },
        { title: 'Performance Review', description: 'Regular reporting on rankings, traffic, and conversions to track progress.' }
      ],
      painPoints: [
        'Website invisible on Google for main services',
        'Traffic dropping suddenly due to algorithm updates',
        'Competitors dominating all the top spots',
        'Getting traffic but no leads or sales'
      ]
    }
  },
  {
    title: 'Social Media Marketing',
    slug: 'social-media-marketing',
    description: 'Organic growth strategies, community management, and brand storytelling across social platforms.',
    icon: social,
    details: {
      longDescription: 'Your brand needs a voice, not just a logo. In today’s noise, generic content gets ignored. We help you build a vibrant, engaged community that loves your brand. From crafting a unique visual identity to managing daily conversations, we turn your social media channels into assets that nurture loyalty and drive word-of-mouth growth. It’s not just about posting; it’s about mattering.',
      features: [
        'Custom Social Media Strategy & Content Pillars',
        'High-Quality Content Creation (Reels, Carousels, Stories)',
        'Proactive Community Management & Engagement',
        'Influencer Partnership Management',
        'Social Listening & Trend Jacking',
        'Monthly Analytics & Sentiment Reporting'
      ],
      benefits: [
        'Deepen Customer Loyalty & Retention',
        'Humanize Your Brand & Build Trust',
        'Gain Valuable Customer Feedback & Insights',
        'Increase Organic Reach & Virality',
        'Support Sales with Social Proof'
      ],
      process: [
        { title: 'Brand Persona', description: 'We define your brand’s voice, tone, and visual style for social media.' },
        { title: 'Content Planning', description: 'We create a monthly calendar mixing education, entertainment, and promotion.' },
        { title: 'Engagement', description: 'We actively respond to comments and DMs to foster community.' },
        { title: 'Analysis', description: 'We track engagement rates and follower growth to refine our strategy.' }
      ],
      painPoints: [
        'Inconsistent posting and lack of strategy',
        'Low engagement on posts',
        'Not knowing what to post to interest the audience',
        'Negative comments or lack of brand control'
      ]
    }
  },
  {
    title: 'SaaS Growth Marketing',
    slug: 'saas-growth-marketing',
    description: 'Data-driven strategies focusing on CAC, MRR, ARR, and trial-to-paid conversion funnels.',
    icon: saas,
    details: {
      longDescription: 'Scale your SaaS faster with metrics that matter. We speak your language: MRR, Churn, LTV, and CAC. Our growth strategies are designed specifically for software companies looking to cross the chasm. We optimize every stage of the user journey—from acquiring cost-effective trials to activating users and reducing churn. Whether you’re PLG or Sales-Led, we build the engine that powers your ARR growth.',
      features: [
        'Full-Funnel Growth Modeling & Forecasting',
        'SaaS-Specific Paid Media (LinkedIn, G2, Capterra)',
        'Onboarding Flow & Activation Rate Optimization',
        'Churn Analysis & Retention Campaigns',
        'Pricing Strategy & Packaging Review',
        'Product-Led Growth (PLG) Consulting'
      ],
      benefits: [
        'Lower Customer Acquisition Cost (CAC)',
        'Increase Monthly Recurring Revenue (MRR)',
        'Improve Trial-to-Paid Conversion Rates',
        'Reduce Churn & Increase LTV',
        'Predictable & Scalable Growth Pipeline'
      ],
      process: [
        { title: 'Funnel Audit', description: 'We map your entire user journey to find leaks and friction points.' },
        { title: 'Acquisition', description: 'We launch targeted campaigns to drive high-quality signups or demos.' },
        { title: 'Activation', description: 'We optimize emails and in-app messaging to get users to the "Aha!" moment.' },
        { title: 'Retention', description: 'We implement strategies to keep customers happy and paying longer.' }
      ],
      painPoints: [
        'High CAC making growth unsustainable',
        'Users signing up but not converting to paid',
        'High churn rates eating into revenue',
        'Difficulty scaling beyond the initial traction'
      ]
    }
  },
  {
    title: 'Content Marketing',
    slug: 'content-marketing',
    description: 'Powerful, SEO-driven content that engages, informs, and converts across channels.',
    icon: content,
    details: {
      longDescription: 'Content is the fuel for your entire marketing engine. But "more content" isn\'t the answer—**better content** is. We produce strategic, high-value assets that position your brand as the undisputed thought leader in your space. From deep-dive whitepapers that generate leads to SEO blog posts that drive traffic, every piece we create has a specific job: to move your audience closer to a purchase.',
      features: [
        'Content Strategy & Editorial Calendar',
        'SEO-Optimized Blog Posts & Articles',
        'Lead Magnets (E-books, Whitepapers, Checklists)',
        'Case Studies & Customer Success Stories',
        'Email Marketing Sequences & Newsletters',
        'Video Scripting & Storyboarding'
      ],
      benefits: [
        'Establish Authority & Trust in Your Niche',
        'Nurture Leads on Autopilot',
        'Improve SEO Rankings with Quality Content',
        'Shorten Sales Cycles with Educational Assets',
        'Build a Library of Evergreen Marketing Assets'
      ],
      process: [
        { title: 'Research', description: 'We research your audience’s pain points and your competitors’ content gaps.' },
        { title: 'Creation', description: 'Our expert writers and designers craft high-quality, on-brand assets.' },
        { title: 'Distribution', description: 'We don’t just publish; we promote your content across multiple channels.' },
        { title: 'Optimization', description: 'We refresh and update content to ensure it keeps performing over time.' }
      ],
      painPoints: [
        'Running out of ideas for content',
        'Content not driving any traffic or leads',
        'Inconsistent brand voice across channels',
        'Sales team lacking materials to close deals'
      ]
    }
  },
];

export default serviceData;
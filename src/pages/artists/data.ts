export interface PlatformChip {
  name: string;
}

export interface HowItWorksStep {
  title: string;
  description: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  future?: boolean;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  highlighted?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const platformChips: PlatformChip[] = [
  { name: "Spotify" },
  { name: "Apple Music" },
  { name: "YouTube" },
  { name: "TikTok" },
  { name: "Instagram" },
  { name: "SoundCloud" },
  { name: "Bandcamp" },
  { name: "Deezer" },
  { name: "Amazon Music" },
  { name: "Tidal" },
  { name: "Qobuz" },
];

export const howItWorksSteps: HowItWorksStep[] = [
  {
    title: "Upload Track",
    description:
      "Drop your audio and artwork once. We package your release for stores and social channels.",
  },
  {
    title: "Validate & Enrich Metadata",
    description:
      "We check artwork, format, and metadata quality while suggesting missing tags and social copy.",
  },
  {
    title: "Distribute & Monitor",
    description:
      "Deliver through trusted distributor partners and monitor release status from one dashboard.",
  },
];

export const featureItems: FeatureItem[] = [
  {
    title: "One-click distribution",
    description: "Route releases through DistroKid or Amuse with delivery safeguards.",
  },
  {
    title: "ISRC / UPC management",
    description: "Track identifiers in one place and prevent duplicate catalog entries.",
  },
  {
    title: "Artwork compliance",
    description: "Validate resolution and format before submitting to platforms.",
  },
  {
    title: "AI captions + hashtags",
    description: "Generate social-ready launch copy for TikTok, Instagram, and X.",
  },
  {
    title: "Release scheduling",
    description: "Plan launch windows and coordinate posts with release dates.",
  },
  {
    title: "Store monitoring",
    description: "Track where each release is live and spot distribution issues quickly.",
  },
  {
    title: "Cross-platform analytics",
    description: "Aggregate streams, saves, and engagement into one KPI view.",
  },
  {
    title: "Pre-save campaigns",
    description: "Generate campaign links and collect fan intent before launch day.",
  },
  {
    title: "Royalty tracking",
    description: "Reconcile royalties across partners and territories.",
    future: true,
  },
];

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "Free",
    description: "Great for testing your first release workflow.",
    features: ["1 active release", "Basic metadata tools", "Manual status checks"],
    ctaLabel: "Start Free",
    ctaHref: "/artists/onboarding",
  },
  {
    name: "Pro",
    price: "$19/mo",
    description: "For active artists shipping consistently.",
    features: [
      "Unlimited releases",
      "Cross-platform analytics",
      "Smart scheduling",
      "Priority delivery",
    ],
    ctaLabel: "Choose Pro",
    ctaHref: "/artists/onboarding",
    highlighted: true,
  },
  {
    name: "Label",
    price: "Contact",
    description: "For teams and label operations.",
    features: [
      "Multi-artist dashboard",
      "Royalty splits",
      "Advanced permissions",
      "Dedicated support",
    ],
    ctaLabel: "Talk to Sales",
    ctaHref: "mailto:partners@cladesync.com?subject=CladeSync%20Label%20Plan",
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "Do you publish directly to Spotify and Apple Music?",
    answer:
      "Distribution is routed through trusted partners such as DistroKid or Amuse, then delivered to stores.",
  },
  {
    question: "Can I schedule future releases?",
    answer:
      "Yes. You can set release dates and track the delivery timeline for each destination.",
  },
  {
    question: "Do you validate artwork and metadata?",
    answer:
      "Yes. We run compliance checks for artwork size/format and metadata completeness before submission.",
  },
  {
    question: "What happens if a platform rejects my release?",
    answer:
      "You’ll get a rejection reason and a suggested fix flow so you can resubmit quickly.",
  },
  {
    question: "Can labels manage multiple artists?",
    answer:
      "Label plan includes team access, artist-level permissions, and consolidated reporting.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes. Starter is free so you can create a release draft and test the workflow.",
  },
  {
    question: "Do you offer API access?",
    answer:
      "API and webhook access is available on advanced plans for integrations and automations.",
  },
];

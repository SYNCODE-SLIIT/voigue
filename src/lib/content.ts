import {
  BriefcaseBusiness,
  Building2,
  Code2,
  Globe2,
  Headphones,
  LineChart,
  Megaphone,
  ShieldCheck,
  Sparkles,
  UsersRound
} from "lucide-react";
import type { PublicIndustry, PublicJob, PublicPost, PublicService } from "@/types/content";

export const site = {
  name: "Voigue",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://voigue.com",
  email: "hello@voigue.com",
  phone: "(+94) 11 711 0170",
  description:
    "Australian-led managed staffing, BPO, digital and technology solutions delivered through global teams in Sri Lanka.",
  locations: [
    {
      city: "Melbourne",
      address: "470 St Kilda Road, Melbourne, VIC 3004, Australia",
      note: "Australian headquarters and client-facing leadership"
    },
    {
      city: "Colombo",
      address: "Orion City IT Park, Colombo, Sri Lanka",
      note: "Sri Lanka operations centre for managed global teams"
    }
  ]
};

export const navItems = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Careers", href: "/careers" },
  { label: "Insights", href: "/insights" }
];

export const services: PublicService[] = [
  {
    slug: "managed-staffing",
    title: "Managed Staffing",
    eyebrow: "Extended teams",
    icon: UsersRound,
    excerpt:
      "Certified professionals integrated into your business with supervision, quality oversight and Australian-standard delivery.",
    capabilities: ["Dedicated talent", "Supervisor oversight", "Flexible scaling", "Australian workplace alignment"],
    problems: ["Local hiring pressure", "Long recruitment cycles", "Limited specialist availability"],
    benefits: ["Faster onboarding", "Lower operating complexity", "Clear accountability"],
    industries: ["Technology", "Professional Services", "Finance"],
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=80"
  },
  {
    slug: "bpo-solutions",
    title: "BPO Solutions",
    eyebrow: "Operational support",
    icon: BriefcaseBusiness,
    excerpt:
      "Business process outsourcing for back-office, customer operations, bookkeeping, administration and support workflows.",
    capabilities: ["Back-office operations", "Virtual assistance", "Bookkeeping", "Customer support"],
    problems: ["Repetitive admin load", "Rising operating costs", "Inconsistent process quality"],
    benefits: ["More leadership focus", "Reliable workflows", "Scalable delivery capacity"],
    industries: ["Retail", "E-commerce", "Healthcare"],
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80"
  },
  {
    slug: "technology-services",
    title: "Technology Services",
    eyebrow: "Voigue Tech",
    icon: Code2,
    excerpt:
      "Managed technology capability across IT support, software development, QA, DevOps, cybersecurity and infrastructure.",
    capabilities: ["IT support", "Software developers", "QA engineers", "DevOps", "Cybersecurity"],
    problems: ["Skills gaps", "Infrastructure strain", "Support backlog"],
    benefits: ["Certified expertise", "Enterprise-grade support", "Resilient technology operations"],
    industries: ["Technology", "Professional Services", "Finance"],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80"
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    eyebrow: "Voigue Digital",
    icon: Megaphone,
    excerpt:
      "Digital specialists for SEO, social media, campaigns, websites and email marketing managed as part of your team.",
    capabilities: ["SEO specialists", "Campaign managers", "Social media", "Web delivery", "Email marketing"],
    problems: ["Inconsistent digital execution", "Capacity constraints", "Campaign delivery gaps"],
    benefits: ["Reliable execution", "Broader specialist coverage", "Better operating rhythm"],
    industries: ["E-commerce", "Retail", "Professional Services"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80"
  }
];

export const industries: PublicIndustry[] = [
  {
    slug: "technology",
    title: "Technology",
    icon: Code2,
    excerpt: "Engineering, support and digital operations for technology-led businesses.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "professional-services",
    title: "Professional Services",
    icon: Building2,
    excerpt: "Administrative, client service and project support for growing advisory and service firms.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "finance",
    title: "Finance",
    icon: LineChart,
    excerpt: "Bookkeeping, accounting support and process discipline for finance-heavy workflows.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    icon: ShieldCheck,
    excerpt: "Structured support teams for providers that need careful communication and reliable administration.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "ecommerce",
    title: "E-commerce",
    icon: Headphones,
    excerpt: "Customer support, virtual assistance and marketing operations for online businesses.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80"
  }
];

export const differentiators = [
  {
    title: "Australian-led accountability",
    body: "Voigue operates with Melbourne-based client leadership and delivery standards designed for Australian businesses."
  },
  {
    title: "Purpose-built Sri Lanka operations",
    body: "Teams work through Voigue's Colombo operations centre, with infrastructure and management support included."
  },
  {
    title: "Managed partnership model",
    body: "Voigue does more than place people. Supervisors, quality oversight and account management stay part of delivery."
  },
  {
    title: "Scale without long lock-ins",
    body: "The current Voigue positioning emphasizes rolling contracts, flexible scaling and replacement support."
  }
];

export const metrics = [
  { value: "9+", label: "Years supporting Australian businesses", source: "Verified from current Voigue website" },
  { value: "100+", label: "Australian businesses served", source: "Verified from current Voigue website" },
  { value: "200+", label: "Certified professionals", source: "Verified from current Voigue homepage" },
  { value: "14 days", label: "Average onboarding target", source: "Verified from current Voigue website" }
];

export const values = [
  { icon: Globe2, title: "Global perspective", body: "Teams designed for cross-border collaboration and clear communication." },
  { icon: Sparkles, title: "Human expertise", body: "Skilled professionals supported by training, oversight and career growth." },
  { icon: ShieldCheck, title: "Operational discipline", body: "Managed delivery, process visibility and practical accountability." }
];

export const fallbackJobs: PublicJob[] = [
  {
    title: "Virtual Assistant",
    slug: "virtual-assistant",
    department: "Business Support",
    location: "Sri Lanka",
    employmentType: "Full-time",
    description: "Support an Australian client with administration, CRM, marketing coordination and day-to-day operations.",
    responsibilities: ["Manage administrative workflows", "Coordinate client communication", "Maintain CRM and reporting records"],
    requirements: ["Excellent written English", "Strong organization", "Experience in sales, marketing or support"],
    benefits: ["International client exposure", "Supportive team environment", "Career development"],
    status: "Active",
    featured: true
  },
  {
    title: "System Engineer",
    slug: "system-engineer",
    department: "Technology",
    location: "Colombo / Sri Lanka",
    employmentType: "Full-time",
    description: "Deliver technical support and managed technology services for Australian business clients.",
    responsibilities: ["Resolve support tickets", "Maintain client systems", "Document technical activity"],
    requirements: ["IT support experience", "Networking fundamentals", "Strong client communication"],
    benefits: ["Australian client exposure", "Professional office environment", "Learning opportunities"],
    status: "Active",
    featured: true
  }
];

export const fallbackPosts: PublicPost[] = [
  {
    title: "How Managed Staffing Changes the Outsourcing Conversation",
    slug: "managed-staffing-outsourcing",
    excerpt: "Why businesses are moving from transactional offshore hiring to supervised, accountable global teams.",
    category: "Outsourcing",
    author: "Voigue",
    published: true,
    publishedAt: new Date().toISOString(),
    tags: ["Managed Staffing", "BPO"],
    content:
      "Managed staffing works best when talent, supervision, infrastructure and accountability are designed as one operating model. This placeholder article should be replaced with client-approved editorial content."
  },
  {
    title: "Building Better Cross-Border Teams",
    slug: "cross-border-teams",
    excerpt: "Practical operating principles for teams working across Australia and Sri Lanka.",
    category: "People",
    author: "Voigue",
    published: true,
    publishedAt: new Date().toISOString(),
    tags: ["Teams", "Operations"],
    content:
      "Clear expectations, communication rhythms and manager visibility are essential for cross-border team performance. This is starter CMS content for review."
  }
];

export const faqs = [
  {
    question: "What does Voigue provide?",
    answer:
      "Voigue provides Australian-led managed staffing, BPO, technology and digital marketing support through global teams."
  },
  {
    question: "Where are Voigue's offices?",
    answer:
      "Voigue lists a Melbourne office at 470 St Kilda Road and a Sri Lanka operations centre at Orion City IT Park, Colombo."
  },
  {
    question: "Can the website content be managed from an admin dashboard?",
    answer:
      "Yes. Jobs, services, posts, FAQs, testimonials, contacts and applications are modelled for MongoDB-backed management."
  }
];

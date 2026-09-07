import type { LucideIcon } from "lucide-react";

export type PublicService = {
  slug: string;
  title: string;
  eyebrow?: string;
  excerpt?: string;
  overview?: string;
  image?: string;
  icon?: LucideIcon;
  capabilities?: string[];
  problems?: string[];
  benefits?: string[];
  industries?: string[];
  process?: string[];
};

export type PublicIndustry = {
  slug: string;
  title: string;
  excerpt?: string;
  content?: string;
  image?: string;
  icon?: LucideIcon;
};

export type PublicJob = {
  title: string;
  slug: string;
  department?: string;
  location?: string;
  employmentType?: string;
  description?: string;
  responsibilities?: string[];
  requirements?: string[];
  benefits?: string[];
  salaryRange?: string;
  status?: string;
  featured?: boolean;
};

export type PublicPost = {
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
  coverImage?: string;
  category?: string;
  author?: string;
  published?: boolean;
  publishedAt?: string | Date;
  tags?: string[];
};

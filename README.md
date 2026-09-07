# Voigue Website Redesign

Premium B2B corporate website for Voigue built with Next.js App Router, TypeScript, Tailwind CSS, MongoDB/Mongoose, Zod, React Hook Form, Lucide React, and Framer Motion.

## Local Development

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` and configure `MONGODB_URI`, `AUTH_SECRET`, and admin/email variables for full backend functionality. Without MongoDB, public pages render verified fallback content and form/API writes return configuration errors instead of exposing secrets.

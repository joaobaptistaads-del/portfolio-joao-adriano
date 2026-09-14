export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: "20+", label: "Projects Delivered" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "24-72h", label: "Fast Delivery" },
  { value: "Global", label: "Remote Worldwide" },
];

export const floatingBadges = [
  { icon: "code", title: "Build", subtitle: "Web Apps", position: "top-left" },
  { icon: "zap", title: "Automate", subtitle: "Business Processes", position: "top-right" },
  { icon: "database", title: "Integrate", subtitle: "AI Solutions", position: "right" },
  { icon: "chart", title: "Scale", subtitle: "Your Business", position: "bottom-left" },
];

export const aboutPoints = [
  "Full-Stack Development (React, Next.js, Node.js)",
  "AI Integration (OpenAI, Automation, Chatbots)",
  "Modern, Responsive & Scalable Solutions",
  "Clear Communication & On-Time Delivery",
];

export const skillCategories = [
  "All",
  "Frontend",
  "Backend",
  "AI & Automation",
  "Database",
  "Tools & Others",
] as const;

export type SkillCategory = (typeof skillCategories)[number];

export const skills: { name: string; category: SkillCategory }[] = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "Supabase", category: "Database" },
  { name: "PostgreSQL", category: "Database" },
  { name: "OpenAI", category: "AI & Automation" },
  { name: "n8n", category: "AI & Automation" },
  { name: "Git", category: "Tools & Others" },
  { name: "Docker", category: "Tools & Others" },
  { name: "Vercel", category: "Tools & Others" },
  { name: "Figma", category: "Tools & Others" },
];

export const projects = [
  {
    title: "AI SaaS Platform",
    description: "Web app with AI integration, subscriptions and modern UI.",
    tags: ["Next.js", "Supabase", "OpenAI"],
    gradient: "from-indigo-500 to-blue-600",
  },
  {
    title: "E-commerce Store",
    description: "Modern and responsive online store with payment integration.",
    tags: ["Next.js", "Stripe", "Tailwind CSS"],
    gradient: "from-slate-200 to-slate-400",
  },
  {
    title: "Automation System",
    description: "Workflow automation for lead generation and client onboarding.",
    tags: ["n8n", "OpenAI", "Google APIs"],
    gradient: "from-emerald-400 to-teal-600",
  },
  {
    title: "Business Website",
    description: "High-converting website for a local business.",
    tags: ["Next.js", "Tailwind CSS", "SEO"],
    gradient: "from-amber-400 to-orange-600",
  },
];

export const services = [
  {
    title: "Web App Development",
    description:
      "Fast, responsive and scalable web applications built with React and Next.js.",
    icon: "code",
  },
  {
    title: "AI Integration",
    description:
      "Chatbots, automations and OpenAI-powered features that save time and money.",
    icon: "sparkles",
  },
  {
    title: "Process Automation",
    description:
      "n8n workflows that connect your tools and automate repetitive tasks.",
    icon: "zap",
  },
  {
    title: "API & Database Design",
    description:
      "Robust backends and databases (Postgres, Supabase) built to scale.",
    icon: "database",
  },
];

export const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Founder, RetailFlow",
    quote:
      "João delivered our e-commerce platform ahead of schedule. Communication was clear and the quality exceeded expectations.",
  },
  {
    name: "Daniel Reeves",
    role: "CEO, NimbusOps",
    quote:
      "The automation system he built saves our team over 20 hours a week. Truly a game changer for our operations.",
  },
  {
    name: "Priya Nair",
    role: "Product Lead, Fintra",
    quote:
      "Great technical skill combined with genuine care for the business outcome. Highly recommend working with him.",
  },
];


export type BlogCategory = 
  | "AI & Machine Learning"
  | "Cloud Computing"
  | "Web Development"
  | "Cybersecurity"
  | "Data Engineering & Analytics"
  | "DevOps & Infrastructure"
  | "Mobile Development"
  | "SaaS & Startups"
  | "UI/UX Engineering";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: BlogCategory;
  content: string;
  readTime: string;
  createdAt: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  thumbnail: string;
  views: number;
  popularity: number; // 1-100
  featured?: boolean;
}

export const BLOG_CATEGORIES: { name: BlogCategory; description: string; slug: string }[] = [
  { 
    name: "AI & Machine Learning", 
    slug: "ai-ml",
    description: "Deep dives into LLMs, Neural Networks, and the future of intelligent systems." 
  },
  { 
    name: "Cloud Computing", 
    slug: "cloud",
    description: "Architecting scalable solutions on AWS, Azure, and Google Cloud Platform." 
  },
  { 
    name: "Web Development", 
    slug: "web-dev",
    description: "Modern frontend and backend engineering with React, Next.js, and Node.js." 
  },
  { 
    name: "Cybersecurity", 
    slug: "security",
    description: "Protecting digital assets in an increasingly complex threat landscape." 
  },
  { 
    name: "Data Engineering & Analytics", 
    slug: "data",
    description: "Pipelines, warehouses, and turning raw data into actionable insights." 
  },
  { 
    name: "DevOps & Infrastructure", 
    slug: "devops",
    description: "Automating workflows and managing infrastructure as code." 
  },
  { 
    name: "Mobile Development", 
    slug: "mobile",
    description: "Building high-performance cross-platform and native mobile applications." 
  },
  { 
    name: "SaaS & Startups", 
    slug: "saas",
    description: "Strategies for building and scaling successful software businesses." 
  },
  { 
    name: "UI/UX Engineering", 
    slug: "ui-ux",
    description: "The intersection of design aesthetics and technical implementation." 
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "scaling-nextjs-apps-millions-users",
    title: "Scaling Next.js Apps for Millions of Users",
    description: "Learn the architectural patterns and optimization techniques required to handle massive traffic with Next.js.",
    category: "Web Development",
    readTime: "8 min read",
    createdAt: "2024-03-15",
    views: 12400,
    popularity: 95,
    featured: true,
    author: {
      name: "Alex Rivera",
      role: "Solutions Architect",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
    },
    thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
    content: `
# Scaling Next.js Apps for Millions of Users

Building a Next.js application is easy, but scaling it to handle millions of requests per second requires a deep understanding of its rendering strategies and infrastructure.

## 1. Incremental Static Regeneration (ISR)

One of the most powerful features of Next.js is ISR. It allows you to update static content without rebuilding the entire site.

\`\`\`typescript
export const revalidate = 3600; // revalidate every hour
\`\`\`

## 2. Distributed Caching with CDNs

Using a Global Edge Network ensures that your users receive content from the nearest possible location, significantly reducing latency.

### Benefits:
- Reduced Server Load
- Faster Time to First Byte (TTFB)
- High Availability

## 3. Optimizing Database Queries

When traffic spikes, the database is often the first bottleneck. Implement connection pooling and query caching to mitigate this.
    `
  },
  {
    slug: "aws-architecture-best-practices-startups",
    title: "AWS Architecture Best Practices for Startups",
    description: "A guide to building a cost-effective, secure, and scalable foundation on AWS from day one.",
    category: "Cloud Computing",
    readTime: "12 min read",
    createdAt: "2024-03-10",
    views: 8500,
    popularity: 88,
    author: {
      name: "Sarah Chen",
      role: "Cloud Engineer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
    },
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    content: `
# AWS Architecture Best Practices for Startups

Starting on AWS can be overwhelming. Here's a lean roadmap for startups.

\`\`\`yaml
# Basic Serverless Stack
API: API Gateway
Compute: AWS Lambda
Database: DynamoDB
Storage: S3
\`\`\`

## Cost Optimization
Don't over-provision. Use AWS Budgets and set up alerts early.
    `
  },
  {
    slug: "how-ai-is-transforming-saas-products",
    title: "How AI is Transforming SaaS Products",
    description: "Exploring the integration of Large Language Models into modern software-as-a-service platforms.",
    category: "AI & Machine Learning",
    readTime: "6 min read",
    createdAt: "2024-03-12",
    views: 15600,
    popularity: 98,
    author: {
      name: "Jordan Smith",
      role: "AI Researcher",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan"
    },
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    content: "Content about AI in SaaS..."
  },
  {
    slug: "zero-trust-security-explained",
    title: "Zero Trust Security Explained",
    description: "Why the traditional perimeter security model is dead and how to implement a Zero Trust architecture.",
    category: "Cybersecurity",
    readTime: "10 min read",
    createdAt: "2024-03-05",
    views: 6200,
    popularity: 75,
    author: {
      name: "Marcus Vane",
      role: "Security Consultant",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus"
    },
    thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    content: "Content about Zero Trust..."
  },
  {
    slug: "ci-cd-pipeline-optimization-guide",
    title: "CI/CD Pipeline Optimization Guide",
    description: "Reduce build times and increase deployment frequency with these advanced DevOps techniques.",
    category: "DevOps & Infrastructure",
    readTime: "9 min read",
    createdAt: "2024-03-14",
    views: 4800,
    popularity: 82,
    author: {
      name: "Elena Rodriguez",
      role: "DevOps Lead",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena"
    },
    thumbnail: "https://images.unsplash.com/photo-1618401471353-b98aadebc25b?auto=format&fit=crop&q=80&w=800",
    content: "Content about CI/CD..."
  },
  {
    slug: "building-real-time-apps-websockets",
    title: "Building Real-Time Apps with WebSockets",
    description: "Implement low-latency bi-directional communication in your web applications.",
    category: "Web Development",
    readTime: "7 min read",
    createdAt: "2024-03-18",
    views: 9300,
    popularity: 91,
    author: {
      name: "Alex Rivera",
      role: "Solutions Architect",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
    },
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    content: "Content about WebSockets..."
  }
];

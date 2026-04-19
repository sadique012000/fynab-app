export interface Job {
  id: string;
  slug: string;
  title: string;
  department: "Engineering" | "Design" | "Marketing" | "Product" | "Operations";
  location: "Remote" | "Onsite" | "Hybrid";
  type: "Full-time" | "Contract" | "Internship";
  experience: "Junior" | "Mid" | "Senior" | "Lead";
  salary: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
}

export const jobs: Job[] = [
  {
    id: "1",
    slug: "frontend-developer-remote",
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    experience: "Senior",
    salary: "$120k - $180k",
    description: "We are looking for a Senior Frontend Developer to lead the development of our core web platform. You will be responsible for creating high-performance, accessible, and beautiful user interfaces using React and Next.js.",
    responsibilities: [
      "Architect and build responsive layouts using Tailwind CSS and Framer Motion.",
      "Optimize application performance for maximum speed and scalability.",
      "Collaborate with designers to implement pixel-perfect UIs.",
      "Mentor junior developers and participate in code reviews.",
      "Integrate complex APIs and manage application state efficiently."
    ],
    requirements: [
      "5+ years of experience with React/Next.js.",
      "Strong proficiency in TypeScript and modern CSS (Tailwind, CSS Modules).",
      "Experience with animation libraries like Framer Motion or GSAP.",
      "Solid understanding of Core Web Vitals and performance optimization.",
      "Excellent communication and collaboration skills."
    ],
    benefits: [
      "Competitive salary and equity package.",
      "Remote-first culture with flexible working hours.",
      "Health, dental, and vision insurance.",
      "Professional development budget.",
      "Annual company retreats."
    ]
  },
  {
    id: "2",
    slug: "backend-engineer-node",
    title: "Backend Engineer (Node.js)",
    department: "Engineering",
    location: "Hybrid",
    type: "Full-time",
    experience: "Mid",
    salary: "$100k - $150k",
    description: "Join our backend team to build robust and scalable microservices. You will focus on building secure APIs, managing databases, and ensuring the overall stability of our infrastructure.",
    responsibilities: [
      "Design and implement scalable microservices using Node.js.",
      "Optimize database queries and schema designs (PostgreSQL, Redis).",
      "Implement security best practices and data protection.",
      "Participate in architectural discussions and system design.",
      "Write clean, maintainable, and well-tested code."
    ],
    requirements: [
      "3+ years of experience in backend development.",
      "Proficiency in Node.js and TypeScript.",
      "Solid experience with SQL and NoSQL databases.",
      "Understanding of RESTful and GraphQL API design.",
      "Experience with cloud platforms like AWS or Google Cloud."
    ],
    benefits: [
      "Flexible work-from-home policy.",
      "Modern office in the heart of the tech hub.",
      "Generous parental leave.",
      "Fitness and wellness allowance.",
      "Regular team hackathons."
    ]
  },
  {
    id: "3",
    slug: "ai-ml-engineer",
    title: "AI / ML Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    experience: "Senior",
    salary: "$140k - $210k",
    description: "Help us integrate cutting-edge AI features into Fynab. You will be responsible for developing machine learning models and implementing them in a production environment.",
    responsibilities: [
      "Develop and deploy ML models for predictive analytics.",
      "Fine-tune LLMs for specific business use cases.",
      "Build data pipelines and ensure data quality.",
      "Collaborate with the product team to define AI roadmaps.",
      "Stay up-to-date with the latest research in AI and ML."
    ],
    requirements: [
      "Deep understanding of machine learning algorithms and neural networks.",
      "Experience with Python, PyTorch, or TensorFlow.",
      "Knowledge of LLMs, prompt engineering, and RAG architectures.",
      "Strong mathematical and problem-solving skills.",
      "Previous experience deploying AI models in production."
    ],
    benefits: [
      "Work on frontier technology.",
      "Research sabbatical options.",
      "High-performance computing resources.",
      "Flexible work location.",
      "Comprehensive insurance coverage."
    ]
  },
  {
    id: "4",
    slug: "product-designer",
    title: "UI / UX Designer",
    department: "Design",
    location: "Onsite",
    type: "Full-time",
    experience: "Mid",
    salary: "$90k - $140k",
    description: "Craft beautiful and intuitive user experiences for our SaaS suite. You will own the design process from concept to final handoff.",
    responsibilities: [
      "Create high-fidelity mockups and interactive prototypes.",
      "Maintain and evolve our design system.",
      "Conduct user research and usability testing.",
      "Iterate on designs based on feedback and analytics.",
      "Work closely with engineers to ensure design fidelity."
    ],
    requirements: [
      "A strong portfolio showcasing web and mobile design projects.",
      "Expert-level knowledge of Figma and Adobe Creative Suite.",
      "Experience with motion design and prototyping.",
      "Deep understanding of user-centered design principles.",
      "Ability to articulate design decisions effectively."
    ],
    benefits: [
      "Creative and collaborative work environment.",
      "Top-tier hardware (MacBook Pro, 4K monitors).",
      "Design conference stipend.",
      "Relocation assistance.",
      "Casual dress code."
    ]
  },
  {
    id: "5",
    slug: "devops-engineer",
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Contract",
    experience: "Senior",
    salary: "$100 - $150 / hr",
    description: "We need a DevOps expert to streamline our CI/CD pipelines and manage our cloud infrastructure. This is a high-impact role ensuring our platform remains highly available.",
    responsibilities: [
      "Automate infrastructure provisioning using Terraform/Pulumi.",
      "Manage Kubernetes clusters and container orchestration.",
      "Monitor system health and performance.",
      "Implement robust CI/CD pipelines (GitHub Actions, GitLab CI).",
      "Ensure security compliance across all systems."
    ],
    requirements: [
      "Expertise in AWS, Azure, or GCP.",
      "Strong experience with Kubernetes and Docker.",
      "Proficiency in scripting (Python, Bash, or Go).",
      "Experience with Infrastructure as Code (IaC).",
      "Strong troubleshooting and analytical skills."
    ],
    benefits: [
      "Flexible contract terms.",
      "Access to premium cloud training resources.",
      "Work on a modern tech stack.",
      "Collaborative and remote team culture.",
      "Direct impact on platform stability."
    ]
  },
  {
    id: "6",
    slug: "product-manager",
    title: "Technical Product Manager",
    department: "Product",
    location: "Hybrid",
    type: "Full-time",
    experience: "Lead",
    salary: "$130k - $190k",
    description: "Lead the product vision for our enterprise tools. You will bridge the gap between business goals and technical implementation.",
    responsibilities: [
      "Define product strategy and roadmap.",
      "Translate business requirements into technical specs.",
      "Prioritize features and manage the product backlog.",
      "Analyze market trends and competitor landscape.",
      "Coordinate with cross-functional teams for product launches."
    ],
    requirements: [
      "Experience managing complex SaaS products.",
      "Strong technical background (former engineer preferred).",
      "Excellent data analysis and strategic thinking skills.",
      "Proven track record of delivering successful products.",
      "Superior communication and leadership abilities."
    ],
    benefits: [
      "Leadership role with significant impact.",
      "Performance-based bonuses.",
      "Stock options.",
      "Global travel opportunities for conferences.",
      "Comprehensive wellness program."
    ]
  }
];

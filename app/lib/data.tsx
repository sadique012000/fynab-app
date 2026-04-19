import React from "react";

export const services = [
  {
    id: "cloud",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
    title: "Cloud Solutions",
    description: "Migrate, optimize, and manage your cloud infrastructure with AWS, Azure, and Google Cloud expertise.",
    color: "from-blue-500 to-indigo-500",
    glow: "rgba(99, 102, 241, 0.4)",
    details: [
      "Cloud Migration & Strategy",
      "Serverless Architecture",
      "Multi-cloud Management",
      "Cloud Security & Compliance"
    ]
  },
  {
    id: "software",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    title: "Custom Software",
    description: "End-to-end software development tailored to your business processes, from MVP to enterprise-scale solutions.",
    color: "from-cyan-400 to-blue-500",
    glow: "rgba(6, 182, 212, 0.4)",
    details: [
      "Custom Web Applications",
      "Mobile App Development",
      "Legacy System Modernization",
      "API Integration & Development"
    ]
  },
  {
    id: "data",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-1.5M12 12.75l3-1.5M12 12.75V18" />
      </svg>
    ),
    title: "Data & Analytics",
    description: "Transform raw data into actionable insights with our advanced analytics, BI dashboards, and ML models.",
    color: "from-purple-500 to-fuchsia-500",
    glow: "rgba(168, 85, 247, 0.4)",
    details: [
      "Data Warehousing",
      "Predictive Analytics",
      "Business Intelligence",
      "Data Engineering Pipelines"
    ]
  },
  {
    id: "cyber",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Cybersecurity",
    description: "Protect your digital assets with comprehensive security assessments, SOC services, and compliance frameworks.",
    color: "from-emerald-400 to-teal-500",
    glow: "rgba(16, 185, 129, 0.4)",
    details: [
      "Vulnerability Assessments",
      "Incident Response",
      "Compliance Management",
      "Zero Trust Architecture"
    ]
  },
  {
    id: "ai",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455-2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455-2.456z" />
      </svg>
    ),
    title: "AI & Automation",
    description: "Leverage artificial intelligence and intelligent automation to streamline operations and unlock new capabilities.",
    color: "from-amber-400 to-orange-500",
    glow: "rgba(245, 158, 11, 0.4)",
    details: [
      "Machine Learning Models",
      "Natural Language Processing",
      "RPA Implementation",
      "AI Strategy & Ethics"
    ]
  },
  {
    id: "strategy",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    title: "Digital Strategy",
    description: "Craft a comprehensive digital roadmap aligned with your business goals, from technology audits to transformation plans.",
    color: "from-rose-400 to-red-500",
    glow: "rgba(244, 63, 94, 0.4)",
    details: [
      "Digital Maturity Assessment",
      "Product Roadmap Design",
      "Technology Stack Audit",
      "Change Management"
    ]
  },
];

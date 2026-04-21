export interface Project {
  name: string;
  description: string;
}

export interface Freelancer {
  id: string;
  name: string;
  role: string;
  experience: number;
  skills: string[];
  hourlyRate: number;
  availability: 'Full-time' | 'Part-time';
  bio: string;
  projects: Project[];
  rating: number;
  location: string;
}

export const freelancers: Freelancer[] = [
  {
    "id": "fr-001",
    "name": "Aditi Das",
    "role": "DevOps Engineer",
    "experience": 7,
    "skills": [
      "Node.js",
      "Angular",
      "Framer Motion"
    ],
    "hourlyRate": 15,
    "availability": "Full-time",
    "bio": "Passionate DevOps Engineer with 7+ years of experience building scalable applications and intuitive user interfaces. Known for elegant code and solid problem-solving skills. Based in Ahmedabad.",
    "projects": [
      {
        "name": "EdTech Platform",
        "description": "Architected and delivered the core devops infrastructure improving performance by 43%."
      },
      {
        "name": "Enterprise Dashboard",
        "description": "Developed a comprehensive dashboard utilized by over 50 enterprise clients."
      },
      {
        "name": "Open Source Contribution",
        "description": "Significant contributions to popular open-source libraries in the Javascript/Python ecosystem."
      }
    ],
    "rating": 5,
    "location": "Mumbai"
  },
  {
    "id": "fr-002",
    "name": "Kabir Kapoor",
    "role": "Full Stack Developer",
    "experience": 5,
    "skills": [
      "React",
      "Angular",
      "PostgreSQL",
      "Tailwind CSS"
    ],
    "hourlyRate": 53,
    "availability": "Full-time",
    "bio": "Passionate Full Stack Developer with 5+ years of experience building scalable applications and intuitive user interfaces. Known for elegant code and solid problem-solving skills. Based in Pune.",
    "projects": [
      {
        "name": "EdTech Platform",
        "description": "Architected and delivered the core full infrastructure improving performance by 59%."
      },
      {
        "name": "Enterprise Dashboard",
        "description": "Developed a comprehensive dashboard utilized by over 27 enterprise clients."
      }
    ],
    "rating": 5,
    "location": "Delhi NCR"
  },
  {
    "id": "fr-003",
    "name": "Rahul Singh",
    "role": "Cloud Architect",
    "experience": 3,
    "skills": [
      "MongoDB",
      "Flutter",
      "Angular"
    ],
    "hourlyRate": 34,
    "availability": "Full-time",
    "bio": "Passionate Cloud Architect with 3+ years of experience building scalable applications and intuitive user interfaces. Known for elegant code and solid problem-solving skills. Based in Kolkata.",
    "projects": [
      {
        "name": "HealthTech Platform",
        "description": "Architected and delivered the core cloud infrastructure improving performance by 30%."
      },
      {
        "name": "Enterprise Dashboard",
        "description": "Developed a comprehensive dashboard utilized by over 47 enterprise clients."
      },
      {
        "name": "Open Source Contribution",
        "description": "Significant contributions to popular open-source libraries in the Javascript/Python ecosystem."
      }
    ],
    "rating": 4.6,
    "location": "Kolkata"
  },
  {
    "id": "fr-004",
    "name": "Rohit Reddy",
    "role": "Frontend Developer",
    "experience": 2,
    "skills": [
      "Tailwind CSS",
      "Python",
      "Docker",
      "Go",
      "Flutter"
    ],
    "hourlyRate": 29,
    "availability": "Full-time",
    "bio": "Passionate Frontend Developer with 2+ years of experience building scalable applications and intuitive user interfaces. Known for elegant code and solid problem-solving skills. Based in Mumbai.",
    "projects": [
      {
        "name": "Fintech Platform",
        "description": "Architected and delivered the core frontend infrastructure improving performance by 21%."
      },
      {
        "name": "Enterprise Dashboard",
        "description": "Developed a comprehensive dashboard utilized by over 16 enterprise clients."
      },
      {
        "name": "Open Source Contribution",
        "description": "Significant contributions to popular open-source libraries in the Javascript/Python ecosystem."
      }
    ],
    "rating": 4.4,
    "location": "Bangalore"
  },
  {
    "id": "fr-005",
    "name": "Aarav Jain",
    "role": "AI Engineer",
    "experience": 9,
    "skills": [
      "Go",
      "AWS",
      "MongoDB",
      "PyTorch"
    ],
    "hourlyRate": 31,
    "availability": "Full-time",
    "bio": "Passionate AI Engineer with 9+ years of experience building scalable applications and intuitive user interfaces. Known for elegant code and solid problem-solving skills. Based in Jaipur.",
    "projects": [
      {
        "name": "HealthTech Platform",
        "description": "Architected and delivered the core ai infrastructure improving performance by 38%."
      },
      {
        "name": "Enterprise Dashboard",
        "description": "Developed a comprehensive dashboard utilized by over 15 enterprise clients."
      },
      {
        "name": "Open Source Contribution",
        "description": "Significant contributions to popular open-source libraries in the Javascript/Python ecosystem."
      }
    ],
    "rating": 4.7,
    "location": "Delhi NCR"
  },
  {
    "id": "fr-006",
    "name": "Riya Das",
    "role": "Backend Developer",
    "experience": 7,
    "skills": [
      "TensorFlow",
      "Next.js",
      "Docker",
      "PyTorch",
      "Python"
    ],
    "hourlyRate": 31,
    "availability": "Full-time",
    "bio": "Passionate Backend Developer with 7+ years of experience building scalable applications and intuitive user interfaces. Known for elegant code and solid problem-solving skills. Based in Bangalore.",
    "projects": [
      {
        "name": "E-commerce Platform",
        "description": "Architected and delivered the core backend infrastructure improving performance by 52%."
      },
      {
        "name": "Enterprise Dashboard",
        "description": "Developed a comprehensive dashboard utilized by over 44 enterprise clients."
      },
      {
        "name": "Open Source Contribution",
        "description": "Significant contributions to popular open-source libraries in the Javascript/Python ecosystem."
      }
    ],
    "rating": 4.3,
    "location": "Chennai"
  },
  {
    "id": "fr-007",
    "name": "Vivaan Kapoor",
    "role": "Cloud Architect",
    "experience": 1,
    "skills": [
      "MongoDB",
      "Node.js",
      "Angular",
      "TensorFlow"
    ],
    "hourlyRate": 31,
    "availability": "Full-time",
    "bio": "Passionate Cloud Architect with 1+ years of experience building scalable applications and intuitive user interfaces. Known for elegant code and solid problem-solving skills. Based in Bangalore.",
    "projects": [
      {
        "name": "AI Platform",
        "description": "Architected and delivered the core cloud infrastructure improving performance by 36%."
      },
      {
        "name": "Enterprise Dashboard",
        "description": "Developed a comprehensive dashboard utilized by over 12 enterprise clients."
      }
    ],
    "rating": 5,
    "location": "Mumbai"
  },
  {
    "id": "fr-008",
    "name": "Ankit Gupta",
    "role": "AI Engineer",
    "experience": 7,
    "skills": [
      "React Native",
      "React",
      "AWS",
      "Python"
    ],
    "hourlyRate": 54,
    "availability": "Full-time",
    "bio": "Passionate AI Engineer with 7+ years of experience building scalable applications and intuitive user interfaces. Known for elegant code and solid problem-solving skills. Based in Ahmedabad.",
    "projects": [
      {
        "name": "EdTech Platform",
        "description": "Architected and delivered the core ai infrastructure improving performance by 53%."
      },
      {
        "name": "Enterprise Dashboard",
        "description": "Developed a comprehensive dashboard utilized by over 17 enterprise clients."
      },
      {
        "name": "Open Source Contribution",
        "description": "Significant contributions to popular open-source libraries in the Javascript/Python ecosystem."
      }
    ],
    "rating": 4.3,
    "location": "Chennai"
  },
  {
    "id": "fr-009",
    "name": "Aditi Rao",
    "role": "AI Engineer",
    "experience": 4,
    "skills": [
      "Docker",
      "Rust",
      "Next.js"
    ],
    "hourlyRate": 21,
    "availability": "Full-time",
    "bio": "Passionate AI Engineer with 4+ years of experience building scalable applications and intuitive user interfaces. Known for elegant code and solid problem-solving skills. Based in Kolkata.",
    "projects": [
      {
        "name": "SaaS Platform",
        "description": "Architected and delivered the core ai infrastructure improving performance by 48%."
      },
      {
        "name": "Enterprise Dashboard",
        "description": "Developed a comprehensive dashboard utilized by over 38 enterprise clients."
      }
    ],
    "rating": 4.7,
    "location": "Jaipur"
  },
  {
    "id": "fr-010",
    "name": "Neha Kapoor",
    "role": "AI Engineer",
    "experience": 7,
    "skills": [
      "Kubernetes",
      "Rust",
      "MongoDB"
    ],
    "hourlyRate": 27,
    "availability": "Full-time",
    "bio": "Passionate AI Engineer with 7+ years of experience building scalable applications and intuitive user interfaces. Known for elegant code and solid problem-solving skills. Based in Jaipur.",
    "projects": [
      {
        "name": "HealthTech Platform",
        "description": "Architected and delivered the core ai infrastructure improving performance by 49%."
      },
      {
        "name": "Enterprise Dashboard",
        "description": "Developed a comprehensive dashboard utilized by over 14 enterprise clients."
      }
    ],
    "rating": 4.9,
    "location": "Mumbai"
  },
  {
    "id": "fr-011",
    "name": "Tara Mishra",
    "role": "DevOps Engineer",
    "experience": 6,
    "skills": [
      "PyTorch",
      "Flutter",
      "TypeScript",
      "Go",
      "Framer Motion"
    ],
    "hourlyRate": 19,
    "availability": "Full-time",
    "bio": "Passionate DevOps Engineer with 6+ years of experience building scalable applications and intuitive user interfaces. Known for elegant code and solid problem-solving skills. Based in Chennai.",
    "projects": [
      {
        "name": "HealthTech Platform",
        "description": "Architected and delivered the core devops infrastructure improving performance by 55%."
      },
      {
        "name": "Enterprise Dashboard",
        "description": "Developed a comprehensive dashboard utilized by over 41 enterprise clients."
      },
      {
        "name": "Open Source Contribution",
        "description": "Significant contributions to popular open-source libraries in the Javascript/Python ecosystem."
      }
    ],
    "rating": 4.2,
    "location": "Pune"
  },
  {
    "id": "fr-012",
    "name": "Maya Bhatt",
    "role": "DevOps Engineer",
    "experience": 5,
    "skills": [
      "Flutter",
      "Rust",
      "AWS",
      "Node.js",
      "Python"
    ],
    "hourlyRate": 28,
    "availability": "Part-time",
    "bio": "Passionate DevOps Engineer with 5+ years of experience building scalable applications and intuitive user interfaces. Known for elegant code and solid problem-solving skills. Based in Ahmedabad.",
    "projects": [
      {
        "name": "HealthTech Platform",
        "description": "Architected and delivered the core devops infrastructure improving performance by 25%."
      },
      {
        "name": "Enterprise Dashboard",
        "description": "Developed a comprehensive dashboard utilized by over 45 enterprise clients."
      }
    ],
    "rating": 4.2,
    "location": "Chandigarh"
  },
  {
    "id": "fr-013",
    "name": "Rudra Yadav",
    "role": "Data Scientist",
    "experience": 5,
    "skills": [
      "AWS",
      "Python",
      "Rust"
    ],
    "hourlyRate": 59,
    "availability": "Part-time",
    "bio": "Passionate Data Scientist with 5+ years of experience building scalable applications and intuitive user interfaces. Known for elegant code and solid problem-solving skills. Based in Kolkata.",
    "projects": [
      {
        "name": "AI Platform",
        "description": "Architected and delivered the core data infrastructure improving performance by 56%."
      },
      {
        "name": "Enterprise Dashboard",
        "description": "Developed a comprehensive dashboard utilized by over 22 enterprise clients."
      },
      {
        "name": "Open Source Contribution",
        "description": "Significant contributions to popular open-source libraries in the Javascript/Python ecosystem."
      }
    ],
    "rating": 4.9,
    "location": "Delhi NCR"
  },
  {
    "id": "fr-014",
    "name": "Sunita Verma",
    "role": "Backend Developer",
    "experience": 5,
    "skills": [
      "Tailwind CSS",
      "Vue.js",
      "React"
    ],
    "hourlyRate": 49,
    "availability": "Part-time",
    "bio": "Passionate Backend Developer with 5+ years of experience building scalable applications and intuitive user interfaces. Known for elegant code and solid problem-solving skills. Based in Pune.",
    "projects": [
      {
        "name": "E-commerce Platform",
        "description": "Architected and delivered the core backend infrastructure improving performance by 48%."
      },
      {
        "name": "Enterprise Dashboard",
        "description": "Developed a comprehensive dashboard utilized by over 15 enterprise clients."
      }
    ],
    "rating": 4.9,
    "location": "Chennai"
  },
  {
    "id": "fr-015",
    "name": "Gaurav Chauhan",
    "role": "AI Engineer",
    "experience": 4,
    "skills": [
      "PostgreSQL",
      "Node.js",
      "Tailwind CSS"
    ],
    "hourlyRate": 52,
    "availability": "Full-time",
    "bio": "Passionate AI Engineer with 4+ years of experience building scalable applications and intuitive user interfaces. Known for elegant code and solid problem-solving skills. Based in Delhi NCR.",
    "projects": [
      {
        "name": "SaaS Platform",
        "description": "Architected and delivered the core ai infrastructure improving performance by 60%."
      },
      {
        "name": "Enterprise Dashboard",
        "description": "Developed a comprehensive dashboard utilized by over 49 enterprise clients."
      },
      {
        "name": "Open Source Contribution",
        "description": "Significant contributions to popular open-source libraries in the Javascript/Python ecosystem."
      }
    ],
    "rating": 4.3,
    "location": "Chennai"
  },
  {
    "id": "fr-016",
    "name": "Kavya Pandey",
    "role": "Frontend Developer",
    "experience": 4,
    "skills": [
      "Flutter",
      "Framer Motion",
      "Angular",
      "React Native"
    ],
    "hourlyRate": 18,
    "availability": "Part-time",
    "bio": "Passionate Frontend Developer with 4+ years of experience building scalable applications and intuitive user interfaces. Known for elegant code and solid problem-solving skills. Based in Pune.",
    "projects": [
      {
        "name": "EdTech Platform",
        "description": "Architected and delivered the core frontend infrastructure improving performance by 26%."
      },
      {
        "name": "Enterprise Dashboard",
        "description": "Developed a comprehensive dashboard utilized by over 18 enterprise clients."
      },
      {
        "name": "Open Source Contribution",
        "description": "Significant contributions to popular open-source libraries in the Javascript/Python ecosystem."
      }
    ],
    "rating": 4.3,
    "location": "Chandigarh"
  },
  {
    "id": "fr-017",
    "name": "Reena Menon",
    "role": "Data Scientist",
    "experience": 10,
    "skills": [
      "TypeScript",
      "Kubernetes",
      "Rust",
      "PyTorch"
    ],
    "hourlyRate": 30,
    "availability": "Full-time",
    "bio": "Passionate Data Scientist with 10+ years of experience building scalable applications and intuitive user interfaces. Known for elegant code and solid problem-solving skills. Based in Ahmedabad.",
    "projects": [
      {
        "name": "E-commerce Platform",
        "description": "Architected and delivered the core data infrastructure improving performance by 47%."
      },
      {
        "name": "Enterprise Dashboard",
        "description": "Developed a comprehensive dashboard utilized by over 19 enterprise clients."
      }
    ],
    "rating": 4.8,
    "location": "Kolkata"
  },
  {
    "id": "fr-018",
    "name": "Sai Jain",
    "role": "Backend Developer",
    "experience": 10,
    "skills": [
      "MongoDB",
      "Rust",
      "Angular",
      "AWS",
      "GraphQL"
    ],
    "hourlyRate": 15,
    "availability": "Full-time",
    "bio": "Passionate Backend Developer with 10+ years of experience building scalable applications and intuitive user interfaces. Known for elegant code and solid problem-solving skills. Based in Pune.",
    "projects": [
      {
        "name": "AI Platform",
        "description": "Architected and delivered the core backend infrastructure improving performance by 53%."
      },
      {
        "name": "Enterprise Dashboard",
        "description": "Developed a comprehensive dashboard utilized by over 36 enterprise clients."
      }
    ],
    "rating": 4.3,
    "location": "Hyderabad"
  },
  {
    "id": "fr-019",
    "name": "Vihaan Iyer",
    "role": "AI Engineer",
    "experience": 1,
    "skills": [
      "Next.js",
      "TensorFlow",
      "Python",
      "Vue.js",
      "PostgreSQL"
    ],
    "hourlyRate": 19,
    "availability": "Part-time",
    "bio": "Passionate AI Engineer with 1+ years of experience building scalable applications and intuitive user interfaces. Known for elegant code and solid problem-solving skills. Based in Jaipur.",
    "projects": [
      {
        "name": "SaaS Platform",
        "description": "Architected and delivered the core ai infrastructure improving performance by 51%."
      },
      {
        "name": "Enterprise Dashboard",
        "description": "Developed a comprehensive dashboard utilized by over 45 enterprise clients."
      },
      {
        "name": "Open Source Contribution",
        "description": "Significant contributions to popular open-source libraries in the Javascript/Python ecosystem."
      }
    ],
    "rating": 4.5,
    "location": "Chandigarh"
  },
  {
    "id": "fr-020",
    "name": "Aditi Gupta",
    "role": "DevOps Engineer",
    "experience": 4,
    "skills": [
      "Next.js",
      "Rust",
      "PyTorch",
      "PostgreSQL"
    ],
    "hourlyRate": 25,
    "availability": "Full-time",
    "bio": "Passionate DevOps Engineer with 4+ years of experience building scalable applications and intuitive user interfaces. Known for elegant code and solid problem-solving skills. Based in Chennai.",
    "projects": [
      {
        "name": "EdTech Platform",
        "description": "Architected and delivered the core devops infrastructure improving performance by 26%."
      },
      {
        "name": "Enterprise Dashboard",
        "description": "Developed a comprehensive dashboard utilized by over 22 enterprise clients."
      }
    ],
    "rating": 4.9,
    "location": "Pune"
  },
  {
    "id": "fr-021",
    "name": "Tara Tiwari",
    "role": "Data Scientist",
    "experience": 5,
    "skills": [
      "React Native",
      "Tailwind CSS",
      "PostgreSQL",
      "TensorFlow"
    ],
    "hourlyRate": 21,
    "availability": "Part-time",
    "bio": "Passionate Data Scientist with 5+ years of experience building scalable applications and intuitive user interfaces. Known for elegant code and solid problem-solving skills. Based in Ahmedabad.",
    "projects": [
      {
        "name": "AI Platform",
        "description": "Architected and delivered the core data infrastructure improving performance by 50%."
      },
      {
        "name": "Enterprise Dashboard",
        "description": "Developed a comprehensive dashboard utilized by over 35 enterprise clients."
      }
    ],
    "rating": 4.3,
    "location": "Chandigarh"
  },
  {
    "id": "fr-022",
    "name": "Diya Kapoor",
    "role": "DevOps Engineer",
    "experience": 5,
    "skills": [
      "Kubernetes",
      "Docker",
      "Flutter"
    ],
    "hourlyRate": 52,
    "availability": "Part-time",
    "bio": "Passionate DevOps Engineer with 5+ years of experience building scalable applications and intuitive user interfaces. Known for elegant code and solid problem-solving skills. Based in Chennai.",
    "projects": [
      {
        "name": "Fintech Platform",
        "description": "Architected and delivered the core devops infrastructure improving performance by 26%."
      },
      {
        "name": "Enterprise Dashboard",
        "description": "Developed a comprehensive dashboard utilized by over 24 enterprise clients."
      },
      {
        "name": "Open Source Contribution",
        "description": "Significant contributions to popular open-source libraries in the Javascript/Python ecosystem."
      }
    ],
    "rating": 4.4,
    "location": "Pune"
  },
  {
    "id": "fr-023",
    "name": "Aditi Patel",
    "role": "DevOps Engineer",
    "experience": 9,
    "skills": [
      "Vue.js",
      "Node.js",
      "MongoDB"
    ],
    "hourlyRate": 50,
    "availability": "Full-time",
    "bio": "Passionate DevOps Engineer with 9+ years of experience building scalable applications and intuitive user interfaces. Known for elegant code and solid problem-solving skills. Based in Kolkata.",
    "projects": [
      {
        "name": "EdTech Platform",
        "description": "Architected and delivered the core devops infrastructure improving performance by 45%."
      },
      {
        "name": "Enterprise Dashboard",
        "description": "Developed a comprehensive dashboard utilized by over 47 enterprise clients."
      }
    ],
    "rating": 4.9,
    "location": "Delhi NCR"
  },
  {
    "id": "fr-024",
    "name": "Rishi Kapoor",
    "role": "Frontend Developer",
    "experience": 5,
    "skills": [
      "Go",
      "Kubernetes",
      "TensorFlow",
      "Node.js"
    ],
    "hourlyRate": 24,
    "availability": "Full-time",
    "bio": "Passionate Frontend Developer with 5+ years of experience building scalable applications and intuitive user interfaces. Known for elegant code and solid problem-solving skills. Based in Ahmedabad.",
    "projects": [
      {
        "name": "Fintech Platform",
        "description": "Architected and delivered the core frontend infrastructure improving performance by 23%."
      },
      {
        "name": "Enterprise Dashboard",
        "description": "Developed a comprehensive dashboard utilized by over 48 enterprise clients."
      }
    ],
    "rating": 4.8,
    "location": "Jaipur"
  },
  {
    "id": "fr-025",
    "name": "Pranav Sharma",
    "role": "Cloud Architect",
    "experience": 7,
    "skills": [
      "Rust",
      "React Native",
      "Tailwind CSS"
    ],
    "hourlyRate": 25,
    "availability": "Part-time",
    "bio": "Passionate Cloud Architect with 7+ years of experience building scalable applications and intuitive user interfaces. Known for elegant code and solid problem-solving skills. Based in Jaipur.",
    "projects": [
      {
        "name": "HealthTech Platform",
        "description": "Architected and delivered the core cloud infrastructure improving performance by 24%."
      },
      {
        "name": "Enterprise Dashboard",
        "description": "Developed a comprehensive dashboard utilized by over 37 enterprise clients."
      }
    ],
    "rating": 4.7,
    "location": "Chennai"
  },
  {
    "id": "fr-026",
    "name": "Sanya Sharma",
    "role": "AI Engineer",
    "experience": 9,
    "skills": [
      "TensorFlow",
      "TypeScript",
      "Flutter",
      "PyTorch",
      "Node.js"
    ],
    "hourlyRate": 59,
    "availability": "Part-time",
    "bio": "Passionate AI Engineer with 9+ years of experience building scalable applications and intuitive user interfaces. Known for elegant code and solid problem-solving skills. Based in Mumbai.",
    "projects": [
      {
        "name": "SaaS Platform",
        "description": "Architected and delivered the core ai infrastructure improving performance by 21%."
      },
      {
        "name": "Enterprise Dashboard",
        "description": "Developed a comprehensive dashboard utilized by over 33 enterprise clients."
      }
    ],
    "rating": 4.3,
    "location": "Jaipur"
  },
  {
    "id": "fr-027",
    "name": "Sai Yadav",
    "role": "DevOps Engineer",
    "experience": 1,
    "skills": [
      "TensorFlow",
      "Flutter",
      "GraphQL",
      "React Native",
      "PostgreSQL"
    ],
    "hourlyRate": 45,
    "availability": "Full-time",
    "bio": "Passionate DevOps Engineer with 1+ years of experience building scalable applications and intuitive user interfaces. Known for elegant code and solid problem-solving skills. Based in Hyderabad.",
    "projects": [
      {
        "name": "HealthTech Platform",
        "description": "Architected and delivered the core devops infrastructure improving performance by 43%."
      },
      {
        "name": "Enterprise Dashboard",
        "description": "Developed a comprehensive dashboard utilized by over 19 enterprise clients."
      },
      {
        "name": "Open Source Contribution",
        "description": "Significant contributions to popular open-source libraries in the Javascript/Python ecosystem."
      }
    ],
    "rating": 4.7,
    "location": "Ahmedabad"
  },
  {
    "id": "fr-028",
    "name": "Maya Yadav",
    "role": "Frontend Developer",
    "experience": 9,
    "skills": [
      "Node.js",
      "Framer Motion",
      "Python",
      "GraphQL",
      "AWS"
    ],
    "hourlyRate": 29,
    "availability": "Full-time",
    "bio": "Passionate Frontend Developer with 9+ years of experience building scalable applications and intuitive user interfaces. Known for elegant code and solid problem-solving skills. Based in Hyderabad.",
    "projects": [
      {
        "name": "AI Platform",
        "description": "Architected and delivered the core frontend infrastructure improving performance by 30%."
      },
      {
        "name": "Enterprise Dashboard",
        "description": "Developed a comprehensive dashboard utilized by over 27 enterprise clients."
      },
      {
        "name": "Open Source Contribution",
        "description": "Significant contributions to popular open-source libraries in the Javascript/Python ecosystem."
      }
    ],
    "rating": 5,
    "location": "Chennai"
  },
  {
    "id": "fr-029",
    "name": "Aadi Rao",
    "role": "Cloud Architect",
    "experience": 2,
    "skills": [
      "Next.js",
      "PyTorch",
      "Python",
      "MongoDB",
      "React"
    ],
    "hourlyRate": 22,
    "availability": "Full-time",
    "bio": "Passionate Cloud Architect with 2+ years of experience building scalable applications and intuitive user interfaces. Known for elegant code and solid problem-solving skills. Based in Delhi NCR.",
    "projects": [
      {
        "name": "EdTech Platform",
        "description": "Architected and delivered the core cloud infrastructure improving performance by 38%."
      },
      {
        "name": "Enterprise Dashboard",
        "description": "Developed a comprehensive dashboard utilized by over 26 enterprise clients."
      }
    ],
    "rating": 4.2,
    "location": "Kolkata"
  },
  {
    "id": "fr-030",
    "name": "Aditi Pandey",
    "role": "DevOps Engineer",
    "experience": 2,
    "skills": [
      "GraphQL",
      "Node.js",
      "Vue.js"
    ],
    "hourlyRate": 30,
    "availability": "Part-time",
    "bio": "Passionate DevOps Engineer with 2+ years of experience building scalable applications and intuitive user interfaces. Known for elegant code and solid problem-solving skills. Based in Ahmedabad.",
    "projects": [
      {
        "name": "HealthTech Platform",
        "description": "Architected and delivered the core devops infrastructure improving performance by 56%."
      },
      {
        "name": "Enterprise Dashboard",
        "description": "Developed a comprehensive dashboard utilized by over 42 enterprise clients."
      }
    ],
    "rating": 4.9,
    "location": "Mumbai"
  },
  {
    "id": "fr-031",
    "name": "Ayaan Yadav",
    "role": "Backend Developer",
    "experience": 3,
    "skills": [
      "Node.js",
      "AWS",
      "Tailwind CSS"
    ],
    "hourlyRate": 36,
    "availability": "Full-time",
    "bio": "Passionate Backend Developer with 3+ years of experience building scalable applications and intuitive user interfaces. Known for elegant code and solid problem-solving skills. Based in Chandigarh.",
    "projects": [
      {
        "name": "HealthTech Platform",
        "description": "Architected and delivered the core backend infrastructure improving performance by 23%."
      },
      {
        "name": "Enterprise Dashboard",
        "description": "Developed a comprehensive dashboard utilized by over 27 enterprise clients."
      },
      {
        "name": "Open Source Contribution",
        "description": "Significant contributions to popular open-source libraries in the Javascript/Python ecosystem."
      }
    ],
    "rating": 4.6,
    "location": "Delhi NCR"
  },
  {
    "id": "fr-032",
    "name": "Vivaan Kapoor",
    "role": "Full Stack Developer",
    "experience": 2,
    "skills": [
      "Tailwind CSS",
      "PostgreSQL",
      "React Native"
    ],
    "hourlyRate": 27,
    "availability": "Part-time",
    "bio": "Passionate Full Stack Developer with 2+ years of experience building scalable applications and intuitive user interfaces. Known for elegant code and solid problem-solving skills. Based in Chennai.",
    "projects": [
      {
        "name": "EdTech Platform",
        "description": "Architected and delivered the core full infrastructure improving performance by 20%."
      },
      {
        "name": "Enterprise Dashboard",
        "description": "Developed a comprehensive dashboard utilized by over 16 enterprise clients."
      }
    ],
    "rating": 4.3,
    "location": "Pune"
  },
  {
    "id": "fr-033",
    "name": "Aryan Gupta",
    "role": "UI/UX Designer",
    "experience": 1,
    "skills": [
      "Next.js",
      "Flutter",
      "Tailwind CSS",
      "React",
      "AWS"
    ],
    "hourlyRate": 34,
    "availability": "Full-time",
    "bio": "Passionate UI/UX Designer with 1+ years of experience building scalable applications and intuitive user interfaces. Known for elegant code and solid problem-solving skills. Based in Kolkata.",
    "projects": [
      {
        "name": "SaaS Platform",
        "description": "Architected and delivered the core ui/ux infrastructure improving performance by 55%."
      },
      {
        "name": "Enterprise Dashboard",
        "description": "Developed a comprehensive dashboard utilized by over 27 enterprise clients."
      },
      {
        "name": "Open Source Contribution",
        "description": "Significant contributions to popular open-source libraries in the Javascript/Python ecosystem."
      }
    ],
    "rating": 4.9,
    "location": "Hyderabad"
  },
  {
    "id": "fr-034",
    "name": "Sneha Kumar",
    "role": "Data Scientist",
    "experience": 2,
    "skills": [
      "Vue.js",
      "Node.js",
      "React",
      "Next.js",
      "React Native"
    ],
    "hourlyRate": 46,
    "availability": "Full-time",
    "bio": "Passionate Data Scientist with 2+ years of experience building scalable applications and intuitive user interfaces. Known for elegant code and solid problem-solving skills. Based in Jaipur.",
    "projects": [
      {
        "name": "AI Platform",
        "description": "Architected and delivered the core data infrastructure improving performance by 49%."
      },
      {
        "name": "Enterprise Dashboard",
        "description": "Developed a comprehensive dashboard utilized by over 11 enterprise clients."
      }
    ],
    "rating": 4.4,
    "location": "Pune"
  },
  {
    "id": "fr-035",
    "name": "Sunita Tiwari",
    "role": "AI Engineer",
    "experience": 8,
    "skills": [
      "Go",
      "PyTorch",
      "Vue.js",
      "Tailwind CSS",
      "GraphQL"
    ],
    "hourlyRate": 15,
    "availability": "Full-time",
    "bio": "Passionate AI Engineer with 8+ years of experience building scalable applications and intuitive user interfaces. Known for elegant code and solid problem-solving skills. Based in Kolkata.",
    "projects": [
      {
        "name": "Fintech Platform",
        "description": "Architected and delivered the core ai infrastructure improving performance by 23%."
      },
      {
        "name": "Enterprise Dashboard",
        "description": "Developed a comprehensive dashboard utilized by over 15 enterprise clients."
      }
    ],
    "rating": 4.8,
    "location": "Hyderabad"
  },
  {
    "id": "fr-036",
    "name": "Vikram Mishra",
    "role": "Cloud Architect",
    "experience": 9,
    "skills": [
      "Angular",
      "React Native",
      "PyTorch"
    ],
    "hourlyRate": 19,
    "availability": "Part-time",
    "bio": "Passionate Cloud Architect with 9+ years of experience building scalable applications and intuitive user interfaces. Known for elegant code and solid problem-solving skills. Based in Chandigarh.",
    "projects": [
      {
        "name": "Fintech Platform",
        "description": "Architected and delivered the core cloud infrastructure improving performance by 41%."
      },
      {
        "name": "Enterprise Dashboard",
        "description": "Developed a comprehensive dashboard utilized by over 41 enterprise clients."
      }
    ],
    "rating": 4.4,
    "location": "Hyderabad"
  },
  {
    "id": "fr-037",
    "name": "Priya Tiwari",
    "role": "Data Scientist",
    "experience": 4,
    "skills": [
      "Python",
      "Flutter",
      "Go"
    ],
    "hourlyRate": 49,
    "availability": "Full-time",
    "bio": "Passionate Data Scientist with 4+ years of experience building scalable applications and intuitive user interfaces. Known for elegant code and solid problem-solving skills. Based in Bangalore.",
    "projects": [
      {
        "name": "Fintech Platform",
        "description": "Architected and delivered the core data infrastructure improving performance by 39%."
      },
      {
        "name": "Enterprise Dashboard",
        "description": "Developed a comprehensive dashboard utilized by over 46 enterprise clients."
      }
    ],
    "rating": 4.5,
    "location": "Mumbai"
  },
  {
    "id": "fr-038",
    "name": "Dev Sharma",
    "role": "Backend Developer",
    "experience": 3,
    "skills": [
      "MongoDB",
      "TypeScript",
      "React",
      "Vue.js"
    ],
    "hourlyRate": 34,
    "availability": "Full-time",
    "bio": "Passionate Backend Developer with 3+ years of experience building scalable applications and intuitive user interfaces. Known for elegant code and solid problem-solving skills. Based in Delhi NCR.",
    "projects": [
      {
        "name": "Fintech Platform",
        "description": "Architected and delivered the core backend infrastructure improving performance by 58%."
      },
      {
        "name": "Enterprise Dashboard",
        "description": "Developed a comprehensive dashboard utilized by over 19 enterprise clients."
      }
    ],
    "rating": 4.4,
    "location": "Jaipur"
  },
  {
    "id": "fr-039",
    "name": "Aditi Verma",
    "role": "DevOps Engineer",
    "experience": 2,
    "skills": [
      "Vue.js",
      "Kubernetes",
      "Python",
      "Go"
    ],
    "hourlyRate": 17,
    "availability": "Part-time",
    "bio": "Passionate DevOps Engineer with 2+ years of experience building scalable applications and intuitive user interfaces. Known for elegant code and solid problem-solving skills. Based in Bangalore.",
    "projects": [
      {
        "name": "E-commerce Platform",
        "description": "Architected and delivered the core devops infrastructure improving performance by 57%."
      },
      {
        "name": "Enterprise Dashboard",
        "description": "Developed a comprehensive dashboard utilized by over 35 enterprise clients."
      },
      {
        "name": "Open Source Contribution",
        "description": "Significant contributions to popular open-source libraries in the Javascript/Python ecosystem."
      }
    ],
    "rating": 4.8,
    "location": "Bangalore"
  },
  {
    "id": "fr-040",
    "name": "Shaurya Mishra",
    "role": "Mobile App Developer",
    "experience": 5,
    "skills": [
      "TensorFlow",
      "Angular",
      "GraphQL",
      "AWS",
      "MongoDB"
    ],
    "hourlyRate": 25,
    "availability": "Part-time",
    "bio": "Passionate Mobile App Developer with 5+ years of experience building scalable applications and intuitive user interfaces. Known for elegant code and solid problem-solving skills. Based in Mumbai.",
    "projects": [
      {
        "name": "EdTech Platform",
        "description": "Architected and delivered the core mobile infrastructure improving performance by 50%."
      },
      {
        "name": "Enterprise Dashboard",
        "description": "Developed a comprehensive dashboard utilized by over 39 enterprise clients."
      },
      {
        "name": "Open Source Contribution",
        "description": "Significant contributions to popular open-source libraries in the Javascript/Python ecosystem."
      }
    ],
    "rating": 4.7,
    "location": "Hyderabad"
  },
  {
    "id": "fr-041",
    "name": "Anita Jain",
    "role": "Mobile App Developer",
    "experience": 2,
    "skills": [
      "Python",
      "MongoDB",
      "React Native",
      "Node.js",
      "Angular"
    ],
    "hourlyRate": 29,
    "availability": "Full-time",
    "bio": "Passionate Mobile App Developer with 2+ years of experience building scalable applications and intuitive user interfaces. Known for elegant code and solid problem-solving skills. Based in Hyderabad.",
    "projects": [
      {
        "name": "E-commerce Platform",
        "description": "Architected and delivered the core mobile infrastructure improving performance by 57%."
      },
      {
        "name": "Enterprise Dashboard",
        "description": "Developed a comprehensive dashboard utilized by over 11 enterprise clients."
      },
      {
        "name": "Open Source Contribution",
        "description": "Significant contributions to popular open-source libraries in the Javascript/Python ecosystem."
      }
    ],
    "rating": 4.8,
    "location": "Mumbai"
  },
  {
    "id": "fr-042",
    "name": "Harsh Desai",
    "role": "Backend Developer",
    "experience": 7,
    "skills": [
      "AWS",
      "Kubernetes",
      "Tailwind CSS"
    ],
    "hourlyRate": 47,
    "availability": "Part-time",
    "bio": "Passionate Backend Developer with 7+ years of experience building scalable applications and intuitive user interfaces. Known for elegant code and solid problem-solving skills. Based in Jaipur.",
    "projects": [
      {
        "name": "SaaS Platform",
        "description": "Architected and delivered the core backend infrastructure improving performance by 37%."
      },
      {
        "name": "Enterprise Dashboard",
        "description": "Developed a comprehensive dashboard utilized by over 49 enterprise clients."
      }
    ],
    "rating": 4.8,
    "location": "Chandigarh"
  },
  {
    "id": "fr-043",
    "name": "Manish Gupta",
    "role": "DevOps Engineer",
    "experience": 10,
    "skills": [
      "GraphQL",
      "PyTorch",
      "Go",
      "Flutter"
    ],
    "hourlyRate": 15,
    "availability": "Full-time",
    "bio": "Passionate DevOps Engineer with 10+ years of experience building scalable applications and intuitive user interfaces. Known for elegant code and solid problem-solving skills. Based in Mumbai.",
    "projects": [
      {
        "name": "AI Platform",
        "description": "Architected and delivered the core devops infrastructure improving performance by 58%."
      },
      {
        "name": "Enterprise Dashboard",
        "description": "Developed a comprehensive dashboard utilized by over 42 enterprise clients."
      }
    ],
    "rating": 4.3,
    "location": "Kolkata"
  },
  {
    "id": "fr-044",
    "name": "Kavya Joshi",
    "role": "UI/UX Designer",
    "experience": 6,
    "skills": [
      "Go",
      "Tailwind CSS",
      "React"
    ],
    "hourlyRate": 34,
    "availability": "Full-time",
    "bio": "Passionate UI/UX Designer with 6+ years of experience building scalable applications and intuitive user interfaces. Known for elegant code and solid problem-solving skills. Based in Mumbai.",
    "projects": [
      {
        "name": "SaaS Platform",
        "description": "Architected and delivered the core ui/ux infrastructure improving performance by 59%."
      },
      {
        "name": "Enterprise Dashboard",
        "description": "Developed a comprehensive dashboard utilized by over 39 enterprise clients."
      },
      {
        "name": "Open Source Contribution",
        "description": "Significant contributions to popular open-source libraries in the Javascript/Python ecosystem."
      }
    ],
    "rating": 4.8,
    "location": "Hyderabad"
  },
  {
    "id": "fr-045",
    "name": "Aarohi Bose",
    "role": "Data Scientist",
    "experience": 5,
    "skills": [
      "TypeScript",
      "MongoDB",
      "Kubernetes"
    ],
    "hourlyRate": 46,
    "availability": "Full-time",
    "bio": "Passionate Data Scientist with 5+ years of experience building scalable applications and intuitive user interfaces. Known for elegant code and solid problem-solving skills. Based in Chennai.",
    "projects": [
      {
        "name": "E-commerce Platform",
        "description": "Architected and delivered the core data infrastructure improving performance by 60%."
      },
      {
        "name": "Enterprise Dashboard",
        "description": "Developed a comprehensive dashboard utilized by over 33 enterprise clients."
      }
    ],
    "rating": 4.6,
    "location": "Mumbai"
  },
  {
    "id": "fr-046",
    "name": "Kavya Reddy",
    "role": "Mobile App Developer",
    "experience": 10,
    "skills": [
      "Next.js",
      "Flutter",
      "Go",
      "PyTorch"
    ],
    "hourlyRate": 35,
    "availability": "Full-time",
    "bio": "Passionate Mobile App Developer with 10+ years of experience building scalable applications and intuitive user interfaces. Known for elegant code and solid problem-solving skills. Based in Ahmedabad.",
    "projects": [
      {
        "name": "SaaS Platform",
        "description": "Architected and delivered the core mobile infrastructure improving performance by 32%."
      },
      {
        "name": "Enterprise Dashboard",
        "description": "Developed a comprehensive dashboard utilized by over 15 enterprise clients."
      }
    ],
    "rating": 4.4,
    "location": "Jaipur"
  },
  {
    "id": "fr-047",
    "name": "Aanya Das",
    "role": "Full Stack Developer",
    "experience": 5,
    "skills": [
      "Rust",
      "Framer Motion",
      "Docker",
      "MongoDB"
    ],
    "hourlyRate": 40,
    "availability": "Full-time",
    "bio": "Passionate Full Stack Developer with 5+ years of experience building scalable applications and intuitive user interfaces. Known for elegant code and solid problem-solving skills. Based in Bangalore.",
    "projects": [
      {
        "name": "AI Platform",
        "description": "Architected and delivered the core full infrastructure improving performance by 39%."
      },
      {
        "name": "Enterprise Dashboard",
        "description": "Developed a comprehensive dashboard utilized by over 42 enterprise clients."
      }
    ],
    "rating": 4.3,
    "location": "Chennai"
  },
  {
    "id": "fr-048",
    "name": "Aarav Verma",
    "role": "Mobile App Developer",
    "experience": 4,
    "skills": [
      "Angular",
      "Rust",
      "Go"
    ],
    "hourlyRate": 36,
    "availability": "Full-time",
    "bio": "Passionate Mobile App Developer with 4+ years of experience building scalable applications and intuitive user interfaces. Known for elegant code and solid problem-solving skills. Based in Hyderabad.",
    "projects": [
      {
        "name": "AI Platform",
        "description": "Architected and delivered the core mobile infrastructure improving performance by 42%."
      },
      {
        "name": "Enterprise Dashboard",
        "description": "Developed a comprehensive dashboard utilized by over 36 enterprise clients."
      },
      {
        "name": "Open Source Contribution",
        "description": "Significant contributions to popular open-source libraries in the Javascript/Python ecosystem."
      }
    ],
    "rating": 4.9,
    "location": "Chennai"
  },
  {
    "id": "fr-049",
    "name": "Siddharth Tiwari",
    "role": "Data Scientist",
    "experience": 4,
    "skills": [
      "AWS",
      "MongoDB",
      "React Native",
      "Framer Motion",
      "PostgreSQL"
    ],
    "hourlyRate": 16,
    "availability": "Full-time",
    "bio": "Passionate Data Scientist with 4+ years of experience building scalable applications and intuitive user interfaces. Known for elegant code and solid problem-solving skills. Based in Delhi NCR.",
    "projects": [
      {
        "name": "AI Platform",
        "description": "Architected and delivered the core data infrastructure improving performance by 24%."
      },
      {
        "name": "Enterprise Dashboard",
        "description": "Developed a comprehensive dashboard utilized by over 27 enterprise clients."
      },
      {
        "name": "Open Source Contribution",
        "description": "Significant contributions to popular open-source libraries in the Javascript/Python ecosystem."
      }
    ],
    "rating": 4.6,
    "location": "Mumbai"
  },
  {
    "id": "fr-050",
    "name": "Ankit Agarwal",
    "role": "Full Stack Developer",
    "experience": 4,
    "skills": [
      "PostgreSQL",
      "AWS",
      "React"
    ],
    "hourlyRate": 25,
    "availability": "Full-time",
    "bio": "Passionate Full Stack Developer with 4+ years of experience building scalable applications and intuitive user interfaces. Known for elegant code and solid problem-solving skills. Based in Jaipur.",
    "projects": [
      {
        "name": "AI Platform",
        "description": "Architected and delivered the core full infrastructure improving performance by 51%."
      },
      {
        "name": "Enterprise Dashboard",
        "description": "Developed a comprehensive dashboard utilized by over 45 enterprise clients."
      },
      {
        "name": "Open Source Contribution",
        "description": "Significant contributions to popular open-source libraries in the Javascript/Python ecosystem."
      }
    ],
    "rating": 4.9,
    "location": "Hyderabad"
  },
  {
    "id": "fr-051",
    "name": "Gaurav Gupta",
    "role": "Cloud Architect",
    "experience": 2,
    "skills": [
      "Next.js",
      "MongoDB",
      "React",
      "Flutter",
      "Vue.js"
    ],
    "hourlyRate": 17,
    "availability": "Full-time",
    "bio": "Passionate Cloud Architect with 2+ years of experience building scalable applications and intuitive user interfaces. Known for elegant code and solid problem-solving skills. Based in Pune.",
    "projects": [
      {
        "name": "AI Platform",
        "description": "Architected and delivered the core cloud infrastructure improving performance by 46%."
      },
      {
        "name": "Enterprise Dashboard",
        "description": "Developed a comprehensive dashboard utilized by over 48 enterprise clients."
      },
      {
        "name": "Open Source Contribution",
        "description": "Significant contributions to popular open-source libraries in the Javascript/Python ecosystem."
      }
    ],
    "rating": 4.6,
    "location": "Delhi NCR"
  },
  {
    "id": "fr-052",
    "name": "Rishi Kaur",
    "role": "UI/UX Designer",
    "experience": 1,
    "skills": [
      "React Native",
      "React",
      "Angular",
      "MongoDB"
    ],
    "hourlyRate": 17,
    "availability": "Full-time",
    "bio": "Passionate UI/UX Designer with 1+ years of experience building scalable applications and intuitive user interfaces. Known for elegant code and solid problem-solving skills. Based in Ahmedabad.",
    "projects": [
      {
        "name": "AI Platform",
        "description": "Architected and delivered the core ui/ux infrastructure improving performance by 55%."
      },
      {
        "name": "Enterprise Dashboard",
        "description": "Developed a comprehensive dashboard utilized by over 16 enterprise clients."
      },
      {
        "name": "Open Source Contribution",
        "description": "Significant contributions to popular open-source libraries in the Javascript/Python ecosystem."
      }
    ],
    "rating": 4.7,
    "location": "Kolkata"
  },
  {
    "id": "fr-053",
    "name": "Anita Pandey",
    "role": "DevOps Engineer",
    "experience": 1,
    "skills": [
      "PyTorch",
      "Framer Motion",
      "GraphQL",
      "Docker",
      "Tailwind CSS"
    ],
    "hourlyRate": 37,
    "availability": "Part-time",
    "bio": "Passionate DevOps Engineer with 1+ years of experience building scalable applications and intuitive user interfaces. Known for elegant code and solid problem-solving skills. Based in Hyderabad.",
    "projects": [
      {
        "name": "EdTech Platform",
        "description": "Architected and delivered the core devops infrastructure improving performance by 38%."
      },
      {
        "name": "Enterprise Dashboard",
        "description": "Developed a comprehensive dashboard utilized by over 21 enterprise clients."
      }
    ],
    "rating": 4.7,
    "location": "Chennai"
  },
  {
    "id": "fr-054",
    "name": "Siddharth Sharma",
    "role": "DevOps Engineer",
    "experience": 9,
    "skills": [
      "TypeScript",
      "Framer Motion",
      "Kubernetes",
      "Vue.js",
      "Next.js"
    ],
    "hourlyRate": 41,
    "availability": "Full-time",
    "bio": "Passionate DevOps Engineer with 9+ years of experience building scalable applications and intuitive user interfaces. Known for elegant code and solid problem-solving skills. Based in Chennai.",
    "projects": [
      {
        "name": "SaaS Platform",
        "description": "Architected and delivered the core devops infrastructure improving performance by 56%."
      },
      {
        "name": "Enterprise Dashboard",
        "description": "Developed a comprehensive dashboard utilized by over 28 enterprise clients."
      }
    ],
    "rating": 4.5,
    "location": "Ahmedabad"
  },
  {
    "id": "fr-055",
    "name": "Priya Pandey",
    "role": "Frontend Developer",
    "experience": 7,
    "skills": [
      "Go",
      "Next.js",
      "AWS",
      "TypeScript",
      "Tailwind CSS"
    ],
    "hourlyRate": 38,
    "availability": "Full-time",
    "bio": "Passionate Frontend Developer with 7+ years of experience building scalable applications and intuitive user interfaces. Known for elegant code and solid problem-solving skills. Based in Chennai.",
    "projects": [
      {
        "name": "SaaS Platform",
        "description": "Architected and delivered the core frontend infrastructure improving performance by 30%."
      },
      {
        "name": "Enterprise Dashboard",
        "description": "Developed a comprehensive dashboard utilized by over 14 enterprise clients."
      }
    ],
    "rating": 4.8,
    "location": "Bangalore"
  },
  {
    "id": "fr-056",
    "name": "Ananya Kaur",
    "role": "Data Scientist",
    "experience": 9,
    "skills": [
      "MongoDB",
      "Go",
      "TensorFlow",
      "Next.js"
    ],
    "hourlyRate": 55,
    "availability": "Part-time",
    "bio": "Passionate Data Scientist with 9+ years of experience building scalable applications and intuitive user interfaces. Known for elegant code and solid problem-solving skills. Based in Jaipur.",
    "projects": [
      {
        "name": "HealthTech Platform",
        "description": "Architected and delivered the core data infrastructure improving performance by 46%."
      },
      {
        "name": "Enterprise Dashboard",
        "description": "Developed a comprehensive dashboard utilized by over 13 enterprise clients."
      },
      {
        "name": "Open Source Contribution",
        "description": "Significant contributions to popular open-source libraries in the Javascript/Python ecosystem."
      }
    ],
    "rating": 4.5,
    "location": "Delhi NCR"
  },
  {
    "id": "fr-057",
    "name": "Myra Chauhan",
    "role": "Frontend Developer",
    "experience": 6,
    "skills": [
      "TensorFlow",
      "AWS",
      "Angular",
      "Node.js"
    ],
    "hourlyRate": 35,
    "availability": "Full-time",
    "bio": "Passionate Frontend Developer with 6+ years of experience building scalable applications and intuitive user interfaces. Known for elegant code and solid problem-solving skills. Based in Ahmedabad.",
    "projects": [
      {
        "name": "HealthTech Platform",
        "description": "Architected and delivered the core frontend infrastructure improving performance by 31%."
      },
      {
        "name": "Enterprise Dashboard",
        "description": "Developed a comprehensive dashboard utilized by over 15 enterprise clients."
      },
      {
        "name": "Open Source Contribution",
        "description": "Significant contributions to popular open-source libraries in the Javascript/Python ecosystem."
      }
    ],
    "rating": 5,
    "location": "Jaipur"
  },
  {
    "id": "fr-058",
    "name": "Reena Desai",
    "role": "Mobile App Developer",
    "experience": 6,
    "skills": [
      "Go",
      "Angular",
      "PostgreSQL",
      "Kubernetes",
      "Vue.js"
    ],
    "hourlyRate": 30,
    "availability": "Full-time",
    "bio": "Passionate Mobile App Developer with 6+ years of experience building scalable applications and intuitive user interfaces. Known for elegant code and solid problem-solving skills. Based in Chandigarh.",
    "projects": [
      {
        "name": "Fintech Platform",
        "description": "Architected and delivered the core mobile infrastructure improving performance by 51%."
      },
      {
        "name": "Enterprise Dashboard",
        "description": "Developed a comprehensive dashboard utilized by over 44 enterprise clients."
      },
      {
        "name": "Open Source Contribution",
        "description": "Significant contributions to popular open-source libraries in the Javascript/Python ecosystem."
      }
    ],
    "rating": 4.9,
    "location": "Kolkata"
  },
  {
    "id": "fr-059",
    "name": "Rahul Mishra",
    "role": "DevOps Engineer",
    "experience": 7,
    "skills": [
      "Vue.js",
      "Angular",
      "MongoDB",
      "AWS",
      "Go"
    ],
    "hourlyRate": 44,
    "availability": "Part-time",
    "bio": "Passionate DevOps Engineer with 7+ years of experience building scalable applications and intuitive user interfaces. Known for elegant code and solid problem-solving skills. Based in Delhi NCR.",
    "projects": [
      {
        "name": "Fintech Platform",
        "description": "Architected and delivered the core devops infrastructure improving performance by 47%."
      },
      {
        "name": "Enterprise Dashboard",
        "description": "Developed a comprehensive dashboard utilized by over 49 enterprise clients."
      },
      {
        "name": "Open Source Contribution",
        "description": "Significant contributions to popular open-source libraries in the Javascript/Python ecosystem."
      }
    ],
    "rating": 4.2,
    "location": "Delhi NCR"
  },
  {
    "id": "fr-060",
    "name": "Sunita Sharma",
    "role": "Data Scientist",
    "experience": 2,
    "skills": [
      "Python",
      "Tailwind CSS",
      "GraphQL"
    ],
    "hourlyRate": 41,
    "availability": "Full-time",
    "bio": "Passionate Data Scientist with 2+ years of experience building scalable applications and intuitive user interfaces. Known for elegant code and solid problem-solving skills. Based in Delhi NCR.",
    "projects": [
      {
        "name": "Fintech Platform",
        "description": "Architected and delivered the core data infrastructure improving performance by 24%."
      },
      {
        "name": "Enterprise Dashboard",
        "description": "Developed a comprehensive dashboard utilized by over 27 enterprise clients."
      },
      {
        "name": "Open Source Contribution",
        "description": "Significant contributions to popular open-source libraries in the Javascript/Python ecosystem."
      }
    ],
    "rating": 4.7,
    "location": "Chennai"
  }
];

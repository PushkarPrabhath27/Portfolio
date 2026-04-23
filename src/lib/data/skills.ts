export interface Skill {
  name: string;
  level: "expert" | "proficient" | "familiar";
  evidence: string;
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    icon: "Code",
    skills: [
      {
        name: "Go",
        level: "expert",
        evidence: "MediGuard and MediFlow production backends handling 10K+ concurrent connections"
      },
      {
        name: "TypeScript",
        level: "expert",
        evidence: "MediGuard frontend, multiple Next.js applications"
      },
      {
        name: "Python",
        level: "expert",
        evidence: "All research projects, ML experiments, AI systems"
      },
      {
        name: "SQL",
        level: "proficient",
        evidence: "Database design for MediGuard, MediFlow, complex queries for analytics"
      }
    ]
  },
  {
    name: "Frontend",
    icon: "Layout",
    skills: [
      {
        name: "React",
        level: "expert",
        evidence: "Component architecture, hooks, state management"
      },
      {
        name: "Next.js",
        level: "expert",
        evidence: "App Router, Server Components, API routes, deployment on Vercel"
      },
      {
        name: "Tailwind CSS",
        level: "expert",
        evidence: "This portfolio, component library design, responsive layouts"
      }
    ]
  },
  {
    name: "Backend",
    icon: "Server",
    skills: [
      {
        name: "REST APIs",
        level: "expert",
        evidence: "Microservices architecture, API design, authentication"
      },
      {
        name: "Microservices",
        level: "expert",
        evidence: "Multi-tenant SaaS architecture, service orchestration"
      },
      {
        name: "WebSockets",
        level: "proficient",
        evidence: "Real-time equipment tracking in MediFlow"
      },
      {
        name: "JWT",
        level: "expert",
        evidence: "Authentication systems with refresh tokens"
      }
    ]
  },
  {
    name: "AI/ML",
    icon: "Brain",
    skills: [
      {
        name: "PyTorch",
        level: "expert",
        evidence: "NS-IR compiler optimization, W2V deepfake detector"
      },
      {
        name: "Transformers",
        level: "expert",
        evidence: "GriceBench dialogue systems, research implementations"
      },
      {
        name: "LangChain",
        level: "proficient",
        evidence: "ResearchCrossPollinationEngine RAG pipeline"
      },
      {
        name: "RAG Systems",
        level: "proficient",
        evidence: "Built vector search and retrieval systems with Chroma DB"
      }
    ]
  },
  {
    name: "Databases",
    icon: "Database",
    skills: [
      {
        name: "PostgreSQL",
        level: "expert",
        evidence: "Database design, query optimization, row-level security"
      },
      {
        name: "MySQL",
        level: "proficient",
        evidence: "Standard web applications, analytics pipelines"
      },
      {
        name: "Redis",
        level: "expert",
        evidence: "Caching, pub/sub in MediFlow, real-time features"
      }
    ]
  },
  {
    name: "Infrastructure",
    icon: "Cloud",
    skills: [
      {
        name: "Docker",
        level: "expert",
        evidence: "Containerized all production services"
      },
      {
        name: "Kubernetes",
        level: "proficient",
        evidence: "MediGuard deployment on Kubernetes cluster"
      },
      {
        name: "AWS",
        level: "proficient",
        evidence: "EC2, S3, RDS, Lambda, certified"
      },
      {
        name: "Azure",
        level: "proficient",
        evidence: "Azure Functions, App Service, certified"
      }
    ]
  }
];
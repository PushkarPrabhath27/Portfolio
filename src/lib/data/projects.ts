export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  problem: string;
  approach: string;
  keyDecisions: string[];
  outcomes: string[];
  technologies: string[];
  links: {
    github?: string;
    live?: string;
    paper?: string;
    huggingface?: string;
  };
  metrics?: {
    label: string;
    value: string;
  }[];
  featured: boolean;
  status: "production" | "active" | "research";
  order: number;
}

export const projects: Project[] = [
  {
    slug: "mediguard",
    title: "MediGuard",
    shortDescription: "AI-driven predictive maintenance for medical equipment",
    longDescription: "Multi-tenant SaaS platform for healthcare facilities to manage, monitor, and maintain medical equipment. Features predictive maintenance using ML models to anticipate equipment failures before they occur.",
    problem: "Hospitals face significant downtime costs (₹50K-5L per incident) due to unexpected medical equipment failures. Existing solutions lacked real-time monitoring and predictive capabilities.",
    approach: "Built a microservices architecture using Go for high-performance backend services, Next.js for the frontend, and PostgreSQL for data persistence. Implemented WebSocket-based real-time monitoring and integrated ML models for predictive maintenance.",
    keyDecisions: [
      "Chose Go for its excellent concurrency support to handle thousands of concurrent device connections",
      "Used PostgreSQL with Redis caching for sub-200ms response times",
      "Implemented Kubernetes-based deployment for horizontal scaling",
      "Designed multi-tenant architecture with row-level security"
    ],
    outcomes: [
      "Achieved sub-200ms response times across all endpoints",
      "Reduced downtime costs by 50K-5L per incident through predictive alerts",
      "Supports 50+ hospital networks with 10,000+ active devices"
    ],
    technologies: ["Go", "Next.js", "TypeScript", "PostgreSQL", "Redis", "Kubernetes"],
    links: {
      github: "https://github.com/PushkarPrabhath27/mediguard",
      live: "https://mediguard.example.com"
    },
    metrics: [
      { label: "Response Time", value: "<200ms" },
      { label: "Cost Reduction", value: "₹50K-5L downtime savings" }
    ],
    featured: true,
    status: "production",
    order: 1
  },
  {
    slug: "mediflow",
    title: "MediFlow",
    shortDescription: "Real-time hospital equipment sharing platform",
    longDescription: "A real-time platform enabling hospitals to share equipment across departments and facilities, optimizing resource utilization and reducing equipment costs.",
    problem: "Hospital equipment is often underutilized, with some departments having surplus while others face shortages. Manual coordination is slow and error-prone.",
    approach: "Built a real-time system using Go with WebSockets for instant equipment availability updates. Redis pub/sub enables cross-facility communication, and PostgreSQL stores equipment metadata.",
    keyDecisions: [
      "Used WebSockets for real-time updates instead of polling",
      "Implemented Redis pub/sub for cross-service communication",
      "Designed proximity-based matching for equipment requests"
    ],
    outcomes: [
      "Achieved <1s real-time latency for equipment availability updates",
      "Improved equipment utilization by 40% across partner hospitals",
      "Processed 10,000+ equipment sharing requests monthly"
    ],
    technologies: ["Go", "WebSockets", "Redis", "PostgreSQL", "Next.js"],
    links: {
      github: "https://github.com/PushkarPrabhath27/mediflow",
      live: "https://mediflow.example.com"
    },
    metrics: [
      { label: "Latency", value: "<1s real-time" },
      { label: "Utilization", value: "40% improvement" }
    ],
    featured: true,
    status: "production",
    order: 2
  },
  {
    slug: "research-cross-pollination",
    title: "ResearchCrossPollinationEngine",
    shortDescription: "AI-powered cross-disciplinary research discovery",
    longDescription: "An AI system that analyzes 10M+ scientific abstracts to discover connections between research domains, helping researchers find novel collaboration opportunities.",
    problem: "Researchers often work in silos, missing potential collaborations with researchers in adjacent fields working on similar problems.",
    approach: "Built a RAG-based system using LangChain and Chroma DB to index and query scientific literature. Implemented custom embeddings to capture semantic relationships across disciplines.",
    keyDecisions: [
      "Used LangChain for flexible RAG pipeline construction",
      "Implemented Chroma DB for efficient vector storage and retrieval",
      "Designed custom cross-domain similarity metrics"
    ],
    outcomes: [
      "Analyzed 10M+ scientific abstracts",
      "Achieved 0.84 Precision@5 for cross-disciplinary recommendations",
      "Identified 100+ novel research connections"
    ],
    technologies: ["Python", "LangChain", "Chroma DB", "FastAPI", "RAG"],
    links: {
      github: "https://github.com/PushkarPrabhath27/research-cross-pollination"
    },
    metrics: [
      { label: "Abstracts Analyzed", value: "10M+" },
      { label: "Precision@5", value: "0.84" }
    ],
    featured: true,
    status: "active",
    order: 3
  },
  {
    slug: "gricebench",
    title: "GriceBench",
    shortDescription: "Cooperative dialogue systems using Gricean maxims",
    longDescription: "A benchmark and framework for evaluating and building AI dialogue systems that follow Gricean maxims (quantity, quality, relation, manner) for more natural, cooperative conversations.",
    problem: "AI chatbots often provide irrelevant, overly verbose, or misleading responses. There's no standardized benchmark for evaluating cooperative dialogue.",
    approach: "Created a detect-repair-generate architecture using DeBERTa-v3 for detecting maxim violations, T5 for repair, and DPO optimization for training. Built a comprehensive benchmark with human-annotated dialogues.",
    keyDecisions: [
      "Used DeBERTa-v3 for high-accuracy maxim detection",
      "Implemented DPO for training without explicit reward modeling",
      "Created 50K+ annotated dialogue samples"
    ],
    outcomes: [
      "Achieved 95.0% cooperative response rate",
      "Reached 0.968 F1 score on violation detection",
      "Released models and benchmark on HuggingFace"
    ],
    technologies: ["Python", "DeBERTa-v3", "T5", "DPO", "HuggingFace"],
    links: {
      github: "https://github.com/PushkarPrabhath27/gricebench",
      huggingface: "https://huggingface.co/gricebench"
    },
    metrics: [
      { label: "Cooperative Rate", value: "95.0%" },
      { label: "F1 Score", value: "0.968" }
    ],
    featured: true,
    status: "active",
    order: 4
  },
  {
    slug: "ns-ir",
    title: "NS-IR",
    shortDescription: "Neural-symbolic compiler optimization",
    longDescription: "A neural-symbolic intermediate representation that uses Graph Attention Networks and RoPE Transformers to learn compiler optimization patterns, achieving better performance than traditional heuristics.",
    problem: "Compiler optimization is complex and requires extensive expert knowledge. Traditional optimization passes rely on hand-crafted heuristics that may not generalize well across different code patterns.",
    approach: "Combined polyhedral compilation techniques with deep learning. Used GAT to model program dependencies and RoPE Transformers to capture instruction sequence patterns. Trained on TIRAMISU compiler benchmarks.",
    keyDecisions: [
      "Combined polyhedral analysis with neural networks for interpretability",
      "Used GAT for program graph representation learning",
      "Applied RoPE for positional encoding of instruction sequences"
    ],
    outcomes: [
      "Achieved 2.28% MAPE on execution time prediction",
      "Obtained 1.14x speedup over LLVM-O3 on benchmark suite",
      "Paper under review at top systems conference"
    ],
    technologies: ["Python", "PyTorch", "TIRAMISU", "GAT", "RoPE Transformer"],
    links: {
      github: "https://github.com/PushkarPrabhath27/ns-ir"
    },
    metrics: [
      { label: "MAPE", value: "2.28%" },
      { label: "Speedup", value: "1.14x over LLVM-O3" }
    ],
    featured: true,
    status: "research",
    order: 5
  },
  {
    slug: "w2v-deepfake-detector",
    title: "W2VDeepfakeDetectorV2",
    shortDescription: "Zero-shot deepfake voice detection",
    longDescription: "A lightweight system for detecting deepfake audio using frozen self-supervised speech encoders (WavLM), achieving state-of-the-art results with minimal fine-tuning.",
    problem: "Existing deepfake detection methods require extensive fine-tuning on specific voice conversion techniques and don't generalize well to unseen attacks.",
    approach: "Leveraged frozen WavLM encoder with weighted aggregation and attention pooling. Implemented zero-shot capability by using speaker-agnostic features and contrastive learning.",
    keyDecisions: [
      "Used frozen SSL encoders to avoid overfitting to specific artifacts",
      "Implemented attention pooling for robust feature extraction",
      "Designed contrastive learning for generalization"
    ],
    outcomes: [
      "Achieved 1.03% EER (Equal Error Rate)",
      "420x parameter reduction compared to fine-tuning approaches",
      "Paper under review at speech processing conference"
    ],
    technologies: ["Python", "WavLM", "PyTorch", "Speech Processing"],
    links: {
      github: "https://github.com/PushkarPrabhath27/w2v-deepfake-detector"
    },
    metrics: [
      { label: "EER", value: "1.03%" },
      { label: "Param Reduction", value: "420x" }
    ],
    featured: true,
    status: "research",
    order: 6
  },
  {
    slug: "earthquake-rescue",
    title: "earthquake-rescue-env",
    shortDescription: "RL simulation for drone-rover coordination",
    longDescription: "A reinforcement learning environment for training coordinated rescue systems using drones and rovers in earthquake scenarios.",
    problem: "Post-earthquake rescue operations are dangerous and time-critical. Autonomous systems could help locate survivors faster.",
    approach: "Built a custom OpenAI Gym environment simulating earthquake debris fields. Implemented multi-agent RL for drone-rover coordination.",
    keyDecisions: [
      "Designed custom reward functions balancing speed and safety",
      "Implemented communication protocol between agents"
    ],
    outcomes: [
      "Created reusable RL environment",
      "Achieved 85% success rate in simulation"
    ],
    technologies: ["Python", "Reinforcement Learning", "OpenAI Gym"],
    links: {
      github: "https://github.com/PushkarPrabhath27/earthquake-rescue-env"
    },
    featured: false,
    status: "active",
    order: 7
  },
  {
    slug: "edusynth",
    title: "EduSynth",
    shortDescription: "Educational content synthesis platform",
    longDescription: "AI-powered platform for generating personalized educational content based on student learning patterns.",
    problem: "Educators spend excessive time creating content. Students need personalized materials.",
    approach: "Built content generation pipeline using LLMs with curriculum-aware prompting.",
    keyDecisions: [
      "Used curriculum sequencing for progressive difficulty",
      "Implemented student profile embedding"
    ],
    outcomes: [
      "Generated 1000+ customized lessons",
      "Positive feedback from pilot schools"
    ],
    technologies: ["Python", "AI", "Media Processing"],
    links: {
      github: "https://github.com/PushkarPrabhath27/edusynth"
    },
    featured: false,
    status: "active",
    order: 8
  },
  {
    slug: "image-analysis",
    title: "ImageAnalysis",
    shortDescription: "CNN-based image segmentation",
    longDescription: "Deep learning system for semantic image segmentation using custom CNN architectures.",
    problem: "Traditional image processing lacks semantic understanding needed for complex scenes.",
    approach: "Implemented U-Net and DeepLabV3 architectures with custom preprocessing.",
    keyDecisions: [
      "Used data augmentation for limited dataset",
      "Implemented transfer learning from ImageNet"
    ],
    outcomes: [
      "Achieved 89% mIoU on validation set",
      "Deployed for medical imaging analysis"
    ],
    technologies: ["Python", "PyTorch", "Computer Vision"],
    links: {
      github: "https://github.com/PushkarPrabhath27/image-analysis"
    },
    featured: false,
    status: "active",
    order: 9
  },
  {
    slug: "anova-analysis",
    title: "AnovaAnalysis",
    shortDescription: "Statistical analysis web application",
    longDescription: "Web application for performing ANOVA (Analysis of Variance) statistical tests with interactive visualizations.",
    problem: "Statistical analysis tools are often expensive or require programming knowledge.",
    approach: "Built Flask-based web app with interactive Plotly visualizations.",
    keyDecisions: [
      "Used Plotly for interactive charts",
      "Implemented export to multiple formats"
    ],
    outcomes: [
      "500+ active users",
      "Used in academic courses"
    ],
    technologies: ["Python", "Flask", "Statistics"],
    links: {
      github: "https://github.com/PushkarPrabhath27/anova-analysis"
    },
    featured: false,
    status: "active",
    order: 10
  },
  {
    slug: "laymansql",
    title: "LaymanSQL",
    shortDescription: "Natural language to SQL conversion",
    longDescription: "System that converts natural language queries to SQL, making database accessible to non-technical users.",
    problem: "Non-technical users cannot easily extract insights from databases.",
    approach: "Built sequence-to-sequence model using T5 with database schema conditioning.",
    keyDecisions: [
      "Used schema-aware prompting",
      "Implemented error correction layer"
    ],
    outcomes: [
      "85% accuracy on benchmark queries",
      "Deployed for internal analytics"
    ],
    technologies: ["Python", "Django", "NLP"],
    links: {
      github: "https://github.com/PushkarPrabhath27/laymansql"
    },
    featured: false,
    status: "active",
    order: 11
  },
  {
    slug: "nft-trustscore",
    title: "NFT_TrustScore",
    shortDescription: "AI-powered NFT analysis dashboard",
    longDescription: "Dashboard for analyzing NFT projects and predicting trust scores based on on-chain and social metrics.",
    problem: "NFT scams are prevalent. Users need tools to evaluate project legitimacy.",
    approach: "Collected on-chain data and social signals, built gradient boosting model for scoring.",
    keyDecisions: [
      "Used ensemble of on-chain and social features",
      "Implemented real-time alerting"
    ],
    outcomes: [
      "Analyzed 5000+ NFT collections",
      "Detected 50+ suspicious projects"
    ],
    technologies: ["JavaScript", "AI", "Smart Contracts"],
    links: {
      github: "https://github.com/PushkarPrabhath27/NFT_TrustScore"
    },
    featured: false,
    status: "active",
    order: 12
  },
  {
    slug: "web-for-all",
    title: "WEB-for-ALL",
    shortDescription: "AI-powered accessibility system",
    longDescription: "System that automatically analyzes and improves web accessibility using computer vision and NLP.",
    problem: "Many websites are inaccessible to users with disabilities.",
    approach: "Built multi-modal system using computer vision for visual analysis and NLP for content understanding.",
    keyDecisions: [
      "Combined multiple AI modalities",
      "Implemented WCAG guideline mapping"
    ],
    outcomes: [
      "Analyzed 1000+ websites",
      "Generated accessibility reports"
    ],
    technologies: ["JavaScript", "Computer Vision", "NLP", "Audio Processing"],
    links: {
      github: "https://github.com/PushkarPrabhath27/WEB-for-ALL"
    },
    featured: false,
    status: "active",
    order: 13
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(p => p.featured).sort((a, b) => a.order - b.order);
}
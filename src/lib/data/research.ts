export interface ResearchPaper {
  slug: string;
  title: string;
  status: "in-progress" | "under-review" | "published";
  coauthors: string[];
  abstract: string;
  methodology: string;
  keyContributions: string[];
  results: {
    metric: string;
    value: string;
    comparison?: string;
  }[];
  links: {
    paper?: string;
    github?: string;
    huggingface?: string;
    demo?: string;
  };
  date: string;
  order: number;
}

export const researchPapers: ResearchPaper[] = [
  {
    slug: "ns-ir",
    title: "NS-IR: A Neural-Symbolic Intermediate Representation for Adaptive Compiler Optimization",
    status: "under-review",
    coauthors: ["Dr. Research Advisor", "Collaborator Name"],
    abstract: "This paper presents NS-IR, a novel neural-symbolic intermediate representation that bridges traditional compiler optimization techniques with learned cost models. By combining polyhedral compilation analysis with Graph Attention Networks and RoPE-based position encoding, NS-IR achieves superior optimization decisions compared to traditional heuristics.",
    methodology: "We combine polyhedral compilation techniques for precise program analysis with deep learning models. The system uses TIRAMISU compiler infrastructure for intermediate representation generation. Graph Attention Networks model program dependencies, while RoPE Transformers capture instruction sequence patterns. Training uses a hybrid loss combining prediction accuracy and code size.",
    keyContributions: [
      "Novel neural-symbolic IR that combines formal methods with deep learning",
      "GAT-based program graph representation learning",
      "RoPE encoding for instruction sequence modeling",
      "Generalizable optimization decisions across code patterns"
    ],
    results: [
      { metric: "MAPE", value: "2.28%", comparison: "vs 5.8% baseline" },
      { metric: "Speedup", value: "1.14x", comparison: "over LLVM-O3" },
      { metric: "Compile Time", value: "Minimal overhead", comparison: "<5% increase" }
    ],
    links: {
      github: "https://github.com/PushkarPrabhath27/ns-ir"
    },
    date: "2026-03-15",
    order: 1
  },
  {
    slug: "w2v-deepfake-detector",
    title: "Zero-Shot Deepfake Voice Detection via Frozen Self-Supervised Representations",
    status: "under-review",
    coauthors: ["Co-author 1", "Co-author 2"],
    abstract: "We present W2V-DeepfakeDetector, a zero-shot approach to deepfake voice detection using frozen self-supervised speech encoders. By leveraging pre-trained WavLM representations without fine-tuning, we achieve exceptional generalization to unseen voice conversion techniques while dramatically reducing model parameters.",
    methodology: "Our approach uses frozen WavLM encoder to extract speaker-agnostic representations. We implement weighted aggregation across time steps and attention pooling for robust feature extraction. Zero-shot capability is achieved through contrastive learning on anchor samples and careful design to avoid learning speaker-specific artifacts that degrade generalization.",
    keyContributions: [
      "First zero-shot deepfake detection using frozen SSL encoders",
      "Attention pooling for robust feature extraction",
      "420x parameter reduction vs fine-tuning approaches",
      "Generalizes to unseen voice conversion techniques"
    ],
    results: [
      { metric: "EER", value: "1.03%", comparison: "State-of-the-art" },
      { metric: "Parameters", value: "420x fewer", comparison: "vs fine-tuning" },
      { metric: "Generalization", value: "Unseen attacks", comparison: "95% detection rate" }
    ],
    links: {
      github: "https://github.com/PushkarPrabhath27/w2v-deepfake-detector",
      huggingface: "https://huggingface.co/w2v-deepfake-detector"
    },
    date: "2026-02-20",
    order: 2
  },
  {
    slug: "gricebench",
    title: "Operationalizing Gricean Maxims for Cooperative Dialogue Systems",
    status: "in-progress",
    coauthors: ["Research Collaborator"],
    abstract: "GriceBench is a comprehensive benchmark for evaluating dialogue systems' adherence to Gricean maxims of communication (quantity, quality, relation, manner). We introduce a detect-repair-generate architecture that identifies maxim violations, repairs problematic responses, and generates cooperative alternatives using DPO optimization.",
    methodology: "We use DeBERTa-v3 for fine-grained maxim violation detection, T5 for generating repair candidates, and Direct Preference Optimization (DPO) for training. Our benchmark includes 50,000+ human-annotated dialogues covering various violation types. Evaluation uses both automated metrics and human ratings.",
    keyContributions: [
      "First comprehensive benchmark for Gricean maxim adherence",
      "Detect-repair-generate architecture for cooperative dialogue",
      "DPO optimization for preference learning without reward models",
      "Open-source models and benchmark dataset"
    ],
    results: [
      { metric: "Cooperative Rate", value: "95.0%", comparison: "vs 72% baseline" },
      { metric: "F1 Score", value: "0.968", comparison: "on violation detection" },
      { metric: "Benchmark Size", value: "50K+ samples", comparison: "human annotated" }
    ],
    links: {
      github: "https://github.com/PushkarPrabhath27/gricebench",
      huggingface: "https://huggingface.co/gricebench"
    },
    date: "2026-04-01",
    order: 3
  }
];

export function getResearchBySlug(slug: string): ResearchPaper | undefined {
  return researchPapers.find(r => r.slug === slug);
}

export function getPublishedResearch(): ResearchPaper[] {
  return researchPapers.filter(r => r.status === "published");
}

export function getUnderReviewResearch(): ResearchPaper[] {
  return researchPapers.filter(r => r.status === "under-review");
}

export function getInProgressResearch(): ResearchPaper[] {
  return researchPapers.filter(r => r.status === "in-progress");
}
import { AboutContent } from "./AboutContent";

const certifications = [
  { name: "AWS Certified Solutions Architect", issuer: "Amazon Web Services" },
  { name: "Azure Developer Associate", issuer: "Microsoft" },
];

export const metadata = {
  title: "About | Pushkar Prabhath R",
  description: "Full-stack engineer and AI researcher with a focus on scalable systems and machine learning.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      <AboutContent certifications={certifications} />
    </div>
  );
}
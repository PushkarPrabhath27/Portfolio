import Contact from "@/components/sections/Contact";

export const metadata = {
  title: "Contact | Pushkar Prabhath",
  description:
    "Open to internships, research, and product engineering opportunities.",
};

export default function ContactPage() {
  return (
    <div className="pt-20 min-h-screen">
      <Contact />
    </div>
  );
}
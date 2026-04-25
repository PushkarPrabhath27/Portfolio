import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Spotlight } from "@/components/ui/Spotlight";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pushkar Prabhath R | Full-Stack Engineer & AI Researcher",
  description:
    "Full-stack developer specializing in scalable SaaS platforms and AI research. Building systems that handle scale, solving problems that matter.",
  keywords: [
    "full-stack developer",
    "AI researcher",
    "software engineer",
    "Go",
    "TypeScript",
    "machine learning",
    "portfolio",
  ],
  authors: [{ name: "Pushkar Prabhath R" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pushkarprabhath.dev",
    siteName: "Pushkar Prabhath R Portfolio",
    title: "Pushkar Prabhath R | Full-Stack Engineer & AI Researcher",
    description:
      "Full-stack developer specializing in scalable SaaS platforms and AI research.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pushkar Prabhath R Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pushkar Prabhath R Portfolio",
    description:
      "Full-stack developer specializing in scalable SaaS platforms and AI research.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} min-h-screen flex flex-col antialiased`}
      >
        <Spotlight />
        <CustomCursor />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

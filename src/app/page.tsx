import Navbar from "@/components/common/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Stats from "@/components/landing/Stats";
import ResumeAnalyzer from "@/components/analysis/ResumeAnalyzer";

export default function HomePage() {
  return (
    <main>

      <Navbar />

      <Hero />

      <Stats />

      <Features />
    </main>
  );
}
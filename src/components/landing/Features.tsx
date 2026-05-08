import {
  FileText,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    title: "AI Resume Analysis",
    description:
      "Analyze resumes against job descriptions with ATS scoring.",
    icon: Sparkles,
  },
  {
    title: "ATS Optimization",
    description:
      "Improve keywords, formatting, and readability instantly.",
    icon: ShieldCheck,
  },
  {
    title: "Professional Templates",
    description:
      "Modern recruiter-friendly resume templates.",
    icon: FileText,
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Everything You Need
          </h2>

          <p className="text-zinc-400 mt-4">
            Powerful AI tools for resume optimization.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="border border-zinc-800 bg-zinc-900/40 rounded-3xl p-8"
            >
              <feature.icon className="w-10 h-10 text-violet-400 mb-6" />

              <h3 className="text-2xl font-semibold mb-4">
                {feature.title}
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
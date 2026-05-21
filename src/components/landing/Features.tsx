"use client";

import {
  FileText,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

import { motion } from "framer-motion";

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

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Features() {

  return (
    <section
      id="features"
      className="py-24 relative overflow-hidden"
    >

      {/* BACKGROUND GLOW */}

      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[500px]
          h-[500px]
          bg-violet-500/10
          blur-[140px]
          rounded-full
          pointer-events-none
        "
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADER */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
          className="text-center mb-16"
        >

          <h2
            className="
              text-4xl
              md:text-5xl
              font-bold
              tracking-tight
            "
          >

            Everything You Need

          </h2>

          <p
            className="
              text-zinc-400
              mt-5
              max-w-2xl
              mx-auto
              leading-relaxed
            "
          >

            Powerful AI tools designed to optimize resumes,
            improve ATS scores, and help professionals stand out.

          </p>

        </motion.div>

        {/* FEATURE GRID */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
          }}
          className="grid md:grid-cols-3 gap-8"
        >

          {features.map((feature) => (

            <motion.div
              key={feature.title}
              variants={item}
              whileHover={{
                y: -10,
              }}
              className="
                group
                relative
                border border-zinc-800
                bg-zinc-900/40
                backdrop-blur-xl
                rounded-3xl
                p-8
                overflow-hidden
                transition-all
                duration-300
                hover:border-violet-500/40
                hover:bg-zinc-900/70
                hover:shadow-[0_0_50px_rgba(139,92,246,0.15)]
              "
            >

              {/* HOVER GLOW */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-violet-500/10
                  to-transparent
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-500
                "
              />

              {/* ICON */}

              <div
                className="
                  relative
                  w-16
                  h-16
                  rounded-2xl
                  bg-violet-500/10
                  border border-violet-500/20
                  flex items-center justify-center
                  mb-7
                  transition-all
                  duration-300
                  group-hover:scale-110
                  group-hover:rotate-3
                "
              >

                <feature.icon
                  className="
                    w-8
                    h-8
                    text-violet-400
                  "
                />

              </div>

              {/* TITLE */}

              <h3
                className="
                  relative
                  text-2xl
                  font-semibold
                  mb-4
                  transition-colors
                  duration-300
                  group-hover:text-violet-300
                "
              >

                {feature.title}

              </h3>

              {/* DESCRIPTION */}

              <p
                className="
                  relative
                  text-zinc-400
                  leading-relaxed
                  transition-colors
                  duration-300
                  group-hover:text-zinc-300
                "
              >

                {feature.description}

              </p>

            </motion.div>

          ))}

        </motion.div>

      </div>

    </section>
  );
}
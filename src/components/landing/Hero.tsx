"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Container from "../common/Container";

export default function Hero() {
  return (
    <section className="relative py-20 overflow-hidden">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#7c3aed25,transparent_40%)]" />
      {/* container */}
      <Container>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-violet-500/20 bg-violet-500/10 text-violet-300 mb-8">

            <Sparkles className="w-4 h-4" />

            AI Powered ATS Resume Platform

          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">

            Build
            <span className="text-violet-400"> AI-Optimized </span>
            Resumes That Actually Pass ATS Systems

          </h1>

          <p className="text-zinc-400 text-lg mt-8 leading-relaxed max-w-2xl">

            Analyze resumes against job descriptions, improve ATS score,
            generate optimized content, and create recruiter-friendly resumes instantly.

          </p>

          <div className="flex items-center gap-5 mt-12">

            <button className="bg-violet-500 hover:bg-violet-400 transition-all px-8 py-4 rounded-2xl font-semibold text-md shadow-lg shadow-violet-500/20">

              Start Building

            </button>

            <button className="border border-zinc-700 hover:border-zinc-500 transition-all px-8 py-4 rounded-2xl text-md">

              Live Demo

            </button>

          </div>

        </motion.div>

      </Container>
    </section>
  );
}
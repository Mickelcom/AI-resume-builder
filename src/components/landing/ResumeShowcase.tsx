"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ResumeShowcase() {

    return (
        <section className="py-28 bg-zinc-950 overflow-hidden">

            <div className="max-w-7xl mx-auto px-6 space-y-32">

                {/* SECTION 1 */}

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT CONTENT */}

                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >

                        <span className="px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium">

                            AI Resume Builder

                        </span>

                        <h2 className="mt-6 text-5xl font-bold leading-tight text-white">

                            Build recruiter-ready resumes in minutes

                        </h2>

                        <p className="mt-6 text-zinc-400 text-lg leading-8">

                            Create modern resumes optimized for ATS systems with AI-powered suggestions,
                            clean formatting, and industry-standard templates designed to increase interview calls.

                        </p>

                        <div className="mt-8 flex gap-4">

                            <div className="px-5 py-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-white text-sm">

                                ATS Optimized

                            </div>

                            <div className="px-5 py-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-white text-sm">

                                AI Suggestions

                            </div>

                        </div>

                    </motion.div>

                    {/* RIGHT IMAGE */}

                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="relative"
                    >

                        {/* GLOW */}

                        <div className="absolute inset-0 bg-violet-500/20 blur-[120px] rounded-full" />

                        {/* IMAGE PLACEHOLDER */}

                        <div className="relative rounded-[32px] border border-zinc-800 bg-zinc-900/50 p-5 backdrop-blur-xl shadow-2xl">
                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover"
                            >

                                <source
                                    src="/builder.mp4"
                                    type="video/mp4"
                                />

                            </video>
                        </div>

                    </motion.div>

                </div>

                {/* SECTION 2 */}

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT IMAGE */}

                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="relative order-2 lg:order-1"
                    >
                        {/* GLOW */}

                        <div className="absolute inset-0 bg-cyan-500/20 blur-[120px] rounded-full" />

                        <div className="relative rounded-[32px] border border-zinc-800 bg-zinc-900/50 p-5 backdrop-blur-xl shadow-2xl">

                            <img
                                src="/ATS check.png"
                                alt="ATS Analysis"
                                className="
                                w-full
                                max-w-[520px]
                                mx-auto
                                rounded-2xl
                                object-cover
                                "
                            />
                        </div>

                    </motion.div>

                    {/* RIGHT CONTENT */}

                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="order-1 lg:order-2"
                    >

                        <span className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm font-medium">

                            Smart ATS Scanner

                        </span>

                        <h2 className="mt-6 text-5xl font-bold leading-tight text-white">

                            Improve your ATS score with intelligent analysis

                        </h2>

                        <p className="mt-6 text-zinc-400 text-lg leading-8">

                            Our AI scans resumes against real-world ATS patterns,
                            detects missing keywords, formatting issues, and provides
                            actionable improvements to maximize resume visibility.

                        </p>

                        <div className="mt-8 grid grid-cols-2 gap-4">

                            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">

                                <h3 className="text-3xl font-bold text-cyan-400">

                                    95%

                                </h3>

                                <p className="mt-2 text-sm text-zinc-400">

                                    ATS Compatibility

                                </p>

                            </div>

                            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">

                                <h3 className="text-3xl font-bold text-cyan-400">

                                    10K+

                                </h3>

                                <p className="mt-2 text-sm text-zinc-400">

                                    Resumes Analyzed

                                </p>

                            </div>

                        </div>

                    </motion.div>

                </div>

            </div>

        </section>
    );
}
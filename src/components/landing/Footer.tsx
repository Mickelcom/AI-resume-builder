"use client";

import Link from "next/link";

export default function Footer() {

  return (

    <footer className="mt-24 border-t border-zinc-800 bg-zinc-950">

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12">

        {/* TOP GRID */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* LEFT */}

          <div>

            <img
              src="/White logo.png"
              alt="athenura"
              width={150}
              className="object-contain"
            />

            <p className="mt-5 text-sm leading-7 text-zinc-400 max-w-sm">

              Next-generation AI powered resume analysis platform helping
              developers and professionals improve ATS scores and land
              better opportunities.

            </p>

          </div>

          {/* COMPANY */}

          <div>

            <h3 className="mb-5 text-lg font-semibold text-white">

              Company

            </h3>

            <div className="flex flex-col gap-4 text-sm text-zinc-400">

              <Link
                href="/"
                className="transition hover:text-violet-400"
              >
                About Us
              </Link>

              <Link
                href="/"
                className="transition hover:text-violet-400"
              >
                Careers
              </Link>

              <Link
                href="/"
                className="transition hover:text-violet-400"
              >
                Privacy Policy
              </Link>

              <Link
                href="/"
                className="transition hover:text-violet-400"
              >
                Terms & Conditions
              </Link>

              <Link
                href="/"
                className="transition hover:text-violet-400"
              >
                FAQs
              </Link>

            </div>

          </div>

          {/* FEATURES */}

          <div>

            <h3 className="mb-5 text-lg font-semibold text-white">

              Features

            </h3>

            <div className="flex flex-col gap-4 text-sm text-zinc-400">

              <p className="cursor-pointer transition hover:text-violet-400">
                AI Resume Analyzer
              </p>

              <p className="cursor-pointer transition hover:text-violet-400">
                ATS Optimization
              </p>

              <p className="cursor-pointer transition hover:text-violet-400">
                Resume Builder
              </p>

              <p className="cursor-pointer transition hover:text-violet-400">
                AI Suggestions
              </p>

              <p className="cursor-pointer transition hover:text-violet-400">
                Resume History
              </p>

            </div>

          </div>

          {/* CONTACT */}

          <div>

            <h3 className="mb-5 text-lg font-semibold text-white">

              Contact Us

            </h3>

            <div className="space-y-6">

              <div>

                <p className="text-xs tracking-wide text-zinc-500">

                  EMAIL

                </p>

                <p className="mt-2 text-sm font-medium text-white break-all">

                  support@atsai.com

                </p>

              </div>

              <div>

                <p className="text-xs tracking-wide text-zinc-500">

                  PHONE

                </p>

                <p className="mt-2 text-sm font-medium text-white">

                  +91 98765**** 

                </p>

              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM */}

        <div className="mt-12 border-t border-zinc-800 pt-6">

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">

            <p className="text-sm text-zinc-500">

              © 2026 ATS AI. All rights reserved.

            </p>

            <p className="text-sm text-zinc-500">

              Built with Next.js, Spring Boot & Groq AI

            </p>

          </div>

        </div>

      </div>

    </footer>

  );
}
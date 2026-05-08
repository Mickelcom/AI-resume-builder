"use client";

import { useState } from "react";

import Sidebar from "@/components/dashboard/Sidebar";

import {
  Upload,
  Sparkles,
  HardDriveUpload
} from "lucide-react";

import { analyzeResume } from "@/services/ai.service";

import AnalysisCard from "@/components/analysis/AnalysisCard";

export default function AnalyzerPage() {

  const [file, setFile] =
    useState<File | null>(null);

  const [jobDescription, setJobDescription] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [result, setResult] =
    useState("");

  const handleAnalyze = async () => {

    if (!file) {
      alert("Upload resume PDF");
      return;
    }

    try {

      setLoading(true);

      const response =
        await analyzeResume(
          file,
          jobDescription
        );

      setResult(
        response.choices[0].message.content
      );

    } catch (error) {

      console.error(error);

      alert("Analysis failed");

    } finally {

      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-black text-white">

      <Sidebar />

      <main className="flex-1 p-6 lg:p-8 overflow-y-auto">

        <div className="mb-8">

          <h1 className="text-3xl font-bold">

            AI Resume Analyzer

          </h1>

          <p className="text-zinc-400 text-sm mt-2">

            Upload resume PDF and compare it with job descriptions.

          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-6">

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

            <div className="flex items-center gap-3 mb-6">

              <Upload className="w-6 h-6 text-violet-400" />

              <h2 className="text-xl font-semibold">

                Upload Resume

              </h2>

            </div>

            <div className="border border-dashed border-zinc-700 hover:border-violet-500/50 transition-all duration-300 rounded-3xl p-8 text-center bg-zinc-900/40 backdrop-blur-xl">

              {/* Hidden Input */}
              <input
                id="resume-upload"
                type="file"
                accept="application/pdf"
                onChange={(e) => {
                  if (e.target.files?.[0]) {
                    setFile(e.target.files[0]);
                  }
                }}
                className="hidden"
              />

              {/* Custom Upload Button */}
              <label
                htmlFor="resume-upload"
                className="inline-flex items-center gap-3 cursor-pointer bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-400 hover:to-fuchsia-400 text-white px-6 py-3 rounded-2xl font-medium shadow-lg shadow-violet-500/20 transition-all duration-300 hover:scale-[1.02] active:scale-95"
              >
                <HardDriveUpload/>
                Choose Resume

              </label>

              {/* File Name */}
              {file ? (

                <div className="mt-5 flex items-center justify-center gap-2 text-green-400 text-sm font-medium">

                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

                  {file.name}

                </div>

              ) : (

                <p className="mt-4 text-sm text-zinc-500">
                  Upload your resume in PDF format
                </p>

              )}

            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

            <div className="flex items-center gap-3 mb-6">

              <Sparkles className="w-6 h-6 text-violet-400" />

              <h2 className="text-xl font-semibold">

                Job Description

              </h2>

            </div>

            <textarea
              value={jobDescription}
              onChange={(e) =>
                setJobDescription(
                  e.target.value
                )
              }
              placeholder="Paste job description..."
              className="w-full h-64 bg-zinc-950 border border-zinc-800 rounded-2xl p-5 resize-none outline-none text-sm"
            />

          </div>

        </div>

        <div className="mt-8 text-center">
          <button
            onClick={handleAnalyze}
            disabled={loading}
            className="bg-violet-500 hover:bg-violet-400 transition-all px-8 py-4 rounded-2xl font-semibold"
          >

            {loading
              ? "Analyzing Resume..."
              : "Analyze Resume"}

          </button>

        </div>

        {result && (

          <div className="mt-10 grid lg:grid-cols-2 gap-6">

            <AnalysisCard
              title="ATS Analysis"
              value={result}
            />

            <AnalysisCard
              title="AI Suggestions"
              value="Improve quantified achievements and include ATS keywords."
            />

          </div>

        )}

      </main>

    </div>
  );
}
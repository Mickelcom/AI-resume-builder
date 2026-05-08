"use client";
import { useState } from "react";
import Container from "../common/Container";
import { analyzeResume } from "@/services/ai.service";
import { Upload } from "lucide-react";

export default function ResumeAnalyzer() {

  const [file, setFile] = useState<File | null>(null);

  const [jobDescription, setJobDescription] = useState("");

  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState("");

  const handleAnalyze = async () => {

    if (!file) {
      alert("Please upload resume");
      return;
    }

    try {

      setLoading(true);

      const response = await analyzeResume(
        file,
        jobDescription
      );

      setResult(response);

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-32">

      <Container>

        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">

            <h2 className="text-5xl font-bold">
              AI Resume Analyzer
            </h2>

            <p className="text-zinc-400 mt-5 text-lg">
              Upload resume PDF and compare against job descriptions.
            </p>

          </div>

          <div className="border border-dashed border-zinc-700 rounded-3xl p-12 text-center bg-zinc-900/40">

            <div className="flex justify-center mb-6">
              <Upload className="w-14 h-14 text-violet-400" />
            </div>

            <input
              type="file"
              accept="application/pdf"
              onChange={(e) => {
                if (e.target.files?.[0]) {
                  setFile(e.target.files[0]);
                }
              }}
              className="text-sm text-zinc-400"
            />

            {file && (
              <p className="mt-4 text-green-400">
                {file.name}
              </p>
            )}

          </div>

          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            placeholder="Paste job description..."
            className="w-full h-64 mt-8 bg-zinc-900 border border-zinc-800 rounded-3xl p-6 resize-none outline-none"
          />

          <div className="flex justify-center mt-10">

            <button
              onClick={handleAnalyze}
              disabled={loading}
              className="bg-violet-500 hover:bg-violet-400 transition-all px-8 py-4 rounded-2xl font-semibold text-lg"
            >

              {loading
                ? "Analyzing Resume..."
                : "Analyze Resume"}

            </button>

          </div>

          {result && (

            <div className="mt-12 bg-zinc-900 border border-zinc-800 rounded-3xl p-8 whitespace-pre-wrap leading-relaxed text-zinc-300">

              {result}

            </div>

          )}

        </div>

      </Container>

    </section>
  );
}
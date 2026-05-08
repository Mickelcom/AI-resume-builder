"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

import Sidebar from "@/components/dashboard/Sidebar";
import StatsCards from "@/components/dashboard/StatsCards";

import { getDashboardStats }
  from "@/services/dashboard.service";

export default function DashboardPage() {
  const { user, loading } = useAuth();
  const [stats, setStats] =
    useState<DashboardStat[]>([]);
  const router = useRouter();

  interface DashboardStat {
    id: number;
    atsScore: number;
    result: string;
    userEmail: string;
    createdAt: string;
  }
  useEffect(() => {

    if (!loading && !user) {
      router.push("/login");
    }

  }, [user]);

  // fetch data 
  useEffect(() => {

    const fetchStats = async () => {

      try {

        const data =
          await getDashboardStats();

        setStats(data);

      } catch (error) {

        console.error(error);
      }
    };

    fetchStats();

  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">

        Loading...

      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="flex min-h-screen bg-black text-white">

      <Sidebar />

      <main className="flex-1 p-6 lg:p-8 overflow-y-auto">

        <div className="flex items-center justify-between mb-8">

          <div>

            <h1 className="text-3xl font-bold tracking-tight">

              Welcome back,
              <span className="text-violet-400">
                {" "} {user.name}
              </span>

            </h1>

            <p className="text-zinc-400 mt-2 text-sm">

              Track resume performance and improve ATS optimization.

            </p>

          </div>

        </div>

        {/* <StatsCards /> */}
        <div className="grid lg:grid-cols-3 gap-5">

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

            <p className="text-zinc-400 text-sm">
              Total Analysis
            </p>

            <h2 className="text-3xl font-bold text-violet-400 mt-3">

              {stats.length}

            </h2>

          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

            <p className="text-zinc-400 text-sm">
              Latest ATS Score
            </p>

            <h2 className="text-3xl font-bold text-violet-400 mt-3">

              {stats[0]?.atsScore || 0}%

            </h2>

          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

            <p className="text-zinc-400 text-sm">
              AI Optimizations
            </p>

            <h2 className="text-3xl font-bold text-violet-400 mt-3">

              {stats.length * 3}

            </h2>

          </div>

        </div>

        <div className="mt-8 grid lg:grid-cols-2 gap-6">

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

            <h2 className="text-lg font-semibold mb-4">

              Recent Analysis

            </h2>

            <p className="text-zinc-400 text-sm">

              No resume analysis yet.

            </p>

          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

            <h2 className="text-lg font-semibold mb-4">

              AI Suggestions

            </h2>

            <ul className="space-y-3 text-sm text-zinc-300">

              <li>
                • Add quantified achievements
              </li>

              <li>
                • Include ATS keywords
              </li>

              <li>
                • Improve project descriptions
              </li>

            </ul>

          </div>

        </div>

      </main>

    </div>
  );
}
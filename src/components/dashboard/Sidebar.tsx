"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  FileText,
  Sparkles,
  History,
  LogOut,
} from "lucide-react";

import { useAuth } from "@/context/AuthContext";

export default function Sidebar() {
  const { logout } = useAuth();

  const pathname = usePathname();

  const links = [
    {
      href: "/dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      href: "/dashboard/analyzer",
      label: "Resume Analyzer",
      icon: Sparkles,
    },
    {
      href: "/dashboard/builder",
      label: "Resume Builder",
      icon: FileText,
    },
    {
      href: "/dashboard/history",
      label: "History",
      icon: History,
    },
  ];

  return (
    <aside className="w-64 min-h-screen bg-zinc-950 border-r border-zinc-800/70 p-5 flex flex-col justify-between">

      {/* TOP */}
      <div>

        {/* LOGO */}
        <div className="flex items-center gap-3 mb-12">

          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-violet-500/20">

            <Sparkles className="w-6 h-6 text-white" />

          </div>

          <div>
            <h1 className="text-xl font-bold text-white tracking-wide">
              ATS AI
            </h1>

            <p className="text-xs text-zinc-500">
              Resume Platform
            </p>
          </div>

        </div>

        {/* NAVIGATION */}
        <nav className="space-y-2">

          {links.map((link) => {

            const active = pathname === link.href;

            const Icon = link.icon;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 overflow-hidden
                  
                  ${
                    active
                      ? "bg-gradient-to-r from-violet-500/20 to-fuchsia-500/10 text-white border border-violet-500/30 shadow-lg shadow-violet-500/10"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-900/80"
                  }
                `}
              >

                {/* Active glow */}
                {active && (
                  <div className="absolute left-0 top-2 bottom-2 w-1 rounded-full bg-violet-400 shadow-[0_0_20px_#a855f7]" />
                )}

                {/* Icon */}
                <div
                  className={`transition-all duration-300
                    ${
                      active
                        ? "text-violet-300"
                        : "text-zinc-500 group-hover:text-zinc-200"
                    }
                  `}
                >
                  <Icon className="w-5 h-5" />
                </div>

                {/* Label */}
                <span className="font-medium tracking-wide">
                  {link.label}
                </span>

              </Link>
            );
          })}

        </nav>

      </div>

      {/* LOGOUT */}
      <div className="pt-6">

        <button
          onClick={logout}
          className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-red-500 to-rose-500 hover:from-red-400 hover:to-rose-400 text-white py-3 rounded-2xl font-medium transition-all duration-300 shadow-lg shadow-red-500/20 hover:scale-[1.02] active:scale-95"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </aside>
  );
}
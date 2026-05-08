"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {

  const { user, logout } = useAuth();

  const handleGoogleLogin = () => {

    window.location.href =
      "http://localhost:8080/oauth2/authorization/google";
  };

  return (
    <nav className="w-full border-b border-zinc-800 bg-black/40 backdrop-blur-xl sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold text-white"
        >

          <Sparkles className="w-5 h-5 text-violet-400" />

          ATS AI

        </Link>

        <div className="flex items-center gap-6 text-sm text-zinc-300">

          <a href="#features">
            Features
          </a>

          <a href="#analyzer">
            Analyzer
          </a>

          {!user ? (

            <button
              onClick={handleGoogleLogin}
              className="bg-white text-black px-4 py-2 rounded-xl font-medium hover:bg-zinc-200 transition-all"
            >

              Login

            </button>

          ) : (

            <div className="flex items-center gap-4">

              <p className="text-white font-medium">

                {user.name}

              </p>

              <button
                onClick={logout}
                className="bg-red-500 hover:bg-red-400 px-4 py-2 rounded-xl text-white font-medium transition-all"
              >

                Logout

              </button>

            </div>

          )}

        </div>

      </div>

    </nav>
  );
}
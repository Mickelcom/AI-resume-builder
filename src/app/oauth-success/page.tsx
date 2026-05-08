"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function OAuthSuccessPage() {

  const params = useSearchParams();

  const router = useRouter();

  const { login } = useAuth();

  useEffect(() => {

    const token = params.get("token");

    const name = params.get("name");

    if (token && name) {

      login(name, token);

      router.push("/dashboard");
    }

  }, []);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white">

      Logging you in...

    </div>
  );
}
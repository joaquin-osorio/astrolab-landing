"use client";

import { useEffect } from "react";

export default function RedirectGithub() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.href = "https://github.com/joaquin-osorio/astrolab-landing";
    }, 200); // 200ms para que Analytics registre el pageview
    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="flex h-screen items-center justify-center">
      <p className="text-gray-500">Redirecting to GitHub…</p>
    </main>
  );
}


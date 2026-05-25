"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col items-center justify-center p-6 text-center font-outfit">
      {/* Background glow */}
      <div className="absolute top-[30%] left-[30%] w-72 h-72 bg-amber-500/10 rounded-full blur-[100px] animate-pulse"></div>
      
      <div className="relative z-10">
        <h1 className="text-9xl font-black text-amber-500 font-space tracking-wider animate-pulse">404</h1>
        <h2 className="text-3xl font-bold mt-4 font-space">Page Not Found</h2>
        <p className="text-slate-400 mt-2 max-w-md text-sm leading-relaxed">
          Oops! The page you are looking for doesn't exist or has been moved to another location.
        </p>
        <Link 
          href="/"
          className="mt-8 inline-block bg-amber-500 hover:bg-amber-600 text-black font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-amber-500/15 hover:shadow-amber-500/25 transition-all text-sm border-none"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

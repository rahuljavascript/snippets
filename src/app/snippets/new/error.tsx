"use client";

import Link from "next/link";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  return (
    <div className="py-16 px-4 text-center max-w-lg mx-auto">
      <div className="w-16 h-16 rounded-2xl bg-red-50 text-red-500 border border-red-100 flex items-center justify-center mx-auto mb-6 text-2xl shadow-xs">
        ⚠️
      </div>

      <h1 className="text-2xl font-bold tracking-tight text-slate-900">
        Something went wrong!
      </h1>

      <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg p-3.5 my-6 font-mono text-left break-words">
        {error.message || "An unexpected error occurred."}
      </p>

      <div className="flex items-center justify-center gap-3">
        <button
          onClick={() => reset()}
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-xs hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors cursor-pointer"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 hover:border-slate-400 transition shadow-xs"
        >
          &larr; Back to Snippets
        </Link>
      </div>
    </div>
  );
}


"use client";
import Link from "next/link";
import * as actions from "@/actions";
import { useActionState } from "react";

export default function SnippetCreatePage() {
  const [formState, action] = useActionState(actions.createSnippet, { message: "" });

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
      >
        &larr; Back to all snippets
      </Link>

      <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm">
        <div className="pb-6 mb-6 border-b border-slate-200">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Create a New Snippet
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Store a reusable piece of code in your personal snippets library.
          </p>
        </div>

        <form action={action} className="space-y-6">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-semibold text-slate-700 mb-2"
            >
              Title
            </label>
            <input
              name="title"
              id="title"
              type="text"
              required
              placeholder="e.g. Redux Toolkit Slice, Binary Search, Custom Hook..."
              className="w-full px-3.5 py-2.5 text-slate-900 bg-white border border-slate-300 rounded-lg shadow-xs focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm transition"
            />
          </div>

          <div>
            <label
              htmlFor="code"
              className="block text-sm font-semibold text-slate-700 mb-2"
            >
              Code
            </label>
            <textarea
              name="code"
              id="code"
              rows={12}
              required
              placeholder="// Paste or type your code here..."
              className="w-full px-3.5 py-2.5 text-slate-900 bg-slate-950 text-slate-100 border border-slate-800 rounded-lg shadow-xs font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition leading-relaxed resize-y"
            />
          </div>
          {formState.message && (
            <div className="flex items-center gap-2.5 p-3.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm shadow-xs animate-in fade-in duration-150">
              <svg
                className="w-5 h-5 text-red-500 shrink-0"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-medium">{formState.message}</span>
            </div>
          )}

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
            <Link
              href="/"
              className="px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 hover:border-slate-400 transition shadow-xs"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="inline-flex items-center gap-1.5 px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-xs hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors cursor-pointer"
            >
              Create Snippet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


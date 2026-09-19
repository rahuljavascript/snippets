import Link from "next/link";

export default function SnippetNotFoundPage() {
  return (
    <div className="py-16 px-4 text-center max-w-lg mx-auto">
      <div className="w-16 h-16 rounded-2xl bg-slate-100 text-slate-500 flex items-center justify-center mx-auto mb-6 text-2xl font-bold font-mono">
        404
      </div>

      <h1 className="text-2xl font-bold tracking-tight text-slate-900">
        Snippet Not Found
      </h1>
      <p className="text-sm text-slate-500 mt-2 mb-8 leading-relaxed">
        Sorry, we couldn&apos;t find the snippet you were looking for. It might have been deleted or the URL might be incorrect.
      </p>

      <div className="flex items-center justify-center gap-3">
        <Link
          href="/"
          className="px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 hover:border-slate-400 transition shadow-xs"
        >
          &larr; Back to Snippets
        </Link>
        <Link
          href="/snippets/new"
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-xs hover:bg-blue-700 transition"
        >
          Create Snippet
        </Link>
      </div>
    </div>
  );
}
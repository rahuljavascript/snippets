import Link from "next/link";
import { db } from "@/db";

export default async function Home() {
  const snippets = await db.snippet.findMany();

  const renderedSnippets = snippets.map((snippet) => {
    return (
      <Link
        key={snippet.id}
        href={`/snippets/${snippet.id}`}
        className="group block p-5 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:shadow-md transition-all duration-150"
      >
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-base font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
            {snippet.title}
          </h2>
          <span className="text-xs font-medium text-slate-500 group-hover:text-blue-600 flex items-center gap-1 transition-colors">
            View Snippet <span className="transition-transform group-hover:translate-x-0.5">&rarr;</span>
          </span>
        </div>

        {/* Short Code Preview */}
        <pre className="text-xs font-mono text-slate-600 bg-slate-50 border border-slate-100 rounded-md p-2.5 overflow-hidden text-ellipsis whitespace-nowrap">
          <code>{snippet.code.split("\n")[0] || "// Empty snippet"}</code>
        </pre>
      </Link>
    );
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Snippets
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Browse and manage your saved code snippets
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700">
            {snippets.length} {snippets.length === 1 ? "snippet" : "snippets"}
          </span>
          <Link
            href="/snippets/new"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-xs hover:bg-blue-700 transition-colors"
          >
            <span>+</span> Create New Snippet
          </Link>
        </div>
      </div>

      {/* Snippets List */}
      <div className="grid gap-4">
        {snippets.length === 0 ? (
          <div className="text-center py-16 px-4 border-2 border-dashed border-slate-200 rounded-2xl bg-white">
            <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4 text-xl">
              {"</>"}
            </div>
            <h3 className="text-base font-semibold text-slate-900">
              No snippets yet
            </h3>
            <p className="text-sm text-slate-500 mt-1 mb-6 max-w-sm mx-auto">
              Get started by creating your very first reusable code snippet.
            </p>
            <Link
              href="/snippets/new"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-xs hover:bg-blue-700 transition-colors"
            >
              <span>+</span> Create Snippet
            </Link>
          </div>
        ) : (
          renderedSnippets
        )}
      </div>
    </div>
  );
}



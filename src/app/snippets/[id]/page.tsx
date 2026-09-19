import Link from "next/link";
import { getSnippet } from "@/db/queries";
import * as actions from "@/actions";

interface SnippetShowPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function SnippetShowPage(props: SnippetShowPageProps) {
  const { id } = await props.params;
  const snippetId = parseInt(id);
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const snippet = await getSnippet(snippetId);

  const deleteSnippetAction = actions.deleteSnippet.bind(null, snippet.id);

  return (
    <div className="space-y-6">
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
      >
        &larr; Back to all snippets
      </Link>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Snippet #{snippet.id}</span>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
            {snippet.title}
          </h1>
        </div>

        <div className="flex items-center gap-2.5">
          <Link
            href={`/snippets/${snippet.id}/edit`}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg shadow-xs hover:bg-slate-50 hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            <span>✏️</span> Edit
          </Link>
          <form action={deleteSnippetAction}>
            <button
              type="submit"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-red-600 bg-white border border-red-200 rounded-lg shadow-xs hover:bg-red-50 hover:border-red-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors cursor-pointer"
            >
              <span>🗑️</span> Delete
            </button>
          </form>
        </div>
      </div>

      {/* Code Card */}
      <div className="rounded-xl border border-slate-800 bg-slate-950 overflow-hidden shadow-lg">
        <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
          </div>
          <span className="text-xs font-mono text-slate-400">JavaScript / TypeScript</span>
        </div>
        <pre className="p-5 overflow-x-auto text-sm text-slate-100 font-mono leading-relaxed">
          <code>{snippet.code}</code>
        </pre>
      </div>
    </div>
  );
}



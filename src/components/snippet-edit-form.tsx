"use client";

import { useState } from "react";
import Link from "next/link";
import type { Snippet } from "@prisma/client";
import Editor from "@monaco-editor/react";
import * as actions from "@/actions";

interface SnippetEditFormProps {
  snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  const [code, setCode] = useState(snippet.code);

  const handleEditorChange = (value: string = "") => {
    setCode(value);
  };

  const editSnippetAction = actions.editSnippet.bind(null, snippet.id, code);

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <Link
        href={`/snippets/${snippet.id}`}
        className="inline-flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
      >
        &larr; Back to Snippet
      </Link>

      <form
        action={editSnippetAction}
        className="space-y-6 bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm"
      >
        <div className="pb-6 border-b border-slate-200">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
            Editing Snippet #{snippet.id}
          </span>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 mt-1">
            {snippet.title}
          </h1>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Code Editor
          </label>

          <div className="rounded-xl border border-slate-800 bg-slate-950 overflow-hidden shadow-md">
            <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block"></span>
              </div>
              <span className="text-xs font-mono text-slate-400">Monaco Editor (VS Dark)</span>
            </div>
            <Editor
              height="45vh"
              theme="vs-dark"
              language="javascript"
              defaultValue={snippet.code}
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                automaticLayout: true,
                scrollBeyondLastLine: false,
                lineNumbers: "on",
                tabSize: 2,
              }}
              onChange={handleEditorChange}
            />
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
          <Link
            href={`/snippets/${snippet.id}`}
            className="px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 hover:border-slate-400 transition shadow-xs"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="inline-flex items-center gap-1.5 px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-xs hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors cursor-pointer"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}



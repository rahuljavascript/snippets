export default function SnippetLoadingPage() {
  return (
    <div className="space-y-6 animate-pulse max-w-4xl mx-auto">
      {/* Back button skeleton */}
      <div className="h-4 w-32 bg-slate-200 rounded-md"></div>

      {/* Header skeleton */}
      <div className="flex items-center justify-between pb-6 border-b border-slate-200">
        <div className="space-y-2">
          <div className="h-3 w-20 bg-slate-200 rounded"></div>
          <div className="h-8 w-64 bg-slate-200 rounded-lg"></div>
        </div>
        <div className="flex gap-2.5">
          <div className="h-9 w-20 bg-slate-200 rounded-lg"></div>
          <div className="h-9 w-20 bg-slate-200 rounded-lg"></div>
        </div>
      </div>

      {/* Code card skeleton */}
      <div className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-xs">
        <div className="h-10 bg-slate-100 border-b border-slate-200 px-4 flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
        </div>
        <div className="p-6 space-y-3">
          <div className="h-4 w-3/4 bg-slate-100 rounded"></div>
          <div className="h-4 w-1/2 bg-slate-100 rounded"></div>
          <div className="h-4 w-5/6 bg-slate-100 rounded"></div>
          <div className="h-4 w-2/3 bg-slate-100 rounded"></div>
        </div>
      </div>
    </div>
  );
}
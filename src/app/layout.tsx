import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Snippets | Code Manager",
  description: "A clean, modern code snippet manager built with Next.js and Prisma.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} min-h-full bg-slate-50 text-slate-900 flex flex-col`}>
        {/* Navigation Bar */}
        <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2.5 font-bold text-lg text-slate-900 hover:text-blue-600 transition-colors"
            >
              <span className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-mono text-sm shadow-sm">
                {"</>"}
              </span>
              <span>Snippets</span>
            </Link>

            <nav className="flex items-center gap-4">
              <Link
                href="/snippets/new"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-xs hover:bg-blue-700 transition-colors"
              >
                <span>+</span> New Snippet
              </Link>
            </nav>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-200 bg-white py-6 mt-auto">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>Snippets Manager &bull; Next.js 15 & Prisma</p>
            <p>Built for clean and organized code snippets</p>
          </div>
        </footer>
      </body>
    </html>
  );
}


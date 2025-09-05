import Link from "next/link";
import { ReactNode } from "react";

interface DemoLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
}

export default function DemoLayout({
  children,
  title,
  description,
}: DemoLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <nav className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link
                href="/"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 font-medium"
              >
                ← Back to Home
              </Link>
            </div>{" "}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              {title}
            </h1>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
              {description}
            </p>
          </div>

          {children}
        </div>
      </main>
    </div>
  );
}

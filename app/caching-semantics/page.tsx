import DemoLayout from "../components/DemoLayout";
import Link from "next/link";

// Static route configuration example
export const dynamic = "force-static"; // Static generation
// export const revalidate = 60; // ISR with 60-second revalidation

export default async function CachingSemantics() {
  const timestamp = new Date().toISOString();

  return (
    <DemoLayout
      title="Caching Semantics"
      description="Understanding Next.js 15's shift from cached to uncached defaults"
    >
      <div className="space-y-8">
        {/* Key Changes */}
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-yellow-800 dark:text-yellow-200 mb-3">
            🔄 Key Changes in Next.js 15
          </h2>
          <ul className="list-disc list-inside text-yellow-700 dark:text-yellow-300 space-y-2">
            <li>
              <strong>Fetch requests</strong>: Now uncached by default (was
              cached in Next.js 14)
            </li>
            <li>
              <strong>GET Route Handlers</strong>: Now uncached by default
            </li>
            <li>
              <strong>Client navigations</strong>: New staleTime configuration
              for router cache
            </li>
          </ul>
        </div>

        {/* Fetch Behavior Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Next.js 14 (Default: Cached)
            </h3>
            <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded text-sm overflow-x-auto">
              <code>{`// Cached by default
fetch('/api/data')

// Opt-out of caching
fetch('/api/data', { 
  cache: 'no-store' 
})`}</code>
            </pre>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Next.js 15 (Default: Uncached)
            </h3>
            <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded text-sm overflow-x-auto">
              <code>{`// Uncached by default
fetch('/api/data')

// Opt-in to caching
fetch('/api/data', { 
  cache: 'force-cache' 
})`}</code>
            </pre>
          </div>
        </div>

        {/* Static Route Configuration */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Static Route Configuration Options
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                  Route Segment Config
                </h4>
                <pre className="bg-gray-100 dark:bg-gray-700 p-3 rounded text-sm">
                  <code>{`// Force static generation
export const dynamic = 'force-static';

// Enable ISR
export const revalidate = 60;

// Dynamic rendering
export const dynamic = 'force-dynamic';`}</code>
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                  Cache Control
                </h4>
                <pre className="bg-gray-100 dark:bg-gray-700 p-3 rounded text-sm">
                  <code>{`// Opt-in to caching
fetch(url, { cache: 'force-cache' });

// Opt-out of caching
fetch(url, { cache: 'no-store' });

// Revalidate after time
fetch(url, { next: { revalidate: 60 } });`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Client Router Cache */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Client Router Cache Configuration
          </h3>

          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Configure how long client-side route cache stays fresh with the new{" "}
            <code>staleTime</code> setting:
          </p>

          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
            <pre className="text-sm">
              <code>{`// next.config.ts
export default {
  experimental: {
    staleTimes: {
      dynamic: 30, // 30 seconds for dynamic routes
      static: 180, // 3 minutes for static routes
    },
  },
};`}</code>
            </pre>
          </div>
        </div>

        {/* Current Page Info */}
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-3">
            Current Page Configuration
          </h3>
          <p className="text-green-700 dark:text-green-300">
            This page is configured with{" "}
            <code className="bg-green-100 dark:bg-green-800 px-2 py-1 rounded">
              dynamic = &apos;force-static&apos;
            </code>
          </p>
          <p className="text-sm text-green-600 dark:text-green-400 mt-2">
            Generated at: {timestamp}
          </p>
        </div>

        {/* Migration Tips */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-3">
            Migration Tips
          </h3>
          <ol className="list-decimal list-inside text-blue-700 dark:text-blue-300 space-y-2">
            <li>
              Review all fetch calls and explicitly add{" "}
              <code>cache: &apos;force-cache&apos;</code> where caching is
              desired
            </li>
            <li>Update GET Route Handlers to use explicit caching if needed</li>
            <li>
              Configure <code>staleTimes</code> in next.config.ts for optimal
              client-side caching
            </li>
            <li>
              Use route segment config for fine-grained control over static
              generation
            </li>
          </ol>
        </div>

        {/* Related Examples */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Related Examples
          </h3>
          <div className="space-y-2">
            <Link
              href="/caching-semantics/route-handlers"
              className="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
            >
              → GET Route Handlers Caching Example
            </Link>
          </div>
        </div>
      </div>
    </DemoLayout>
  );
}

import DemoLayout from "../components/DemoLayout";

// This page demonstrates static optimization
export const dynamic = "force-static";

export default function StaticIndicator() {
  const buildTime = new Date().toISOString();

  return (
    <DemoLayout
      title="Static Indicator for Optimization"
      description="Understanding Next.js 15's visual indicators for static routes during development"
    >
      <div className="space-y-8">
        {/* Static Indicator Explanation */}
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-green-800 dark:text-green-200 mb-3">
            🟢 Static Route Indicator
          </h2>
          <p className="text-green-700 dark:text-green-300 mb-4">
            In Next.js 15, you&apos;ll see visual indicators in development that
            show which routes are statically optimized:
          </p>
          <ul className="list-disc list-inside text-green-700 dark:text-green-300 space-y-2">
            <li>
              <strong>Green indicator</strong>: Static routes (pre-rendered at
              build time)
            </li>
            <li>
              <strong>Yellow indicator</strong>: Server-side rendered routes
            </li>
            <li>
              <strong>Red indicator</strong>: Client-side rendered routes
            </li>
          </ul>
        </div>

        {/* Current Page Status */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Current Page Configuration
          </h3>
          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
            <pre className="text-sm">
              <code>{`export const dynamic = 'force-static';`}</code>
            </pre>
          </div>
          <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded">
            <p className="text-green-800 dark:text-green-200">
              ✅ This page is statically generated and will show a green
              indicator in development
            </p>
            <p className="text-sm text-green-600 dark:text-green-400 mt-1">
              Generated at build time: {buildTime}
            </p>
          </div>
        </div>

        {/* Optimization Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Benefits of Static Routes
            </h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 text-sm">
              <li>Faster loading times</li>
              <li>Better SEO performance</li>
              <li>Reduced server load</li>
              <li>CDN cacheable</li>
              <li>Improved Core Web Vitals</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              When to Use Static Generation
            </h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 text-sm">
              <li>Marketing pages</li>
              <li>Blog posts</li>
              <li>E-commerce product listings</li>
              <li>Help and documentation</li>
              <li>Content that doesn&apos;t change frequently</li>
            </ul>
          </div>
        </div>

        {/* Route Configuration Options */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Route Configuration Options
          </h3>

          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                Static Generation
              </h4>
              <pre className="bg-gray-100 dark:bg-gray-700 p-3 rounded text-sm">
                <code>{`export const dynamic = 'force-static';`}</code>
              </pre>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                Forces the route to be statically generated at build time
              </p>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                Incremental Static Regeneration
              </h4>
              <pre className="bg-gray-100 dark:bg-gray-700 p-3 rounded text-sm">
                <code>{`export const revalidate = 60; // Revalidate every 60 seconds`}</code>
              </pre>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                Combines static generation with periodic updates
              </p>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                Dynamic Rendering
              </h4>
              <pre className="bg-gray-100 dark:bg-gray-700 p-3 rounded text-sm">
                <code>{`export const dynamic = 'force-dynamic';`}</code>
              </pre>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                Forces the route to be rendered on each request
              </p>
            </div>
          </div>
        </div>

        {/* Development Tips */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-3">
            Development Tips
          </h3>
          <ol className="list-decimal list-inside text-blue-700 dark:text-blue-300 space-y-2">
            <li>
              Look for the colored indicators in your terminal and browser dev
              tools during development
            </li>
            <li>
              Use static generation for pages that don&apos;t need real-time
              data
            </li>
            <li>Consider ISR for pages that need periodic updates</li>
            <li>
              Monitor your build output to see which routes are static vs
              dynamic
            </li>
            <li>Use the Next.js build analyzer to optimize your bundle</li>
          </ol>
        </div>

        {/* Performance Metrics */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Performance Impact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                ~50ms
              </div>
              <div className="text-sm text-green-700 dark:text-green-300">
                Static Route TTFB
              </div>
            </div>
            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded">
              <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
                ~200ms
              </div>
              <div className="text-sm text-yellow-700 dark:text-yellow-300">
                SSR Route TTFB
              </div>
            </div>
            <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded">
              <div className="text-2xl font-bold text-red-600 dark:text-red-400">
                ~500ms
              </div>
              <div className="text-sm text-red-700 dark:text-red-300">
                CSR Route TTFB
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-4 text-center">
            * Approximate values - actual performance may vary based on content
            and infrastructure
          </p>
        </div>
      </div>
    </DemoLayout>
  );
}

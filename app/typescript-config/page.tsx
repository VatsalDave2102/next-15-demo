import DemoLayout from "../components/DemoLayout";

export default function TypeScriptConfig() {
  return (
    <DemoLayout
      title="TypeScript Configuration (next.config.ts)"
      description="Using TypeScript for Next.js configuration in Next.js 15"
    >
      <div className="space-y-8">
        {/* Feature Overview */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-blue-800 dark:text-blue-200 mb-3">
            📝 TypeScript Configuration Support
          </h2>
          <p className="text-blue-700 dark:text-blue-300 mb-4">
            Next.js 15 now supports TypeScript configuration files (
            <code className="bg-blue-100 dark:bg-blue-800 px-2 py-1 rounded">
              next.config.ts
            </code>
            ) providing:
          </p>
          <ul className="list-disc list-inside text-blue-700 dark:text-blue-300 space-y-1">
            <li>Type safety for configuration</li>
            <li>IntelliSense and autocomplete</li>
            <li>Better development experience</li>
            <li>Compile-time error checking</li>
            <li>Import support for external modules</li>
          </ul>
        </div>

        {/* Migration Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Before: next.config.js
            </h3>
            <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded text-sm overflow-x-auto">
              <code>{`/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    staleTimes: {
      dynamic: 30,
      static: 180,
    },
  },
  // No type checking
  // No IntelliSense
  // Runtime errors only
};

module.exports = nextConfig;`}</code>
            </pre>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              After: next.config.ts
            </h3>
            <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded text-sm overflow-x-auto">
              <code>{`import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    staleTimes: {
      dynamic: 30,
      static: 180,
    },
  },
  // Full type checking
  // IntelliSense support
  // Compile-time errors
};

export default nextConfig;`}</code>
            </pre>
          </div>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Migration Tips
            </h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 text-sm">
              <li>
                Rename <code>next.config.js</code> to{" "}
                <code>next.config.ts</code>
              </li>
              <li>
                Add <code>import type NextConfig from &quot;next&quot;</code>
              </li>
              <li>
                Type your config object as <code>NextConfig</code>
              </li>
              <li>
                Replace <code>module.exports</code> with{" "}
                <code>export default</code>
              </li>
              <li>Use ES6 imports instead of require()</li>
              <li>Validate configuration with TypeScript compiler</li>
            </ul>
          </div>
        </div>

        {/* IDE Features */}
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-3">
            IDE Features You Get
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">
                IntelliSense Support
              </h4>
              <ul className="list-disc list-inside text-green-700 dark:text-green-300 space-y-1 text-sm">
                <li>Property name completion</li>
                <li>Value suggestions</li>
                <li>Documentation on hover</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">
                Error Detection
              </h4>
              <ul className="list-disc list-inside text-green-700 dark:text-green-300 space-y-1 text-sm">
                <li>Invalid property names</li>
                <li>Type mismatches</li>
                <li>Missing required fields</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </DemoLayout>
  );
}

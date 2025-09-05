import DemoLayout from "../components/DemoLayout";

export default function ServerLifecycle() {
  return (
    <DemoLayout
      title="Server Lifecycle Observability"
      description="Implementing instrumentation.js for server monitoring in Next.js 15"
    >
      <div className="space-y-8">
        {/* Feature Overview */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-blue-800 dark:text-blue-200 mb-3">
            📊 Instrumentation.js (Stable)
          </h2>
          <p className="text-blue-700 dark:text-blue-300 mb-4">
            Next.js 15 makes instrumentation.js stable, allowing you to observe
            and monitor your server lifecycle events.
          </p>
          <ul className="list-disc list-inside text-blue-700 dark:text-blue-300 space-y-1">
            <li>Server startup monitoring</li>
            <li>Request/response tracking</li>
            <li>Error monitoring and reporting</li>
            <li>Performance metrics collection</li>
            <li>APM tool integration</li>
          </ul>
        </div>

        {/* Implementation */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Implementation Example
          </h3>

          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                1. Create instrumentation.ts in your project root
              </h4>
              <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded text-sm overflow-x-auto">
                <code>{`// instrumentation.ts
export async function register() {
  console.log('🚀 Server instrumentation initialized');
  
  // Initialize monitoring tools
  if (process.env.NODE_ENV === 'production') {
    // Initialize APM tools like Sentry, New Relic, etc.
    console.log('📊 Production monitoring initialized');
  }

  // Set up custom metrics
  global.serverMetrics = {
    startTime: Date.now(),
    requestCount: 0,
    errorCount: 0,
  };

  // Global error handling
  process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection:', reason);
    global.serverMetrics.errorCount++;
  });
}`}</code>
              </pre>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                2. Enable in next.config.ts
              </h4>
              <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded text-sm overflow-x-auto">
                <code>{`// next.config.ts
export default {
  experimental: {
    instrumentationHook: true,
  },
};`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Common Use Cases
            </h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 text-sm">
              <li>Initialize Sentry for error tracking</li>
              <li>Set up New Relic APM monitoring</li>
              <li>Configure custom logging systems</li>
              <li>Initialize database connections</li>
              <li>Set up performance monitoring</li>
              <li>Configure custom metrics collection</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Benefits
            </h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 text-sm">
              <li>Early server lifecycle hooks</li>
              <li>Global error handling setup</li>
              <li>Performance monitoring setup</li>
              <li>Better observability in production</li>
              <li>Centralized configuration</li>
              <li>Framework-level integration</li>
            </ul>
          </div>
        </div>

        {/* Advanced Examples */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Advanced Monitoring Examples
          </h3>

          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                Sentry Integration
              </h4>
              <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded text-sm overflow-x-auto">
                <code>{`import * as Sentry from '@sentry/nextjs';

export async function register() {
  if (process.env.NODE_ENV === 'production') {
    Sentry.init({
      dsn: process.env.SENTRY_DSN,
      tracesSampleRate: 1.0,
    });
  }
}`}</code>
              </pre>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 dark-text-white mb-2">
                Custom Metrics Collection
              </h4>
              <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded text-sm overflow-x-auto">
                <code>{`export async function register() {
  // Initialize custom metrics
  const metrics = {
    requests: 0,
    errors: 0,
    responseTime: [],
  };

  // Export metrics endpoint
  global.getMetrics = () => metrics;
  
  // Set up periodic metric reporting
  setInterval(() => {
    console.log('📊 Metrics:', metrics);
  }, 60000); // Every minute
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Current Status */}
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-3">
            Current Implementation Status
          </h3>
          <p className="text-green-700 dark:text-green-300 mb-2">
            ✅ Instrumentation file has been created at{" "}
            <code className="bg-green-100 dark:bg-green-800 px-2 py-1 rounded">
              instrumentation.ts
            </code>
          </p>
          <p className="text-sm text-green-600 dark:text-green-400">
            Check your terminal/console for instrumentation logs when the server
            starts.
          </p>
        </div>

        {/* Configuration Steps */}
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-3">
            Next Steps
          </h3>
          <ol className="list-decimal list-inside text-yellow-700 dark:text-yellow-300 space-y-2">
            <li>Restart your development server to see instrumentation logs</li>
            <li>
              Add your preferred monitoring tools (Sentry, New Relic, etc.)
            </li>
            <li>Configure custom metrics based on your application needs</li>
            <li>
              Test error handling and monitoring in production environment
            </li>
          </ol>
        </div>
      </div>
    </DemoLayout>
  );
}

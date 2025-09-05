import DemoLayout from "../components/DemoLayout";
import { headers, cookies } from "next/headers";

// Simulated async data fetching
async function getServerData() {
  // This simulates an async operation
  await new Promise((resolve) => setTimeout(resolve, 100));
  return {
    timestamp: new Date().toISOString(),
  };
}

export default async function AsyncRequestAPIs() {
  // In Next.js 15, these APIs are now async (breaking change)
  const headersList = await headers();
  const cookieStore = await cookies();
  const serverData = await getServerData();

  const userAgent = headersList.get("user-agent") ?? "Not available";
  const allCookies = cookieStore.getAll();

  return (
    <DemoLayout
      title="Async Request APIs"
      description="Demonstrates the breaking changes in Next.js 15 where headers() and cookies() are now async"
    >
      <div className="space-y-8">
        {/* Breaking Change Explanation */}
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-red-800 dark:text-red-200 mb-3">
            🚨 Breaking Change
          </h2>
          <p className="text-red-700 dark:text-red-300 mb-4">
            In Next.js 15, the following APIs are now async and must be awaited:
          </p>
          <ul className="list-disc list-inside text-red-700 dark:text-red-300 space-y-1">
            <li>
              <code className="bg-red-100 dark:bg-red-800 px-2 py-1 rounded">
                headers()
              </code>
            </li>
            <li>
              <code className="bg-red-100 dark:bg-red-800 px-2 py-1 rounded">
                cookies()
              </code>
            </li>
            <li>
              <code className="bg-red-100 dark:bg-red-800 px-2 py-1 rounded">
                draftMode()
              </code>
            </li>
          </ul>
        </div>

        {/* Code Examples */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Before (Next.js 14) */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Before (Next.js 14)
            </h3>
            <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded text-sm overflow-x-auto">
              <code>{`// This was synchronous
const headersList = headers();
const cookieStore = cookies();`}</code>
            </pre>
          </div>

          {/* After (Next.js 15) */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              After (Next.js 15)
            </h3>
            <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded text-sm overflow-x-auto">
              <code>{`// Now must be awaited
const headersList = await headers();
const cookieStore = await cookies();`}</code>
            </pre>
          </div>
        </div>

        {/* Live Demo */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Live Demo - Async API Results
          </h3>

          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white">
                User Agent (from headers):
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 p-2 rounded">
                {userAgent}
              </p>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 dark:text-white">
                Cookies:
              </h4>
              <div className="text-sm text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 p-2 rounded">
                {allCookies.length > 0 ? (
                  allCookies.map((cookie, index) => (
                    <div key={index}>
                      {cookie.name}: {cookie.value}
                    </div>
                  ))
                ) : (
                  <div>No cookies found</div>
                )}
              </div>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 dark:text-white">
                Server Timestamp:
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 p-2 rounded">
                {serverData.timestamp}
              </p>
            </div>
          </div>
        </div>

        {/* Migration Guide */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-3">
            Migration Guide
          </h3>
          <ol className="list-decimal list-inside text-blue-700 dark:text-blue-300 space-y-2">
            <li>
              Add{" "}
              <code className="bg-blue-100 dark:bg-blue-800 px-2 py-1 rounded">
                async
              </code>{" "}
              to your component function
            </li>
            <li>
              Add{" "}
              <code className="bg-blue-100 dark:bg-blue-800 px-2 py-1 rounded">
                await
              </code>{" "}
              before <code>headers()</code> and <code>cookies()</code> calls
            </li>
            <li>
              Update any code that depends on these APIs to handle the async
              nature
            </li>
            <li>
              Test your application thoroughly to ensure no synchronous
              assumptions break
            </li>
          </ol>
        </div>
      </div>
    </DemoLayout>
  );
}

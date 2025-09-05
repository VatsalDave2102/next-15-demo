import DemoLayout from "../../components/DemoLayout";

async function fetchRouteHandlerData() {
  try {
    const response = await fetch(
      `${
        process.env.VERCEL_URL ?? "http://localhost:3000"
      }/api/caching-semantics`,
      {
        cache: "no-store", // Demonstrate uncached behavior
      }
    );
    return await response.json();
  } catch (error) {
    console.error("Error fetching route handler data:", error);
    return {
      error: "Failed to fetch route handler data",
      timestamp: new Date().toISOString(),
    };
  }
}

export default async function RouteHandlersDemo() {
  const data = await fetchRouteHandlerData();

  return (
    <DemoLayout
      title="GET Route Handlers Caching"
      description="Demonstrating uncached GET Route Handlers in Next.js 15"
    >
      <div className="space-y-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Route Handler Response
          </h3>
          <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded text-sm overflow-x-auto">
            <code>{JSON.stringify(data, null, 2)}</code>
          </pre>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-4">
            Refresh the page to see the timestamp change (demonstrating uncached
            behavior)
          </p>
        </div>
      </div>
    </DemoLayout>
  );
}

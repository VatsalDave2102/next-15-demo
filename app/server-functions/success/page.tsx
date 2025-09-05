import DemoLayout from "../../components/DemoLayout";
import Link from "next/link";

export default function ServerFunctionSuccess() {
  return (
    <DemoLayout
      title="Server Function Success"
      description="User updated successfully using server function"
    >
      <div className="text-center space-y-6">
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-8">
          <div className="text-6xl mb-4">🎯</div>
          <h2 className="text-2xl font-bold text-green-800 dark:text-green-200 mb-2">
            Server Function Executed Successfully!
          </h2>
          <p className="text-green-700 dark:text-green-300">
            The user data was successfully updated using a server function
            without needing a separate API route.
          </p>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">
            Server Function Benefits Demonstrated
          </h3>
          <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-1">
            <li>✅ No separate API route needed</li>
            <li>✅ Type-safe server-client communication</li>
            <li>✅ Automatic form data handling</li>
            <li>✅ Direct server-side processing</li>
          </ul>
        </div>

        <Link
          href="/server-functions"
          className="inline-block bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Try More Server Functions
        </Link>
      </div>
    </DemoLayout>
  );
}

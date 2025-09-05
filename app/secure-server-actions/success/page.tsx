import DemoLayout from "../../components/DemoLayout";
import Link from "next/link";

export default function SecureActionSuccess() {
  return (
    <DemoLayout
      title="Secure Action Success"
      description="User created successfully using secure server action"
    >
      <div className="text-center space-y-6">
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-8">
          <div className="text-6xl mb-4">🔒✅</div>
          <h2 className="text-2xl font-bold text-green-800 dark:text-green-200 mb-2">
            User Created Securely!
          </h2>
          <p className="text-green-700 dark:text-green-300">
            The user was successfully created using a secure server action with
            unguessable endpoints and enhanced security features.
          </p>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">
            Security Features Applied
          </h3>
          <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-1">
            <li>✅ Unguessable action endpoint</li>
            <li>✅ Input validation performed</li>
            <li>✅ CSRF protection enabled</li>
            <li>✅ Secure data processing</li>
          </ul>
        </div>

        <Link
          href="/secure-server-actions"
          className="inline-block bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
        >
          Try Another Secure Action
        </Link>
      </div>
    </DemoLayout>
  );
}

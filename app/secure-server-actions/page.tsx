import DemoLayout from "../components/DemoLayout";
import { redirect } from "next/navigation";

// Example of a secure server action with unguessable endpoint
async function secureCreateUser(formData: FormData) {
  "use server";

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;

  // Input validation
  if (!name || !email) {
    throw new Error("Name and email are required");
  }

  if (!email.includes("@")) {
    throw new Error("Invalid email format");
  }

  // Simulate secure processing
  console.log("Securely creating user:", { name, email });

  // In a real app, you'd save to database here
  await new Promise((resolve) => setTimeout(resolve, 500));

  redirect("/secure-server-actions/success");
}

// Example of an unused action that should be removed
async function unusedServerAction() {
  "use server";
  // This action is never used and should be removed for security
  console.log("This action should be removed");
}

export default function SecureServerActions() {
  return (
    <DemoLayout
      title="Secure Server Actions"
      description="Enhanced security features for Server Actions in Next.js 15"
    >
      <div className="space-y-8">
        {/* Security Enhancements */}
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-red-800 dark:text-red-200 mb-3">
            🔒 Security Enhancements in Next.js 15
          </h2>
          <ul className="list-disc list-inside text-red-700 dark:text-red-300 space-y-2">
            <li>
              <strong>Unguessable Endpoints</strong>: Server actions now use
              cryptographically secure, unguessable URLs
            </li>
            <li>
              <strong>Unused Action Detection</strong>: Build-time warnings for
              unused server actions
            </li>
            <li>
              <strong>Enhanced CSRF Protection</strong>: Improved protection
              against cross-site request forgery
            </li>
            <li>
              <strong>Rate Limiting</strong>: Built-in protection against abuse
            </li>
          </ul>
        </div>

        {/* Before vs After */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              ⚠️ Next.js 14 (Predictable URLs)
            </h3>
            <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded text-sm overflow-x-auto">
              <code>{`// Predictable endpoint
POST /_next/static/actions/123abc

// Security concerns:
// - Guessable action IDs
// - Potential enumeration attacks
// - Less CSRF protection`}</code>
            </pre>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              ✅ Next.js 15 (Unguessable URLs)
            </h3>
            <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded text-sm overflow-x-auto">
              <code>{`// Cryptographically secure endpoint
POST /_next/static/actions/a1b2c3d4e5f6...

// Security improvements:
// - Unguessable action URLs
// - Protection against enumeration
// - Enhanced CSRF protection`}</code>
            </pre>
          </div>
        </div>

        {/* Secure Implementation Example */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Secure Server Action Implementation
          </h3>

          <div className="space-y-4">
            <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded text-sm overflow-x-auto">
              <code>{`async function secureCreateUser(formData: FormData) {
  "use server";
  
  // 1. Input validation
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  
  if (!name || !email) {
    throw new Error("Name and email are required");
  }
  
  if (!email.includes("@")) {
    throw new Error("Invalid email format");
  }
  
  // 2. Authentication check (if needed)
  // const session = await getSession();
  // if (!session) throw new Error("Unauthorized");
  
  // 3. Authorization check (if needed)
  // if (!canCreateUser(session.user)) {
  //   throw new Error("Forbidden");
  // }
  
  // 4. Rate limiting (implement as needed)
  // await checkRateLimit(session.user.id);
  
  // 5. Secure processing
  console.log("Securely creating user:", { name, email });
  
  // 6. Redirect or return result
  redirect("/success");
}`}</code>
            </pre>
          </div>
        </div>

        {/* Live Demo */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Live Demo - Secure User Creation
          </h3>

          <form action={secureCreateUser} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="Enter your email"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
            >
              Create User Securely
            </button>
          </form>

          <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded">
            <p className="text-sm text-green-700 dark:text-green-300">
              🔒 This form uses a server action with unguessable endpoints and
              enhanced security features.
            </p>
          </div>
        </div>

        {/* Best Practices */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Security Best Practices
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-3">
                Input Validation
              </h4>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                <li>Always validate form inputs</li>
                <li>Use schema validation libraries (Zod, Yup)</li>
                <li>Sanitize user input</li>
                <li>Check data types and formats</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-3">
                Authentication & Authorization
              </h4>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                <li>Verify user authentication</li>
                <li>Check user permissions</li>
                <li>Use session management</li>
                <li>Implement role-based access</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-3">
                Rate Limiting
              </h4>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                <li>Implement request rate limiting</li>
                <li>Use IP-based restrictions</li>
                <li>Monitor for abuse patterns</li>
                <li>Implement exponential backoff</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-3">
                Code Hygiene
              </h4>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                <li>Remove unused server actions</li>
                <li>Keep actions minimal and focused</li>
                <li>Use TypeScript for type safety</li>
                <li>Regular security audits</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Migration Guide */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-3">
            Migration to Secure Actions
          </h3>
          <ol className="list-decimal list-inside text-blue-700 dark:text-blue-300 space-y-2">
            <li>Audit existing server actions for security vulnerabilities</li>
            <li>Add input validation to all server actions</li>
            <li>Remove unused server actions identified by build warnings</li>
            <li>Implement authentication/authorization checks where needed</li>
            <li>Add rate limiting for sensitive operations</li>
            <li>Test actions with security scanning tools</li>
          </ol>
        </div>
      </div>
    </DemoLayout>
  );
}

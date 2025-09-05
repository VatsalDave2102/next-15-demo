import DemoLayout from "../components/DemoLayout";
import { redirect } from "next/navigation";

// Server function for data fetching
async function getUserData(userId: string) {
  "use server";

  // Simulate database query
  await new Promise((resolve) => setTimeout(resolve, 500));

  return {
    id: userId,
    name: "John Doe",
    email: "john@example.com",
    createdAt: new Date().toISOString(),
  };
}

// Server function for form processing
async function processUserUpdate(formData: FormData) {
  "use server";

  const userId = formData.get("userId") as string;
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;

  // Simulate database update
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log("Updated user:", { userId, name, email });

  redirect("/server-functions/success");
}

// Server function for complex business logic
async function calculateShippingCost(weight: number, distance: number) {
  "use server";

  // Complex server-side calculation
  const baseRate = 5.0;
  const weightMultiplier = 0.5;
  const distanceMultiplier = 0.1;

  const cost =
    baseRate + weight * weightMultiplier + distance * distanceMultiplier;

  return {
    cost: parseFloat(cost.toFixed(2)),
    breakdown: {
      base: baseRate,
      weight: weight * weightMultiplier,
      distance: distance * distanceMultiplier,
    },
    currency: "USD",
  };
}

export default async function ServerFunctions() {
  // Example of calling server function for initial data
  const userData = await getUserData("123");

  return (
    <DemoLayout
      title="Server Functions for Efficient Interactions"
      description="Demonstrating server-side functions for seamless client-server communication"
    >
      <div className="space-y-8">
        {/* Feature Overview */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-blue-800 dark:text-blue-200 mb-3">
            🔧 Server Functions in Next.js 15
          </h2>
          <p className="text-blue-700 dark:text-blue-300 mb-4">
            Server Functions enable you to define server-side logic that can be
            directly invoked from client components:
          </p>
          <ul className="list-disc list-inside text-blue-700 dark:text-blue-300 space-y-1">
            <li>Direct server-client integration without API routes</li>
            <li>Type-safe function calls</li>
            <li>Automatic serialization/deserialization</li>
            <li>Enhanced security and performance</li>
            <li>Seamless form actions integration</li>
          </ul>
        </div>

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

        {/* Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Traditional API Routes
            </h3>
            <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded text-sm overflow-x-auto">
              <code>{`// api/users/route.ts
export async function POST(request) {
  const data = await request.json();
  // Process data
  return Response.json(result);
}

// Client component
const response = await fetch('/api/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
});
const result = await response.json();`}</code>
            </pre>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Server Functions
            </h3>
            <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded text-sm overflow-x-auto">
              <code>{`// Server function
async function processUser(data) {
  "use server";
  // Process data directly
  return result;
}

// Client component
<form action={processUser}>
  <input name="email" />
  <button type="submit">Submit</button>
</form>

// Or direct call
const result = await processUser(data);`}</code>
            </pre>
          </div>
        </div>

        {/* Live Demo - User Data Display */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Demo 1: Server Function Data Fetching
          </h3>

          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded mb-4">
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">
              Current User Data
            </h4>
            <div className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <div>
                <strong>ID:</strong> {userData.id}
              </div>
              <div>
                <strong>Name:</strong> {userData.name}
              </div>
              <div>
                <strong>Email:</strong> {userData.email}
              </div>
              <div>
                <strong>Created:</strong> {userData.createdAt}
              </div>
            </div>
          </div>

          <p className="text-sm text-blue-600 dark:text-blue-400">
            This data was fetched using a server function during server-side
            rendering.
          </p>
        </div>

        {/* Live Demo - Form with Server Function */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Demo 2: Form Processing with Server Function
          </h3>

          <form action={processUserUpdate} className="space-y-4">
            <input type="hidden" name="userId" value="123" />

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
                defaultValue={userData.name}
                required
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
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
                defaultValue={userData.email}
                required
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Update User (Server Function)
            </button>
          </form>
        </div>

        {/* Client Component Demo */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Demo 3: Interactive Server Function Call
          </h3>

          <ShippingCalculator calculateShippingCost={calculateShippingCost} />
        </div>

        {/* Implementation Examples */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Implementation Examples
          </h3>

          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                1. Basic Server Function
              </h4>
              <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded text-sm overflow-x-auto">
                <code>{`async function serverFunction(data) {
  "use server";
  
  // Server-side logic
  const result = await processData(data);
  
  // Direct return - no need for Response.json()
  return result;
}`}</code>
              </pre>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                2. Server Function with Validation
              </h4>
              <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded text-sm overflow-x-auto">
                <code>{`import { z } from 'zod';

const schema = z.object({
  email: z.string().email(),
  name: z.string().min(1),
});

async function validateAndProcess(formData) {
  "use server";
  
  const data = schema.parse({
    email: formData.get('email'),
    name: formData.get('name'),
  });
  
  // Process validated data
  return await saveUser(data);
}`}</code>
              </pre>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                3. Server Function with Authentication
              </h4>
              <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded text-sm overflow-x-auto">
                <code>{`async function authenticatedAction(data) {
  "use server";
  
  const session = await getServerSession();
  if (!session) {
    throw new Error('Unauthorized');
  }
  
  // Authenticated logic
  return await processAuthenticatedRequest(data, session.user);
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Benefits
            </h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 text-sm">
              <li>No need for separate API routes</li>
              <li>Type-safe client-server communication</li>
              <li>Automatic serialization handling</li>
              <li>Better performance and security</li>
              <li>Simplified codebase</li>
              <li>Enhanced developer experience</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Use Cases
            </h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 text-sm">
              <li>Form processing and validation</li>
              <li>Database operations</li>
              <li>File uploads and processing</li>
              <li>Authentication workflows</li>
              <li>Business logic calculations</li>
              <li>Third-party API integrations</li>
            </ul>
          </div>
        </div>
      </div>
    </DemoLayout>
  );
}

// Client component for interactive server function demo
function ShippingCalculator({
  calculateShippingCost,
}: Readonly<{
  calculateShippingCost: (
    weight: number,
    distance: number
  ) => Promise<{
    cost: number;
    breakdown: {
      base: number;
      weight: number;
      distance: number;
    };
    currency: string;
  }>;
}>) {
  return (
    <div className="space-y-4">
      <p className="text-gray-600 dark:text-gray-300 text-sm">
        This interactive calculator uses server functions for complex
        calculations:
      </p>

      <form
        action={async (formData) => {
          "use server";
          const weight = parseFloat(formData.get("weight") as string);
          const distance = parseFloat(formData.get("distance") as string);

          const result = await calculateShippingCost(weight, distance);
          console.log("Shipping calculation:", result);
        }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <div>
          <label
            htmlFor="weight"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Weight (lbs)
          </label>
          <input
            type="number"
            id="weight"
            name="weight"
            min="0"
            step="0.1"
            defaultValue="5"
            required
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div>
          <label
            htmlFor="distance"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Distance (miles)
          </label>
          <input
            type="number"
            id="distance"
            name="distance"
            min="0"
            defaultValue="100"
            required
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div className="flex items-end">
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
          >
            Calculate Shipping
          </button>
        </div>
      </form>

      <div className="text-sm text-gray-500 dark:text-gray-400">
        💡 Check the browser console to see the server function calculation
        results!
      </div>
    </div>
  );
}

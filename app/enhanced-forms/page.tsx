import DemoLayout from "../components/DemoLayout";
import Form from "next/form";
import { redirect } from "next/navigation";

// Server action for form handling
async function handleFormSubmission(formData: FormData) {
  "use server";

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  // Simulate processing time
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log("Form submitted:", { name, email, message });

  // Redirect after successful submission
  redirect("/enhanced-forms/success");
}

export default function EnhancedForms() {
  return (
    <DemoLayout
      title="Enhanced Forms with next/form"
      description="Demonstrating Next.js 15's improved form handling with built-in client-side navigation"
    >
      <div className="space-y-8">
        {/* Feature Overview */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-blue-800 dark:text-blue-200 mb-3">
            🚀 Enhanced Forms with next/form
          </h2>
          <p className="text-blue-700 dark:text-blue-300 mb-4">
            Next.js 15 introduces the{" "}
            <code className="bg-blue-100 dark:bg-blue-800 px-2 py-1 rounded">
              next/form
            </code>{" "}
            component that enhances HTML forms with:
          </p>
          <ul className="list-disc list-inside text-blue-700 dark:text-blue-300 space-y-1">
            <li>Built-in client-side navigation</li>
            <li>Progressive enhancement</li>
            <li>Seamless server action integration</li>
          </ul>
        </div>

        {/* Live Demo Form */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Live Demo - Contact Form
          </h3>

          <Form action={handleFormSubmission} className="space-y-6">
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

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="Enter your message"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Submit Form
            </button>
          </Form>

          <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded">
            <p className="text-sm text-green-700 dark:text-green-300">
              💡 This form uses server action
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Live Demo - Search Form
          </h3>

          <Form action={"/enhanced-forms/success"} className="space-y-6">
            <div>
              <label
                htmlFor="search"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Search
              </label>
              <input
                type="text"
                id="search"
                name="search"
                required
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="Search here"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Search
            </button>
          </Form>

          <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded">
            <p className="text-sm text-green-700 dark:text-green-300">
              💡 This form uses client-side navigation and will redirect to a
              success page without a full page reload!
            </p>
          </div>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Benefits
            </h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 text-sm">
              <li>Faster form submissions</li>
              <li>Better user experience</li>
              <li>No page refreshes</li>
              <li>Built-in loading states</li>
              <li>Progressive enhancement</li>
              <li>Server action integration</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Use Cases
            </h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 text-sm">
              <li>Contact forms</li>
              <li>User registration</li>
              <li>Search functionality</li>
              <li>Data entry forms</li>
              <li>Newsletter subscriptions</li>
              <li>Feedback forms</li>
            </ul>
          </div>
        </div>

        {/* Implementation Guide */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Implementation Guide
          </h3>

          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                1. Import the Form component
              </h4>
              <pre className="bg-gray-100 dark:bg-gray-700 p-3 rounded text-sm">
                <code>{`import { Form } from "next/form";`}</code>
              </pre>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                2. Create a server action
              </h4>
              <pre className="bg-gray-100 dark:bg-gray-700 p-3 rounded text-sm">
                <code>{`async function handleSubmit(formData: FormData) {
  "use server";
  
  const email = formData.get("email");
  // Process form data
  
  redirect("/success");
}`}</code>
              </pre>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                3. Use the Form component
              </h4>
              <pre className="bg-gray-100 dark:bg-gray-700 p-3 rounded text-sm">
                <code>{`<Form action={handleSubmit}>
  <input name="email" type="email" required />
  <button type="submit">Submit</button>
</Form>`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </DemoLayout>
  );
}

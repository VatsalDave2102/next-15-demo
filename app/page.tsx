import Link from "next/link";

export default function Home() {
  const features = [
    {
      name: "Async Request APIs",
      href: "/async-request-apis",
      description: "Breaking changes and adaptations",
    },
    {
      name: "Caching Semantics",
      href: "/caching-semantics",
      description: "New caching behavior and configuration",
    },
    // {
    //   name: "Static Indicator",
    //   href: "/static-indicator",
    //   description: "Visual optimization indicators",
    // },
    {
      name: "Server Lifecycle",
      href: "/server-lifecycle",
      description: "Instrumentation.js observability",
    },
    {
      name: "Enhanced Forms",
      href: "/enhanced-forms",
      description: "next/form improvements",
    },
    {
      name: "TypeScript Config",
      href: "/typescript-config",
      description: "next.config.ts usage",
    },
    // {
    //   name: "Secure Server Actions",
    //   href: "/secure-server-actions",
    //   description: "Enhanced security features",
    // },
    {
      name: "Server Functions",
      href: "/server-functions",
      description: "Server-client interactions",
    },
    {
      name: "Enhanced Suspense",
      href: "/enhanced-suspense",
      description: "Improved data fetching",
    },
  ];

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Next.js 15 Features POC
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Comprehensive demonstration of Next.js 15 features and breaking
            changes
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Link
              key={feature.href}
              href={feature.href}
              className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {feature.description}
              </p>
            </Link>
          ))}
        </div>

        <footer className="mt-12 text-center">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              This POC demonstrates all major Next.js 15 features with practical
              examples
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

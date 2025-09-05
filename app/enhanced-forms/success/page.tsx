import DemoLayout from "../../components/DemoLayout";
import Link from "next/link";

export default function FormSuccess() {
  return (
    <DemoLayout
      title="Form Submission Success"
      description="Your form was successfully submitted using next/form"
    >
      <div className="text-center space-y-6">
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-8">
          <div className="text-6xl mb-4">✅</div>
          <h2 className="text-2xl font-bold text-green-800 dark:text-green-200 mb-2">
            Success!
          </h2>
          <p className="text-green-700 dark:text-green-300">
            Your form was successfully submitted using the enhanced next/form
            component with client-side navigation.
          </p>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">
            Notice: No Page Refresh!
          </h3>
          <p className="text-blue-700 dark:text-blue-300 text-sm">
            This redirect happened without a full page reload, demonstrating the
            enhanced client-side navigation capabilities of next/form.
          </p>
        </div>

        <Link
          href="/enhanced-forms"
          className="inline-block bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Try Another Form Submission
        </Link>
      </div>
    </DemoLayout>
  );
}

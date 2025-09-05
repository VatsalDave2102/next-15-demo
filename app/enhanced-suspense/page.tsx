import DemoLayout from "../components/DemoLayout";
import { Suspense } from "react";

// Simulated async data fetching components
async function UserProfile() {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return (
    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
      <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
        User Profile
      </h3>
      <div className="space-y-2 text-sm text-blue-700 dark:text-blue-300">
        <div>
          <strong>Name:</strong> John Doe
        </div>
        <div>
          <strong>Email:</strong> john@example.com
        </div>
        <div>
          <strong>Role:</strong> Developer
        </div>
      </div>
    </div>
  );
}

async function RecentPosts() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const posts = [
    { id: 1, title: "Getting Started with Next.js 15", date: "2024-01-15" },
    { id: 2, title: "React 19 Features Overview", date: "2024-01-10" },
    { id: 3, title: "Server Components Deep Dive", date: "2024-01-05" },
  ];

  return (
    <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
      <h3 className="font-semibold text-green-800 dark:text-green-200 mb-3">
        Recent Posts
      </h3>
      <div className="space-y-2">
        {posts.map((post) => (
          <div key={post.id} className="text-sm">
            <div className="font-medium text-green-800 dark:text-green-200">
              {post.title}
            </div>
            <div className="text-green-600 dark:text-green-400">
              {post.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

async function ActivityFeed() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const activities = [
    "Commented on 'React Best Practices'",
    "Liked 'Next.js Tutorial'",
    "Shared 'TypeScript Tips'",
    "Posted 'New Project Update'",
  ];

  return (
    <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
      <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-3">
        Activity Feed
      </h3>
      <div className="space-y-2">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="text-sm text-purple-700 dark:text-purple-300"
          >
            • {activity}
          </div>
        ))}
      </div>
    </div>
  );
}

// Loading components
function ProfileSkeleton() {
  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg animate-pulse">
      <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
      <div className="space-y-2">
        <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
        <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
        <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-2/3"></div>
      </div>
    </div>
  );
}

function PostsSkeleton() {
  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg animate-pulse">
      <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mb-3"></div>
      <div className="space-y-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="space-y-1">
            <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
            <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-1/3"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ActivitySkeleton() {
  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg animate-pulse">
      <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mb-3"></div>
      <div className="space-y-2">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-full"
          ></div>
        ))}
      </div>
    </div>
  );
}

export default function EnhancedSuspense() {
  return (
    <DemoLayout
      title="Enhanced Suspense Features"
      description="Demonstrating improved data fetching with React 19 Suspense in Next.js 15"
    >
      <div className="space-y-8">
        {/* Feature Overview */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-blue-800 dark:text-blue-200 mb-3">
            🔄 Enhanced Suspense in React 19
          </h2>
          <p className="text-blue-700 dark:text-blue-300 mb-4">
            Next.js 15 with React 19 brings significant improvements to
            Suspense:
          </p>
          <ul className="list-disc list-inside text-blue-700 dark:text-blue-300 space-y-1">
            <li>
              <strong>Pre-warming</strong>: Better performance for suspended
              trees
            </li>
            <li>
              <strong>Streaming Suspense</strong>: Progressive content loading
            </li>
            <li>
              <strong>Nested Suspense</strong>: Granular loading states
            </li>
            <li>
              <strong>Concurrent Rendering</strong>: Non-blocking UI updates
            </li>
            <li>
              <strong>Better Error Boundaries</strong>: Enhanced error handling
            </li>
          </ul>
        </div>

        {/* Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Traditional Loading
            </h3>
            <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded text-sm overflow-x-auto">
              <code>{`const [loading, setLoading] = useState(true);
const [data, setData] = useState(null);

useEffect(() => {
  fetchData()
    .then(setData)
    .finally(() => setLoading(false));
}, []);

if (loading) return <Spinner />;
return <DataComponent data={data} />;`}</code>
            </pre>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Suspense-based Loading
            </h3>
            <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded text-sm overflow-x-auto">
              <code>{`<Suspense fallback={<Skeleton />}>
  <AsyncDataComponent />
</Suspense>

// AsyncDataComponent
async function AsyncDataComponent() {
  const data = await fetchData();
  return <DataDisplay data={data} />;
}`}</code>
            </pre>
          </div>
        </div>

        {/* Live Demo */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Live Demo - Streaming Suspense
          </h3>

          <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
            Watch as different sections load progressively without blocking each
            other. Each component has different loading times to demonstrate
            streaming behavior:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* User Profile - loads in 1.5s */}
            <Suspense fallback={<ProfileSkeleton />}>
              <UserProfile />
            </Suspense>

            {/* Recent Posts - loads in 2s */}
            <Suspense fallback={<PostsSkeleton />}>
              <RecentPosts />
            </Suspense>

            {/* Activity Feed - loads in 3s */}
            <Suspense fallback={<ActivitySkeleton />}>
              <ActivityFeed />
            </Suspense>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded">
            <p className="text-sm text-yellow-700 dark:text-yellow-300">
              💡 Notice how each section loads independently without blocking
              the others!
            </p>
          </div>
        </div>

        {/* Nested Suspense Example */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Nested Suspense Boundaries
          </h3>

          <div className="space-y-4">
            <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded text-sm overflow-x-auto">
              <code>{`<Suspense fallback={<PageSkeleton />}>
  <PageHeader />
  
  <Suspense fallback={<ContentSkeleton />}>
    <MainContent />
    
    <Suspense fallback={<SidebarSkeleton />}>
      <Sidebar />
    </Suspense>
  </Suspense>
  
  <PageFooter />
</Suspense>`}</code>
            </pre>

            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded">
              <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">
                Benefits of Nested Suspense:
              </h4>
              <ul className="list-disc list-inside text-green-700 dark:text-green-300 space-y-1 text-sm">
                <li>Granular loading states for different parts of the UI</li>
                <li>Better perceived performance</li>
                <li>
                  Users can interact with loaded content while other parts are
                  still loading
                </li>
                <li>More responsive user experience</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Implementation Patterns */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Implementation Patterns
          </h3>

          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                1. Page-level Suspense
              </h4>
              <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded text-sm overflow-x-auto">
                <code>{`export default function Page() {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <AsyncPageContent />
    </Suspense>
  );
}

async function AsyncPageContent() {
  const data = await fetchPageData();
  return <PageContent data={data} />;
}`}</code>
              </pre>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                2. Component-level Suspense
              </h4>
              <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded text-sm overflow-x-auto">
                <code>{`function Dashboard() {
  return (
    <div className="dashboard">
      <Suspense fallback={<ChartSkeleton />}>
        <AnalyticsChart />
      </Suspense>
      
      <Suspense fallback={<TableSkeleton />}>
        <DataTable />
      </Suspense>
    </div>
  );
}`}</code>
              </pre>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                3. Error Boundaries with Suspense
              </h4>
              <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded text-sm overflow-x-auto">
                <code>{`<ErrorBoundary fallback={<ErrorMessage />}>
  <Suspense fallback={<LoadingSkeleton />}>
    <AsyncComponent />
  </Suspense>
</ErrorBoundary>`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Best Practices */}
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-3">
            Best Practices for Enhanced Suspense
          </h3>
          <ol className="list-decimal list-inside text-green-700 dark:text-green-300 space-y-2">
            <li>
              Use meaningful loading skeletons that match your content structure
            </li>
            <li>
              Implement nested Suspense boundaries for granular loading states
            </li>
            <li>
              Combine Suspense with Error Boundaries for robust error handling
            </li>
            <li>
              Prioritize critical content with higher-level Suspense boundaries
            </li>
            <li>Use streaming for progressive content delivery</li>
            <li>Test your Suspense boundaries with slow network conditions</li>
            <li>
              Consider using React.lazy() for code-splitting with Suspense
            </li>
          </ol>
        </div>
      </div>
    </DemoLayout>
  );
}

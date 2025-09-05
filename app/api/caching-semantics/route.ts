// Example of GET Route Handler caching in Next.js 15
export async function GET() {
  const timestamp = new Date().toISOString();

  return Response.json({
    message: "This is uncached by default in Next.js 15",
    timestamp,
    cacheStatus: "uncached",
  });
}

// To enable caching, you need to explicitly configure it:
// export const dynamic = 'force-static';
// export const revalidate = 60;

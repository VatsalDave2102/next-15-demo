# Next.js 15 Features POC

A comprehensive demonstration of all major Next.js 15 features with practical examples and explanations.

## 🚀 Features Covered

### 1. Async Request APIs (Breaking Change)
- **Location**: `/async-request-apis`
- **Demonstrates**: The breaking change where `headers()`, `cookies()`, and `draftMode()` are now async
- **Key Changes**: Must use `await` with these APIs
- **Example**: Server-side header and cookie access with proper async handling

### 2. Caching Semantics
- **Location**: `/caching-semantics`
- **Demonstrates**: Shift from cached to uncached defaults for fetch requests and GET Route Handlers
- **Key Changes**: 
  - Fetch requests are now uncached by default
  - Must explicitly opt-in to caching with `cache: 'force-cache'`
  - New `staleTime` configuration for client router cache
- **Examples**: Route handlers, ISR configuration, cache control

### 3. Server Lifecycle Observability
- **Location**: `/server-lifecycle`
- **File**: `instrumentation.ts` (root level)
- **Demonstrates**: Stable instrumentation.js for server monitoring
- **Features**:
  - Server startup hooks
  - Error monitoring setup
  - Custom metrics collection
  - APM tool integration points

### 4. Enhanced Forms with next/form
- **Location**: `/enhanced-forms`
- **Demonstrates**: Improved HTML forms with client-side navigation
- **Key Features**:
  - Built-in client-side navigation
  - Progressive enhancement
  - Seamless form interactions
  - Server action integration
- **Example**: Contact form with success page redirect

### 5. TypeScript Configuration
- **Location**: `/typescript-config`
- **File**: `next.config.ts`
- **Demonstrates**: TypeScript support for Next.js configuration
- **Benefits**:
  - Type safety for configuration
  - IntelliSense support
  - Compile-time error checking
  - ES6 import/export syntax

### 6. Secure Server Actions
- **Location**: `/secure-server-actions`
- **Demonstrates**: Enhanced security features for Server Actions
- **Key Improvements**:
  - Unguessable action endpoints
  - Enhanced CSRF protection
  - Input validation examples
  - Security best practices
- **Example**: Secure user creation form

### 7. Optimized Hydration
- **Location**: `/optimized-hydration`
- **Demonstrates**: React 19 enhanced hydration features
- **Key Features**:
  - Partial hydration for specific components
  - Streaming Suspense for progressive loading
  - Priority-based component hydration
  - Better performance metrics
- **Examples**: Interactive vs static components, streaming content

### 8. Server Functions
- **Location**: `/server-functions`
- **Demonstrates**: Efficient server-client interactions without API routes
- **Key Features**:
  - Direct server function calls from client
  - Type-safe communication
  - Automatic serialization
  - Form action integration
- **Examples**: User data fetching, form processing, shipping calculator

### 9. Enhanced Suspense Features
- **Location**: `/enhanced-suspense`
- **Demonstrates**: Improved data fetching with React 19 Suspense
- **Key Features**:
  - Pre-warming for suspended trees
  - Streaming Suspense for progressive loading
  - Nested Suspense boundaries
  - Better error handling
- **Examples**: Progressive dashboard loading, skeleton screens

## 🛠️ Setup and Installation

1. **Clone or navigate to the project**:
   ```bash
   cd /home/vatsal/Desktop/next-15
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Visit [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
/home/vatsal/Desktop/next-15/
├── app/
│   ├── page.tsx                 # Main navigation page
│   ├── layout.tsx               # Root layout
│   ├── components/
│   │   ├── DemoLayout.tsx       # Shared demo layout
│   ├── async-request-apis/      # Feature 1
│   ├── caching-semantics/       # Feature 2
│   ├── static-indicator/        # Feature 3
│   ├── server-lifecycle/        # Feature 4
│   ├── enhanced-forms/          # Feature 5
│   ├── typescript-config/       # Feature 6
│   ├── secure-server-actions/   # Feature 7
│   ├── server-functions/        # Feature 8
│   └── enhanced-suspense/       # Feature 9
├── instrumentation.ts           # Server lifecycle monitoring
├── next.config.ts              # TypeScript configuration
└── package.json                # Dependencies and scripts
```

## 🔧 Configuration Files

### next.config.ts
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    staleTimes: {
      dynamic: 30, // 30 seconds for dynamic routes
      static: 180, // 3 minutes for static routes
    },
  },
};

export default nextConfig;
```

## 🚨 Breaking Changes from Next.js 14

1. **Async Request APIs**: `headers()`, `cookies()`, and `draftMode()` are now async
2. **Caching Defaults**: Fetch requests and GET Route Handlers are uncached by default
3. **Form Handling**: Enhanced with `next/form` component for better UX

## 🎯 Testing Each Feature

1. **Start with the home page** to see the feature navigation
2. **Click each feature card** to explore detailed implementations
3. **Check the browser console** for instrumentation and hydration logs
4. **Test interactive elements** to see client-side functionality
5. **Submit forms** to test server actions and enhanced form handling

## 📊 Performance Monitoring

- **Instrumentation logs** appear in the terminal/console
- **Hydration priorities** are logged in browser console
- **Server function calls** show processing information
- **Suspense boundaries** demonstrate progressive loading

## 🔍 Key Development Tools

- **Static Route Indicators**: Visual cues in development for optimization
- **TypeScript Configuration**: Full type safety for Next.js config
- **Enhanced Error Handling**: Better error boundaries with Suspense
- **Security Features**: Unguessable server action endpoints

## 📝 Notes

- This POC demonstrates all major Next.js 15 features
- Each feature includes practical examples and explanations
- The project uses the latest React 19 features for optimal performance
- All breaking changes are clearly documented with migration examples

## 🌟 Key Benefits of Next.js 15

- **Better Performance**: Optimized hydration and caching
- **Enhanced Security**: Secure server actions and improved CSRF protection
- **Improved DX**: TypeScript config, better error handling, visual indicators
- **Modern React**: Full React 19 integration with latest features
- **Simplified Architecture**: Server functions reduce API route complexity

---


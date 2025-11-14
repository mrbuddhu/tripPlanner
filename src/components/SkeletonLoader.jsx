// Skeleton loader component for loading states
export default function SkeletonLoader({ className = "", lines = 1 }) {
  return (
    <div className={`animate-pulse ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className="h-4 bg-gray-200 rounded mb-2"
          style={{ width: i === lines - 1 ? "60%" : "100%" }}
        />
      ))}
    </div>
  );
}

export function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden animate-pulse">
      <div className="w-full h-40 bg-gray-200" />
      <div className="p-4 sm:p-5 space-y-3">
        <div className="h-5 bg-gray-200 rounded w-3/4" />
        <div className="h-4 bg-gray-200 rounded w-1/2" />
        <div className="flex items-center justify-between mt-3">
          <div className="h-4 bg-gray-200 rounded w-20" />
          <div className="h-4 bg-gray-200 rounded w-16" />
        </div>
      </div>
    </div>
  );
}

export function SkeletonTripView() {
  return (
    <div className="space-y-10 animate-pulse">
      {/* Info Section Skeleton */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="w-full h-80 bg-gray-200" />
        <div className="p-5 space-y-4">
          <div className="h-8 bg-gray-200 rounded w-1/2" />
          <div className="flex gap-3">
            <div className="h-6 bg-gray-200 rounded-full w-24" />
            <div className="h-6 bg-gray-200 rounded-full w-24" />
            <div className="h-6 bg-gray-200 rounded-full w-24" />
          </div>
        </div>
      </div>
      
      {/* Hotels Skeleton */}
      <div className="space-y-4">
        <div className="h-6 bg-gray-200 rounded w-48" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2].map((i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 p-4">
              <div className="h-32 bg-gray-200 rounded-xl mb-4" />
              <div className="h-5 bg-gray-200 rounded w-3/4 mb-2" />
              <div className="h-4 bg-gray-200 rounded w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


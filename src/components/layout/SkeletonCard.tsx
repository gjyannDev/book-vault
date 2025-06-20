import { Skeleton } from "../ui/skeleton";

export default function SkeletonCard({ idx }: { idx: number }) {
  return (
    <div key={idx} className="w-full max-w-md space-y-3 pt-6">
      <Skeleton className="w-full h-96 lg:h-72 bg-gray-300 animate-pulse rounded" />
      <Skeleton className="w-24 h-4 bg-gray-300 animate-pulse rounded" />
      <div className="space-y-2">
        <Skeleton className="w-full h-5 bg-gray-300 animate-pulse rounded" />
        <Skeleton className="w-5/6 h-5 bg-gray-300 animate-pulse rounded" />
      </div>
      <div className="flex gap-4 mt-4">
        <Skeleton className="w-24 h-8 bg-gray-300 animate-pulse rounded" />
        <Skeleton className="w-20 h-8 bg-gray-300 animate-pulse rounded" />
      </div>
    </div>
  );
}

import { Skeleton } from "../ui/skeleton";

export default function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="w-full object-cover h-96 lg:h-72" />
      <div className="flex flex-col gap-4">
        <Skeleton className="w-4 h-4" />
        <Skeleton className="w-8 h-8" />
      </div>
      <div className="flex gap-6">
        <Skeleton className="w-4 h-4" />
      </div>
    </div>
  );
}

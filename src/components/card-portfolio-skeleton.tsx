import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function CardPortfolioSkeleton() {
  return (
    <Card className="bg-navbar h-full w-full overflow-hidden border-white/10 py-0">
      <Skeleton className="aspect-[16/9] w-full rounded-none" />

      <CardHeader>
        <CardTitle className="text-white">
          <Skeleton className="h-6 w-3/4" />
        </CardTitle>
        <CardDescription className="mt-2 text-sm text-white">
          <div className="mb-3 space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-2/3" />
          </div>

          <div className="mt-2 flex flex-wrap gap-2">
            <Skeleton className="h-6 w-16 rounded-full" />
            <Skeleton className="h-6 w-20 rounded-full" />
            <Skeleton className="h-6 w-14 rounded-full" />
          </div>

          <div className="mt-4 flex gap-2">
            <Skeleton className="h-8 w-24 rounded-md" />
            <Skeleton className="h-8 w-20 rounded-md" />
          </div>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

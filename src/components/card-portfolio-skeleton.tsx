import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function CardPortfolioSkeleton() {
  return (
    <Card className="h-full w-full bg-navbar">
      <CardHeader>
        <CardTitle className="text-white">
          <Skeleton className="h-6 w-3/4" />
        </CardTitle>
        <CardDescription className="text-white mt-2 text-sm">
          <div className="mb-2 space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            <Skeleton className="h-6 w-16 rounded-full" />
            <Skeleton className="h-6 w-20 rounded-full" />
            <Skeleton className="h-6 w-14 rounded-full" />
          </div>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

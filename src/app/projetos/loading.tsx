import { CardPortfolioSkeleton } from "@/components/card-portfolio-skeleton";

export default function LoadingProjects() {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-10 md:px-8 xl:px-12">
      <header className="space-y-3">
        <div className="h-4 w-40 rounded bg-white/10" />
        <div className="h-10 w-full max-w-2xl rounded bg-white/10" />
        <div className="h-5 w-full max-w-3xl rounded bg-white/10" />
      </header>

      <div>
        <div className="mb-6 h-8 w-52 rounded bg-white/10" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <CardPortfolioSkeleton key={`featured-skeleton-${index}`} />
          ))}
        </div>
      </div>

      <div>
        <div className="mb-6 h-8 w-48 rounded bg-white/10" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <CardPortfolioSkeleton key={`all-skeleton-${index}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

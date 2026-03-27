import { ArrowUpRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getTechColor } from "@/configs/getTechColor";

export interface FeaturedProjectParams {
  id: string;
  title: string;
  des: string;
  category: string;
  repo: string;
  link: string;
  topics: string[];
}

export function CardFeaturedProject({
  title,
  des,
  category,
  repo,
  link,
  topics,
}: FeaturedProjectParams) {
  const thumbnailUrl = `/api/thumbnail?repo=${encodeURIComponent(title)}`;
  const visibleTopics = topics.slice(0, 5);

  return (
    <Card className="group bg-navbar/95 h-full overflow-hidden border border-amber-300/20 py-0 text-white shadow-[0_0_0_1px_rgba(251,191,36,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-300/10">
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <Image
          src={thumbnailUrl}
          alt={`Thumbnail do projeto em destaque ${title}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
        <Badge className="bg-principal/85 absolute top-4 left-4 border border-violet-200/50 text-white shadow-md shadow-violet-500/30">
          <Sparkles className="h-3.5 w-3.5" />
          Destaque
        </Badge>
        <Badge className="absolute top-4 right-4 border-white/20 bg-black/55 text-white capitalize">
          {category}
        </Badge>
      </div>

      <CardHeader className="space-y-3 pb-0">
        <CardTitle className="text-xl leading-tight">{title}</CardTitle>
        <CardDescription className="line-clamp-3 min-h-[60px] text-sm text-zinc-300">
          {des}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-2">
          {visibleTopics.map((topic) => (
            <Badge key={topic} className={`border ${getTechColor(topic)}`}>
              {topic}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="gap-2 pb-5">
        <Button
          asChild
          size="sm"
          className="bg-principal hover:bg-principal/85 text-white"
        >
          <Link href={repo} target="_blank" rel="noopener noreferrer">
            Ver código
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Button>

        {link && (
          <Button
            asChild
            size="sm"
            variant="outline"
            className="border-white/25 bg-transparent text-white hover:bg-white/10"
          >
            <Link href={link} target="_blank" rel="noopener noreferrer">
              Ver demo
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

import { ArrowUpRight, Code2, Globe } from "lucide-react";
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

export interface ProjectParams {
  id: string;
  title: string;
  des: string;
  category: string;
  repo: string;
  link: string;
  topics: string[];
}

export function CardProject({
  title,
  des,
  category,
  repo,
  link,
  topics,
}: ProjectParams) {
  const thumbnailUrl = `/api/thumbnail?repo=${encodeURIComponent(title)}`;
  const visibleTopics = topics.slice(0, 4);
  const hiddenTopicsCount = Math.max(0, topics.length - visibleTopics.length);

  return (
    <Card className="group bg-navbar/90 h-full overflow-hidden border-white/10 py-0 text-white transition-all duration-200 hover:-translate-y-1 hover:border-white/30 hover:shadow-xl hover:shadow-black/20">
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <Image
          src={thumbnailUrl}
          alt={`Thumbnail do projeto ${title}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
        <Badge className="absolute top-4 left-4 border-white/20 bg-black/60 text-white capitalize">
          {category}
        </Badge>
      </div>

      <CardHeader className="pb-0">
        <CardTitle className="leading-tight">
          <Link
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-principal inline-flex items-center gap-1 transition-colors"
          >
            {title}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <CardDescription className="line-clamp-3 min-h-[60px] text-sm text-zinc-300">
          {des}
        </CardDescription>

        <div className="flex flex-wrap gap-2">
          {visibleTopics.map((topic) => (
            <Badge key={topic} className={`border ${getTechColor(topic)}`}>
              {topic}
            </Badge>
          ))}
          {hiddenTopicsCount > 0 && (
            <Badge className="border border-white/20 bg-white/10 text-white">
              +{hiddenTopicsCount}
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="mt-auto gap-2 pb-5">
        <Button
          asChild
          size="sm"
          className="bg-principal hover:bg-principal/85 text-white"
        >
          <Link href={repo} target="_blank" rel="noopener noreferrer">
            <Code2 className="h-4 w-4" />
            Código
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
              <Globe className="h-4 w-4" />
              Demo
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

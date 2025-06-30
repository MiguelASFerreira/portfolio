import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export interface ProjectParams {
  id: string;
  title: string;
  des: string;
  category: string;
  repo: string;
  link: string;
  topics: string[];
}

export function CardPortfolio({ id, title, des, repo, topics }: ProjectParams) {
  return (
    <Card key={id} className="h-full w-full bg-navbar">
      <CardHeader>
        <CardTitle className="text-white hover:text-principal">
          <Link href={repo} target="_blank">
            {title}
          </Link>
        </CardTitle>
        <CardDescription className="text-white mt-2 text-sm">
          <p className="mb-2">{des}</p>
          <div className="flex flex-wrap gap-2">
            {topics.map((topic, index) => (
              <Badge key={index}>{topic}</Badge>
            ))}
          </div>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

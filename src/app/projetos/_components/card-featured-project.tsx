import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getTechColor } from "@/configs/getTechColor";

export interface FeaturedProjectParams {
  id: string;
  title: string;
  des: string;
  topics: string[];
}

export function CardFeaturedProject({
  id,
  title,
  des,
  topics,
}: FeaturedProjectParams) {
  return (
    <Card
      key={id}
      className="bg-navbar h-full w-full overflow-hidden border-none"
    >
      <CardHeader>
        <CardTitle className="text-white">{title}</CardTitle>
        <CardDescription className="mt-2 text-sm text-white">
          <p className="mb-3">{des}</p>
          <div className="flex flex-wrap gap-2">
            {topics.map((topic, index) => (
              <Badge key={index} className={`border ${getTechColor(topic)}`}>
                {topic}
              </Badge>
            ))}
          </div>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import type { SkillGroup } from "@/configs/skills";

export function CardSkills({
  icon: Icon,
  title,
  description,
  skills,
}: SkillGroup) {
  return (
    <Card className="bg-navbar">
      <CardHeader>
        <div className="mb-2 flex items-center space-x-3">
          <div className="bg-principal flex h-12 w-12 items-center justify-center rounded-lg text-white">
            <Icon className="h-6 w-6" />
          </div>
          <div>
            <CardTitle className="text-white">{title}</CardTitle>
          </div>
        </div>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        {skills.map((item) => (
          <div key={item.name} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-medium text-gray-300">{item.name}</span>
              <span className="text-sm font-semibold text-gray-300">
                {item.level}%
              </span>
            </div>
            <Progress
              className="text-principal"
              value={item.level}
              level={item.level}
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

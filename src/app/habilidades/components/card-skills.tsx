import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import type { SkillGroup } from "@/configs/skills";

export function CardSkills(skill: SkillGroup) {
  return (
    <Card className="bg-navbar">
      <CardHeader>
        <div className="mb-2 flex items-center space-x-3">
          <div className="bg-principal flex h-12 w-12 items-center justify-center rounded-lg text-white">
            {<skill.icon className="h-6 w-6" />}
          </div>
          <div>
            <CardTitle className="text-white">{skill.title}</CardTitle>
          </div>
        </div>
        <p className="text-muted-foreground text-sm">{skill.description}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        {skill.skills.map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-medium text-gray-300">{item.name}</span>
              <span className="text-gray-300 text-sm font-semibold">{item.level}%</span>
            </div>
            <Progress className="text-principal" value={item.level} level={item.level} />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

import {
  Award,
  CalendarDays,
  Globe,
  GraduationCap,
  MapPin,
  School,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { EducationEntry } from "@/configs/education";

type AcademicCardProps = {
  education: EducationEntry;
};

export function AcademicCard({ education }: AcademicCardProps) {
  function getStatusStyles(status: string) {
    switch (status) {
      case "Concluído":
        return "bg-green-500/20 text-green-500 border-0";
      case "Em Andamento":
        return "bg-yellow-500/20 text-yellow-500 border-0";
      default:
        return "bg-gray-500/20 text-gray-500 border-0";
    }
  }

  return (
    <Card className="bg-navbar mb-6">
      <CardHeader>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-principal flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg text-white">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <CardTitle className="mb-2 text-xl text-white">
                {education.title}
              </CardTitle>
              <div className="text-muted-foreground flex flex-wrap gap-4 text-sm">
                <div className="flex items-center space-x-1">
                  <Award className="h-4 w-4" />
                  <span>{education.institution}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CalendarDays className="h-4 w-4" />
                  <span>{education.period}</span>
                </div>
                {education.location && (
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{education.location}</span>
                  </div>
                )}
                <div className="flex items-center space-x-1">
                  {education.modality === "Online" ? (
                    <Globe className="h-4 w-4" />
                  ) : (
                    <School className="h-4 w-4" />
                  )}
                  <span>{education.modality}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Badge className="bg-principal/20 border-0 text-white">
              {education.type}
            </Badge>
            <Badge className={getStatusStyles(education.status)}>
              {education.status}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{education.description}</p>
        <div className="flex flex-wrap gap-2">
          {education.highlights.map((highlight, idx) => (
            <Badge
              key={idx}
              variant="outline"
              className="border-muted-foreground text-white"
            >
              {highlight}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

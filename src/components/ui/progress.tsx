"use client";

import * as ProgressPrimitive from "@radix-ui/react-progress";
import * as React from "react";

import { cn } from "@/lib/utils";

const getSkillColor = (level: number) => {
  if (level >= 90) return "bg-[#7A1BFA]"; 
  if (level >= 80) return "bg-[#6A1AE6]";
  if (level >= 70) return "bg-[#5E17EB]"; 
  return "bg-gray-500";
};


interface ProgressProps extends React.ComponentProps<typeof ProgressPrimitive.Root> {
  value: number;
  level: number;
}

function Progress({ className, value, level, ...props }: ProgressProps) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "bg-background/50 relative h-2 w-full overflow-hidden rounded-full",
        className,
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className={cn("h-full w-full flex-1 transition-all", getSkillColor(level))}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  );
}

export { Progress };

"use client";

import { cn } from "@/lib/utils";

interface TimelineEventProps {
  active?: boolean;
  children: React.ReactNode;
  last?: boolean;
}
export const Timeline = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export const TimelineEvent = ({
  active,
  children,
  last,
}: TimelineEventProps) => {
  return (
    <div
      className={cn(
        "flex w-full justify-start gap-6 border-neutral-300 dark:border-neutral-700",
        {
          "border-l": !last,
          "pb-16": !last,
        },
      )}
    >
      <div className="relative">
        <div
          className={cn(
            "absolute top-[-2px] left-[-8.5px] aspect-square h-4 w-4 rounded-full outline-black dark:outline-neutral-900",
            {
              "bg-principal": active,
              "bg-neutral-300 dark:bg-neutral-700": !active,
              "h-3 w-3": !active,
              "left-[-5.5px]": !active,
            },
          )}
        >
          {active && (
            <div
              className={cn(
                "bg-principal absolute top-0 left-0 -z-10 aspect-square h-4 w-4 animate-ping rounded-full",
              )}
            />
          )}
        </div>
      </div>
      <div className="mt-[-4px] flex flex-col gap-2">
        {children}
      </div>
    </div>
  );
};

const TimelineEventTitle = ({ children }: { children: React.ReactNode }) => (
  <p className="text-base text-white">{children}</p>
);

const TimelineEventDescription = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const formattedDescription =
    children && typeof children === "string"
      ? children.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      : children;

  return (
    <p
      className="text-muted-foreground text-base"
      dangerouslySetInnerHTML={{ __html: formattedDescription as string }}
    />
  );
};

TimelineEvent.Title = TimelineEventTitle;
TimelineEvent.Description = TimelineEventDescription;

export default TimelineEvent;

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
    <div className="flex w-full gap-6">
      <div className="relative flex flex-col items-center">
        {!last && (
          <div className="absolute top-2 left-1/2 h-full w-px -translate-x-1/2 bg-neutral-300 dark:bg-neutral-700" />
        )}

        <div
          className={cn(
            "relative z-10 aspect-square rounded-full outline-black dark:outline-neutral-900",
            {
              "bg-principal h-4 w-4": active,
              "h-3 w-3 bg-neutral-300 dark:bg-neutral-700": !active,
            },
          )}
        >
          {active && (
            <div className="bg-principal absolute top-0 left-0 -z-10 aspect-square h-4 w-4 animate-ping rounded-full" />
          )}
        </div>
      </div>

      <div className="mt-[-4px] flex flex-col gap-2 pb-16">{children}</div>
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

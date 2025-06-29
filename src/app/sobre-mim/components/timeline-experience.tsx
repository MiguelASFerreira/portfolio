"use client";

import Image from "next/image";
import Link from "next/link";

import TimelineEvent, { Timeline } from "@/components/ui/timeline";
import { experience } from "@/configs/experience";

export function TimelineExperience() {
  return (
    <Timeline>
      {experience.map((entry, index) => (
        <TimelineEvent key={index} active={entry.isActive}>
            {entry.logo ? (
              <Image
                src={entry.logo}
                alt="Viptech Logo"
                width={30}
                height={30}
                quality={100}
              />
            ) : undefined}
          <TimelineEvent.Title>
            {entry.companyUrl ? (
              <Link
                href={entry.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                {entry.title} | {entry.startDate} - {entry.endDate}
              </Link>
            ) : (
              <span>
                {entry.title} | {entry.startDate} - {entry.endDate}
              </span>
            )}
            {entry.isActive && (
              <span className="text-principal ml-2 text-sm font-semibold">
                Ativo
              </span>
            )}
          </TimelineEvent.Title>
          <TimelineEvent.Description>
            {entry.description}
          </TimelineEvent.Description>
        </TimelineEvent>
      ))}
    </Timeline>
  );
}

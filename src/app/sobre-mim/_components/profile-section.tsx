"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";

interface ProfileSectionProps {
  title: string;
  subtitle: string;
  subtitleColor?: string;
  description: string;
  imageUrl: string;
  imageAlt?: string;
  imageOnLeft?: boolean;
}

export function ProfileSection({
  title,
  subtitle,
  subtitleColor = "text-principal",
  description,
  imageUrl,
  imageAlt = "Imagem de seção",
  imageOnLeft = false,
}: ProfileSectionProps) {
  return (
    <section className="flex flex-col items-center gap-6 py-12 md:flex-row">
      {imageOnLeft && (
        <div className="relative flex w-full items-start justify-start md:w-1/2 max-md:hidden">
          <div className="w-[70%] rounded-md bg-[#2A2A2A] pt-3 pl-3">
            <Image
              src={imageUrl}
              alt={imageAlt}
              width={400}
              height={600}
              className="h-auto w-full rounded-sm object-cover"
            />
          </div>
        </div>
      )}

      <div className="w-full space-y-4 text-left md:w-1/2">
        <p className="text-muted-foreground text-sm uppercase">{title}</p>
        <h2 className={cn("text-2xl font-semibold", subtitleColor)}>
          {subtitle}
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
          {description}
        </p>
      </div>

      {!imageOnLeft && (
        <div className="relative flex w-full items-start justify-start md:w-1/2 max-md:hidden">
          <div className="w-[70%] rounded-md bg-[#2A2A2A] pt-3 pr-3">
            <Image
              src={imageUrl}
              alt={imageAlt}
              width={400}
              height={600}
              className="h-auto w-full rounded-sm object-cover"
            />
          </div>
        </div>
      )}
    </section>
  );
}

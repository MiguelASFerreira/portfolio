"use client";

import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const navLinks = [
  { href: "/sobre-mim", label: "SOBRE MIM" },
  { href: "/educacao", label: "EDUCAÇÃO" },
  { href: "/habilidades", label: "HABILIDADES" },
  { href: "/projetos", label: "PROJETOS" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="bg-navbar fixed top-0 left-0 z-50 flex h-20 w-full items-center px-4 md:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="border-background bg-navbar border-3 lg:hidden"
          >
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="px-11">
          <SheetHeader>
            <SheetTitle className="text-white">Miguel Antonio</SheetTitle>
          </SheetHeader>

          <div className="grid gap-2 py-6">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`flex w-full items-center py-2 text-lg font-semibold ${
                  pathname === href ? "text-principal" : "text-white"
                } hover:text-principal`}
                prefetch={false}
              >
                {label.toUpperCase()}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>

      <Link href="/" className="hover:text-principal hidden text-white lg:flex">
        Miguel Antonio
      </Link>

      <nav className="ml-auto hidden gap-4 lg:flex">
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`font-semibold ${
              pathname === href ? "text-principal" : "text-white"
            } hover:text-principal`}
            prefetch={false}
          >
            {label.toUpperCase()}
          </Link>
        ))}
      </nav>
    </header>
  );
}

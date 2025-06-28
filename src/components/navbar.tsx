import { MenuIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";

export function Navbar() {
  return (
    <header className="bg-navbar flex h-20 w-full shrink-0 items-center px-4 md:px-6">
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
            <SheetTitle className="text-white">
              Miguel Antonio
            </SheetTitle>
          </SheetHeader>
          <Link
            href="#"
            className="mr-6 hidden text-white lg:flex"
            prefetch={false}
          >
            <span>Miguel Antonio</span>
          </Link>

          <div className="grid gap-2 py-6">
            <Link
              href="#"
              className="hover:text-principal flex w-full items-center py-2 text-lg font-semibold text-white"
              prefetch={false}
            >
              SOBRE MIM
            </Link>

            <Link
              href="#"
              className="hover:text-principal flex w-full items-center py-2 text-lg font-semibold text-white"
              prefetch={false}
            >
              PORTFÓLIO
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      <Link href="#" className="hover:text-principal hidden text-white lg:flex">
        Miguel Antonio
      </Link>

      <nav className="ml-auto hidden gap-4 lg:flex">
        <Link href="#" className="hover:text-principal text-white">
          SOBRE MIM
        </Link>

        <Link href="#" className="hover:text-principal text-white">
          PORTFÓLIO
        </Link>
      </nav>
    </header>
  );
}

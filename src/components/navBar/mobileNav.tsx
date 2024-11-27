import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import LogoIcon from "@/assets/logo-icon.png";
import LogoText from "@/assets/logo-text.png";
import { Button } from "../ui/button";

type Props = {
  navLinks: {
    name: string;
    route: string;
  }[];
};

export function MobileNav({ navLinks }: Props) {
  return (
    <Sheet>
      <SheetTrigger className="h-10 lg:hidden">
        <Menu size={35} />
      </SheetTrigger>
      <SheetContent>
        <Link href="/" className="flex items-center justify-start gap-2">
          <Image src={LogoIcon} alt="furnit" className="-mt-3 h-10 w-auto" />
          <Image src={LogoText} alt="furnit" className="h-6 w-auto" />
        </Link>

        <div className="flex flex-col gap-4 pt-4">
          {navLinks.map(link => (
            <Link key={link.name} href={link.route} className="w-full">
              <Button className="w-full" variant={"ghost"}>
                {link.name}
              </Button>
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}

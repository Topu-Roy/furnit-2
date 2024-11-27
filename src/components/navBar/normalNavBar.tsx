import Link from "next/link";
import Image from "next/image";
import LogoIcon from "@/assets/logo-icon.png";
import LogoText from "@/assets/logo-text.png";
import type { Session } from "next-auth";
import { ModeToggle } from "../theme/theme-toggle";
import { SignInWithGoogleButton, SignOutButton } from "./authButtons";
import { cn } from "@/lib/utils";
import { MobileNav } from "./mobileNav";
import { NavLink } from "./navLink";

const navLinks = [
  { name: "Home", route: "/" },
  { name: "Shop", route: "/shop" },
  { name: "Blog", route: "/blog" },
  { name: "About Us", route: "/about-us" },
  { name: "Team", route: "/team" },
  { name: "Dashboard", route: "/admin/dashboard" },
];

type Props = {
  session: Session | null;
  className?: string;
};

export function NormalNavBar({ session, className }: Props) {
  return (
    <header
      className={cn(
        "flex h-[10vh] w-[100vw] items-center justify-center border-b-[2px] border-border bg-white px-2 shadow-md shadow-black/5 dark:bg-black dark:text-white",
        className
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <Link href="/" className="flex items-center justify-start gap-2">
            <Image src={LogoIcon} alt="furnit" className="-mt-3 h-8 w-auto md:h-11" />
            <Image src={LogoText} alt="furnit" className="h-4 w-auto md:h-6" />
          </Link>
        </div>
        <div className="hidden items-center justify-between gap-4 lg:inline-flex">
          {navLinks.map(item => (
            <NavLink key={item.name} href={item.route} name={item.name} />
          ))}
        </div>
        <div className="flex items-center justify-end gap-4">
          <ModeToggle />
          {!session?.user ? <SignInWithGoogleButton /> : <SignOutButton />}
          <MobileNav navLinks={navLinks} />
        </div>
      </div>
    </header>
  );
}

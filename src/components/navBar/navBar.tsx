import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import LogoIcon from "@/assets/logo-icon.png";
import LogoText from "@/assets/logo-text.png";
import type { Session } from "next-auth";
import { signIn, signOut } from "@/server/auth";
import { ModeToggle } from "../theme/theme-toggle";

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
};

export default function NavBar({ session }: Props) {
  return (
    // <header className="fixed top-0 z-50 flex h-[10vh] w-[100vw] items-center justify-center bg-white px-2 shadow-md shadow-black/5 dark:bg-black dark:text-white">
    <header className="flex h-[10vh] w-[100vw] items-center justify-center border-b border-border bg-white px-2 shadow-md shadow-black/5 dark:bg-black dark:text-white">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <Link href="/" className="flex items-center justify-start gap-2">
            <Image src={LogoIcon} alt="furnit" className="-mt-3 h-[45px] w-auto" />
            <Image src={LogoText} alt="furnit" className="h-[25px] w-auto" />
          </Link>
        </div>
        <div className="inline-flex items-center justify-between gap-4">
          {navLinks.map(item => (
            <Link href={item.route} key={item.name}>
              <Button variant={"link"}>{item.name}</Button>
            </Link>
          ))}
        </div>
        <div className="flex items-center justify-end gap-4">
          <ModeToggle />
          {!session?.user ? (
            <form
              action={async () => {
                "use server";

                await signIn("google");
              }}
            >
              <Button>Sign In</Button>
            </form>
          ) : (
            <form
              action={async () => {
                "use server";

                await signOut();
              }}
            >
              <Button>Sign Out</Button>
            </form>
          )}
        </div>
      </div>
    </header>
  );
}

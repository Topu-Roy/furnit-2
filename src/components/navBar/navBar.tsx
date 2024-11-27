import type { Session } from "next-auth";
import { NormalNavBar } from "./normalNavBar";
import { ScrollActivatedNavBar } from "./scrollNavBar";

type Props = {
  session: Session | null;
};

export function NavBar({ session }: Props) {
  return (
    <>
      <NormalNavBar session={session} />
      <ScrollActivatedNavBar session={session} />
    </>
  );
}

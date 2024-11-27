import { cn } from "@/lib/utils";
import FooterLinks from "./footerLinks";

interface Props {
  className?: string;
}

export default function Footer({ className }: Props) {
  return (
    <footer className={cn(className)}>
      <FooterLinks />
      <div className="w-full bg-gray-950">
        <div className="mx-auto h-px w-[90%] bg-white/10" />
      </div>
      <div className="flex w-full flex-row items-center justify-center bg-gray-950 py-4">
        <p className="text-white/40">© Copyright 2022. All Rights Reserved</p>
      </div>
    </footer>
  );
}

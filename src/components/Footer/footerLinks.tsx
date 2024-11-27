import Link from "next/link";
import { cn } from "@/lib/utils";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "../ui/button";
import LogoText from "@/assets/logo-text.png";
import Image from "next/image";

const footerData = [
  {
    headline: "Customer",
    links: [
      {
        name: "Order Status",
        url: "#",
      },
      {
        name: "Collections",
        url: "#",
      },
      {
        name: "Our Story",
        url: "#",
      },
      {
        name: "Affiliates",
        url: "#",
      },
      {
        name: "Security",
        url: "#",
      },
    ],
  },
  {
    headline: "Information",
    links: [
      {
        name: "Customer Service",
        url: "#",
      },
      {
        name: "Terms of condition",
        url: "#",
      },
      {
        name: "Privacy Policy",
        url: "#",
      },
      {
        name: "Careers",
        url: "#",
      },
      {
        name: "FAQ",
        url: "#",
      },
    ],
  },
];

const socialLinks = [
  {
    name: "Instagram",
    icon: <Instagram />,
    url: "#",
  },
  {
    name: "Facebook",
    icon: <Facebook />,
    url: "#",
  },
  {
    name: "Twitter",
    icon: <Twitter />,
    url: "#",
  },
];

export default function FooterLinks() {
  return (
    <div className="w-full bg-gray-950 pt-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row">
        <div className="w-full space-y-8 pb-4 md:w-1/2 md:pb-0 lg:pl-8 2xl:pl-0">
          <div className="mx-auto space-y-2 px-2 text-center md:pr-14 lg:px-0 lg:text-left">
            <div className="flex w-full items-center justify-center lg:block">
              <Link href={"/"}>
                <Image alt="Furnit" src={LogoText} height={20} />
              </Link>
            </div>

            <p className="text-gray-400">
              Lorem ipsum dolor sit amet litam consectetur adipiscing elit, facilisi vivamus proin lit laoreet phasel alilus porttitor inter,
              facilisis condiment tarime egestas rhoncus dapibus iaculis alemir.
            </p>

            <div className="pt-3">
              <Link href={"/shop"}>
                <Button className="bg-orange-400 font-semibold text-gray-800 transition-all hover:bg-orange-500">Shop Now</Button>
              </Link>
            </div>
          </div>

          <div className="flex w-full items-center justify-center gap-4 md:pb-4 lg:justify-start">
            {socialLinks.map(item => (
              <Link
                key={item.name}
                href={item.url}
                className="h-10 w-10 rounded-full bg-white/10 p-2 text-gray-300 hover:bg-primary/10 hover:text-primary"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>

        <div className="mx-auto h-px w-[90%] bg-white/10 md:hidden" />

        <div className="grid w-[50%] grid-cols-3">
          <div className="hidden md:block"></div>
          {footerData.map(item => (
            <div key={item.headline} className="">
              <p className="pb-4 text-lg font-semibold text-white/70">{item.headline}</p>
              <div className="space-y-3">
                {item.links.map(link => (
                  <p key={link.name} className={cn("opacity-0.81 tracking-[-0.50px] text-white/60")}>
                    <Link href={link.url}>
                      <span className="hover:underline">{link.name}</span>
                    </Link>
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

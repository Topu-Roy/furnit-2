// import { ShopSidebar } from "@/components/shop/sideBar";
// import { SidebarProvider } from "@/components/ui/sidebar";
import { NuqsAdapter } from "nuqs/adapters/next/app";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <NuqsAdapter>
      {/* <SidebarProvider> */}
      {/* <ShopSidebar /> */}
      <main>{children}</main>
      {/* </SidebarProvider> */}
    </NuqsAdapter>
  );
}

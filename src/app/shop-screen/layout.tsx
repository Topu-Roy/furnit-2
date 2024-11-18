import { ShopSidebar } from "@/components/shop/sideBar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { NuqsAdapter } from "nuqs/adapters/next/app";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <NuqsAdapter>
      <SidebarProvider>
        <ShopSidebar />
        <main>
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
    </NuqsAdapter>
  );
}

import { CategorySelector } from "@/app/shop/_components/catagories";
import { ColorSelector } from "@/app/shop/_components/colorSelector";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function ShopSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <h2 className="px-2 text-xl font-semibold">Select Filters</h2>
      </SidebarHeader>
      <SidebarContent className="px-2">
        <SidebarMenu>
          <SidebarGroup>
            {items.map(item => (
              <SidebarMenuItem key={item.title} className="py-1">
                <SidebarMenuButton asChild>
                  <a href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarGroup>
          <SidebarGroup>
            <CategorySelector />
          </SidebarGroup>
          <SidebarGroup>
            <ColorSelector />
          </SidebarGroup>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}

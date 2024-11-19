import { CategorySelector } from "@/components/shop/categorySelector";
import { ColorSelector } from "@/components/shop/colorSelector";
import { ProductTagSelector } from "./productTagSelector";

export function ShopSidebar() {
  return (
    <>
      <h2 className="p-4 text-2xl font-semibold text-muted-foreground">Select Filters</h2>

      <div className="space-y-3 px-2">
        <div>
          <CategorySelector />
        </div>
        <div>
          <ColorSelector />
        </div>
        <div>
          <ProductTagSelector />
        </div>
      </div>
    </>
  );
}

// export function ShopSidebar() {
//   return (
//     <Sidebar className="absolute bottom-0 left-0 h-[90vh]">
//       <SidebarHeader>
//         <h2 className="px-4 text-2xl font-semibold">Select Filters</h2>
//       </SidebarHeader>
//       <SidebarContent className="px-2">
//         <SidebarGroup>
//           <CategorySelector />
//         </SidebarGroup>
//         <SidebarGroup>
//           <ColorSelector />
//         </SidebarGroup>
//         <SidebarGroup>
//           <ProductTagSelector />
//         </SidebarGroup>
//       </SidebarContent>
//       <SidebarFooter />
//     </Sidebar>
//   );
// }

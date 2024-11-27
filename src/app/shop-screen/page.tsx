import Footer from "@/components/Footer/footer";
import NavBar from "@/components/navBar/normalNavBar";
import { RenderShop } from "@/components/shop/renderShop";
import { ShopSidebar } from "@/components/shop/sideBar";
import { auth } from "@/server/auth";

export default async function ShopPage() {
  const sessionPromise = auth();
  const session = await sessionPromise;

  return (
    <div className="h-screen overflow-hidden">
      <NavBar session={session} />

      <div className="container mx-auto flex h-[90vh] w-full">
        <aside className="w-[20%] border-r border-border bg-background">
          <ShopSidebar />
        </aside>
        <div className="h-full flex-1 overflow-y-scroll">
          <RenderShop />
        </div>
      </div>

      <Footer />
    </div>
  );
}

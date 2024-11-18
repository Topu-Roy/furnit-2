import { ModeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";
import { auth, signIn, signOut } from "@/server/auth";
import { db } from "@/server/db";
// import { unstable_cache as cache } from "next/cache";

// const getData = cache(
//   async () =>
//     new Promise(resolve => {
//       setTimeout(() => {
//         resolve("Resolved after 5 seconds");
//       }, 10000);
//     }).then(() => {
//       return 405;
//     }),
//   ["delay-5s"],
//   { revalidate: 60 }
// );

export default async function Demo() {
  const session = await auth();
  // const data = await getData();
  const products = await db.product.findFirst();

  console.log(products);

  return (
    <div className="container mx-auto flex min-h-screen flex-col items-center justify-center gap-4">
      <p>Home</p>
      <ModeToggle />

      {/* <p>data = {data}</p> */}

      <div className="p-4">
        {session?.user ? (
          <form
            action={async () => {
              "use server";

              await signOut();
            }}
          >
            <p className="mb-2">{session.user.email}</p>
            <Button>Log Out</Button>
          </form>
        ) : (
          <form
            action={async () => {
              "use server";

              await signIn("google");
            }}
          >
            <Button>Sign In</Button>
          </form>
        )}
      </div>
    </div>
  );
}

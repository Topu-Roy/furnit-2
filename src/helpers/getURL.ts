import { env } from "@/env";

export function getOriginURL() {
  const serverURL = process.env.VERCEL_URL;
  const localURL = "http://localhost:3000";

  if (env.NODE_ENV !== "production") {
    return localURL;
  } else {
    return `https://${serverURL}`;
  }
}

"use server";

import { signIn, signOut } from "@/server/auth";

export async function signInWithGoogleAction() {
  await signIn("google");
}

export async function signOutAction() {
  await signOut();
}

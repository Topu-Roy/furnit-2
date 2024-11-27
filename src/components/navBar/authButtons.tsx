"use client";

import { signInWithGoogleAction, signOutAction } from "@/actions/authAction";
import { Button } from "@/components/ui/button";

export function SignInWithGoogleButton() {
  return <Button onClick={async () => await signInWithGoogleAction()}>Sign In</Button>;
}

export function SignOutButton() {
  return <Button onClick={async () => await signOutAction()}>Sign Out</Button>;
}

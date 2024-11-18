"use client";

import { QueryClient, QueryClientProvider as QProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export function QueryClientProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  return <QProvider client={queryClient}>{children}</QProvider>;
}

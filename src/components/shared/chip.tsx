import { cn } from "@/lib/utils";

export default function Chip({ text, className }: { text: string; className?: string }) {
  return (
    <div className="rounded-2xl bg-zinc-400/30 px-2 py-1">
      <p className={cn(className)}>{text}</p>
    </div>
  );
}

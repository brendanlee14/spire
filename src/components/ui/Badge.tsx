interface BadgeProps {
  rank: number;
  size?: "sm" | "md";
}

const rankStyles: Record<number, string> = {
  1: "bg-yellow-500/20 text-yellow-400 border-yellow-500/40",
  2: "bg-slate-400/20 text-slate-300 border-slate-400/40",
  3: "bg-amber-800/20 text-amber-600 border-amber-700/40",
};

const rankLabels: Record<number, string> = {
  1: "S",
  2: "A",
  3: "B",
};

export default function Badge({ rank, size = "md" }: BadgeProps) {
  const style = rankStyles[rank] ?? "bg-stone-700/20 text-stone-400 border-stone-600/40";
  const label = rankLabels[rank] ?? `#${rank}`;
  const sizeClass = size === "sm" ? "w-7 h-7 text-xs" : "w-9 h-9 text-sm";

  return (
    <span
      className={`inline-flex items-center justify-center rounded-full border font-display font-bold shrink-0 ${sizeClass} ${style}`}
    >
      {label}
    </span>
  );
}

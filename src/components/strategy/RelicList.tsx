import { RelicEntry } from "@/data/types";

interface RelicListProps {
  relics: RelicEntry[];
}

const priorityConfig = {
  essential: {
    label: "Essential",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10 border-yellow-500/30",
    dot: "bg-yellow-400",
  },
  strong: {
    label: "Strong",
    color: "text-slate-300",
    bg: "bg-slate-400/10 border-slate-400/30",
    dot: "bg-slate-400",
  },
  situational: {
    label: "Situational",
    color: "text-amber-600",
    bg: "bg-amber-800/10 border-amber-700/30",
    dot: "bg-amber-600",
  },
};

export default function RelicList({ relics }: RelicListProps) {
  const grouped = {
    essential: relics.filter((r) => r.priority === "essential"),
    strong: relics.filter((r) => r.priority === "strong"),
    situational: relics.filter((r) => r.priority === "situational"),
  };

  return (
    <div className="space-y-4">
      {(["essential", "strong", "situational"] as const).map((tier) => {
        const items = grouped[tier];
        if (!items.length) return null;
        const config = priorityConfig[tier];
        return (
          <div key={tier}>
            <h4 className={`text-xs font-semibold uppercase tracking-widest mb-2 ${config.color}`}>
              {config.label}
            </h4>
            <div className="space-y-2">
              {items.map((relic) => (
                <div
                  key={relic.name}
                  className={`flex items-start gap-3 p-3 rounded-lg border ${config.bg}`}
                >
                  <div className={`w-2 h-2 rounded-full shrink-0 mt-1.5 ${config.dot}`} />
                  <div>
                    <span className="font-semibold text-stone-200 text-sm">{relic.name}</span>
                    {relic.note && (
                      <p className="text-stone-500 text-xs mt-0.5 leading-relaxed">{relic.note}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

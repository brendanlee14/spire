import Link from "next/link";
import { Strategy } from "@/data/types";
import Badge from "@/components/ui/Badge";

interface StrategyCardProps {
  strategy: Strategy;
  gameId: string;
  characterSlug: string;
  accentColor: string;
}

export default function StrategyCard({
  strategy,
  gameId,
  characterSlug,
  accentColor,
}: StrategyCardProps) {
  return (
    <Link
      href={`/${gameId}/${characterSlug}/${strategy.slug}`}
      className="group flex items-start gap-4 p-5 rounded-xl border border-dungeon-700 bg-dungeon-900 hover:bg-dungeon-800 transition-all duration-200"
      style={{ borderColor: accentColor + "33" }}
    >
      <Badge rank={strategy.rank} />

      <div className="flex-1 min-w-0">
        <h3 className="font-display font-semibold text-stone-100 text-base leading-snug">
          {strategy.name}
        </h3>
        <p className="text-stone-400 text-sm leading-relaxed mt-1">
          {strategy.tagline}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {strategy.coreCards
            .filter((c) => c.isCore)
            .slice(0, 4)
            .map((card) => (
              <span
                key={card.name}
                className="text-xs px-2 py-0.5 rounded-md bg-dungeon-800 border border-dungeon-600 text-stone-400"
              >
                {card.name}
              </span>
            ))}
          {strategy.coreCards.filter((c) => c.isCore).length > 4 && (
            <span className="text-xs px-2 py-0.5 rounded-md bg-dungeon-800 border border-dungeon-600 text-stone-500">
              +{strategy.coreCards.filter((c) => c.isCore).length - 4} more
            </span>
          )}
        </div>
      </div>

      <span className="text-stone-600 group-hover:text-stone-400 transition-colors mt-1 shrink-0 text-lg">
        ›
      </span>
    </Link>
  );
}

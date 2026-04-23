import { Strategy } from "@/data/types";
import Badge from "@/components/ui/Badge";
import Divider from "@/components/ui/Divider";
import CardList from "./CardList";
import RelicList from "./RelicList";

interface StrategyDetailProps {
  strategy: Strategy;
  accentColor: string;
}

export default function StrategyDetail({ strategy, accentColor }: StrategyDetailProps) {
  const paragraphs = strategy.playstyle.split("\n\n");

  return (
    <article className="space-y-0">
      {/* Header */}
      <div className="flex items-start gap-4 pb-6">
        <Badge rank={strategy.rank} size="md" />
        <div className="flex-1">
          <h1
            className="font-display text-2xl md:text-3xl font-bold leading-tight"
            style={{ color: accentColor }}
          >
            {strategy.name}
          </h1>
          <p className="text-stone-400 mt-2 leading-relaxed">{strategy.tagline}</p>
        </div>
      </div>

      {/* Systemic function */}
      <div className="p-4 rounded-xl border border-dungeon-700 bg-dungeon-800/50 mb-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-stone-500 mb-1">
          Systemic Function
        </p>
        <p className="text-stone-300 text-sm leading-relaxed">{strategy.systemicFunction}</p>
      </div>

      <Divider />

      {/* Playstyle */}
      <section>
        <h2 className="font-display text-lg font-bold text-stone-200 mb-4">How It Works</h2>
        <div className="prose-dungeon">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      <Divider />

      {/* Two-column: Cards + Relics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section>
          <h2 className="font-display text-lg font-bold text-stone-200 mb-4">Cards</h2>
          <CardList cards={strategy.coreCards} accentColor={accentColor} />
        </section>

        <section>
          <h2 className="font-display text-lg font-bold text-stone-200 mb-4">Relics</h2>
          <RelicList relics={strategy.keyRelics} />
        </section>
      </div>

      {/* Strengths / Weaknesses */}
      {(strategy.strengths?.length || strategy.weaknesses?.length) && (
        <>
          <Divider />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {strategy.strengths && strategy.strengths.length > 0 && (
              <section>
                <h2 className="font-display text-base font-bold text-emerald-400 mb-3 flex items-center gap-2">
                  <span className="text-emerald-500">↑</span> Strengths
                </h2>
                <ul className="space-y-2">
                  {strategy.strengths.map((s, i) => (
                    <li key={i} className="flex gap-2 text-sm text-stone-400">
                      <span className="text-emerald-600 shrink-0 mt-0.5">✓</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </section>
            )}
            {strategy.weaknesses && strategy.weaknesses.length > 0 && (
              <section>
                <h2 className="font-display text-base font-bold text-red-400 mb-3 flex items-center gap-2">
                  <span className="text-red-500">↓</span> Weaknesses
                </h2>
                <ul className="space-y-2">
                  {strategy.weaknesses.map((w, i) => (
                    <li key={i} className="flex gap-2 text-sm text-stone-400">
                      <span className="text-red-700 shrink-0 mt-0.5">✗</span>
                      {w}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </>
      )}
    </article>
  );
}

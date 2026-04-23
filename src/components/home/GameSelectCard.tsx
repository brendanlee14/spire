import Link from "next/link";
import { Game } from "@/data/types";

interface GameSelectCardProps {
  game: Game;
}

const gameTheme = {
  sts1: {
    border: "border-ember-600/30 hover:border-ember-500/60",
    glow: "hover:shadow-ember-glow",
    badge: "bg-ember-600/20 text-ember-400 border-ember-600/30",
    accent: "text-ember-400",
    bg: "hover:bg-ember-600/5",
    cta: "bg-ember-600/20 hover:bg-ember-600/30 text-ember-300 border-ember-600/30",
  },
  sts2: {
    border: "border-arcane-600/30 hover:border-arcane-500/60",
    glow: "hover:shadow-arcane-glow",
    badge: "bg-arcane-600/20 text-arcane-400 border-arcane-600/30",
    accent: "text-arcane-400",
    bg: "hover:bg-arcane-600/5",
    cta: "bg-arcane-600/20 hover:bg-arcane-600/30 text-arcane-300 border-arcane-600/30",
  },
};

export default function GameSelectCard({ game }: GameSelectCardProps) {
  const theme = gameTheme[game.id];

  return (
    <Link
      href={`/${game.id}`}
      className={`group relative flex flex-col gap-5 p-8 rounded-2xl border bg-dungeon-900 transition-all duration-300 ${theme.border} ${theme.glow} ${theme.bg}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className={`font-display text-2xl font-bold ${theme.accent}`}>
            {game.title}
          </h2>
          <p className="text-stone-500 text-sm mt-0.5">{game.subtitle}</p>
        </div>
        <span className={`text-xs font-medium px-2.5 py-1 rounded-full border shrink-0 ${theme.badge}`}>
          {game.characters.length} characters
        </span>
      </div>

      <p className="text-stone-400 text-sm leading-relaxed flex-1">
        {game.description}
      </p>

      <div className="flex items-center gap-2">
        <div className="flex -space-x-1">
          {game.characters.slice(0, 4).map((c) => (
            <span
              key={c.slug}
              className="w-6 h-6 rounded-full border border-dungeon-700 bg-dungeon-800 flex items-center justify-center text-xs"
              title={c.name}
              style={{ borderColor: c.accentColor + "66" }}
            >
              {c.name[0]}
            </span>
          ))}
        </div>
        <span className="text-stone-600 text-xs">
          {game.characters.map((c) => c.name).join(", ")}
        </span>
      </div>

      <div className={`self-start text-sm font-medium px-4 py-2 rounded-lg border transition-colors ${theme.cta}`}>
        Open Guide →
      </div>
    </Link>
  );
}

import { GAMES } from "@/data";
import GameSelectCard from "@/components/home/GameSelectCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spire Guide",
  description: "Strategy guide for Slay the Spire 1 and 2.",
};

export default function HomePage() {
  return (
    <main className="min-h-dvh flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-16 gap-10">
        <header className="text-center max-w-xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-stone-100 leading-tight">
            Spire Guide
          </h1>
          <p className="text-stone-400 mt-4 text-base leading-relaxed">
            Algorithmic strategies, card synergies, and relic priorities for
            Slay the Spire 1 &amp; 2.
          </p>
        </header>

        <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-5">
          {GAMES.sts1 && <GameSelectCard game={GAMES.sts1} />}
          {GAMES.sts2 && <GameSelectCard game={GAMES.sts2} />}
        </div>
      </div>

      <footer className="text-center text-stone-700 text-xs py-6">
        Fan-made guide based on community research.
      </footer>
    </main>
  );
}

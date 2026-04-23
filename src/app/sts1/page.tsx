import { getGame } from "@/data";
import CharacterCard from "@/components/character/CharacterCard";
import GameHeader from "@/components/layout/GameHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Slay the Spire | Characters",
};

export default function STS1Page() {
  const game = getGame("sts1");

  return (
    <main className="max-w-4xl mx-auto">
      <GameHeader
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Slay the Spire" },
        ]}
        accentClass="text-ember-400"
      />

      <div className="px-4 md:px-8 pb-16">
        <header className="mb-10">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-ember-400">
            {game.title}
          </h1>
          <p className="text-stone-500 text-sm mt-1">{game.subtitle}</p>
          <p className="text-stone-400 mt-3 leading-relaxed max-w-2xl">
            {game.description}
          </p>
        </header>

        <h2 className="font-display text-xs uppercase tracking-widest text-stone-500 mb-5">
          Choose a Character
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {game.characters.map((character) => (
            <CharacterCard
              key={character.slug}
              character={character}
              gameId="sts1"
            />
          ))}
        </div>
      </div>
    </main>
  );
}

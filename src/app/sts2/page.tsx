import { getGame } from "@/data";
import CharacterCard from "@/components/character/CharacterCard";
import GameHeader from "@/components/layout/GameHeader";
import Divider from "@/components/ui/Divider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Slay the Spire 2 | Characters",
};

export default function STS2Page() {
  const game = getGame("sts2");

  return (
    <main className="max-w-4xl mx-auto">
      <GameHeader
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Slay the Spire 2" },
        ]}
        accentClass="text-arcane-400"
      />

      <div className="px-4 md:px-8 pb-16">
        <header className="mb-10">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-arcane-400">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
          {game.characters.map((character) => (
            <CharacterCard
              key={character.slug}
              character={character}
              gameId="sts2"
            />
          ))}
        </div>

        {/* STS2-specific mechanics section */}
        {game.uniqueMechanics && (
          <>
            <Divider />
            <section className="mt-10">
              <h2 className="font-display text-xl font-bold text-arcane-400 mb-2">
                New Systems in STS2
              </h2>
              <p className="text-stone-500 text-sm mb-8">
                These mechanics fundamentally change the heuristics from the original game.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {game.uniqueMechanics.map((mechanic) => (
                  <div
                    key={mechanic.name}
                    className="p-5 rounded-xl border border-arcane-600/25 bg-arcane-600/5"
                  >
                    <h3 className="font-display font-bold text-arcane-300 text-sm mb-2">
                      {mechanic.name}
                    </h3>
                    <p className="text-stone-400 text-sm leading-relaxed">
                      {mechanic.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}
      </div>
    </main>
  );
}

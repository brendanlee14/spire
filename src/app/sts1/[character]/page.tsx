import { getCharacter, getGame } from "@/data";
import StrategyCard from "@/components/strategy/StrategyCard";
import GameHeader from "@/components/layout/GameHeader";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ character: string }>;
}

export async function generateStaticParams() {
  const game = getGame("sts1");
  return game.characters.map((c) => ({ character: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { character: slug } = await params;
  const character = getCharacter("sts1", slug);
  if (!character) return {};
  return { title: `${character.name} — Slay the Spire` };
}

export default async function CharacterPage({ params }: Props) {
  const { character: slug } = await params;
  const character = getCharacter("sts1", slug);
  if (!character) notFound();

  const sortedStrategies = [...character.strategies].sort((a, b) => a.rank - b.rank);

  return (
    <main className="max-w-3xl mx-auto">
      <GameHeader
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Slay the Spire", href: "/sts1" },
          { label: character.name },
        ]}
        accentClass="text-ember-400"
      />

      <div className="px-4 md:px-8 pb-16">
        <header className="mb-10 flex items-center gap-4">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center font-display text-2xl font-bold border-2 shrink-0"
            style={{
              borderColor: character.accentColor + "88",
              backgroundColor: character.accentColor + "22",
              color: character.accentColor,
            }}
          >
            {character.name[0]}
          </div>
          <div>
            <h1
              className="font-display text-3xl font-bold"
              style={{ color: character.accentColor }}
            >
              {character.name}
            </h1>
            <p className="text-stone-400 text-sm mt-1 leading-relaxed max-w-xl">
              {character.description}
            </p>
          </div>
        </header>

        <h2 className="font-display text-xs uppercase tracking-widest text-stone-500 mb-5">
          Strategies — Ranked by Effectiveness
        </h2>
        <div className="space-y-3">
          {sortedStrategies.map((strategy) => (
            <StrategyCard
              key={strategy.slug}
              strategy={strategy}
              gameId="sts1"
              characterSlug={character.slug}
              accentColor={character.accentColor}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

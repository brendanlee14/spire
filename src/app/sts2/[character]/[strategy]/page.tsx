import { getCharacter, getGame, getStrategy } from "@/data";
import StrategyDetail from "@/components/strategy/StrategyDetail";
import GameHeader from "@/components/layout/GameHeader";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ character: string; strategy: string }>;
}

export async function generateStaticParams() {
  const game = getGame("sts2");
  return game.characters.flatMap((c) =>
    c.strategies.map((s) => ({ character: c.slug, strategy: s.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { character: cSlug, strategy: sSlug } = await params;
  const strategy = getStrategy("sts2", cSlug, sSlug);
  const character = getCharacter("sts2", cSlug);
  if (!strategy || !character) return {};
  return { title: `${strategy.name} — ${character.name} — Slay the Spire 2` };
}

export default async function StrategyPage({ params }: Props) {
  const { character: cSlug, strategy: sSlug } = await params;
  const character = getCharacter("sts2", cSlug);
  const strategy = getStrategy("sts2", cSlug, sSlug);
  if (!character || !strategy) notFound();

  return (
    <main className="max-w-3xl mx-auto">
      <GameHeader
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Slay the Spire 2", href: "/sts2" },
          { label: character.name, href: `/sts2/${character.slug}` },
          { label: strategy.name },
        ]}
        accentClass="text-arcane-400"
      />

      <div className="px-4 md:px-8 pb-16">
        <StrategyDetail strategy={strategy} accentColor={character.accentColor} />
      </div>
    </main>
  );
}

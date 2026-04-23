"use client";

import Link from "next/link";
import { Character } from "@/data/types";

interface CharacterCardProps {
  character: Character;
  gameId: string;
}

export default function CharacterCard({ character, gameId }: CharacterCardProps) {
  return (
    <Link
      href={`/${gameId}/${character.slug}`}
      className="group flex flex-col gap-3 p-6 rounded-xl border bg-dungeon-900 hover:bg-dungeon-800 transition-all duration-200 hover:scale-[1.02]"
      style={{
        borderColor: character.accentColor + "44",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${character.accentColor}33`;
        (e.currentTarget as HTMLElement).style.borderColor = character.accentColor + "88";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "";
        (e.currentTarget as HTMLElement).style.borderColor = character.accentColor + "44";
      }}
    >
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center font-display text-xl font-bold border-2"
        style={{
          borderColor: character.accentColor + "88",
          backgroundColor: character.accentColor + "22",
          color: character.accentColor,
        }}
      >
        {character.name[0]}
      </div>

      <div>
        <h3
          className="font-display text-lg font-bold"
          style={{ color: character.accentColor }}
        >
          {character.name}
        </h3>
        <p className="text-stone-400 text-sm leading-relaxed mt-1">
          {character.description}
        </p>
      </div>

      <div className="flex items-center justify-between mt-auto pt-2 border-t border-dungeon-700">
        <span className="text-stone-600 text-xs">
          {character.strategies.length} strategies
        </span>
        <span className="text-stone-500 text-xs group-hover:text-stone-300 transition-colors">
          View builds →
        </span>
      </div>
    </Link>
  );
}

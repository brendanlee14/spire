import { Game, GameId } from "./types";
import { ironclad as sts1Ironclad } from "./sts1/ironclad";
import { silent as sts1Silent } from "./sts1/silent";
import { defect as sts1Defect } from "./sts1/defect";
import { watcher as sts1Watcher } from "./sts1/watcher";
import { ironclad as sts2Ironclad } from "./sts2/ironclad";
import { silent as sts2Silent } from "./sts2/silent";
import { defect as sts2Defect } from "./sts2/defect";
import { regent as sts2Regent } from "./sts2/regent";
import { necrobinder as sts2Necrobinder } from "./sts2/necrobinder";

export const GAMES: Record<GameId, Game> = {
  sts1: {
    id: "sts1",
    title: "Slay the Spire",
    subtitle: "The Original",
    description:
      "Master the four characters of the original roguelike deckbuilder. Success hinges on the Jobs theory, aggressive Elite pathing, and ruthless deck thinning.",
    characters: [sts1Ironclad, sts1Silent, sts1Defect, sts1Watcher],
  },
  sts2: {
    id: "sts2",
    title: "Slay the Spire 2",
    subtitle: "Early Access",
    description:
      "Navigate sweeping systemic changes — Ancients replace boss relics, Enchantments permanently modify cards, Quest Cards introduce dead draws, and Co-Op multiplayer enables hyper-specialised party roles.",
    characters: [
      sts2Ironclad,
      sts2Silent,
      sts2Defect,
      sts2Regent,
      sts2Necrobinder,
    ],
    uniqueMechanics: [
      {
        name: "Ancients System",
        description:
          "Boss Relics are gone. At the start of each Act, an Ancient offers run-defining blessings. Neow begins Act 1. Orobas, Pael, and Tezcatara appear in Act 2. Nonupeipe, Tanx, and Vakuu appear in Act 3. Each Ancient offers powerful blessings — many apply Enchantments directly to your cards.",
      },
      {
        name: "Enchantments",
        description:
          "Enchantments permanently modify specific cards with a significant benefit AND a corresponding drawback. A poorly chosen Enchantment can ruin a run. Crucially, Enchanted cards cannot be removed — so accepting an Enchantment on a Strike abandons the STS1 strategy of removing all Strikes for deck purity.",
      },
      {
        name: "Quest Cards",
        description:
          "Quest Cards are Unplayable dead draws in the deck. Carry the Byrdonis Egg to a Rest Site to hatch it into Byrd Swoop (a free 14-damage zero-cost attack). Carry the Spoils Map to its destination for 600 Gold. You must evaluate whether your deck can absorb the statistical liability of an unplayable card until the condition is met.",
      },
      {
        name: "Multiplayer Co-Op",
        description:
          "Up to 4 synchronous players share the map and fight the same enemies. Enemy HP scales exponentially. Decks remain independent but four new shared mechanics allow party coordination: Intercept (redirect attacks to yourself), Knockdown (double damage setup), Gang Up (scales with ally attacks this turn), and Mimic (copy another player's Block).",
      },
    ],
  },
};

export function getGame(id: GameId): Game {
  return GAMES[id];
}

export function getCharacter(gameId: GameId, characterSlug: string) {
  return GAMES[gameId]?.characters.find((c) => c.slug === characterSlug);
}

export function getStrategy(
  gameId: GameId,
  characterSlug: string,
  strategySlug: string
) {
  return getCharacter(gameId, characterSlug)?.strategies.find(
    (s) => s.slug === strategySlug
  );
}

export function getAllGameIds(): GameId[] {
  return ["sts1", "sts2"];
}

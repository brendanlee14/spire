export type GameId = "sts1" | "sts2";

export interface CardEntry {
  name: string;
  note?: string;
  isCore: boolean;
}

export interface RelicEntry {
  name: string;
  note?: string;
  priority: "essential" | "strong" | "situational";
}

export interface Strategy {
  slug: string;
  name: string;
  rank: number;
  tagline: string;
  playstyle: string;
  systemicFunction: string;
  coreCards: CardEntry[];
  keyRelics: RelicEntry[];
  strengths?: string[];
  weaknesses?: string[];
}

export interface Character {
  slug: string;
  name: string;
  description: string;
  accentColor: string;
  strategies: Strategy[];
}

export interface GameMechanic {
  name: string;
  description: string;
}

export interface Game {
  id: GameId;
  title: string;
  subtitle: string;
  description: string;
  characters: Character[];
  uniqueMechanics?: GameMechanic[];
}

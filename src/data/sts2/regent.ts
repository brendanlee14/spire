import { Character } from "../types";

export const regent: Character = {
  slug: "regent",
  name: "Regent",
  description: "A celestial aristocrat who introduces Stars — a persistent secondary resource that carries between turns — enabling asynchronous energy strategies impossible for other characters.",
  accentColor: "#c084fc",
  strategies: [
    {
      slug: "star-engine",
      name: "The Star Engine",
      rank: 1,
      tagline: "Generate Stars passively via Genesis each turn, burst-generate via Hidden Cache and Royal Gamble, then spend on Seven Stars or Stardust for lethal AoE.",
      systemicFunction: "Accumulates Stars — a persistent resource that carries between turns — through passive Power income (Genesis) and efficient generators (Hidden Cache, Glow). Converts the hoard into lethal AoE via Seven Stars (fixed 7-Star cost) or Stardust (variable-spend scaling). Decisions, Decisions chains into Royal Gamble for explosive Star bursts on demand.",
      playstyle: "Stars persist between turns until deliberately spent, allowing the Regent to bank resources across multiple turns before a single devastating execution.\n\nThe true passive income engine is Genesis (Rare Power, 2 Energy): at the start of every turn, gain 2 Stars. This is the card that sustains the engine in long fights. Glow (1 Energy Skill) gives 1 Star and draws a card now plus another card next turn — valued for draw and loop potential. Hidden Cache (1 Energy Skill) gives 1 Star immediately and 3 more Stars next turn — one of the best burst generators at 4 Stars total per Energy.\n\nFor concentrated Star explosions, Royal Gamble (0 Energy + 2 Stars) gives 9 Stars and Exhausts — a net gain of 7 Stars in one play. It pairs explosively with Decisions, Decisions (0 Energy + 6 Stars), which draws 3 cards and plays a chosen Skill from hand 3 times before Exhausting. Targeting Royal Gamble with Decisions, Decisions chains into a massive Star surge. Multiple copies can re-chain via the 3 draws.\n\nThe primary finisher is Seven Stars (2 Energy + 7 Stars): deals 7 damage to all enemies 7 times — 49 damage AoE for a fixed Star cost. Stardust is the variable alternative — spend X Stars to deal 5 damage X times, scaling linearly with Star count. Gamma Blast (0 Energy + 3 Stars) deals a flat 13 damage plus 2 Weak and 2 Vulnerable — a cheap debuff tool, not a scaling damage card.\n\nNote: Gather Light is a 1-Energy Skill that gives 7 Block and 1 Star — solid early defensive value, but a one-time play rather than an ongoing income source.",
      coreCards: [
        { name: "Genesis", note: "Rare Power (2E): at start of every turn, gain 2 Stars — the primary passive Star income engine", isCore: true },
        { name: "Hidden Cache", note: "1E Skill: gain 1 Star now + 3 Stars next turn — 4 Stars per Energy, best burst generator", isCore: true },
        { name: "Seven Stars", note: "2E + 7 Stars: deal 7 damage to ALL enemies 7 times — the primary fixed-cost AoE finisher", isCore: true },
        { name: "Decisions, Decisions", note: "0E + 6 Stars: draw 3, play a chosen Skill 3 times, Exhaust — chains into Royal Gamble for massive Star bursts", isCore: true },
        { name: "Glow", note: "1E Skill: gain 1 Star + draw 1 card now, draw 1 card next turn — steady generator and draw engine", isCore: false },
        { name: "Royal Gamble", note: "0E + 2 Stars: gain 9 Stars, Exhaust — net +7 Stars; pairs explosively with Decisions, Decisions", isCore: false },
        { name: "Stardust", note: "Attack (X Stars): deal 5 damage X times — the variable-spend scaling finisher alternative to Seven Stars", isCore: false },
        { name: "Gamma Blast", note: "0E + 3 Stars: deal 13 damage + apply 2 Weak + 2 Vulnerable — cheap fixed-cost debuff application", isCore: false },
      ],
      keyRelics: [
        { name: "Galactic Dust", note: "For every 10 Stars spent, gain 10 Block — converts Star spending into automatic passive defence", priority: "strong" },
        { name: "Lunar Pastry", note: "At the end of each turn, gain 1 Star — passive trickle income each cycle", priority: "strong" },
      ],
      strengths: [
        "Stars persist across turns — accumulated resources are never wasted at end-of-turn like Energy",
        "Genesis provides guaranteed Star income every turn regardless of hand quality",
        "Decisions, Decisions into Royal Gamble can generate enough Stars to fire Seven Stars in a single turn",
      ],
      weaknesses: [
        "Genesis must be found and played before passive income starts — early combats rely on one-shot generators",
        "Seven Stars requires exactly 7 Stars — must manage accumulation precisely",
        "Low raw damage before the engine is established; struggles to pressure fast-attacking enemies",
      ],
    },
    {
      slug: "forge-mechanic",
      name: "The Forge Mechanic",
      rank: 2,
      tagline: "Stack Forge points onto the Sovereign Blade via Furnace, Bulwark, and The Smith, then convert it to AoE with Seeking Edge for a single devastating hit.",
      systemicFunction: "Generates the Sovereign Blade Token via the first Forge card each combat, then permanently increases its damage through cumulative Forge points. Seeking Edge converts the Blade into an AoE weapon. Resets between fights — all Forge investment must be rebuilt each combat.",
      playstyle: "Forge is a keyword that permanently increases the Sovereign Blade's damage for the current combat only. The Blade itself is a Token — it is not in the deck. The first Forge card played each combat creates the Blade in hand with Retain (it stays in hand between turns). Every subsequent Forge point adds exactly 1 damage to all copies. The target is roughly 30 cumulative Forge to one-shot standard enemies.\n\nFurnace (1 Energy, Uncommon Power) applies Forge 4 at the start of each turn — no direct damage, purely passive Forge income that compounds across long fights. Wrought in War (1 Energy, Common Attack) deals 7 damage and applies Forge 7 in one play — the bread-and-butter dual-purpose card. Bulwark (2 Energy, Uncommon Skill) provides 13 Block and Forge 10 — the highest Forge value outside of Rare cards, covering defence simultaneously.\n\nThe Smith (1 Energy + 4 Stars, Rare Skill) applies Forge 30 in a single play — the largest Forge dump in the pool, capable of reaching execution threshold alone with the right Star support. Summon Forth (1 Energy, Uncommon Skill) fetches all Sovereign Blades from any zone back to hand and applies Forge 8 — critical for recovery if the Blade is exhausted.\n\nSeeking Edge (1 Energy, Rare Power) applies Forge 7 and permanently modifies the Sovereign Blade to hit all enemies for the rest of that combat — the key AoE conversion that transforms the single-target Blade into a room-clearing weapon.\n\nFencing Manual (Common Relic) applies Forge 10 at the start of combat, automatically creating the Sovereign Blade in hand immediately with a 10-damage head start.\n\nNote: Mini Regent is a Stars/Strength relic (grants +1 Strength the first time you spend a Star each turn) and has no interaction with Forge or the Sovereign Blade.",
      coreCards: [
        { name: "Sovereign Blade", note: "Token Attack with Retain (base 10 dmg); created by the first Forge card each combat — the Forge target", isCore: true },
        { name: "Furnace", note: "1E Power: at start of every turn, apply Forge 4 — passive recurring Forge income with no direct damage", isCore: true },
        { name: "Wrought in War", note: "1E Common Attack: deal 7 damage and Forge 7 — bread-and-butter dual-purpose Forge card", isCore: true },
        { name: "Bulwark", note: "2E Skill: gain 13 Block and Forge 10 — highest non-Rare Forge value; covers defence simultaneously", isCore: true },
        { name: "Seeking Edge", note: "1E Rare Power: Forge 7 and convert Sovereign Blade to hit ALL enemies — the key AoE modifier", isCore: false },
        { name: "The Smith", note: "1E + 4 Stars Rare Skill: Forge 30 — the single largest Forge dump in the pool", isCore: false },
        { name: "Summon Forth", note: "1E Uncommon Skill: fetch all Sovereign Blades from any zone + Forge 8 — recovery and Forge acceleration", isCore: false },
      ],
      keyRelics: [
        { name: "Fencing Manual", note: "Forge 10 at combat start — creates the Sovereign Blade immediately with a 10-damage head start", priority: "essential" },
      ],
      strengths: [
        "Sovereign Blade always present once created — guaranteed scaling target every combat after first Forge",
        "Seeking Edge converts the Blade to AoE, making every Forge point apply to all enemies simultaneously",
        "Furnace provides free Forge income each turn regardless of hand quality",
      ],
      weaknesses: [
        "All Forge investment resets between fights — must rebuild from zero each combat",
        "Weak in short fights where insufficient turns exist to accumulate meaningful Forge totals",
        "The Smith requires 4 Stars — demands hybrid Star support to access the largest Forge dump efficiently",
      ],
    },
  ],
};

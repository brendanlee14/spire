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
      tagline: "Permanently upgrade the Sovereign Blade's damage throughout a single combat via Forge keyword cards.",
      systemicFunction: "Permanently upgrades the inherent Sovereign Blade weapon across the duration of a single combat. Optimally used as a supplementary finisher alongside the Star Engine rather than a standalone primary strategy.",
      playstyle: "The Forge Mechanic focuses entirely on the Sovereign Blade — an innate 2-cost weapon card that returns to the deck after each use. By playing cards featuring the Forge keyword (such as Furnace, Wrought in War, or Beat into Shape), the damage output of the Sovereign Blade permanently increases for the remainder of the combat.\n\nBecause the Sovereign Blade is always available in the deck — it never leaves the draw pile — Forging it early in a combat creates compounding returns for every subsequent play. Bulwark provides Block while also applying Forge, allowing defence and weapon investment simultaneously. Seeking Edge applies Forge to the Blade while drawing a card. The Fencing Manual relic amplifies the Forge bonus per card played, and Mini Regent provides a second Sovereign Blade instance in the deck.\n\nNote: Dedicated Forge support cards are intentionally limited by design, making the Forge Mechanic most powerful as a secondary engine alongside the Star Engine rather than a standalone primary strategy.",
      coreCards: [
        { name: "Sovereign Blade", note: "Innate 2-cost weapon that returns to deck after use — the Forge target", isCore: true },
        { name: "Wrought in War", note: "Applies Forge to Sovereign Blade and provides offensive utility", isCore: true },
        { name: "Furnace", note: "Forge keyword card providing damage output alongside weapon investment", isCore: true },
        { name: "Bulwark", note: "Block generation with Forge — defensive investment in the weapon simultaneously", isCore: false },
        { name: "Seeking Edge", note: "Applies Forge and draws a card — efficient dual-purpose play", isCore: false },
      ],
      keyRelics: [
        { name: "Fencing Manual", note: "Amplifies Forge bonus per play — essential for maximising Blade damage", priority: "essential" },
        { name: "Mini Regent", note: "Adds a second Sovereign Blade instance to the deck — doubles Forge payoff", priority: "strong" },
      ],
      strengths: [
        "Sovereign Blade always present in the deck — guaranteed Forge target every combat",
        "Scales very fast in long fights where Blade is played many times",
        "Works alongside Star Engine as a supplementary finisher with no conflict",
      ],
      weaknesses: [
        "Limited Forge card pool makes full commitment risky",
        "Weak in short fights where Blade has insufficient plays to scale significantly",
        "Sovereign Blade's 2-energy cost requires energy management each turn",
      ],
    },
  ],
};

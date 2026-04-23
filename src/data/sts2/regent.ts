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
      tagline: "Hoard persistent Stars across turns then spend them on encounter-ending abilities like Seven Stars and Meteor Shower.",
      systemicFunction: "Accumulates persistent resources to unleash massive, high-cost area-of-effect execution abilities. Stars provide an asynchronous energy layer that bypasses the standard end-of-turn energy loss.",
      playstyle: "The Regent's fundamental innovation is the Star resource — unlike standard Energy, Stars persist between turns until deliberately spent. This allows the Regent to bank resources over multiple turns before unleashing a single devastating execution turn.\n\nThe Star Engine archetype revolves around establishing an infrastructure of cards that generate Stars efficiently. Gather Light is the primary Star generator, producing Stars each turn it is in play as a power card. Glow channels Stars at an escalating rate. Hidden Cache converts gold into Stars, useful after a merchant visit. Once a critical mass of Stars is hoarded, the player expends them on massive, encounter-ending abilities like Seven Stars (which deals heavy damage to all enemies scaled by Stars spent) or Meteor Shower (massive single-target burst).\n\nThe evaluation of Regent cards requires strict mathematical scrutiny. Optimal heuristics dictate that 1 Star is roughly equivalent in value to 0.5 Energy. Cards that operate above this conversion efficiency must be prioritised to ensure the engine outpaces enemy scaling. The card Decisions, Decisions is a critical finisher that can be chained into itself to amplify high-cost skills, rendering the Regent mathematically indestructible.",
      coreCards: [
        { name: "Gather Light", note: "Power card that generates Stars each turn — the primary Star income engine", isCore: true },
        { name: "Glow", note: "Generates Stars at an escalating rate each time it is played", isCore: true },
        { name: "Seven Stars", note: "Spends Stars to deal area-of-effect damage — the primary encounter-ender", isCore: true },
        { name: "Decisions, Decisions", note: "Chains into itself to amplify high-cost skills — creates indestructible execution chains", isCore: true },
        { name: "Gamma Blast", note: "High-damage Star-cost attack that scales with Stars spent", isCore: false },
        { name: "Hidden Cache", note: "Converts gold into Stars — useful after merchant shops", isCore: false },
      ],
      keyRelics: [
        { name: "Galactic Dust", note: "Grants bonus Stars at the start of each combat — provides immediate engine acceleration", priority: "essential" },
        { name: "Lunar Pastry", note: "Generates 1 Star at the start of every turn — passive Star income", priority: "strong" },
      ],
      strengths: [
        "Stars persist across turns — no energy is wasted at end-of-turn",
        "Seven Stars scales with Stars spent, becoming a true one-shot tool",
        "Decisions, Decisions creates cascading skill amplification that is effectively infinite",
      ],
      weaknesses: [
        "Low early-game damage — cannot pressure enemies while Stars are being hoarded",
        "Requires finding Gather Light early to establish sustainable Star income",
        "Complex card evaluation: must constantly assess 1-Star-to-0.5-Energy conversion efficiency",
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

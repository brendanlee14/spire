import { Character } from "../types";

export const necrobinder: Character = {
  slug: "necrobinder",
  name: "Necrobinder",
  description: "The most tactically dense character — manages Osty the skeleton companion as a living shield while applying the Doom status to instantly execute enemies at threshold.",
  accentColor: "#4f46e5",
  strategies: [
    {
      slug: "doom-execution",
      name: "Doom Execution",
      rank: 1,
      tagline: "Accumulate Doom via No Escape's exponential scaling and Deathbringer's AoE, then outlast the enemy's final turn before execution triggers.",
      systemicFunction: "Applies the Doom status until stacks equal the enemy's remaining HP, triggering automatic execution at the end of their turn. Doom bypasses Block, shields, and regeneration entirely. End of Days bundles a 29-Doom AoE application with an immediate kill check, skipping the end-of-turn wait.",
      playstyle: "Doom is a threshold debuff: when an enemy's Doom stacks equal or exceed their current HP at the end of their turn, they are instantly executed — regardless of Block or shields. The critical caveat is that the doomed enemy still takes one final action before dying, so surviving that window is essential.\n\nThe strongest single-target accumulator is No Escape (1 Energy): it applies 10 Doom plus 5 additional for every 10 Doom already on the target, creating exponential growth on a single enemy over repeated plays. Scourge applies a flat 13 Doom and draws a card — efficient early accumulation. Blight Strike deals 8 damage and applies Doom equal to that damage, serving as a dual-purpose opener.\n\nFor AoE coverage, Deathbringer (2 Energy) applies 21 Doom and 1 Weak to all enemies simultaneously — the primary multi-target applicator. Negative Pulse adds a flat 7 Doom to all enemies and grants 5 Block, combining offence and defence.\n\nEnd of Days (3 Energy, Rare) applies 29 Doom to all enemies and immediately executes any whose Doom already equals or exceeds their HP — the kill check runs as part of the card's own effect rather than waiting for end-of-turn. Countdown is a Power that applies 6 Doom to a random enemy at the start of each turn automatically.\n\nSurviving the final enemy action relies on Undying Sigil (relic: enemies who have reached the Doom execution threshold deal 50% less damage) and Delay (11 Block plus a 1 Energy refund next turn — a resource bridge, not crowd control).",
      coreCards: [
        { name: "No Escape", note: "1-cost Skill: apply 10 Doom +5 per 10 Doom already on target — exponential single-target accumulator", isCore: true },
        { name: "Deathbringer", note: "2-cost Attack: apply 21 Doom and 1 Weak to ALL enemies — primary AoE Doom applicator", isCore: true },
        { name: "End of Days", note: "3-cost Rare Skill: apply 29 Doom to ALL enemies AND immediately execute those already at threshold", isCore: true },
        { name: "Blight Strike", note: "1-cost Attack: deal 8 damage and apply Doom equal to damage dealt — dual-purpose early accumulator", isCore: false },
        { name: "Scourge", note: "1-cost Skill: apply 13 Doom and draw 1 card — efficient single-target accumulator with built-in draw", isCore: false },
        { name: "Negative Pulse", note: "1-cost Skill: apply 7 Doom to ALL enemies and gain 5 Block — AoE accumulation plus defence", isCore: false },
        { name: "Countdown", note: "Power: at start of each turn, apply 6 Doom to a random enemy — passive Doom accumulation", isCore: false },
      ],
      keyRelics: [
        { name: "Undying Sigil", note: "Enemies at the Doom execution threshold deal 50% less damage — critical insurance against their final attack", priority: "essential" },
        { name: "Book Repair Knife", note: "Heals 3 HP whenever an enemy dies to Doom — sustain for multi-kill Doom chains", priority: "strong" },
      ],
      strengths: [
        "Doom execution bypasses Block, shields, and regeneration — HP reduction alone cannot prevent it",
        "No Escape scales exponentially, enabling one-shot kills on bosses with sufficient setup turns",
        "End of Days eliminates the end-of-turn wait entirely by bundling application and kill check",
      ],
      weaknesses: [
        "Without End of Days, doomed enemies still act once before dying — surviving that turn is mandatory",
        "End of Days costs 3 Energy — requires energy management or relic support on execution turns",
        "Slow against swarms of low-HP enemies where Doom threshold is met too quickly to accumulate efficiently",
      ],
    },
    {
      slug: "osty-defensive-shell",
      name: "Osty Defensive Shell",
      rank: 2,
      tagline: "Stack Osty's Max HP via the Summon keyword, then convert that bulk into lethal pressure through Protector and Necro Mastery.",
      systemicFunction: "Builds Osty's Max HP through Summon cards so the companion absorbs all physical attacks automatically. High Max HP then powers Protector's damage output and fuels Necro Mastery's HP-mirror effect, turning every point of defensive investment into offensive value.",
      playstyle: "Osty automatically intercepts all physical attack damage aimed at the Necrobinder — any unblocked attacks hit Osty's HP before touching the player. Osty starts every combat at 1 HP and never expires between turns (unlike Block), so the priority is building his Max HP via the Summon keyword and healing his current HP with Spur.\n\nThe Summon keyword raises Osty's Max HP by the listed number and immediately revives him at 1 HP if he has died. Bodyguard (Summon 5) is the starter-deck source. Pull Aggro (Summon 4 plus 7 Block for the Necrobinder) delivers double defensive value per card. Spur (Summon 3 plus Osty heals 5 HP, Retain) is the primary current-HP restoration card, keeping Osty functional between waves.\n\nOnce Max HP is high, two cards convert the investment into offence. Protector has Osty deal damage equal to his current Max HP — making every Summon point directly translate into a damage number. Necro Mastery is a rare Power: whenever Osty loses HP, all enemies lose that same amount — turning Osty's shield role into passive AoE pressure.\n\nImportant limitation: non-attack damage (Burn, Toxic, Thorns, direct HP loss debuffs) bypasses Osty entirely and strikes the Necrobinder directly. The shell only absorbs conventional physical hits.",
      coreCards: [
        { name: "Bodyguard", note: "Summon 5 — starter deck's first Summon source; revives Osty if dead", isCore: true },
        { name: "Pull Aggro", note: "Summon 4 + 7 Block for the Necrobinder — double defensive value per card played", isCore: true },
        { name: "Spur", note: "Summon 3 + Osty heals 5 HP + Retain — the primary Osty current-HP restoration card", isCore: true },
        { name: "Protector", note: "Osty deals damage equal to his Max HP — turns every Summon investment into burst damage", isCore: true },
        { name: "Necro Mastery", note: "Power: when Osty loses HP, all enemies lose that much HP — converts tank into AoE weapon", isCore: false },
        { name: "Flatten", note: "Osty attacks for 12 damage; costs 0 if Osty already attacked this turn — efficient free finisher", isCore: false },
      ],
      keyRelics: [
        { name: "Bone Flute", note: "Whenever Osty attacks, the Necrobinder gains 2 Block — passive defence from every Osty attack", priority: "strong" },
      ],
      strengths: [
        "Osty's HP persists between turns — vastly more durable per point than standard Block",
        "Protector scales damage directly with Max HP, so Summon investment pays double dividends",
        "Necro Mastery makes enemies self-damage whenever they hit Osty, creating an offensive loop",
      ],
      weaknesses: [
        "Osty death exposes the Necrobinder to full direct damage — an instant run-endangering failure state",
        "Non-attack damage (Burn, Toxic, Thorns) bypasses Osty entirely and hits the Necrobinder",
        "Requires multiple Summon card plays each combat before Osty's bulk reaches meaningful HP totals",
      ],
    },
    {
      slug: "souls-draw-engine",
      name: "Souls Draw Engine",
      rank: 3,
      tagline: "Chain zero-cost Soul cards to draw through the entire deck instantly, maintaining perfect hand quality every turn.",
      systemicFunction: "Utilises zero-cost Soul skills to draw cards and exhaust simultaneously, providing unparalleled draw power. Ensures all setup cards for both Osty and Doom can be located and played on the required turn.",
      playstyle: "Souls are zero-cost skills that draw cards and immediately exhaust, providing unparalleled draw power at no energy cost. The Souls Draw Engine is the consistency glue that holds the Necrobinder's more complex strategies together — it ensures the precise defensive (Osty) or Doom-applying cards can be located and played on the exact turn they are needed.\n\nGrave Warden is the primary Soul card, drawing 2 cards when played. Haunt draws 1 card and applies a minor debuff. Oblivion draws 2 and can remove status cards from the deck. By chaining multiple Soul cards in succession, the Necrobinder can draw through large portions of the deck on any given turn, locating the specific 'job-solving' card required.\n\nThe Funerary Mask relic enhances all Soul card draw counts by 1, significantly amplifying each Soul play's efficiency. The primary drafting heuristic for the Necrobinder is absolute deck purity — mixing cards that sacrifice Osty's HP for offensive power (such as Bone Shards, which deals damage but costs Osty HP) fractures the deck's defensive consistency and leads to mathematical failure in late-stage Ascension climbs.",
      coreCards: [
        { name: "Grave Warden", note: "Soul card — draws 2 cards and exhausts for 0 energy", isCore: true },
        { name: "Haunt", note: "Soul card — draws 1 card, applies a minor debuff, and exhausts for 0 energy", isCore: true },
        { name: "Oblivion", note: "Soul card — draws 2 cards and can remove status cards from deck", isCore: true },
        { name: "Reave", note: "Soul card — draws cards equal to current Doom on enemies; scales with Doom strategy", isCore: false },
      ],
      keyRelics: [
        { name: "Funerary Mask", note: "Enhances all Soul card draw counts by 1 — dramatically amplifies consistency", priority: "essential" },
      ],
      strengths: [
        "Zero energy cost means Souls draw cards without consuming any energy for other plays",
        "Funerary Mask makes each Soul play draw even more cards — near-perfect hand quality",
        "Enables both Osty and Doom strategies by ensuring all pieces can always be found on demand",
      ],
      weaknesses: [
        "Souls exhaust after use — must have enough copies in deck to sustain consistent draw",
        "Draw alone doesn't win combats — requires Doom or Osty strategy to function as the actual win condition",
        "Reave's synergy with Doom requires Doom stacks to already exist before it becomes efficient",
      ],
    },
  ],
};

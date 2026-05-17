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
      tagline: "Stack Doom on enemies until it equals or exceeds their remaining HP, then trigger instant execution with End of Days.",
      systemicFunction: "Applies a death-mark that instantly executes enemies when Doom stacks equal their remaining HP. Bypasses conventional HP-based attrition for guaranteed one-shot kills on high-health targets.",
      playstyle: "The Necrobinder eliminates high-health targets not through immediate mathematical damage but through the Doom status effect. If an enemy's total Doom stacks equal or exceed their remaining HP, they are instantly executed at the end of their turn — completely bypassing Block, shields, and regeneration.\n\nThe primary Doom applicators are Blight Strike (high-stack Doom application with direct damage), Defile (applies Doom to all enemies simultaneously), and Negative Pulse (applies Doom scaling with the enemy's own debuff count). Because Doom gratification is heavily delayed — allowing the enemy to strike one final time before execution — the player must draft heavy stalling cards like Delay (increases the turns before the enemy acts) to survive the waiting period.\n\nFor immediate resolution, the high-cost card End of Days solves the delay problem entirely by triggering the Doom execution sequence instantly, converting Doom stacks into an immediate kill regardless of turn timing. The Undying Sigil relic prevents Osty from dying even at 1 HP, providing critical insurance during the extended Doom setup phase. The Book Repair Knife relic passively adds Doom stacks to enemies over time, reducing the number of cards needed.",
      coreCards: [
        { name: "Blight Strike", note: "High-stack Doom application plus direct damage — primary Doom accumulator", isCore: true },
        { name: "Defile", note: "Applies Doom to all enemies simultaneously — essential in multi-enemy rooms", isCore: true },
        { name: "End of Days", note: "Triggers instant Doom execution without waiting for end-of-turn — the immediate kill condition", isCore: true },
        { name: "Negative Pulse", note: "Applies Doom scaled by the enemy's debuff count — high-value against debuffed targets", isCore: false },
        { name: "Delay", note: "Increases turns before enemy acts — buys time during Doom accumulation", isCore: false },
      ],
      keyRelics: [
        { name: "Book Repair Knife", note: "Passively adds Doom stacks to enemies over time — reduces card requirement", priority: "essential" },
        { name: "Undying Sigil", note: "Prevents Osty from dying even at 1 HP — critical insurance during Doom setup", priority: "strong" },
      ],
      strengths: [
        "End of Days bypasses all forms of damage mitigation and regeneration",
        "Doom scales with HP, making it proportionally more effective against high-health bosses",
        "Book Repair Knife generates Doom passively, requiring fewer card plays to reach execution threshold",
      ],
      weaknesses: [
        "Enemies act once more before Doom execution without End of Days — requires surviving that turn",
        "End of Days is high-cost — energy management is critical on execution turns",
        "Osty must survive until execution; any combat that kills Osty before execution exposes the Necrobinder",
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

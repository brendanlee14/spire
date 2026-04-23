import { Character } from "../types";

export const silent: Character = {
  slug: "silent",
  name: "Silent",
  description: "A nimble rogue who emphasises action economy, plays a high volume of low-cost cards, and uses damage-over-time to bypass enemy mitigation.",
  accentColor: "#15803d",
  strategies: [
    {
      slug: "poison-compounding",
      name: "Poison Compounding",
      rank: 1,
      tagline: "Stack unblockable Poison then double it with Catalyst for guaranteed lethal damage.",
      systemicFunction: "Unmitigable damage-over-time that bypasses Block entirely. Exponential scaling via Catalyst multiplication allows minor Poison applications to snowball into lethal values.",
      playstyle: "The Poison Compounding engine provides reliable, continuous damage that bypasses enemy Block and remains active turn after turn, allowing the Silent to focus their energy pool entirely on defence. The definitive card is Catalyst, which doubles (or triples when upgraded) the current Poison stacks on an enemy.\n\nWhen executed alongside the Burst skill — which causes the next skill played to trigger twice — the Silent can turn a minor Poison application into maximum lethal damage in a single action. Noxious Fumes passively applies Poison every turn, freeing up energy for other jobs. Malaise simultaneously applies Poison and reduces the enemy's Strength, neutralising their offensive capabilities while adding to the damage stack. The Snecko Skull relic causes enemies to lose 1 additional Poison stack per turn for every attack the player makes, which synergises with high-frequency play patterns.",
      coreCards: [
        { name: "Catalyst", note: "Doubles (or triples upgraded) current Poison stacks — the primary scaling tool", isCore: true },
        { name: "Noxious Fumes", note: "Applies 2 Poison per turn passively without costing cards in hand", isCore: true },
        { name: "Deadly Poison", note: "Efficient Poison application for 1 energy", isCore: true },
        { name: "Burst", note: "Next Skill triggers twice — doubles the value of Catalyst", isCore: true },
        { name: "Bouncing Flask", note: "Applies Poison 3 times across random targets", isCore: false },
        { name: "Malaise", note: "Applies Poison and reduces enemy Strength simultaneously", isCore: false },
      ],
      keyRelics: [
        { name: "Snecko Skull", note: "Enemies lose 1 extra Poison per attack — synergises with high attack volume", priority: "strong" },
        { name: "Twisted Funnel", note: "Applies 4 Poison to all enemies at the start of combat for free", priority: "strong" },
        { name: "Tingsha", note: "Deals 3 damage to a random enemy per discard, supplementing Poison pressure", priority: "situational" },
      ],
      strengths: [
        "Poison bypasses Block entirely — works against every enemy in the game",
        "Catalyst makes the win condition near-inevitable once stacks are established",
        "Noxious Fumes generates Poison passively, freeing energy for Block",
      ],
      weaknesses: [
        "Slow Act 1 — requires time to establish Poison stacks before damage takes effect",
        "Cannot burst-kill enemies that need to die immediately (e.g. before a lethal attack)",
        "Relies on finding Catalyst — without it Poison damage is insufficient for late bosses",
      ],
    },
    {
      slug: "shiv-generation",
      name: "Shiv Generation",
      rank: 2,
      tagline: "Flood your hand with zero-cost Shivs boosted by Accuracy for high-frequency burst damage.",
      systemicFunction: "High-frequency burst damage utilising zero-cost tokens. Synergises with trigger-on-attack relics to scale defensively while remaining entirely on the offensive.",
      playstyle: "The Shiv Generation engine focuses on the mass production of zero-cost attack tokens. Cards like Blade Dance and Cloak and Dagger flood the player's hand with Shivs. While individually weak at 4 damage each, they synergise aggressively with the Accuracy power, which provides a flat +4 damage bonus to every Shiv played.\n\nFinisher deals damage multiplied by the number of attacks played this turn, making it a powerful finisher after a volley of Shivs. Envenom applies 1 Poison per attack, allowing the Shiv deck to also function as a Poison enabler. The Shuriken relic provides 1 Strength after playing three attacks in a turn, and the Kunai relic provides 1 Dexterity — both trigger repeatedly during a large Shiv volley.",
      coreCards: [
        { name: "Blade Dance", note: "Adds 3 Shivs to hand for 1 energy", isCore: true },
        { name: "Cloak and Dagger", note: "Adds 2 Shivs and grants Block for 1 energy", isCore: true },
        { name: "Accuracy", note: "Each Shiv deals +4 bonus damage — the scaling power", isCore: true },
        { name: "Finisher", note: "Deals damage equal to attacks played this turn — massive burst closer", isCore: true },
        { name: "Envenom", note: "Applies 1 Poison per attack — turns Shiv spam into Poison engine", isCore: false },
        { name: "After Image", note: "Gains 1 Block per card played, exploiting high card volume", isCore: false },
      ],
      keyRelics: [
        { name: "Shuriken", note: "Grants 1 Strength every 3 attacks in a turn", priority: "essential" },
        { name: "Kunai", note: "Grants 1 Dexterity every 3 attacks in a turn", priority: "strong" },
        { name: "Wrist Blade", note: "Zero-cost attacks deal 4 bonus damage — massive buff to all Shivs", priority: "strong" },
      ],
      strengths: [
        "Very high single-turn burst potential with multiple Accuracy stacks",
        "Shuriken/Kunai relics provide permanent scaling each turn",
        "Works well in multi-enemy rooms via After Image block generation",
      ],
      weaknesses: [
        "Heavily reliant on finding Accuracy — without it Shivs are too weak",
        "Requires multiple cards in hand simultaneously to burst effectively",
        "Less effective against high-Block enemies before Accuracy stacks accumulate",
      ],
    },
    {
      slug: "discard-mechanics",
      name: "Discard Mechanics",
      rank: 3,
      tagline: "Rapidly cycle the entire deck through deliberate discards that generate bonus energy and card draw.",
      systemicFunction: "Hyper-efficient deck cycling and energy manipulation. Generates free card draw and action economy by deliberately discarding cards with beneficial discard triggers.",
      playstyle: "The Discard Mechanics engine maximises the Silent's draw capacity by manipulating the game's discard mechanics. Cards like Acrobatics and Calculated Gamble allow rapid deck cycling. By deliberately discarding specific cards like Tactician (which grants 1 Energy when discarded) and Reflex (which draws 3 cards when discarded), the player triggers secondary effects that generate additional energy and card draw.\n\nThis creates a fluid action economy where the player can execute highly extended turns, frequently drawing and playing the entire deck before the adversary can respond. Sneaky Strike becomes a 0-cost attack when played while a card has been discarded this turn, enabling free offensive output during cycling turns. Prepared allows drawing and discarding to filter for the exact card needed.",
      coreCards: [
        { name: "Acrobatics", note: "Draw 3, discard 1 — efficient cycling", isCore: true },
        { name: "Calculated Gamble", note: "Discard entire hand, draw that many cards — massive hand reset", isCore: true },
        { name: "Reflex", note: "When discarded, draw 3 cards — key passive trigger", isCore: true },
        { name: "Tactician", note: "When discarded, gain 1 Energy — enables extended turns", isCore: true },
        { name: "Sneaky Strike", note: "0-cost attack when a card has been discarded this turn", isCore: false },
        { name: "Prepared", note: "Draw 1 and discard 1 for 0 energy — precise deck filtering", isCore: false },
      ],
      keyRelics: [
        { name: "Tingsha", note: "Deals 3 damage to a random enemy per discard — converts discards into damage", priority: "strong" },
        { name: "Tough Bandages", note: "Gains 3 Block per discard — converts discards into defense", priority: "strong" },
        { name: "Nilry's Codex", note: "At the end of each turn, choose 1 of 3 cards to add temporarily to hand", priority: "situational" },
      ],
      strengths: [
        "Extremely consistent — can access specific cards on demand through cycling",
        "Tingsha/Tough Bandages turn every discard into free damage or Block",
        "Can play entire deck in a single turn against bosses",
      ],
      weaknesses: [
        "Requires finding Tactician and Reflex to generate meaningful economy",
        "Fragile against enemies that penalise card draw or hand size",
        "Less powerful without relic support for the discard triggers",
      ],
    },
  ],
};

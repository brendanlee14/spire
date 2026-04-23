import { Character } from "../types";

export const silent: Character = {
  slug: "silent",
  name: "Silent",
  description: "Returns with Poison and Shiv mechanics plus the new Sly keyword — the absolute pinnacle of action economy, playing high-cost cards for free via deliberate discards.",
  accentColor: "#15803d",
  strategies: [
    {
      slug: "sly-action-economy",
      name: "Sly Action Economy",
      rank: 1,
      tagline: "Discard Sly-tagged cards to trigger their effects for free, bypassing all energy costs while cycling the deck at speed.",
      systemicFunction: "Cheats energy costs by discarding high-value cards, triggering them for free while cycling the deck. When combined with discard-reward relics, converts every discard into bonus damage and Block simultaneously.",
      playstyle: "The Sly mechanic represents the absolute pinnacle of action economy manipulation in Slay the Spire 2. It allows the player to play specifically tagged high-cost cards entirely for free, provided those cards are discarded from the hand via another card's effect rather than played manually by spending energy.\n\nTo maximise the Sly engine, the player drafts discard activators like Acrobatics and Dagger Throw. When these cards force the discard of a Sly-enabled card like Survivor or Ricochet, the effect triggers instantaneously. This architecture is exponentially magnified by relics that reward discard actions — Tingsha (3 damage per discard) and Tough Bandages (3 Block per discard) mean every Sly trigger simultaneously contributes to both offence and defence.\n\nHand Trick allows for devastating hybrid archetypes. If a Sly trigger activates massive setup cards like Burst or Adrenaline, the Silent generates enough energy and draw to effectively play their entire hand infinitely, bypassing all energy constraints. Reflex and Flick-Flack both have Sly keyword, providing draw and Block respectively when discarded.",
      coreCards: [
        { name: "Survivor", note: "Sly — gains Block and discards a card when Sly-triggered", isCore: true },
        { name: "Ricochet", note: "Sly — attacks a random enemy when discarded via another card's effect", isCore: true },
        { name: "Acrobatics", note: "Draw 3, discard 1 — primary Sly activator", isCore: true },
        { name: "Dagger Throw", note: "Deal damage and discard 1 — offensive Sly activator", isCore: true },
        { name: "Flick-Flack", note: "Sly — Block and draw when discarded", isCore: true },
        { name: "Reflex", note: "Sly — draws 3 cards when discarded", isCore: false },
        { name: "Hand Trick", note: "Triggers the discard effect of all cards in hand simultaneously", isCore: false },
      ],
      keyRelics: [
        { name: "Tingsha", note: "Deals 3 damage to a random enemy per discard — converts every Sly trigger into damage", priority: "essential" },
        { name: "Tough Bandages", note: "Gains 3 Block per discard — converts every Sly trigger into Block", priority: "essential" },
        { name: "Letter Opener", note: "Deals 5 damage to all enemies after 3 skills are played in a turn", priority: "strong" },
      ],
      strengths: [
        "Effectively bypasses the energy system entirely for Sly-tagged cards",
        "Tingsha + Tough Bandages mean every discard provides both damage and Block for free",
        "Hand Trick can end combats in a single activation with the right setup",
      ],
      weaknesses: [
        "Requires specific Sly-tagged cards — limited pool must be identified and prioritised",
        "Discard activators are needed in hand simultaneously with Sly cards",
        "Less effective in Act 1 before Sly cards are drafted",
      ],
    },
    {
      slug: "poison-attrition",
      name: "Poison Attrition",
      rank: 2,
      tagline: "Stack unblockable Poison then double it with Accelerant — the STS2 upgrade to Catalyst.",
      systemicFunction: "Unmitigable damage over time. Accelerant provides exponential mathematical scaling equivalent to and exceeding STS1's Catalyst, enabling massive Poison values in fewer turns.",
      playstyle: "The Silent returns with her Poison mechanics intact, utilising the new card Accelerant (which doubles Poison stacks, equivalent to STS1's Catalyst) and Corrosive Wave to overwhelm enemies through mathematical attrition. Noxious Fumes passively applies Poison every turn, freeing energy for defensive actions.\n\nMirage applies Poison and creates a copy of itself in the discard pile if the enemy survives, enabling recursive Poison application. Envenom applies 1 Poison per attack, turning Shiv or discard plays into Poison stacks. The Snecko Skull relic causes enemies to lose 1 extra Poison stack per attack, which stacks dramatically with high-attack-frequency turns. Twisted Funnel applies 4 Poison to all enemies at combat start for free, providing an instant baseline.",
      coreCards: [
        { name: "Accelerant", note: "Doubles current Poison stacks — the STS2 equivalent of Catalyst", isCore: true },
        { name: "Bouncing Flask", note: "Applies Poison 3 times across random enemies", isCore: true },
        { name: "Noxious Fumes", note: "Applies 2 Poison per turn automatically — passive engine", isCore: true },
        { name: "Corrosive Wave", note: "Deals damage and applies heavy Poison to all enemies", isCore: true },
        { name: "Envenom", note: "Applies 1 Poison per attack — synergises with Shiv spam", isCore: false },
        { name: "Mirage", note: "Applies Poison; if enemy survives, copies itself to discard pile", isCore: false },
      ],
      keyRelics: [
        { name: "Snecko Skull", note: "Enemies lose 1 extra Poison per attack — synergises with high attack frequency", priority: "strong" },
        { name: "Twisted Funnel", note: "Applies 4 Poison to all enemies at combat start for free", priority: "strong" },
        { name: "Tingsha", note: "Deals 3 damage per discard — supplemental damage pressure alongside Poison", priority: "situational" },
      ],
      strengths: [
        "Accelerant allows achieving lethal Poison levels in very few turns",
        "Noxious Fumes generates free Poison every turn without spending cards",
        "Twisted Funnel gives an immediate head start in every combat",
      ],
      weaknesses: [
        "Cannot immediately deal with enemies that must die this turn",
        "Slow in Act 1 before Poison infrastructure is assembled",
        "Enemies with HP regeneration can outpace Poison damage",
      ],
    },
    {
      slug: "shiv-bursting",
      name: "Shiv Bursting",
      rank: 3,
      tagline: "Generate masses of zero-cost Shivs amplified by Accuracy for high-frequency burst damage and defensive scaling.",
      systemicFunction: "High-frequency zero-cost attacks. Synergises with the Helical Dart relic to provide massive defensive scaling alongside offensive output.",
      playstyle: "The Shiv Generation archetype returns in STS2 with updated support cards. Blade Dance and Cloak and Dagger continue to flood the hand with Shivs. Hidden Daggers is a new addition that generates Shivs passively at the start of each turn. Accuracy remains the primary scaling power, providing +4 damage per Shiv per stack.\n\nFinisher provides the burst closer — dealing damage multiplied by attacks played this turn. The Helical Dart relic is a new STS2 addition that provides 1 Dexterity every time a Shiv is played, meaning a large volley of Shivs can provide massive Block generation for the following turn. Ninja Scroll provides a free Shiv at the start of every turn, building baseline offensive output even before generating more from cards.",
      coreCards: [
        { name: "Blade Dance", note: "Adds 3 Shivs to hand for 1 energy", isCore: true },
        { name: "Cloak and Dagger", note: "Adds 2 Shivs plus Block for 1 energy", isCore: true },
        { name: "Accuracy", note: "Each Shiv deals +4 bonus damage per stack — the scaling power", isCore: true },
        { name: "Finisher", note: "Deals damage multiplied by attacks played this turn — burst closer", isCore: true },
        { name: "Hidden Daggers", note: "Adds 2 Shivs to hand at the start of each turn — passive generation", isCore: false },
      ],
      keyRelics: [
        { name: "Helical Dart", note: "Grants 1 Dexterity per Shiv played — converts offence into massive Block", priority: "essential" },
        { name: "Ninja Scroll", note: "Provides 1 free Shiv at the start of every turn", priority: "strong" },
        { name: "Wrist Blade", note: "Zero-cost attacks deal +4 bonus damage — directly buffs all Shivs", priority: "strong" },
      ],
      strengths: [
        "Helical Dart makes large Shiv volleys generate substantial Block simultaneously",
        "Hidden Daggers provides persistent baseline Shiv generation every turn",
        "Finisher scales explosively with many attacks in a single turn",
      ],
      weaknesses: [
        "Accuracy is mandatory — without it Shivs are individually negligible",
        "Requires multiple cards in hand at once to fully exploit Finisher",
        "Less reliable in Act 1 before Accuracy and generation cards are found",
      ],
    },
  ],
};

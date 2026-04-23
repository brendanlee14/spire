import { Character } from "../types";

export const defect: Character = {
  slug: "defect",
  name: "Defect",
  description: "Returns with refined Orb systems and introduces the Status Manipulation archetype — deliberately polluting the deck with negative cards to trigger powerful scaling synergies.",
  accentColor: "#0284c7",
  strategies: [
    {
      slug: "orb-automation",
      name: "Orb Automation",
      rank: 1,
      tagline: "Amplify all Orb outputs via Focus generation, then end combats with Voltaic as a massive finisher.",
      systemicFunction: "Automated offensive and defensive scaling via Focus generation. Voltaic acts as a massive finisher, converting accumulated orb charges into a single devastating active effect.",
      playstyle: "The Defect returns with its signature Cracked Core relic, providing a free Lightning orb channel at the start of every combat. Orb Automation in STS2 is refined and more focused, with Defragment remaining the primary Focus-building power. Capacitor and Hotfix expand orb slot capacity for holding more orbs simultaneously.\n\nVoltaic is a new STS2 card that acts as a massive finisher — it evokes all orbs simultaneously, converting their stored passive charges into active burst effects. When Focus is high and orb slots are full of Lightning or Dark orbs, a single Voltaic activation can end the combat instantly. Ball Lightning channels a Lightning orb while simultaneously dealing direct damage, providing efficient dual-purpose plays.",
      coreCards: [
        { name: "Defragment", note: "Permanently increases Focus — boosts all orb outputs", isCore: true },
        { name: "Ball Lightning", note: "Deals damage and channels a Lightning orb simultaneously", isCore: true },
        { name: "Capacitor", note: "Adds 2 orb slots permanently", isCore: true },
        { name: "Voltaic", note: "Evokes all orbs simultaneously — massive combat finisher", isCore: true },
        { name: "Cold Snap", note: "Channels a Frost orb and generates Block", isCore: false },
        { name: "Hotfix", note: "Channels a Dark orb and removes negative status effects", isCore: false },
      ],
      keyRelics: [
        { name: "Cracked Core", note: "Starter relic — free Lightning orb channel at the start of every combat", priority: "essential" },
        { name: "Symbiotic Virus", note: "Starts each combat with 1 Dark orb for passive scaling", priority: "strong" },
        { name: "Data Disk", note: "Starts with 1 Focus — immediate boost to all orb outputs", priority: "strong" },
      ],
      strengths: [
        "Voltaic provides an instant win condition once orb slots are full",
        "Automated passive damage from Lightning orbs provides constant pressure",
        "Frost orbs automate Block generation in parallel",
      ],
      weaknesses: [
        "Fragile before Focus is established via Defragment",
        "Voltaic requires having orbs in slots — can be weak if orbs are depleted",
        "Requires multiple setup cards before the engine reaches full output",
      ],
    },
    {
      slug: "status-manipulation",
      name: "Status Manipulation",
      rank: 2,
      tagline: "Deliberately pollute your deck with negative Status cards, then leverage synergy powers that scale explosively when Status cards are drawn or exhausted.",
      systemicFunction: "Intentionally pollutes the deck with status cards to trigger massive scaling synergies when drawn or exhausted, turning statistical disadvantages into a potent energy and damage engine.",
      playstyle: "The Status Manipulation archetype is the primary evolutionary shift for the Defect in STS2. This strategy involves deliberately adding negative status cards — historically viewed as detrimental dead draws that violate basic deckbuilding heuristics — to the deck. By utilising new, highly efficient cards that generate Wounds, Burns, Slimes, or Dazed cards in the deck, the Defect can subsequently leverage specific scaling powers.\n\nThese scaling powers trigger off the presence, drawing, or exhaustion of status effects, turning a statistical disadvantage into a highly potent energy and damage engine. For example, powers that trigger each time a status is drawn provide escalating card draw and energy bonuses — the more status cards accumulated, the more powerful the engine becomes. Relics that trigger upon exhaustion convert status cards being cycled through the deck into automatic damage or Block generation.",
      coreCards: [
        { name: "Skim", note: "Draw 3 cards — efficient cycling to find status-trigger powers quickly", isCore: true },
        { name: "Hologram", note: "Returns a card from discard pile to hand — replays status-generator cards", isCore: false },
        { name: "Glacier", note: "Channels Frost orbs while providing Block — baseline defence during setup", isCore: false },
      ],
      keyRelics: [
        { name: "Cracked Core", note: "Starter relic; free orb channel supplements status engine", priority: "situational" },
        { name: "Inserter", note: "Reduces orb-channelling costs — enables hybrid status plus orb strategy", priority: "situational" },
      ],
      strengths: [
        "Counterintuitive design — opponents who don't know the archetype are surprised by its power",
        "Status cards are free to acquire, keeping the deck lean of energy costs",
        "Scales extraordinarily hard in long boss fights with many status draws",
      ],
      weaknesses: [
        "Requires specific scaling powers to trigger off status draws — highly dependent on finding them",
        "Status cards are dead draws before the scaling powers are played",
        "Most complex archetype in the game — very high skill ceiling to pilot correctly",
      ],
    },
    {
      slug: "claw-recursion",
      name: "Claw Recursion",
      rank: 3,
      tagline: "Replay zero-cost Claws from the discard pile via Hologram and Scrape for exponentially scaling physical damage.",
      systemicFunction: "Aggressive re-playing of zero-cost attacks to rapidly scale damage values exponentially via the Claw damage-increase mechanic.",
      playstyle: "The Claw Recursion build returns from STS1 with refinements. Every time any Claw card is played, all Claw cards in the deck permanently gain +2 damage. With multiple Claw copies and recursion tools, this compounds rapidly.\n\nHologram returns a card from the discard pile to hand for 0 energy — used to replay Claws from discard. Scrape draws 4 cards and exhausts expensive cards, thinning the deck while drawing Claws. Skim provides raw card draw to find Claws quickly. The key difference in STS2 is that various draw relics have been rebalanced, making the Claw loop slightly easier to assemble than in the original game.",
      coreCards: [
        { name: "Claw", note: "0-cost attack that permanently increases all Claw damage by 2 per play", isCore: true },
        { name: "Hologram", note: "Returns a card from discard to hand for 0 energy — replays Claws", isCore: true },
        { name: "Scrape", note: "Draws 4 cards, exhausts 2-cost+ cards — thins and draws simultaneously", isCore: false },
        { name: "Skim", note: "Draws 3 cards efficiently — helps find Claws and All for One", isCore: false },
      ],
      keyRelics: [
        { name: "Cracked Core", note: "Starter relic; free channel provides supplemental orb damage alongside Claw", priority: "situational" },
      ],
      strengths: [
        "No cap on Claw damage — scales indefinitely across a long combat",
        "Zero-cost nature enables massive turns without energy constraints",
        "Self-contained engine — less reliant on external relic support",
      ],
      weaknesses: [
        "Very weak in Act 1 before multiple Claw copies are drafted",
        "All for One costs 3 energy — needs energy relics to play efficiently",
        "Deck must be kept lean to ensure Claws are drawn consistently",
      ],
    },
  ],
};

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
      tagline: "Amplify all Orb outputs via Focus generation and maximise Lightning channels for sustained passive damage.",
      systemicFunction: "Automated offensive and defensive scaling via Focus generation. High Focus multiplies the passive damage of Lightning orbs and the Block of Frost orbs every turn, creating a self-sustaining engine that wins through accumulated pressure.",
      playstyle: "The Defect returns with its signature Cracked Core relic, providing a free Lightning orb channel at the start of every combat. Orb Automation in STS2 is refined and more focused, with Defragment remaining the primary Focus-building power. Capacitor and Modded expand orb slot capacity for holding more orbs simultaneously.\n\nBall Lightning deals direct damage while simultaneously channelling a Lightning orb, providing efficient dual-purpose plays at just 1 energy. Hailstorm is a new STS2 power (replacing the removed Blizzard) that deals passive AoE damage each turn you hold Frost orbs, rewarding a multi-orb-type approach. Cold Snap channels Frost while providing Block, covering defence alongside the offensive Lightning engine. Hologram retrieves key cards from the discard pile for replays.\n\nNote: Electrodynamics was removed from STS2. The strategy now focuses on maximising orb slot count and Focus rather than Lightning-only coverage.",
      coreCards: [
        { name: "Defragment", note: "Permanently increases Focus — boosts all orb passive and evoke outputs", isCore: true },
        { name: "Ball Lightning", note: "1-cost attack: deals 7 damage and channels 1 Lightning orb simultaneously", isCore: true },
        { name: "Capacitor", note: "Adds 2 orb slots permanently — essential for holding more orbs", isCore: true },
        { name: "Cold Snap", note: "Channels a Frost orb while generating Block — covers defence", isCore: false },
        { name: "Hailstorm", note: "Power: at end of turn, if you have Frost, deals 6 AoE damage — passive pressure", isCore: false },
        { name: "Hologram", note: "Gain 3 Block and retrieve a card from discard — replays key pieces", isCore: false },
      ],
      keyRelics: [
        { name: "Cracked Core", note: "Starter relic — free Lightning orb channel at the start of every combat", priority: "essential" },
        { name: "Symbiotic Virus", note: "Starts each combat with 1 Dark orb for passive scaling", priority: "strong" },
        { name: "Data Disk", note: "Starts with 1 Focus — immediate boost to all orb outputs", priority: "strong" },
      ],
      strengths: [
        "High Focus passively multiplies all orb damage and Block output every turn without extra cards played",
        "Automated passive damage from Lightning orbs provides constant pressure between turns",
        "Frost orbs automate Block generation in parallel, covering defence and offence simultaneously",
      ],
      weaknesses: [
        "Fragile before Focus is established via Defragment — early combats rely on raw orb count alone",
        "Requires multiple setup cards (Defragment, Capacitor, orb generators) before the engine reaches full output",
        "Orb slots must be filled consistently — a small deck risks cycling through without enough channels",
      ],
    },
    {
      slug: "status-manipulation",
      name: "Status Manipulation",
      rank: 2,
      tagline: "Deliberately pollute your deck with 0-cost Status generators, then trigger Smokestack and Flak Cannon for explosive AoE damage.",
      systemicFunction: "Intentionally floods the deck with Burn and Dazed status cards using free generation cards, then converts them into massive AoE damage via Smokestack (5 damage per Status created) and Flak Cannon (8 damage per Status exhausted).",
      playstyle: "Status Manipulation is the primary evolutionary shift for the Defect in STS2. The engine runs on two 0-cost status generators: Overclock (draw 2 cards, add a Burn to discard) and Boost Away (gain 6 Block, add a Dazed to discard). Both are free to play and immediately usable, keeping the energy economy intact while steadily polluting the deck.\n\nThe payoffs are Smokestack and Flak Cannon. Smokestack is a Power that deals 5 AoE damage to all enemies every time a Status is created — each Overclock or Boost Away played triggers it immediately. Flak Cannon exhausts all Status cards in hand and deals 8 damage per card to a random enemy, functioning as a massive burst finisher after several Status-heavy cycles.\n\nTrash to Treasure acts as a secondary payoff, channelling a random orb whenever a Status is created, linking the Status engine back into the Orb system for a hybrid approach. Skim provides raw card draw to cycle through the deck rapidly and find Status generators and key powers. The archetype is highly skill-intensive: Status cards are dead draws before Smokestack is played, making the timing of power installation critical.",
      coreCards: [
        { name: "Overclock", note: "0-cost: draw 2 cards and add a Burn to Discard — the primary free Status generator", isCore: true },
        { name: "Boost Away", note: "0-cost: gain 6 Block and add a Dazed to Discard — defensive Status generation", isCore: true },
        { name: "Smokestack", note: "Power: whenever you create a Status, deal 5 damage to ALL enemies — the core scaling payoff", isCore: true },
        { name: "Flak Cannon", note: "Exhaust all Status cards, deal 8 damage to a random enemy per card exhausted — burst finisher", isCore: true },
        { name: "Trash to Treasure", note: "Channels a random orb when a Status is created — links Status engine to Orb system", isCore: false },
        { name: "Skim", note: "Draw 3 cards — rapid cycling to find Status generators and key powers", isCore: false },
      ],
      keyRelics: [
        { name: "Cracked Core", note: "Starter relic; free Lightning channel supplements Smokestack trigger count", priority: "situational" },
        { name: "Inserter", note: "Reduces orb-channelling costs — enables hybrid Status plus Orb strategy via Trash to Treasure", priority: "situational" },
      ],
      strengths: [
        "Overclock and Boost Away are 0-cost — generating Status never loses energy tempo",
        "Smokestack converts each Status generation into immediate AoE pressure with no extra actions",
        "Flak Cannon can instantly close out fights after several Status-heavy cycles",
      ],
      weaknesses: [
        "Entirely dependent on finding Smokestack — Status cards are dead draws without it",
        "Burn damages the player at end of turn if left in hand — requires disciplined cycling",
        "Very high skill ceiling: timing of Smokestack installation and Status generation cadence is critical",
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

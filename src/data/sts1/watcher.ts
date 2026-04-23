import { Character } from "../types";

export const watcher: Character = {
  slug: "watcher",
  name: "Watcher",
  description: "The most mathematically potent character, relying on fluid manipulation of combat Stances to multiply damage output and energy generation.",
  accentColor: "#7c3aed",
  strategies: [
    {
      slug: "stance-dancing",
      name: "Stance Dancing",
      rank: 1,
      tagline: "Generate infinite energy and infinite card draw by deterministically cycling between Wrath and Calm stances.",
      systemicFunction: "Generates infinite energy and card draw through deterministic transitions between Wrath and Calm stances, enabling infinite damage on the first turn of combat.",
      playstyle: "The Stance Dancing engine is the definitive optimal strategy for the Watcher. The character transitions between the Calm stance (which grants 2 Energy upon exiting) and the Wrath stance (which doubles both damage dealt and damage received). By drafting the attack card Tantrum (which shifts the player into Wrath) and pairing it with the power card Rushdown (which draws 2 cards whenever the player enters Wrath), a highly deterministic synergy is formed.\n\nTo complete the infinite loop, the player incorporates one-cost cards that transition the character back into Calm — such as Fear No Evil or Inner Peace. Because exiting Calm provides 2 Energy, and the cycle costs only 2 Energy to execute, the player generates a perfectly neutral energy expenditure while drawing their entire deck. This allows cycling through the specific cards infinitely and dealing effectively unlimited damage on the very first turn of combat. Once Rushdown and Tantrum are both in the deck, virtually every combat against a boss ends on turn one.",
      coreCards: [
        { name: "Tantrum", note: "Enters Wrath stance — triggers Rushdown's draw effect", isCore: true },
        { name: "Rushdown", note: "Draws 2 cards every time Wrath is entered — the infinite draw engine", isCore: true },
        { name: "Fear No Evil", note: "Transitions from Wrath to Calm; used to cycle back and generate 2 Energy", isCore: true },
        { name: "Inner Peace", note: "Alternative Calm-entry card; draws when played outside Calm", isCore: true },
        { name: "Empty Fist", note: "0-cost attack that exits Wrath into No Stance on hit", isCore: false },
        { name: "Tranquility", note: "Enters Calm directly for efficient energy generation", isCore: false },
      ],
      keyRelics: [
        { name: "Violet Lotus", note: "Grants 1 Energy when exiting Calm — makes the infinite loop generate net positive energy", priority: "essential" },
        { name: "Burning Blood", note: "Starter relic equivalent from other characters — not available but Watcher's Ring does similar job", priority: "situational" },
        { name: "Teardrop Locket", note: "Starts every combat in Calm, enabling immediate energy generation on turn 1", priority: "strong" },
      ],
      strengths: [
        "True infinite loop — can deal unlimited damage on turn one against any enemy",
        "Rushdown provides card draw that finds all pieces consistently",
        "Wrath's double damage means even modest attacks are devastating",
      ],
      weaknesses: [
        "Must survive until the infinite loop is assembled — fragile mid-run",
        "Wrath doubles incoming damage — a single error in Wrath can be lethal",
        "Dependent on drawing both Rushdown and Tantrum in the same combat",
      ],
    },
    {
      slug: "retain-and-divinity",
      name: "Retain and Divinity",
      rank: 2,
      tagline: "Hold key cards across turns with Retain, then unleash triple-damage Divinity for an instant execution burst.",
      systemicFunction: "Granular hand management via the Retain keyword. Immediate burst execution via the triple-damage multiplier of Divinity stance, which instantly ends most combats.",
      playstyle: "The Retain and Divinity engine relies on granular hand management. The Retain keyword allows specific cards to remain in the hand between turns, mitigating the randomness of card draw. By retaining powerful, high-cost cards like Sands of Time across multiple turns, the player can set up the exact hand needed for a lethal burst.\n\nThe accumulation of Mantra points (earned through playing specific cards like Consecrate, Worship, and Battle Hymn) allows the character to enter the Divinity stance when reaching 10 Mantra. Divinity provides immediate Energy and triples all damage output. The card Blasphemy allows the player to instantly enter Divinity without accumulating Mantra, acting as a devastating burst execution phase that must end the combat immediately — the card mandates the player dies at the beginning of their next turn. Meditate re-enters Calm stance to bank the 2-Energy reward.",
      coreCards: [
        { name: "Blasphemy", note: "Instantly enters Divinity; player dies next turn — must kill on that turn", isCore: true },
        { name: "Sands of Time", note: "High-cost Retain attack that costs 0 if not played for a turn", isCore: true },
        { name: "Battle Hymn", note: "Generates a free Smite every turn — accumulates Mantra passively", isCore: true },
        { name: "Meditate", note: "Enters Calm stance and Retains 1 card — consolidates setup", isCore: false },
        { name: "Smite", note: "Retained attack generated by Battle Hymn — bonus damage while Mantra builds", isCore: false },
        { name: "Worship", note: "Gains 5 Mantra quickly — accelerates Divinity entry", isCore: false },
      ],
      keyRelics: [
        { name: "Establishment", note: "Retained cards cost 1 less Energy — makes Sands of Time free every turn", priority: "essential" },
        { name: "Burning Blood", note: "Not available to Watcher; equivalent healing via Mango or other relics", priority: "situational" },
      ],
      strengths: [
        "Divinity's triple damage multiplier ends most combats in one burst turn",
        "Retain removes variance — the player always has the right cards",
        "Battle Hymn provides consistent free cards and Mantra accumulation",
      ],
      weaknesses: [
        "Blasphemy is a hard fail state if the kill is not secured in that turn",
        "Requires multiple specific cards working together simultaneously",
        "Slower setup than Stance Dancing — less effective in multi-phase boss fights",
      ],
    },
    {
      slug: "omni-wish-scaling",
      name: "Omni-Wish Scaling",
      rank: 3,
      tagline: "Chain Wish cards into themselves for infinite Gold, or use Omniscience to play massive powers for free.",
      systemicFunction: "High-cost manipulation. Plays massive powers for free via Omniscience or generates infinite Gold via chained Wish cards — providing run-defining economic advantages.",
      playstyle: "The Omni-Wish Scaling archetype manipulates high-cost cards that would normally be unplayable in a single turn. Omniscience is a rare power that plays the next card for free, ignoring its energy cost. When played before an expensive power like Deva Form (which provides ever-increasing Energy per turn) or a 3-cost finisher, it provides effectively free run-defining power.\n\nWish is a unique card that grants one of three effects: gain 3 Gold, gain 3 Energy, or gain 10 Max HP. When chained with the Fasting card (which reduces maximum Energy but allows Wish to be played more times due to reduced energy drain), the deck can theoretically generate unlimited Gold over a run by finding Wish rewards at merchants. Snecko Eye, by randomising card costs, can reduce these high-cost cards to 0 or 1 Energy, making the archetype more consistent.",
      coreCards: [
        { name: "Omniscience", note: "Plays the next card for free — used to bypass expensive power costs", isCore: true },
        { name: "Wish", note: "Choose from 3 boons (Gold, Energy, HP); chains into itself when energy allows", isCore: true },
        { name: "Deva Form", note: "Gains increasing Energy each turn — the payoff for Omniscience", isCore: true },
        { name: "Fasting", note: "Reduces Max Energy but provides powerful stat bonuses; combos with Wish economy", isCore: false },
      ],
      keyRelics: [
        { name: "Snecko Eye", note: "Randomises card costs 0–3 — statistically reduces high-cost card costs dramatically", priority: "strong" },
        { name: "Pantograph", note: "Heals 25 HP when a boss is defeated — sustains aggressive path", priority: "situational" },
      ],
      strengths: [
        "Deva Form makes all future turns nearly infinite in energy",
        "Wish chains provide near-unlimited economic advantages across the run",
        "Omniscience bypasses energy constraints for the highest-cost power cards",
      ],
      weaknesses: [
        "Requires finding Omniscience and a worthy high-cost target simultaneously",
        "Snecko Eye can also make cheap cards cost 3 Energy — creates inconsistency",
        "Weakest in Act 1 before any of the high-cost pieces are assembled",
      ],
    },
  ],
};

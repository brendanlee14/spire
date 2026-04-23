import { Character } from "../types";

export const defect: Character = {
  slug: "defect",
  name: "Defect",
  description: "A decommissioned robot who manipulates Orbs — energy constructs that provide passive end-of-turn effects or powerful burst effects when evoked.",
  accentColor: "#0284c7",
  strategies: [
    {
      slug: "lightning-automation",
      name: "Lightning Automation",
      rank: 1,
      tagline: "Channel Lightning Orbs boosted by Focus to passively shred enemies, then unleash all foes at once with Electrodynamics.",
      systemicFunction: "Automated passive damage generation that scales with Focus. Clears multi-enemy encounters effortlessly once Electrodynamics converts targeted Lightning into area-of-effect damage.",
      playstyle: "Lightning Automation is the most common and structurally supported archetype for the Defect. Lightning orbs deal random passive damage at the end of the turn. By utilising the Defragment power to increase the Focus stat, the mathematical output of all orbs is permanently enhanced.\n\nWhen paired with the Electrodynamics rare card, which forces all Lightning orbs to damage every enemy simultaneously instead of a single random target, the Defect can effortlessly dismantle multi-enemy encounters in late-game acts. Zap channels Lightning orbs efficiently. Capacitor adds extra orb slots to hold more orbs simultaneously. Storm generates a Lightning orb every time a Power card is played, enabling rapid orb accumulation.",
      coreCards: [
        { name: "Defragment", note: "Permanently increases Focus, boosting all orb outputs", isCore: true },
        { name: "Electrodynamics", note: "All Lightning Orbs hit all enemies simultaneously — the key AoE enabler", isCore: true },
        { name: "Zap", note: "Channels a Lightning orb efficiently for 1 energy", isCore: true },
        { name: "Capacitor", note: "Adds 2 orb slots permanently, allowing more orbs to be held", isCore: true },
        { name: "Storm", note: "Channels a Lightning orb every time a Power is played", isCore: false },
        { name: "Ball Lightning", note: "Deals damage and channels a Lightning orb simultaneously", isCore: false },
      ],
      keyRelics: [
        { name: "Cracked Core", note: "Starter relic — channels a Lightning orb at the start of every combat for free", priority: "essential" },
        { name: "Symbiotic Virus", note: "Starts each combat with 1 additional Dark orb, providing passive scaling", priority: "strong" },
        { name: "Data Disk", note: "Starts each combat with 1 Focus, boosting all orb output immediately", priority: "strong" },
      ],
      strengths: [
        "Passive damage generates value without spending card plays",
        "Electrodynamics trivialises multi-enemy rooms in Acts 2 and 3",
        "Scales indefinitely via Defragment stacking",
      ],
      weaknesses: [
        "Weak against single high-health enemies early before Focus is established",
        "Requires finding Electrodynamics to reach full potential",
        "Orb slots can be overwritten if the player isn't careful",
      ],
    },
    {
      slug: "frost-mitigation",
      name: "Frost Mitigation",
      rank: 2,
      tagline: "Stack Frost Orbs for automated Block generation, then cash out with Blizzard for scaling damage.",
      systemicFunction: "Exponential automated Block scaling. Converts defensive orb holding into offensive damage via Blizzard, which scales with total Frost orbs channelled during combat.",
      playstyle: "Frost orbs generate passive Block at the end of the turn. By utilising cards like Glacier to rapidly channel multiple Frost orbs simultaneously and Capacitor to increase the total number of available orb slots, the Defect can automate the job of frontloaded Block. This allows the player to utilise their entire energy pool for offensive manoeuvres or setting up the Blizzard card.\n\nBlizzard deals damage scaling directly with the total number of Frost orbs channelled throughout the entirety of the combat. Coolheaded provides free Frost channelling plus card draw. The Inserter relic reduces the cost of orb-channelling cards. Consume sacrifices orb slots permanently but massively increases Focus — optimal when orb slots are excess to requirements.",
      coreCards: [
        { name: "Glacier", note: "Channels 2 Frost orbs and gains 7 Block for 2 energy", isCore: true },
        { name: "Cold Snap", note: "Efficient Frost channelling plus Block generation", isCore: true },
        { name: "Blizzard", note: "Deals damage equal to Frost orbs channelled this combat — the win condition", isCore: true },
        { name: "Coolheaded", note: "Channels a Frost orb and draws a card for 0 energy", isCore: true },
        { name: "Capacitor", note: "Adds orb slots to hold more Frost orbs simultaneously", isCore: false },
        { name: "Consume", note: "Sacrifices 1 orb slot permanently for +2 Focus", isCore: false },
      ],
      keyRelics: [
        { name: "Data Disk", note: "Starts with 1 Focus — boosts Frost Block output immediately", priority: "strong" },
        { name: "Inserter", note: "Every 2 turns reduces the cost of channelling orbs by 1", priority: "strong" },
        { name: "Cracked Core", note: "Starter relic providing a free orb channel at combat start", priority: "essential" },
      ],
      strengths: [
        "Block generation is entirely automated, freeing energy for offence",
        "Blizzard scales non-linearly in long fights against bosses",
        "Strong against enemies that deal multiple hits per turn",
      ],
      weaknesses: [
        "Blizzard damage is low early before enough Frost orbs are channelled",
        "Vulnerable to enemies that remove orbs or debuff Focus",
        "Less effective than Lightning in multi-enemy rooms",
      ],
    },
    {
      slug: "zero-cost-recursion",
      name: "Zero-Cost Recursion (Claw)",
      rank: 3,
      tagline: "Bypass orbs entirely — repeatedly cycle zero-cost Claws that permanently scale in damage each play.",
      systemicFunction: "Bypasses the orb mechanic to repeatedly cycle and scale zero-cost physical attacks, creating exponential damage growth through deck recursion.",
      playstyle: "The Zero-Cost Recursion engine, commonly referred to as the 'Claw build', frequently ignores the orb mechanics entirely. This synergy relies on the Claw card — a zero-cost attack that permanently increases the damage of all Claw cards in the deck by 2 every time any Claw is played. Stacking multiple copies of Claw in the deck maximises this scaling effect.\n\nThe primary enabler is All for One, which retrieves all zero-cost cards from the discard pile and returns them to the player's hand simultaneously. By chaining All for One with Hologram (which allows the player to retrieve a card from the discard pile into their hand for free) and Scrape (which draws 4 cards and exhausts all cards drawn that cost 2 or more), the Defect can establish recursive loops that scale Claw damage exponentially. The Unceasing Top relic generates additional card draws whenever the hand is empty, which frequently occurs during zero-cost chain turns.",
      coreCards: [
        { name: "Claw", note: "0-cost attack that permanently increases ALL Claw damage by 2 per play", isCore: true },
        { name: "All for One", note: "Retrieves all 0-cost cards from discard pile to hand — enables recursion", isCore: true },
        { name: "Hologram", note: "Returns a card from discard pile to hand for 0 energy", isCore: false },
        { name: "Scrape", note: "Draws 4, exhausts expensive cards — thins while drawing", isCore: false },
        { name: "Go for the Eyes", note: "0-cost attack that applies Weak — synergises with zero-cost synergies", isCore: false },
      ],
      keyRelics: [
        { name: "Unceasing Top", note: "Draws a card whenever the hand is empty during your turn — enables extended zero-cost chains", priority: "essential" },
        { name: "Cracked Core", note: "Starter relic providing free orb channel — minimal synergy but free value", priority: "situational" },
      ],
      strengths: [
        "Claw damage grows unlimited with enough plays and deck copies",
        "Zero-cost nature means the entire hand can be played in one turn",
        "Independent of Focus — ignores enemy Focus-debuff mechanics",
      ],
      weaknesses: [
        "Very weak early before Claw has been played many times",
        "Requires multiple Claw copies plus recursion cards — draws can be inconsistent",
        "All for One costs 3 energy — requires energy generation to use efficiently",
      ],
    },
  ],
};

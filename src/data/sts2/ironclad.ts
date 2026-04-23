import { Character } from "../types";

export const ironclad: Character = {
  slug: "ironclad",
  name: "Ironclad",
  description: "The aggressive anchor of the sequel's roster — retains Burning Blood and Exhaust synergies, now with a powerful focus on Vulnerable exploitation.",
  accentColor: "#c2410c",
  strategies: [
    {
      slug: "vulnerable-exploitation",
      name: "Vulnerable Exploitation",
      rank: 1,
      tagline: "Apply Vulnerable to amplify all damage by 50–75%, then chain Dominate for an inevitable strength-scaling win condition.",
      systemicFunction: "Exponential damage scaling through debuff application. Dominate links Strength generation to Vulnerable stacks, creating an inevitable escalation designed to crush high-health bosses.",
      playstyle: "Vulnerable causes enemies to take 50% more mathematical damage from all attacks. In Slay the Spire 2, this status effect is integrated seamlessly into the Ironclad's draw and Block action economy. The early game relies on upgrading the starting card Bash and rapidly acquiring Molten Fist to double the Vulnerable duration applied each turn.\n\nThe late-game execution sequence is heavily reliant on Dominate, which provides an alternate scaling win condition by linking Strength generation directly to Vulnerable stacks. Each Vulnerable stack on an enemy generates bonus Strength for the player, creating an inevitable escalation of force designed to crush high-health bosses. Cruelty applies Vulnerable with extra stacks and is the highest-value applicator. The acquisition of the Paper Phrog relic, which permanently amplifies Vulnerable damage from 50% to 75%, is considered a mandatory win condition for this archetype.",
      coreCards: [
        { name: "Bash", note: "Starter card; applies Vulnerable — upgrade immediately for extended duration", isCore: true },
        { name: "Molten Fist", note: "Doubles the Vulnerable duration applied this turn — essential amplifier", isCore: true },
        { name: "Dominate", note: "Generates Strength equal to Vulnerable stacks on the enemy — the long-term win condition", isCore: true },
        { name: "Cruelty", note: "High-stack Vulnerable applicator; best single-card vulnerability source", isCore: true },
        { name: "Taunt", note: "Applies Vulnerable to all enemies — critical in multi-enemy rooms", isCore: false },
        { name: "Uppercut", note: "Deals damage, applies Weak and Vulnerable simultaneously", isCore: false },
      ],
      keyRelics: [
        { name: "Paper Phrog", note: "Amplifies Vulnerable from 50% to 75% extra damage — mandatory win condition", priority: "essential" },
        { name: "Red Skull", note: "Grants 3 Strength when at or below 50% HP — enables high-risk aggression", priority: "strong" },
        { name: "Ruined Helmet", note: "Draws 1 extra card each turn — improves access to Vulnerable applicators", priority: "strong" },
        { name: "Burning Blood", note: "Starter relic; heals 6 HP post-combat, enabling aggressive early pathing", priority: "essential" },
      ],
      strengths: [
        "Paper Phrog makes Vulnerable the most efficient damage amplifier in the game",
        "Dominate creates inevitable Strength scaling that overwhelms any boss",
        "Bash available from turn 1 — archetype is active from the start of every run",
      ],
      weaknesses: [
        "Requires Paper Phrog to reach maximum potential — situational dependency",
        "Enemies immune to Vulnerable entirely negate this strategy",
        "Weaker against fast enemies that must be killed before Dominate scales",
      ],
    },
    {
      slug: "body-slam-mitigation",
      name: "Body Slam Mitigation",
      rank: 2,
      tagline: "Stack massive permanent Block pools then convert them into offensive damage with Body Slam.",
      systemicFunction: "Converts massive defensive Block pools directly into offensive output. Highly consistent survival archetype that merges both defensive and offensive jobs into a single resource.",
      playstyle: "The Body Slam Mitigation archetype builds on the original's Block Optimisation strategy. Shrug It Off, Blood Wall, and Flame Barrier provide efficient, cost-effective Block generation each turn. Unmovable and Impervious add large burst Block when needed against telegraphed heavy attacks.\n\nOnce a significant Block pool is accumulated — particularly with Anchor relic's free 10 Block at combat start — Body Slam converts the entire defensive pool into a single offensive attack. The Parrying Shield relic permanently increases the player's Defence stat, passively increasing all Block values. This archetype is the most survivable option for the Ironclad in STS2 and excels at runs where Vulnerable exploitation is unavailable.",
      coreCards: [
        { name: "Body Slam", note: "Deals damage equal to current Block — the offensive finisher", isCore: true },
        { name: "Shrug It Off", note: "Efficient 1-cost Block plus card draw", isCore: true },
        { name: "Blood Wall", note: "Large Block generation that scales with max HP", isCore: true },
        { name: "Flame Barrier", note: "Block generation with retaliatory damage on attacks", isCore: true },
        { name: "Impervious", note: "30 Block for 2 energy — burst defensive play", isCore: false },
        { name: "Unmovable", note: "Block that cannot be reduced by enemy effects this turn", isCore: false },
      ],
      keyRelics: [
        { name: "Anchor", note: "Grants 10 Block at the start of every combat for free", priority: "essential" },
        { name: "Horn Cleat", note: "Grants 14 Block at start of Act 2 if used on first 3 turns", priority: "strong" },
        { name: "Parrying Shield", note: "Permanently increases Defence stat — all Block values scale up", priority: "strong" },
        { name: "Burning Blood", note: "Starter relic; heals post-combat to compensate for any Block failures", priority: "essential" },
      ],
      strengths: [
        "Extremely tanky — almost impossible to kill in late game",
        "Body Slam provides reliable single-card kill condition",
        "Consistent across all enemy types regardless of debuff immunity",
      ],
      weaknesses: [
        "Requires Body Slam to convert Block into damage — without it, no kill condition",
        "Enemies that strip Block negate the entire strategy",
        "Slower kills than Vulnerable Exploitation against bosses",
      ],
    },
    {
      slug: "exhaust-deck-thinning",
      name: "Exhaust Deck Thinning",
      rank: 3,
      tagline: "Exhaust low-value cards mid-combat to guarantee drawing your lethal combinations every turn.",
      systemicFunction: "High skill-ceiling deck refinement. Eliminates low-value cards mid-combat to guarantee drawing lethal combos, with Ashen Strike providing extra offensive output during the exhaust process.",
      playstyle: "The Exhaust Deck Thinning archetype returns in refined form for STS2. Burning Pact allows the player to exhaust any card and draw 2 replacements — the primary deck thinning and card draw tool. True Grit exhausts a random card while generating Block, providing defensive value during the thinning process.\n\nFeel No Pain generates Block every time a card is exhausted, ensuring survival during the thinning phase. Corruption makes all Skills 0-cost while causing them to exhaust, enabling rapid deck cycling. Ashen Strike is a new addition — it deals damage and applies Burning status to a discarded or exhausted card, providing extra offensive pressure during the setup phase. The combination of Charon's Ashes (deals 3 damage to all enemies per exhaust) with a high-exhaust turn creates massive area-of-effect damage.",
      coreCards: [
        { name: "Burning Pact", note: "Exhaust 1 card, draw 2 — primary deck thinning tool", isCore: true },
        { name: "Feel No Pain", note: "Generates Block per exhaust — essential survival during thinning", isCore: true },
        { name: "Corruption", note: "All Skills cost 0 and exhaust — enables mass cycling", isCore: true },
        { name: "True Grit", note: "Random exhaust plus Block — efficient defensive thinning", isCore: false },
        { name: "Ashen Strike", note: "Damage plus Burning on exhaust/discard — offensive exhaust trigger", isCore: false },
      ],
      keyRelics: [
        { name: "Charon's Ashes", note: "Deals 3 damage to all enemies per exhaust — converts exhaust into AoE damage", priority: "essential" },
        { name: "Joss Paper", note: "Provides Gold whenever a card is exhausted", priority: "situational" },
        { name: "Burning Blood", note: "Starter relic; healing supports aggressive play before the engine is assembled", priority: "essential" },
      ],
      strengths: [
        "Deck becomes extremely lean and consistent as the run progresses",
        "Charon's Ashes turns every Corruption activation into AoE damage",
        "Flexibility — can be combined with either Vulnerable or Body Slam as the win condition",
      ],
      weaknesses: [
        "Weakest before Corruption and exhaust synergies are assembled",
        "Random exhaust from True Grit can exhaust important cards",
        "High complexity — requires precise sequencing of exhaust triggers",
      ],
    },
  ],
};

import { CardEntry } from "@/data/types";

interface CardListProps {
  cards: CardEntry[];
  accentColor: string;
}

export default function CardList({ cards, accentColor }: CardListProps) {
  const coreCards = cards.filter((c) => c.isCore);
  const supportCards = cards.filter((c) => !c.isCore);

  return (
    <div className="space-y-5">
      {coreCards.length > 0 && (
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-stone-500 mb-3">
            Core Cards
          </h4>
          <div className="space-y-2">
            {coreCards.map((card) => (
              <CardItem key={card.name} card={card} accentColor={accentColor} isCore />
            ))}
          </div>
        </div>
      )}

      {supportCards.length > 0 && (
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-stone-500 mb-3">
            Strong Pickups
          </h4>
          <div className="space-y-2">
            {supportCards.map((card) => (
              <CardItem key={card.name} card={card} accentColor={accentColor} isCore={false} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function CardItem({
  card,
  accentColor,
  isCore,
}: {
  card: CardEntry;
  accentColor: string;
  isCore: boolean;
}) {
  return (
    <div className="flex items-start gap-3 p-3 rounded-lg bg-dungeon-800 border border-dungeon-700">
      <div
        className="w-1 self-stretch rounded-full shrink-0"
        style={{ backgroundColor: isCore ? accentColor : "#44403c" }}
      />
      <div className="flex-1 min-w-0">
        <span className="font-semibold text-stone-200 text-sm">{card.name}</span>
        {card.note && (
          <p className="text-stone-500 text-xs mt-0.5 leading-relaxed">{card.note}</p>
        )}
      </div>
    </div>
  );
}

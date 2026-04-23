import Link from "next/link";

interface Crumb {
  label: string;
  href?: string;
}

interface GameHeaderProps {
  crumbs: Crumb[];
  accentClass?: string;
}

export default function GameHeader({ crumbs, accentClass = "text-stone-400" }: GameHeaderProps) {
  return (
    <nav className="flex items-center gap-1.5 text-sm text-stone-500 flex-wrap py-4 px-4 md:px-8">
      {crumbs.map((crumb, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 && <span className="text-stone-700 select-none">›</span>}
          {crumb.href ? (
            <Link
              href={crumb.href}
              className={`hover:text-stone-200 transition-colors ${accentClass === "text-stone-400" ? "" : "hover:" + accentClass}`}
            >
              {crumb.label}
            </Link>
          ) : (
            <span className="text-stone-300">{crumb.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

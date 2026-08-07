import { Badge } from "../Badge";

type SectionHeaderProps = {
  title: string;
  highlightedTitle: string;
  description: string;
  badge: string;
  heading: "h2" | "h3" | "h4" | "h5" | "h6";
  children?: React.ReactNode;
  className?: string;
  classNameBadge?: string;
};

export function SectionHeader({
  title,
  highlightedTitle,
  description,
  badge,
  heading,
  children,
  className = "mx-auto max-w-2xl text-center",
  classNameBadge = "bg-brand-soft ",
}: SectionHeaderProps) {
  const Heading = heading;
  return (
    <div className={className}>
      <Badge text={badge} className={classNameBadge} />
      <Heading
        id="how-it-works-title"
        className="mt-6 text-3xl leading-tight font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
      >
        {title} <span className="text-brand">{highlightedTitle}</span>
      </Heading>

      <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg whitespace-pre-line">
        {description}
      </p>
      {children}
    </div>
  );
}

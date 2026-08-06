import type { HowItWorksCardProps } from "../../types";

export function CardHowItWorks({
  icon,
  step,
  title,
  description,
}: HowItWorksCardProps) {
  const Icon = icon;
  return (
    <article className="relative rounded-lg border border-border bg-surface p-6 shadow-soft transition duration-200 hover:-translate-y-1 hover:border-brand-muted hover:shadow-elevated">
      <div className="relative z-10 flex size-12 items-center justify-center rounded-md border border-brand-muted bg-brand-soft text-brand">
        <Icon size={22} aria-hidden="true" />
      </div>

      <span className="mt-8 block text-sm font-bold tracking-wider text-brand">
        {step}
      </span>

      <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-muted-foreground">{description}</p>
    </article>
  );
}

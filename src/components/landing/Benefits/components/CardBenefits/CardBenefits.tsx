import type { BenefitsCardProps } from "../../types";

export function CardBenefits({ icon, title, description }: BenefitsCardProps) {
  const Icon = icon;
  return (
    <article className="rounded-lg border border-border bg-surface p-6 shadow-soft transition duration-200 hover:-translate-y-1 hover:border-brand-muted hover:shadow-elevated">
      <div className="flex size-11 items-center justify-center rounded-md bg-brand-soft text-brand">
        <Icon size={21} aria-hidden="true" />
      </div>

      <h3 className="mt-5 text-lg font-semibold text-foreground">{title}</h3>

      <p className="mt-3 leading-7 text-muted-foreground">{description}</p>
    </article>
  );
}

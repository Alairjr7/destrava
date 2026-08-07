import { Check, X } from "lucide-react";

export type FeatureListItems = {
  description: string;
};

type FeatureListProps = {
  title: string;
  checked: boolean;
  items: FeatureListItems[];
};

export function FeatureList({ title, checked, items }: FeatureListProps) {
  const Icon = checked ? Check : X;
  return (
    <article className="rounded-lg border border-border bg-surface p-6 shadow-soft ">
      <div
        className={`flex size-11 items-center justify-center rounded-md  ${checked ? "text-success bg-success-soft" : "text-danger bg-danger-soft"}`}
      >
        <Icon size={21} aria-hidden="true" />
      </div>

      <h3 className="mt-5 text-lg font-semibold text-foreground">{title}</h3>

      <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
        {items.map((item, index) => {
          const Icon = checked ? Check : X;
          const description = item.description;

          return (
            <li className="flex items-start gap-3" key={index}>
              <Icon
                size={17}
                className={`${checked ? "mt-1 shrink-0 text-success" : "mt-1 shrink-0 text-danger"}`}
                aria-hidden="true"
              />
              {description}
            </li>
          );
        })}
      </ul>
    </article>
  );
}

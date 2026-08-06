type BadgeProps = {
  text: string;
};

export function Badge({ text = "" }: BadgeProps) {
  return (
    <span className="inline-flex rounded-full border border-brand-muted bg-brand-soft px-3 py-1.5 text-sm font-semibold text-brand">
      {text}
    </span>
  );
}

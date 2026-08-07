type BadgeProps = {
  text: string;
  className?: string;
};

export function Badge({ text = "", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex rounded-full border border-brand-muted px-3 py-1.5 text-sm font-semibold text-brand ${className}`}
    >
      {text}
    </span>
  );
}

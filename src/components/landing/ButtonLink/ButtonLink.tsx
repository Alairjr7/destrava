type ButtonLinkProps = {
  href: string;
  icon: React.ElementType;
  children: React.ReactNode;
};

export function ButtonLink({ href, icon, children }: ButtonLinkProps) {
  const Icon = icon;
  return (
    <a
      href={href}
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-brand px-6 text-sm font-semibold text-white transition-colors duration-200 hover:bg-brand-hover active:bg-brand-active"
    >
      {children}
      <Icon size={18} aria-hidden="true" />
    </a>
  );
}

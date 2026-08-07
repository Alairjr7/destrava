type ButtonLinkProps = {
  href: string;
  icon: React.ElementType;
  children: React.ReactNode;
  className?: string;
};

export function ButtonLink({
  href,
  icon,
  children,
  className,
}: ButtonLinkProps) {
  const Icon = icon;
  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-brand px-6 text-sm font-semibold text-white transition-colors duration-200 hover:bg-brand-hover active:bg-brand-active ${className}`}
    
    >
      {children}
      <Icon size={18} aria-hidden="true" />
    </a>
  );
}

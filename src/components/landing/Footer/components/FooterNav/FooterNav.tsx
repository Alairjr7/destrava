export type FooterNavLink = {
  href: string;
  description: string;
};

type FooterNavProps = {
  label: string;
  title: string;
  links: FooterNavLink[];
};

export function FooterNav({ label, title, links }: FooterNavProps) {
  return (
    <nav aria-labelledby={label}>
      <h2 id={label} className="text-sm font-semibold text-foreground">
        {title}
      </h2>

      <ul className="mt-4 space-y-3">
        {links.map((link, index) => {
          const href = link.href;
          const description = link.description;
          return (
            <li key={index}>
              <a
                href={href}
                className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
              >
                {description}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

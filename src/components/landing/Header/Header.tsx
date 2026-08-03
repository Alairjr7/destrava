import { Menu, X } from "lucide-react";
import { useState } from "react";

const navigationLinks = [
  {
    label: "Como funciona",
    href: "#como-funciona",
  },
  {
    label: "Benefícios",
    href: "#benefícios",
  },
  {
    label: "Sobre",
    href: "#sobre",
  },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="border-b border-border bg-surface">
      <div className="app-container">
        <div className="flex min-h-18 items-center justify-between gap-6">
          <a
            href="#"
            className="text-xl font-bold tracking-tight text-foreground"
            aria-label="Destrava — voltar ao início"
            onClick={closeMenu}
          >
            Destrava<span className="text-brand">.</span>
          </a>

          <nav className="hidden md:block" aria-label="Navegação principal">
            <ul className="flex items-center gap-8">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="/login"
              className="rounded-md px-4 py-2.5 text-sm font-semibold text-foreground transition-colors duration-200 hover:bg-surface-muted"
            >
              Entrar
            </a>

            <a
              href="/cadastro"
              className="rounded-md bg-brand px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-brand-hover active:bg-brand-active"
            >
              Começar agora
            </a>
          </div>

          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-md border border-border text-foreground transition-colors duration-200 hover:bg-surface-muted md:hidden"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((currentState) => !currentState)}
          >
            {isMenuOpen ? (
              <X size={20} aria-hidden="true" />
            ) : (
              <Menu size={20} aria-hidden="true" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <nav
            id="mobile-navigation"
            className="border-t border-border py-5 md:hidden"
            aria-label="Navegação mobile"
          >
            <ul className="flex flex-col gap-1">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block rounded-md px-3 py-3 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:bg-surface-muted hover:text-foreground"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-col gap-3 border-t border-border pt-5">
              <a
                href="/login"
                className="flex min-h-11 items-center justify-center rounded-md border border-border px-4 text-sm font-semibold text-foreground transition-colors duration-200 hover:bg-surface-muted"
                onClick={closeMenu}
              >
                Entrar
              </a>

              <a
                href="/cadastro"
                className="flex min-h-11 items-center justify-center rounded-md bg-brand px-4 text-sm font-semibold text-white transition-colors duration-200 hover:bg-brand-hover active:bg-brand-active"
                onClick={closeMenu}
              >
                Começar agora
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

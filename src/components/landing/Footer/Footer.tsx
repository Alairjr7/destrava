import {
  FooterNav,
  type FooterNavLink,
} from "./components/FooterNav/FooterNav";

export function Footer() {
  type FooterNavData = {
    product: FooterNavLink[];
    account: FooterNavLink[];
  };

  const FooterData: FooterNavData = {
    product: [
      {
        href: "#como-funciona",
        description: "Como funciona",
      },
      {
        href: "#beneficios",
        description: "Benefícios",
      },
      {
        href: "#sobre",
        description: "Sobre",
      },
      {
        href: "/cadastro",
        description: "Começar agora",
      },
    ],
    account: [
      {
        href: "/login",
        description: "Entrar",
      },
      {
        href: "/cadastro",
        description: "Criar conta",
      },
      {
        href: "/recuperar-senha",
        description: "Recuperar senha",
      },
    ],
  };

  return (
    <footer className="border-t border-border bg-surface">
      <div className="app-container">
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr] lg:gap-16 lg:py-16">
          <div className="max-w-md">
            <a
              href="#"
              className="inline-flex text-xl font-bold tracking-tight text-foreground"
              aria-label="Destrava — voltar ao início"
            >
              Destrava<span className="text-brand">.</span>
            </a>

            <p className="mt-4 leading-7 text-muted-foreground">
              Transforme tarefas difíceis em pequenos passos e descubra com
              clareza o que fazer agora.
            </p>

            <p className="mt-6 text-sm font-medium text-foreground">
              A menor ação sempre vence a maior intenção.
            </p>
          </div>

          <FooterNav
            label="footer-product-title"
            title="Produto"
            links={FooterData.product}
          />

          <FooterNav
            label="footer-account-title"
            title="Conta"
            links={FooterData.account}
          />
        </div>

        <div className="flex flex-col gap-4 border-t border-border py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Destrava. Todos os direitos reservados.</p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a
              href="/privacidade"
              className="transition-colors duration-200 hover:text-foreground"
            >
              Privacidade
            </a>

            <a
              href="/termos"
              className="transition-colors duration-200 hover:text-foreground"
            >
              Termos de uso
            </a>

            <a
              href="https://github.com/Alairjr7"
              target="_blank"
              rel="noreferrer"
              className="transition-colors duration-200 hover:text-foreground"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

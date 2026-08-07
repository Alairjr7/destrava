import { ArrowRight } from "lucide-react";
import { SectionHeader } from "../SectionHeader";
import { ButtonLink } from "../ButtonLink";

export function FinalCta() {
  return (
    <section className="section-spacing" aria-labelledby="final-cta-title">
      <div className="app-container">
        <div className="relative overflow-hidden rounded-xl border border-brand-muted bg-brand-soft px-6 py-12 sm:px-10 lg:px-16 lg:py-16">
          <div
            aria-hidden="true"
            className="absolute -top-24 -right-20 size-72 rounded-full bg-brand-muted/60 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-28 -left-20 size-64 rounded-full bg-surface blur-3xl"
          />
          <SectionHeader
            badge="Um passo de cada vez"
            classNameBadge="bg-surface "
            heading="h2"
            title="Sua tarefa não precisa ficar menor."
            highlightedTitle="O próximo passo precisa ficar mais claro."
            description="Comece com uma tarefa difícil e transforme o que parece pesado em
              uma sequência simples de ações possíveis."
            className="relative mx-auto max-w-3xl text-center"
          >
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink
                href="/cadastro"
                icon={ArrowRight}
                className="  w-full sm:w-auto"
              >
                Começar agora
              </ButtonLink>

              <a
                href="#como-funciona"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-md border border-border-strong bg-surface px-6 text-sm font-semibold text-foreground transition-colors duration-200 hover:bg-surface-muted sm:w-auto"
              >
                Rever como funciona
              </a>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Sem configurações complicadas. Comece apenas pelo que está te
              bloqueando agora.
            </p>
          </SectionHeader>
        </div>
      </div>
    </section>
  );
}

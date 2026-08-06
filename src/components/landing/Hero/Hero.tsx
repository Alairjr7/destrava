import { ArrowRight } from "lucide-react";
import { Badge } from "../Badge";
import { HeroPreviewCard } from "./components/HeroPreviewCard";
import { ButtonLink } from "../ButtonLink";

export function Hero() {
  return (
    <section className="section-spacing overflow-hidden">
      <div className="app-container">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="max-w-2xl">
            <Badge text="Menos pressão. Mais clareza." />

            <h1 className="mt-6 text-4xl leading-tight font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Tarefas difíceis ficam mais leves quando você sabe qual é o{" "}
              <span className="text-brand">próximo passo.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              O Destrava transforma tarefas grandes e confusas em pequenos
              passos executáveis, para você começar sem sentir que precisa
              resolver tudo de uma vez.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/cadastro" icon={ArrowRight}>
                Começar agora
              </ButtonLink>

              <a
                href="#como-funciona"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-border-strong bg-surface px-6 text-sm font-semibold text-foreground transition-colors duration-200 hover:bg-surface-muted"
              >
                Ver como funciona
              </a>
            </div>

            <p className="mt-4 text-sm text-muted-foreground">
              Comece com uma tarefa. Sem configurações complicadas.
            </p>
          </div>
          <HeroPreviewCard />
        </div>
      </div>
    </section>
  );
}

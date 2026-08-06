import {
  ArrowRight,
  ArrowRightCircle,
  ListChecks,
  MessageSquareText,
} from "lucide-react";
import type { HowItWorksCardProps } from "./types";
import { CardHowItWorks } from "../CardHowItWorks";
import { SectionHeader } from "../SectionHeader";
import { ButtonLink } from "../ButtonLink";

const howItWorksCards: HowItWorksCardProps[] = [
  {
    icon: MessageSquareText,
    step: "01",
    title: "Conte o que está te bloqueando",
    description:
      " Registre a tarefa, o resultado que espera alcançar e o motivo que está dificultando o início.",
  },
  {
    icon: ListChecks,
    step: "02",
    title: "Divida em pequenos passos",
    description:
      "Transforme algo grande em ações menores, claras e fáceis de visualizar.",
  },
  {
    icon: ArrowRightCircle,
    step: "03",
    title: "Foque apenas no próximo",
    description:
      "Escolha uma única ação e avance sem carregar o peso da tarefa inteira.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="section-spacing bg-surface-muted"
      aria-labelledby="how-it-works-title"
    >
      <div className="app-container">
        <SectionHeader
          badge="Simples desde o primeiro passo"
          heading="h2"
          title="Você não precisa resolver"
          highlightedTitle="tudo agora."
          description="O Destrava ajuda você a transformar uma tarefa difícil em uma
            sequência clara e possível de executar."
        />

        <div className="relative mt-12 grid gap-6 md:grid-cols-3 lg:mt-16">
          <div
            aria-hidden="true"
            className="absolute top-12 right-[16.66%] left-[16.66%] hidden h-px bg-border-strong md:block"
          />
          {howItWorksCards.map((card) => (
            <CardHowItWorks {...card} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <ButtonLink href="/cadastro" icon={ArrowRight}>
            Dar o primeiro passo
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

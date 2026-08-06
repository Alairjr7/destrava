import { Focus, Layers3, Play, TrendingUp } from "lucide-react";
import { SectionHeader } from "../SectionHeader";
import { CardBenefits } from "./components/CardBenefits";
import type { BenefitsCardProps } from "./types";

const benefitsCards: BenefitsCardProps[] = [
  {
    icon: Focus,
    title: "Clareza sobre o próximo passo",
    description:
      "Em vez de olhar para tudo de uma vez, você visualiza apenas a ação que precisa executar agora.",
  },
  {
    icon: Layers3,
    title: "Tarefas grandes ficam menores",
    description:
      "Transforme algo confuso em uma sequência organizada de ações simples e possíveis de concluir.",
  },
  {
    icon: Play,
    title: " Fica mais fácil começar",
    description:
      "Quando a primeira ação está clara, você não precisa esperar pela motivação ou pelo momento perfeito.",
  },
  {
    icon: TrendingUp,
    title: " Seu progresso fica visível",
    description:
      "Acompanhe os passos concluídos e perceba que avançar um pouco também significa evoluir.",
  },
];

export function Benefits() {
  return (
    <section
      id="beneficios"
      className="section-spacing overflow-hidden"
      aria-labelledby="benefits-title"
    >
      <div className="app-container">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <SectionHeader
            badge="Feito para aliviar, não pressionar"
            heading="h2"
            title="Menos sobrecarga. Mais clareza para"
            highlightedTitle="continuar avançando."
            description=" O Destrava não tenta organizar toda a sua vida. Ele ajuda você a
              entender o que pode ser feito agora, sem carregar o peso da tarefa
              inteira."
            className="max-w-xl"
          >
            <div className="mt-8 rounded-lg border border-brand-muted bg-brand-soft p-5">
              <p className="text-sm font-semibold text-brand">
                A filosofia do Destrava
              </p>

              <p className="mt-2 text-lg font-semibold leading-7 text-foreground">
                A menor ação sempre vence a maior intenção.
              </p>
            </div>
          </SectionHeader>

          <div className="grid gap-5 sm:grid-cols-2">
            {benefitsCards.map((card) => (
              <CardBenefits {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

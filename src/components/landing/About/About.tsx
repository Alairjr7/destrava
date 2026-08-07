import { Footprints } from "lucide-react";
import { SectionHeader } from "../SectionHeader";
import { FeatureList } from "./components/FeatureList";
import type { FeatureListItems } from "./components/FeatureList/FeatureList";

type FeatureDataPros = {
  checked: FeatureListItems[];
  x: FeatureListItems[];
};

const FeatureData: FeatureDataPros = {
  checked: [
    {
      description: "Simples e direto.",
    },
    {
      description: "Focado no próximo passo.",
    },
    {
      description: "Feito para trazer clareza.",
    },
    {
      description: "Livre de pressão desnecessária.",
    },
  ],
  x: [
    {
      description: "Um gerenciador completo de projetos.",
    },
    {
      description: "Uma ferramenta de produtividade extrema.",
    },
    {
      description: "Uma lista cheia de configurações.",
    },
    {
      description: "Mais uma fonte de cobrança.",
    },
  ],
};

export function About() {
  return (
    <section
      id="sobre"
      className="section-spacing bg-surface-muted"
      aria-labelledby="about-title"
    >
      <div className="app-container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeader
            badge="Sobre o Destrava"
            heading="h2"
            title="Você não precisa fazer mais."
            highlightedTitle="Precisa saber como começar."
            description="O Destrava nasceu para pessoas que sabem o que precisam fazer, mas encontram dificuldade para transformar uma tarefa grande em uma primeira ação possível. 

            Em vez de adicionar mais cobranças, listas e notificações, o produto reduz o problema até que o próximo passo fique claro."
            className="max-w-xl"
          >
            <blockquote className="mt-8 border-l-4 border-brand pl-5">
              <p className="text-lg font-semibold leading-8 text-foreground">
                “A menor ação sempre vence a maior intenção.”
              </p>

              <footer className="mt-2 text-sm text-muted-foreground">
                Filosofia do Destrava
              </footer>
            </blockquote>
          </SectionHeader>

          <div className="grid gap-5 sm:grid-cols-2">
            <article className="rounded-lg border border-brand-muted bg-brand-soft p-6 sm:col-span-2">
              <div className="flex size-11 items-center justify-center rounded-md bg-brand text-white">
                <Footprints size={21} aria-hidden="true" />
              </div>

              <h3 className="mt-5 text-xl font-semibold text-foreground">
                Criado para ajudar você a dar o primeiro passo
              </h3>

              <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">
                O foco não está em preencher sua agenda, mas em transformar algo
                difícil em uma ação pequena, clara e possível de executar agora.
              </p>
            </article>

            <FeatureList
              checked={true}
              title="O Destrava é"
              items={FeatureData.checked}
            />

            <FeatureList
              checked={false}
              title="O Destrava não é"
              items={FeatureData.x}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

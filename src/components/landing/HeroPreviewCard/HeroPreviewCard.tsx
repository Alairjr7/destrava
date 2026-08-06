import { Check, Circle, Clock3 } from "lucide-react";

const taskSteps = [
  {
    id: 1,
    label: "Criar a estrutura dos slides",
    status: "completed",
  },
  {
    id: 2,
    label: "Escrever a introdução",
    status: "current",
  },
  {
    id: 3,
    label: "Adicionar imagens",
    status: "pending",
  },
  {
    id: 4,
    label: "Revisar o conteúdo",
    status: "pending",
  },
];

export function HeroPreviewCard() {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute -top-16 -right-16 -z-10 size-64 rounded-full bg-brand-soft blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-12 -left-12 -z-10 size-44 rounded-full bg-surface-muted blur-2xl"
      />

      <div className="rounded-xl border border-border bg-surface p-5 shadow-elevated sm:p-7">
        <div className="flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <span className="text-sm font-medium text-brand">Tarefa atual</span>

            <h2 className="mt-2 text-xl font-semibold text-foreground">
              Preparar apresentação do projeto
            </h2>
          </div>

          <span className="inline-flex w-fit rounded-full bg-warning-soft px-3 py-1 text-xs font-semibold text-warning">
            Dificuldade alta
          </span>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3 border-b border-border py-5 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <Clock3 size={17} aria-hidden="true" />
            45 minutos disponíveis
          </span>

          <span>1 de 4 passos concluídos</span>
        </div>

        <div className="py-6">
          <p className="mb-4 text-sm font-semibold text-foreground">
            Seus próximos passos
          </p>

          <ul className="space-y-3">
            {taskSteps.map((step) => {
              const isCompleted = step.status === "completed";
              const isCurrent = step.status === "current";

              return (
                <li
                  key={step.id}
                  className={
                    isCurrent
                      ? "rounded-lg border border-brand-muted bg-brand-soft p-4"
                      : "rounded-lg border border-transparent p-4"
                  }
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={
                        isCompleted
                          ? "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-success text-white"
                          : isCurrent
                            ? "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border-2 border-brand"
                            : "mt-0.5 flex size-5 shrink-0 items-center justify-center text-subtle-foreground"
                      }
                      aria-hidden="true"
                    >
                      {isCompleted ? (
                        <Check size={13} />
                      ) : (
                        <Circle
                          size={isCurrent ? 8 : 18}
                          fill={isCurrent ? "currentColor" : "none"}
                        />
                      )}
                    </span>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span
                          className={
                            isCompleted
                              ? "text-sm text-muted-foreground line-through"
                              : "text-sm font-medium text-foreground"
                          }
                        >
                          {step.label}
                        </span>

                        {isCurrent && (
                          <span className="rounded-full bg-brand px-2.5 py-1 text-xs font-semibold text-white">
                            Próximo passo
                          </span>
                        )}
                      </div>

                      {isCurrent && (
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">
                          Concentre-se apenas nesta etapa antes de pensar nas
                          próximas.
                        </p>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex flex-col gap-3 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-foreground">
              Pronto para começar?
            </p>

            <p className="mt-1 text-sm text-muted-foreground">
              Foque apenas nos próximos 25 minutos.
            </p>
          </div>

          <div className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-brand px-5 text-sm font-semibold text-white">
            <Clock3 size={17} aria-hidden="true" />
            Iniciar foco — 25 min
          </div>
        </div>
      </div>
    </div>
  );
}

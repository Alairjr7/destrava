# Destrava — Design System

## 1. Objetivo

O Design System do Destrava existe para garantir que todas as telas transmitam:

- Clareza
- Calma
- Simplicidade
- Confiança
- Foco

A interface deve ajudar o usuário a entender o próximo passo sem adicionar distrações ou sobrecarga visual.

---

## 2. Princípios visuais

### Clareza antes de decoração

Todo elemento visual deve ter uma função.

Não utilizaremos formas, cores, animações ou informações apenas para preencher espaço.

### Uma ação principal por contexto

Cada tela deve destacar claramente qual é a próxima ação esperada do usuário.

Ações secundárias terão menos destaque visual.

### Espaço também é interface

Utilizaremos bastante espaço em branco para separar informações e reduzir a sensação de sobrecarga.

### Consistência

Cores, espaçamentos, bordas e tipografia devem seguir os mesmos padrões em toda a aplicação.

### Acessibilidade desde o início

Contraste, foco visível, tamanho de texto e navegação por teclado fazem parte da implementação, não são ajustes finais.

---

## 3. Direção visual

O Destrava terá uma aparência:

- Minimalista
- Clara
- Moderna
- Leve
- Profissional

Referências de direção:

- Vercel: simplicidade e hierarquia
- Notion: organização e legibilidade
- Apple: espaço e clareza

As referências serão utilizadas apenas como inspiração, sem copiar interfaces ou componentes.

---

## 4. Cores

### Cor principal

A cor principal da marca será o azul.

| Token | Valor | Uso |
|---|---:|---|
| `brand` | `#2563EB` | Botões, links, foco e ações principais |
| `brand-hover` | `#1D4ED8` | Hover de elementos principais |
| `brand-active` | `#1E40AF` | Estado pressionado |
| `brand-soft` | `#EFF6FF` | Fundos suaves e destaques |
| `brand-muted` | `#DBEAFE` | Bordas ou indicadores suaves |

O azul não deve aparecer em todos os elementos. Ele deve indicar ação, progresso ou informação importante.

### Cores neutras

Utilizaremos a família Zinc como base neutra.

| Token | Valor | Uso |
|---|---:|---|
| `background` | `#FAFAFA` | Fundo principal |
| `surface` | `#FFFFFF` | Cards, menus e modais |
| `surface-muted` | `#F4F4F5` | Seções secundárias |
| `foreground` | `#18181B` | Texto principal |
| `muted-foreground` | `#71717A` | Texto secundário |
| `subtle-foreground` | `#A1A1AA` | Legendas e informações auxiliares |
| `border` | `#E4E4E7` | Bordas padrão |
| `border-strong` | `#D4D4D8` | Bordas com maior destaque |

### Cores semânticas

| Token | Valor | Uso |
|---|---:|---|
| `success` | `#16A34A` | Confirmações e conclusões |
| `success-soft` | `#F0FDF4` | Fundo de sucesso |
| `warning` | `#D97706` | Alertas não críticos |
| `warning-soft` | `#FFFBEB` | Fundo de alerta |
| `danger` | `#DC2626` | Erros e ações destrutivas |
| `danger-soft` | `#FEF2F2` | Fundo de erro |

Cores semânticas não devem ser usadas apenas como decoração.

---

## 5. Tipografia

### Família principal

A aplicação utilizará `Inter` como fonte principal.

Fallback:

```text
Inter, ui-sans-serif, system-ui, sans-serif
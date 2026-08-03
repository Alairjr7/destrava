# ROADMAP.md

# 🗺️ Destrava — Product Roadmap

## Visão Geral

O Destrava nasceu para resolver um problema muito específico:

> Muitas pessoas sabem o que precisam fazer, mas não conseguem dar o primeiro passo.

O objetivo do MVP é validar se dividir tarefas difíceis em pequenos passos realmente ajuda o usuário a sair da procrastinação e avançar.

Todo recurso deste projeto deve seguir a filosofia da marca:

> A menor ação sempre vence a maior intenção.

Se uma funcionalidade não ajuda o usuário a dar o próximo passo, ela não faz parte do MVP.

---

# MVP (Versão 1.0)

O MVP será composto apenas pelas funcionalidades necessárias para entregar a proposta principal do produto.

Nada além disso.

---

# Fluxo Principal do Usuário

Landing Page

↓

Cadastro

↓

Login

↓

Dashboard

↓

Criar um bloqueio

↓

Quebrar a tarefa em pequenos passos

↓

Escolher o próximo passo

↓

Iniciar uma sessão de foco

↓

Finalizar sessão

↓

Registrar o resultado

↓

Dashboard atualizado

---

# Funcionalidades

## 🌎 Landing Page

- Hero Section
- Explicação do problema
- Como funciona
- Benefícios
- Chamada para ação (CTA)
- Footer

---

## 🔐 Autenticação

- Cadastro
- Login
- Logout
- Persistência da sessão
- Rotas protegidas

---

## 📊 Dashboard

- Boas-vindas
- Próximo passo
- Últimos bloqueios
- Estatísticas rápidas
- Sessões concluídas

---

## 🚧 Bloqueios

O usuário poderá:

- Criar
- Editar
- Excluir
- Visualizar

Cada bloqueio possuirá:

- Nome
- Objetivo
- Motivo do bloqueio
- Dificuldade
- Tempo disponível

---

## ✅ Pequenos Passos

Cada bloqueio poderá conter vários passos.

O usuário poderá:

- Criar
- Editar
- Excluir
- Reordenar
- Marcar como concluído

Sempre existirá apenas um "Próximo Passo".

---

## ⏱️ Sessão de Foco

- Escolher duração
- Iniciar
- Pausar
- Continuar
- Finalizar

Ao finalizar:

- Concluído
- Parcialmente concluído
- Continuei travado

---

## 📈 Histórico

Visualizar:

- Sessões realizadas
- Tempo focado
- Bloqueios concluídos
- Evolução semanal

---

# Tecnologias

## Front-end

- React
- TypeScript
- Vite
- React Router
- Tailwind CSS
- Shadcn UI
- TanStack Query
- React Hook Form
- Zod
- Recharts

---

## Back-end

- Node.js
- Express
- TypeScript
- MongoDB
- JWT

---

# Fora do MVP

Essas funcionalidades NÃO serão desenvolvidas nesta versão.

- Inteligência Artificial
- Equipes
- Compartilhamento
- Calendário
- Aplicativo Mobile
- Gamificação
- Notificações
- Integração com Google Calendar
- Integração com Notion
- Sincronização Offline
- Temas
- Modo Colaborativo

---

# Backlog

## Versão 1.1

- Categorias
- Tags
- Templates
- Favoritos
- Pesquisa

---

## Versão 1.2

- Dashboard avançado
- Metas
- Insights
- Histórico detalhado
- Exportação de dados

---

## Versão 2.0

- IA para quebrar tarefas automaticamente
- Sugestão do próximo passo
- Planejamento semanal
- Sincronização entre dispositivos
- Aplicativo Mobile
- Compartilhamento
- Equipes

---

# Objetivos Técnicos

Este projeto será utilizado para aprender e demonstrar conhecimento em:

- Arquitetura Front-end
- Componentização
- React Router
- TanStack Query
- React Hook Form
- Zod
- Testes
- Acessibilidade
- UX
- Performance
- Deploy
- Boas práticas

---

# Objetivos de Portfólio

Ao finalizar este projeto ele deverá possuir:

- Landing Page profissional
- Design System consistente
- README completo
- Deploy
- Documentação
- Testes
- Responsividade
- Código limpo
- Commits organizados
- Estrutura escalável

---

# Critério de Sucesso

O MVP será considerado concluído quando um usuário conseguir:

1. Criar uma conta.

2. Criar um bloqueio.

3. Dividir esse bloqueio em pequenos passos.

4. Escolher um próximo passo.

5. Realizar uma sessão de foco.

6. Registrar o resultado.

7. Visualizar sua evolução.

Se essas sete ações forem possíveis, o MVP cumpriu sua missão.
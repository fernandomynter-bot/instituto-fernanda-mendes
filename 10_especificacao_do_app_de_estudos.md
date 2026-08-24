# 📲 Especificação do App de Estudos — Instituto Fernanda Mendes

## 1. Visão do Produto
* **Nome do Produto:** Web App / Plataforma "Instituto FM — Concursos de Saúde"
* **Modelo de Negócio:** Assinatura mensal recorrente (R$ 29,00 a R$ 47,00/mês).
* **Diferencial Competitivo:** Ao contrário de plataformas genéricas (Sanar Saúde, QConcursos), o app carrega a **metodologia exclusiva da Profª Fernanda Mendes**, com comentários focados nas pegadinhas das bancas e fichas de memorização ativa.

---

## 2. Módulos e Funcionalidades (Versão 1 - MVP)
1. **Banco de Questões Comentadas:**
   * Filtros por tema: Lei 8.080/90, Lei 8.142/90, Princípios do SUS, Ética Profissional (COFEN), PNAB e Financiamento.
   * Gabarito comentado com a linguagem didática da professora.
2. **Flashcards Digitais com Repetição Espaçada:**
   * Cartões interativos para memorização de siglas (ex: AMCSC, UIE, DRHP), números de leis e prazos.
3. **Simulados Cronometrados:**
   * Provas temáticas com contagem regressiva para simulação real de tempo de prova.
4. **Dashboard de Desempenho:**
   * Gráficos simples de taxa de acerto por disciplina e identificação de pontos fracos.
5. **Plano de Estudos Semanal:**
   * Cronograma de 30 dias guiado pela metodologia do Instituto.

---

## 3. Arquitetura Técnica Recomendada
* **Frontend:** Web App Progressivo (PWA) construído com tecnologias no-code/low-code (Glide, FlutterFlow ou Next.js/React).
* **Banco de Dados Inicial:** Planilha estruturada (Google Sheets / Airtable) ou Supabase.
* **Autenticação & Pagamento:** Integração de Webhook com a Kiwify para liberação automática de acesso pós-pagamento.

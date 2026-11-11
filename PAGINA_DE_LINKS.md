# Página de links da professora Fernanda Mendes

Implementação de 11 de novembro de 2026 para a página inicial de https://institutofernandamendes.com.br.

Uma seção responsiva com retrato autorizado da professora, apresentação breve e quatro acessos: grupo gratuito, webinário, aplicativo Rota Saúde e e-book gratuito 25 Pegadinhas de SUS e Legislação.

Os destinos ainda serão definidos pelo responsável pelo projeto. Configure o campo `url` de cada oferta em `app/offers.ts`. Enquanto estiver `null`, o respectivo botão abre um aviso acessível de acesso em breve. O botão não envia o visitante a outro produto ou a um checkout provisório.

O conteúdo visual está em `app/page.tsx` e `app/globals.css`. A foto original fornecida foi copiada para `public/fernanda-profissional.png`, sem alteração, e é servida pelo otimizador de imagens do Next.js.

A publicação usa a integração GitHub da Vercel, projeto `instituto-fernanda-mendes`, branch `main`. O aplicativo `rota-saude` e o subdomínio `app.institutofernandamendes.com.br` pertencem a outro projeto.

Página institucional anterior preservada no histórico Git, commit `28dd30703b61ee46bdfa503cfc2046c739788c61`.

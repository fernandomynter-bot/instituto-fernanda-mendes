# Página de links da professora Fernanda Mendes

Implementação de 11 de novembro de 2026, atualizada em 12 de novembro de 2026, para a página inicial de https://institutofernandamendes.com.br.

Uma seção responsiva com retrato autorizado da professora, apresentação breve e dois acessos: grupo gratuito e e-book gratuito 25 Pegadinhas de SUS e Legislação. Os botões do webinário e do aplicativo foram retirados da página a pedido do responsável pelo projeto.

Os destinos estão configurados em `app/offers.ts` e abrem em uma nova aba:

- Grupo gratuito: https://institutofm-grupo.lovable.app
- E-book gratuito: https://ebook-25pegadinhas.lovable.app

O conteúdo visual está em `app/page.tsx` e `app/globals.css`. A foto original fornecida foi copiada para `public/fernanda-profissional.png`, sem alteração, e é servida pelo otimizador de imagens do Next.js.

A publicação usa a integração GitHub da Vercel, projeto `instituto-fernanda-mendes`, branch `main`. O aplicativo `rota-saude` e o subdomínio `app.institutofernandamendes.com.br` pertencem a outro projeto.

Página institucional anterior preservada no histórico Git, commit `28dd30703b61ee46bdfa503cfc2046c739788c61`.

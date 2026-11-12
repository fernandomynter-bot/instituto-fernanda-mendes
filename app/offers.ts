export type OfferIcon = "group" | "video" | "app" | "book";
type Offer = { id: string; icon: OfferIcon; label: string; title: string; description: string; url: string | null; };

// Public destinations supplied by the project owner.
export const offers: Offer[] = [
  { id: "group", icon: "group", label: "COMUNIDADE GRATUITA", title: "Entre no grupo gratuito", description: "Dicas diárias para sua preparação na saúde.", url: "https://institutofm-grupo.lovable.app" },
  { id: "ebook", icon: "book", label: "E-BOOK GRATUITO", title: "Baixe seu e-book de SUS", description: "25 Pegadinhas de SUS e Legislação.", url: "https://ebook-25pegadinhas.lovable.app" },
];

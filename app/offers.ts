export type OfferIcon = "group" | "video" | "app" | "book";
type Offer = { id: string; icon: OfferIcon; label: string; title: string; description: string; url: string | null; };

// Configure the four final destinations here when they are supplied.
// Missing destinations open an accessible notice without redirecting visitors.
export const offers: Offer[] = [
  { id: "group", icon: "group", label: "COMUNIDADE GRATUITA", title: "Entre no grupo gratuito", description: "Dicas diárias para sua preparação na saúde.", url: null },
  { id: "webinar", icon: "video", label: "AULA GRAVADA", title: "Conheça o webinário", description: "50 Pegadinhas de SUS e Legislação.", url: null },
  { id: "app", icon: "app", label: "SEU APP DE ESTUDOS", title: "Conheça o Rota Saúde", description: "Questões, flashcards e revisão em um só lugar.", url: null },
  { id: "ebook", icon: "book", label: "E-BOOK GRATUITO", title: "Baixe seu e-book de SUS", description: "25 Pegadinhas de SUS e Legislação.", url: null },
];

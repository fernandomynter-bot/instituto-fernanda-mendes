import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://institutofernandamendes.com.br"),
  title: "Professora Fernanda Mendes | Concursos da Saúde",
  description: "Escolha seu próximo passo com a professora Fernanda Mendes: grupo gratuito de concursos da saúde e e-book gratuito de SUS e legislação.",
  alternates: { canonical: "/" },
  openGraph: { title: "Professora Fernanda Mendes", description: "Seu próximo passo nos concursos da saúde começa aqui. Conheça os conteúdos e produtos do Instituto.", type: "website", locale: "pt_BR", siteName: "Instituto Fernanda Mendes", images: [{ url: "/fernanda-profissional.png", width: 1254, height: 1254, alt: "Professora Fernanda Mendes" }] },
  twitter: { card: "summary_large_image", title: "Professora Fernanda Mendes", description: "Grupo gratuito de concursos da saúde e e-book gratuito de SUS e legislação.", images: ["/fernanda-profissional.png"] },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}

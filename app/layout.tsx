import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://institutofernandamendes.com.br"),
  title: "Instituto Fernanda Mendes | Educação e Estudos na Saúde",
  description: "Facilitando seus estudos na saúde com a Profª Fernanda Mendes. Conheça sua trajetória, materiais, aulas e novas oportunidades de aprendizado.",
  alternates: { canonical: "/" },
  openGraph: { title: "Instituto Fernanda Mendes", description: "Conhecimento que transforma trajetórias na saúde.", type: "website", locale: "pt_BR", siteName: "Instituto Fernanda Mendes", images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Instituto Fernanda Mendes" }] },
  twitter: { card: "summary_large_image", title: "Instituto Fernanda Mendes", description: "Conhecimento que transforma trajetórias na saúde.", images: ["/og.jpg"] },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}

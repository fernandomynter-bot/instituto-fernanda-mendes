import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://institutofernandamendes.com.br"),
  title: "Instituto Fernanda Mendes | SUS e Legislação para Concursos",
  description: "Aprenda SUS e legislação para concursos na saúde com clareza, método e a experiência da Professora Fernanda Mendes.",
  openGraph: { title: "Instituto Fernanda Mendes", description: "Conhecimento que transforma trajetórias na saúde.", type: "website", locale: "pt_BR", siteName: "Instituto Fernanda Mendes", images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Instituto Fernanda Mendes" }] },
  twitter: { card: "summary_large_image", title: "Instituto Fernanda Mendes", description: "Conhecimento que transforma trajetórias na saúde.", images: ["/og.jpg"] },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}

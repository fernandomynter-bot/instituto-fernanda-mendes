"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { offers, type OfferIcon } from "./offers";

function Arrow() {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function OfferIcon({ name }: { name: OfferIcon }) {
  if (name === "group") return <svg viewBox="0 0 28 28" fill="none" aria-hidden="true"><path d="M22.5 20.3A10.6 10.6 0 1 0 6.1 22l-2 5 5.7-1.7a10.6 10.6 0 0 0 12.7-5Z" transform="translate(1 -2) scale(.92)" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M10 8.5c-.8 0-1.4.8-1.4 1.7 0 2.9 4.6 7.7 7.8 7.7.9 0 1.7-.6 1.7-1.4l-2.7-1.4-.9 1c-1.5-.7-2.6-1.8-3.3-3.3l1-.9L10.8 9Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/></svg>;
  if (name === "video") return <svg viewBox="0 0 28 28" fill="none" aria-hidden="true"><rect x="3" y="5" width="22" height="18" rx="5" stroke="currentColor" strokeWidth="1.5"/><path d="m12 10 6 4-6 4v-8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>;
  if (name === "app") return <svg viewBox="0 0 28 28" fill="none" aria-hidden="true"><rect x="6.5" y="2.5" width="15" height="23" rx="4" stroke="currentColor" strokeWidth="1.5"/><path d="M11 6h6M12 22h4m-6-7 2.5 2.5L18 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
  return <svg viewBox="0 0 28 28" fill="none" aria-hidden="true"><path d="M5 5.5A2.5 2.5 0 0 1 7.5 3H23v22H7.5A2.5 2.5 0 0 1 5 22.5v-17Zm0 16.7A2.5 2.5 0 0 1 7.5 20H23M10 8h8m-8 4h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

export default function Home() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [selectedTitle, setSelectedTitle] = useState("");
  function showUpcoming(title: string) { setSelectedTitle(title); dialog.current?.showModal(); }

  return <>
    <a className="skip-link" href="#acessos">Ir para os conteúdos</a>
    <main className="link-hub" id="inicio">
      <section className="hub-layout" aria-label="Professora Fernanda Mendes e seus conteúdos">
        <figure className="portrait">
          <Image src="/fernanda-profissional.png" alt="Professora Fernanda Mendes falando ao microfone" fill preload sizes="(max-width: 760px) 100vw, 48vw" className="portrait-image" />
          <div className="portrait-wash" aria-hidden="true" />
          <div className="portrait-top" aria-hidden="true"><span className="portrait-dot" /> ENSINO QUE APROXIMA</div>
          <figcaption className="portrait-caption">
            <span className="professor-label">PROFESSORA</span>
            <h1>Fernanda <em>Mendes<span className="name-dot">.</span></em></h1>
            <p>Enfermeira. Professora. Mestre pela USP.</p>
            <div className="portrait-rule" aria-hidden="true" />
            <span className="portrait-signature">Conhecimento para o seu próximo capítulo.</span>
          </figcaption>
        </figure>

        <div className="hub-content">
          <div className="brand" aria-label="Instituto Fernanda Mendes">
            <span className="brand-monogram" aria-hidden="true">fm<span>.</span></span>
            <span className="brand-wordmark"><span>INSTITUTO</span><strong>FERNANDA MENDES</strong></span>
          </div>
          <div className="intro">
            <p className="eyebrow"><span aria-hidden="true" /> CONCURSOS DA ÁREA DA SAÚDE</p>
            <h2>Seu próximo passo<br />começa <em>aqui.</em></h2>
            <p className="intro-description">Conteúdos, aulas e ferramentas para estudar<br className="desktop-break" /> com mais clareza e direção. Escolha o seu caminho.</p>
          </div>
          <nav className="offer-list" id="acessos" aria-label="Conteúdos e produtos da professora">
            {offers.map(offer => {
              const content = <><span className="offer-icon"><OfferIcon name={offer.icon} /></span><span className="offer-copy"><span className="offer-label">{offer.label}</span><strong>{offer.title}</strong><span className="offer-description">{offer.description}</span></span><span className="offer-arrow"><Arrow /></span></>;
              const className = `offer offer-${offer.id}`;
              return offer.url
                ? <a key={offer.id} className={className} href={offer.url} target="_blank" rel="noopener noreferrer">{content}</a>
                : <button key={offer.id} className={className} type="button" aria-haspopup="dialog" onClick={() => showUpcoming(offer.title)}>{content}</button>;
            })}
          </nav>
          <footer className="hub-footer" id="contato"><span>© 2026 Instituto Fernanda Mendes</span><a href="mailto:ferclmendes@gmail.com">Fale com a equipe <Arrow /></a></footer>
        </div>
      </section>
    </main>
    <dialog ref={dialog} className="access-dialog" aria-labelledby="access-title" aria-describedby="access-description" onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
      <div className="dialog-mark" aria-hidden="true">fm<span>.</span></div>
      <p className="dialog-eyebrow">{selectedTitle}</p>
      <h2 id="access-title">Acesso em breve</h2>
      <p id="access-description">O acesso a este conteúdo será disponibilizado por aqui. Acompanhe as novidades da professora Fernanda Mendes.</p>
      <form method="dialog"><button className="dialog-close">Voltar aos conteúdos <Arrow /></button></form>
    </dialog>
  </>;
}

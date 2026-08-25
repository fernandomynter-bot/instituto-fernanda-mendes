const whatsappUrl = "https://wa.me/5516982435644?text=Ol%C3%A1%2C%20Professora%20Fernanda!%20Conheci%20o%20Instituto%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.";

function ArrowIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function CheckIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="m6 12 4 4 8-9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function WhatsAppIcon() {
  return <svg aria-hidden="true" viewBox="0 0 32 32" fill="currentColor"><path d="M16.04 3A12.9 12.9 0 0 0 5.08 22.73L3 29l6.48-2.02A12.97 12.97 0 1 0 16.04 3Zm0 23.7c-2.13 0-4.2-.63-5.96-1.82l-.43-.28-3.84 1.2 1.24-3.73-.3-.46a10.63 10.63 0 1 1 9.29 5.09Zm5.84-7.95c-.32-.16-1.9-.93-2.2-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1 1.25-.19.21-.38.24-.7.08-.33-.16-1.37-.5-2.61-1.61a9.79 9.79 0 0 1-1.81-2.25c-.19-.32-.02-.5.14-.66.15-.14.32-.37.48-.56.16-.18.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.71-.55h-.61c-.21 0-.56.08-.85.4-.3.32-1.12 1.09-1.12 2.66 0 1.57 1.15 3.09 1.31 3.3.16.21 2.25 3.44 5.46 4.83.76.33 1.36.53 1.82.68.77.24 1.46.21 2.01.13.62-.09 1.9-.78 2.17-1.53.26-.75.26-1.39.18-1.52-.08-.14-.29-.22-.61-.38Z" /></svg>;
}

const credentials = [
  "Mestre em Ciências pela Escola de Enfermagem de Ribeirão Preto — USP",
  "Experiência em projetos da OPAS, OMS e Ministério da Saúde",
  "Docente, pesquisadora e profissional com atuação direta no SUS",
  "Participação em iniciativas de ética e educação permanente em saúde",
];

const products = [
  { number: "01", tag: "Guia gratuito", title: "25 Pegadinhas de SUS e Legislação", text: "Um material direto ao ponto para reconhecer armadilhas recorrentes e responder questões com mais segurança.", cta: "Quero receber o guia" },
  { number: "02", tag: "Aulas e webinários", title: "Revisões que organizam o conteúdo", text: "Encontros objetivos para compreender os temas mais cobrados em concursos da saúde e acelerar sua preparação.", cta: "Quero ser avisado" },
  { number: "03", tag: "Cursos preparatórios", title: "SUS e legislação sem confusão", text: "Formações com método, contexto e aplicação prática para transformar conteúdo complexo em conhecimento utilizável.", cta: "Conhecer os próximos cursos" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#inicio" aria-label="Instituto Fernanda Mendes — início">
            <span className="brand-mark">FM</span><span className="brand-name">Instituto <strong>Fernanda Mendes</strong></span>
          </a>
          <nav aria-label="Navegação principal"><a href="#sobre">Quem sou</a><a href="#produtos">Produtos</a><a href="#contato">Contato</a></nav>
          <a className="header-cta" href={whatsappUrl} target="_blank" rel="noreferrer">Fale comigo</a>
        </div>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-orb hero-orb-one" /><div className="hero-orb hero-orb-two" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Educação para concursos na saúde</p>
            <h1>Conhecimento para <em>transformar</em> sua trajetória na saúde.</h1>
            <p className="hero-text">Aprenda SUS e legislação com clareza, método e a experiência de quem vive o ensino e a saúde pública há mais de 15 anos.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#produtos">Conheça os produtos <ArrowIcon /></a>
              <a className="text-link" href="#sobre">Conheça minha história</a>
            </div>
            <div className="hero-proof" aria-label="Destaques profissionais">
              <div><strong>15+</strong><span>anos de formação</span></div><div><strong>USP</strong><span>Mestre em Ciências</span></div><div><strong>OPAS · OMS</strong><span>experiência em projetos</span></div>
            </div>
          </div>
          <div className="portrait-wrap" aria-label="Foto da Professora Fernanda Mendes">
            <div className="portrait-card"><div className="portrait-ring" /><img src="/fernanda-mendes.jpeg" alt="Professora Fernanda Mendes" />
              <div className="portrait-badge"><span className="badge-icon"><CheckIcon /></span><span><strong>Professora e enfermeira</strong><small>Ensino com propósito e experiência</small></span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="about section" id="sobre">
        <div className="container about-grid">
          <div className="section-heading"><p className="eyebrow"><span /> Quem sou</p><h2>Ensinar e cuidar sempre fizeram parte da minha história.</h2><blockquote>“Conhecimento não é privilégio. É ponte.”</blockquote></div>
          <div className="about-content">
            <p className="lead">Aos 12 anos, descobri que ensinar fazia parte de quem eu era. Aos 15, cuidando da minha bisavó, encontrei na enfermagem a forma de unir os dois propósitos que mais movem meu coração: ensinar e cuidar.</p>
            <p>Vim de uma família simples, estudei em escolas públicas e precisei construir meu próprio jeito de aprender. Uma bolsa abriu as portas da faculdade e o laboratório de anatomia me ensinou algo que carrego até hoje: a humanização deve ser o alicerce de toda trajetória na saúde.</p>
            <p>Da graduação ao mestrado na USP, da atuação no SUS à docência, transformei desafios em método. Hoje, minha missão é tornar o conhecimento acessível e ajudar profissionais e concurseiros a atravessarem essa ponte com mais clareza e confiança.</p>
            <ul className="credential-list">{credentials.map((credential) => <li key={credential}><span><CheckIcon /></span>{credential}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="products section" id="produtos">
        <div className="container">
          <div className="products-header"><div className="section-heading compact"><p className="eyebrow"><span /> Produtos e conteúdos</p><h2>Aprenda com direção, não com decoreba.</h2></div><p>Materiais e experiências pensados para simplificar temas complexos e deixar sua preparação mais estratégica.</p></div>
          <div className="product-grid">{products.map((product) => <article className="product-card" key={product.number}><div className="product-top"><span>{product.tag}</span><strong>{product.number}</strong></div><h3>{product.title}</h3><p>{product.text}</p><a href={whatsappUrl} target="_blank" rel="noreferrer">{product.cta} <ArrowIcon /></a></article>)}</div>
        </div>
      </section>

      <section className="contact section" id="contato">
        <div className="contact-glow" /><div className="container contact-inner"><div><p className="eyebrow light"><span /> Vamos conversar?</p><h2>Seu próximo passo pode começar com uma mensagem.</h2></div><div className="contact-action"><p>Fale diretamente com a equipe do Instituto Fernanda Mendes pelo WhatsApp.</p><a className="button button-light" href={whatsappUrl} target="_blank" rel="noreferrer"><WhatsAppIcon /> Chamar no WhatsApp</a></div></div>
      </section>

      <footer><div className="container footer-inner"><a className="brand footer-brand" href="#inicio"><span className="brand-mark">FM</span><span className="brand-name">Instituto <strong>Fernanda Mendes</strong></span></a><p>Educação, SUS e legislação para concursos na saúde.</p><p>© 2026 Instituto Fernanda Mendes.</p></div></footer>
      <a className="whatsapp-float" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Conversar pelo WhatsApp"><WhatsAppIcon /><span>Fale comigo</span></a>
    </main>
  );
}

const whatsapp = (message: string) => `https://wa.me/5516982435644?text=${encodeURIComponent(message)}`;
const contactUrl = whatsapp("Olá, Professora Fernanda! Conheci o Instituto pelo site e gostaria de mais informações.");

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h16m-6-6 6 6-6 6"} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
function WhatsAppIcon() {
  return <svg aria-hidden="true" viewBox="0 0 32 32" fill="currentColor"><path d="M16.04 3A12.9 12.9 0 0 0 5.08 22.73L3 29l6.48-2.02A12.97 12.97 0 1 0 16.04 3Zm0 23.7c-2.13 0-4.2-.63-5.96-1.82l-.43-.28-3.84 1.2 1.24-3.73-.3-.46a10.63 10.63 0 1 1 9.29 5.09Zm5.84-7.95c-.32-.16-1.9-.93-2.2-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1 1.25-.19.21-.38.24-.7.08-.33-.16-1.37-.5-2.61-1.61a9.79 9.79 0 0 1-1.81-2.25c-.19-.32-.02-.5.14-.66.15-.14.32-.37.48-.56.16-.18.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.71-.55h-.61c-.21 0-.56.08-.85.4-.3.32-1.12 1.09-1.12 2.66 0 1.57 1.15 3.09 1.31 3.3.16.21 2.25 3.44 5.46 4.83.76.33 1.36.53 1.82.68.77.24 1.46.21 2.01.13.62-.09 1.9-.78 2.17-1.53.26-.75.26-1.39.18-1.52-.08-.14-.29-.22-.61-.38Z" /></svg>;
}
function Brand() {
  return <><span className="brand-mark" aria-hidden="true">fm<span>.</span></span><span className="brand-name"><span>INSTITUTO</span><strong>Fernanda Mendes</strong></span></>;
}
const principles = [
  { number: "01", title: "Entender de verdade", text: "Explicações que conectam a teoria ao contexto da saúde e ajudam você a dar sentido ao que estuda." },
  { number: "02", title: "Estudar com direção", text: "Conteúdo organizado para você identificar o que precisa aprender, retomar e colocar em prática." },
  { number: "03", title: "Avançar com confiança", text: "Um olhar acolhedor para quem concilia os estudos com a faculdade, o trabalho e a vida acontecendo." },
];
const products = [
  { number: "01", label: "Material gratuito", title: "Um primeiro passo para estudar com mais clareza.", text: "Conheça o guia 25 Pegadinhas de SUS e Legislação: explicações para reconhecer armadilhas e revisar com mais atenção aos detalhes.", cta: "Pedir o guia gratuito", message: "Olá! Conheci o Instituto pelo site e gostaria de receber o guia gratuito 25 Pegadinhas de SUS e Legislação.", featured: true },
  { number: "02", label: "Aulas e webinários", title: "Temas importantes. Explicações que fazem sentido.", text: "Encontros para aprofundar conteúdos da saúde e organizar sua preparação. Consulte os próximos temas e datas pelo WhatsApp.", cta: "Saber das próximas aulas", message: "Olá! Gostaria de saber sobre as próximas aulas e webinários da Professora Fernanda.", featured: false },
  { number: "03", label: "Próximos cursos", title: "Mais conhecimento para o seu próximo capítulo.", text: "Novas oportunidades de aprendizado para sua jornada na saúde. Fale com a equipe para conhecer as novidades e futuras turmas.", cta: "Conhecer as novidades", message: "Olá! Gostaria de conhecer as novidades e futuras turmas do Instituto Fernanda Mendes.", featured: false },
];

export default function Home() {
  return <>
    <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#inicio" aria-label="Instituto Fernanda Mendes — início"><Brand /></a>
        <nav className="desktop-nav" aria-label="Navegação principal"><a href="#sobre">A professora</a><a href="#abordagem">Como você aprende</a><a href="#produtos">Conteúdos</a></nav>
        <a className="header-cta" href={contactUrl} target="_blank" rel="noopener noreferrer">Vamos conversar <Arrow diagonal /></a>
        <details className="mobile-menu"><summary aria-label="Abrir menu de navegação"><span>Menu</span><svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.5" /></svg></summary><nav aria-label="Navegação no celular"><a href="#sobre">A professora</a><a href="#abordagem">Como você aprende</a><a href="#produtos">Conteúdos</a><a href="#contato">Contato</a></nav></details>
      </div>
    </header>
    <main id="conteudo">
      <section className="hero" id="inicio" aria-labelledby="hero-title">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">EDUCAÇÃO QUE APROXIMA. CONHECIMENTO QUE FICA.</p>
            <h1 id="hero-title">Seus estudos<br className="desktop-break" /> na saúde,<br /><em>com mais clareza</em><br /> e direção.</h1>
            <p className="hero-description">Com a Profª Fernanda Mendes, o conteúdo ganha sentido e o aprendizado se conecta à sua vida. Para avançar na formação, se preparar para novos desafios e seguir aprendendo.</p>
            <div className="hero-actions"><a className="button button-primary" href="#produtos">Encontre seu próximo passo <Arrow /></a><a className="text-link" href="#sobre">Conheça a professora <Arrow diagonal /></a></div>
            <p className="hero-audience">Para estudantes e profissionais da saúde.</p>
          </div>
          <figure className="hero-portrait">
            <img src="/fernanda-mendes-palestra.jpeg" width="1206" height="1416" fetchPriority="high" alt="Professora Fernanda Mendes falando ao microfone durante um encontro" />
            <figcaption><span>QUEM ENSINA TAMBÉM INSPIRA</span><strong>Profª Fernanda Mendes</strong><p>Professora, enfermeira e mestre em Ciências pela USP.</p></figcaption>
            <span className="portrait-label" aria-hidden="true">Ensinar. Cuidar. Transformar.</span>
          </figure>
        </div>
        <div className="container hero-foot"><span>CONHECIMENTO PARA A SUA TRAJETÓRIA</span><p>Da formação aos novos desafios da profissão.</p><a href="#abordagem" aria-label="Conhecer a abordagem de ensino"><Arrow /></a></div>
      </section>

      <section className="approach section" id="abordagem" aria-labelledby="approach-title">
        <div className="container">
          <div className="section-intro"><p className="eyebrow">UM JEITO MAIS PRÓXIMO DE ENSINAR</p><div><h2 id="approach-title">Conteúdo complexo.<br /><em>Aprendizado possível.</em></h2><p>Entre tantos materiais, aulas e compromissos, é fácil se sentir sem rumo. Aqui, clareza, contexto e organização caminham juntos para ajudar você a aprender.</p></div></div>
          <div className="principle-grid">{principles.map(item => <article key={item.number} className="principle"><span className="step-number">{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
        </div>
      </section>

      <section className="about section" id="sobre" aria-labelledby="about-title">
        <div className="container about-grid">
          <div className="about-heading"><p className="eyebrow">CONHEÇA A PROFESSORA</p><h2 id="about-title">Fernanda Mendes.<br /><em>Ensinar e cuidar,<br /> na mesma história.</em></h2><p className="about-manifesto">Conhecimento não é privilégio.<br /><strong>É ponte.</strong></p><a className="text-link" href={contactUrl} target="_blank" rel="noopener noreferrer">Converse com o Instituto <Arrow diagonal /></a></div>
          <div className="about-story"><p className="lead">Minha história na saúde começou com o cuidado. Minha missão como professora é fazer o conhecimento chegar mais perto de você.</p><p>Aos 12 anos, descobri a vontade de ensinar. Aos 15, cuidando da minha bisavó, encontrei na enfermagem um caminho para unir esses dois propósitos.</p><p>Vim de uma família simples, estudei em escolas públicas e construí meu próprio jeito de aprender. Da graduação ao mestrado na USP, da atuação no SUS à sala de aula, essa trajetória me ensinou a importância de um ensino acessível, humano e conectado à realidade.</p><p>O Instituto nasce desse compromisso: compartilhar conhecimento e ajudar estudantes e profissionais da saúde a seguir em frente com mais clareza e confiança.</p>
            <div className="credentials"><div><span>FORMAÇÃO ACADÊMICA</span><strong>Mestre em Ciências</strong><p>Escola de Enfermagem de Ribeirão Preto — USP</p></div><div><span>VIVÊNCIA PROFISSIONAL</span><strong>Ensino, pesquisa e saúde pública</strong><p>Atuação no SUS e experiência em projetos da OPAS, OMS e Ministério da Saúde.</p></div></div>
          </div>
        </div>
      </section>

      <section className="products section" id="produtos" aria-labelledby="products-title">
        <div className="container"><div className="section-intro"><p className="eyebrow">CONTINUE APRENDENDO</p><div><h2 id="products-title">Seu próximo passo<br /><em>começa por aqui.</em></h2><p>Um material para começar, uma aula para aprofundar, uma nova oportunidade de aprender. Conheça os conteúdos e acompanhe o que vem por aí.</p></div></div>
          <div className="product-grid">{products.map(product => <article key={product.number} className={`product-card${product.featured ? " featured" : ""}`}><div className="product-top"><span>{product.label}</span><span className="product-number">{product.number}</span></div><h3>{product.title}</h3><p>{product.text}</p><a href={whatsapp(product.message)} target="_blank" rel="noopener noreferrer">{product.cta}<Arrow diagonal /></a></article>)}</div>
          <p className="product-note">Atendimento pelo WhatsApp para materiais, programação e informações sobre turmas.</p>
        </div>
      </section>

      <section className="contact" id="contato" aria-labelledby="contact-title"><div className="container contact-inner"><div><p className="eyebrow">VAMOS DAR O PRÓXIMO PASSO?</p><h2 id="contact-title">Você cuida do futuro.<br /><em>A gente ajuda a preparar o caminho.</em></h2></div><div className="contact-action"><p>Conte o que você busca aprender. A equipe do Instituto ajuda você a conhecer os materiais e as próximas oportunidades.</p><a className="button button-light" href={contactUrl} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> Conversar com a equipe <Arrow diagonal /></a></div></div></section>
    </main>
    <footer><div className="container footer-top"><a className="brand" href="#inicio" aria-label="Instituto Fernanda Mendes — voltar ao início"><Brand /></a><p>Facilitando seus estudos.<br />Ampliando seus caminhos na saúde.</p><nav aria-label="Navegação do rodapé"><a href="#sobre">A professora</a><a href="#produtos">Conteúdos</a><a href="#contato">Contato</a></nav></div><div className="container footer-bottom"><span>© 2026 Instituto Fernanda Mendes.</span><span>Educação com clareza, cuidado e propósito.</span></div></footer>
    <a className="whatsapp-float" href={contactUrl} target="_blank" rel="noopener noreferrer" aria-label="Conversar com o Instituto pelo WhatsApp"><WhatsAppIcon /></a>
  </>;
}

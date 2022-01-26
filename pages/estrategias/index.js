import Link from "next/link"

export default function Estrategias() {
  return (
    <div className="container">      
      <h2>Estratégias</h2>

      <section className="card">
        <div className="cardNames">
          <span>Brand</span>
          <p>Design de Marcas</p>
        </div>

        <div className="cardInfos">
          <p>Criar marcas que expressem seu negócio e seus valores é o que mais amamos fazer.</p>

          <p>
            Nosso processo de Brand passa por briefing, painel conceitual, pesquisas, ramificação de ideias, símbolo, tipografia, paleta de cores, organização de ideais, aplicações em mockups e um Brand Book com todo o detalhamento da criação.</p>
            <Link href="/contato">
              <a>
                <button>Quero uma proposta</button>
              </a>
            </Link>
        </div>
      </section>

      <section className="card">
        <div className="cardNames">
          <span>Mídias</span>
          <p>Sociais</p>
        </div>

        <div className="cardInfos"> 
          <p>Para os médicos e profissionais da saúde, oferecemos planos de mídias sociais focados no fortalecimento da imagem pessoal, que acontecem com um bom planejamento de conteúdo, redação estratégica, design para posts com inovação visual, cronograma de publicações e gestão de tráfego pago, com foco na humanização do conteúdo.</p>
            <Link href="/contato">
              <a>
                <button>Quero uma proposta</button>
              </a>
            </Link>
        </div>
      </section>

      <section className="card">
        <div className="cardNames">
          <span>Sites</span>
          <p>Web designer</p>
        </div>

        <div className="cardInfos">
          <p>Criação de sites com uma proposta clean e responsiva, facilitando o encontro das principais informações e necessidades do usuário. Somos especialistas em web designer com foco no desempenho de one pages impactantes.</p>
          <p>Ter um site é essencial para quem deseja ser notado como autoridade em seu nicho.   </p>
            <Link href="/contato">
              <a>
                <button>Quero uma proposta</button>
              </a>
            </Link>
        </div>
      </section>

      <section className="card">
        <div className="cardNames">
          <span>Foto</span>
          <p>Profissionalismo em cada click</p>
        </div>

        <div className="cardInfos">
          <p>Você reconhece o poder de fotos profissionais para fortalecer sua imagem? Uma carreira sólida se importa com a percepção de valor que você entrega a todos que estão à sua volta.</p>
          <p>Um bom planejamento de marketing passa pela tradução da qualidade e profissionalismo em cliques únicos.</p>
            <Link href="/contato">
              <a>
                <button>Quero uma proposta</button>
              </a>
            </Link>
        </div>
      </section>

      <section className="card">
        <div className="cardNames">
          <span>Vídeo</span>
          <p>Produção audivisual</p>
        </div>

        <div className="cardInfos">
          <p>Vídeos publicitários com alta qualidade traduzem sentimentos e realizações. Com eles, a imagem real de seus objetivos é passada com fidelidade.</p>
          <p>Roteiro, produção, edição e entrega com total compromisso para campanhas digitais.</p>
            <Link href="/contato">
              <a>
                <button>Quero uma proposta</button>
              </a>
            </Link>
        </div>
      </section>
    </div>
  )
}
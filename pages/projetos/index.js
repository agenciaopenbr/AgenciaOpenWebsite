import Image from "next/image";
import Link from "next/link";

import styles from "../../styles/Projetos.module.css";

export default function Projetos(){
  return(
    <div className="container">
      <h2>Projetos</h2>

      <section className="projects-estatistics">
        <div>
          <span>+50</span>
          <p>Marcas criadas</p>
        </div>

        <div>
          <span>+90</span>
          <p>Contas atendidas</p>
        </div>

        <div>
          <span>+07</span>
          <p>Anos de história</p>
        </div>
      </section>

      <span className="text-intersection">Uma breve apresentação de alguns trabalhos realizados no decorrer da nossa trajetória.</span>

      <section className={styles.case}>
        <div className={styles.caseNames}>
          <h2>Case Dra Patrícia Canelas</h2>
          <span>Brand + Mídias Sociais + Site</span>
          <p>Assessoria completa desde 2016. Com foco na humanização da imagem profissional, e maior projeção de visibilidade e audiência através de uma experiência omnichannel.</p>
          <p>A urologia ainda é uma especialidade com presença predominantemente masculina, mas a trajetória da médica Patrícia Canelas inspira novas chegadas e um novo cenário feminino.</p>

          <div className={styles.buttonsContainer}>

          <Link href="/Home">
              <a>
                <button>Site Dra Patrícia Canelas</button>
              </a>
            </Link>

            <Link href="/Home">
              <a>
                <button>Instagram Dra Patrícia Canelas</button>
              </a>
            </Link>
          </div>
        </div>

        <div className="caseImage">
          <Image src="/assets/dra Patricia canelas.png" width={404} height={484} objectFit="cover"></Image>
        </div>
      </section>

      <section className={styles.case}>
        <div className={styles.caseNames}>
          <h2>Case UDI Oftalmo</h2>
          <span>Mídias Sociais + Produção Audiovisual</span>
          <p>Com 10 anos de história, a UDI Oftalmo

decidiu apostar em uma maior proximidade com

sua base de pacientes, pela entrega de conteúdos humanizados e que respondam às principais queixas presentes nos consultórios

de oftalmologia.</p>

          <div className={styles.buttonsContainer}>

          <Link href="/Home">
              <a>
                <button>Site UDI Oftalmo</button>
              </a>
            </Link>

            <Link href="/Home">
              <a>
                <button>Instagram UDI Oftalmo</button>
              </a>
            </Link>
          </div>
        </div>

        <div className="caseImage">
          <Image src="/assets/udi oftalmo.jpg" width={404} height={484} objectFit="cover"></Image>
        </div>
      </section>

      <section className={styles.case}>
        <div className={styles.caseNames}>
          <h2>Case Dr. Arnaldo Ferreira</h2>
          <span>Brand + Mídias Sociais + Site</span>
          <p>Para posicionar-se com potência em seu nicho, o médico tricologista e cirurgião capilar Arnaldo Ferreira, vem alcançando notoriedade e tornando-se referência em transplante capilar norte-nordeste, com uma estrutura completa para realização de seus atendimentos.</p>

          <div className={styles.buttonsContainer}>

          <Link href="/Home">
              <a>
                <button>Site Dr. Arnaldo Ferreira</button>
              </a>
            </Link>

            <Link href="/Home">
              <a>
                <button>Instagram Dr. Arnaldo Ferreira</button>
              </a>
            </Link>
          </div>
        </div>

        <div className="caseImage">
          <Image src="/assets/dr Arnaldo ferreira.jpg" width={404} height={484} objectFit="cover"></Image>
        </div>
      </section>
    </div>
  )
}
import Image from "next/image";
import Link from "next/link";
import Wpp from "../../components/Wpp";
import styles from "../../styles/Projetos.module.css";

export default function Projetos() {
  return (
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

            <Link href="http://www.drapatriciacanelas.com/">
              <a>
                <button>Site Dra Patrícia Canelas</button>
              </a>
            </Link>

            <Link href="https://www.instagram.com/drapatriciacanelas.urologista">
              <a>
                <button>Instagram Dra Patrícia Canelas</button>
              </a>
            </Link>
          </div>
        </div>

        <div className="caseImage">
          <Image alt="img" src="/assets/patricia.png" width={404} height={484} objectFit="cover"></Image>
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

            <Link href="https://udioftalmo.com">
              <a>
                <button>Site UDI Oftalmo</button>
              </a>
            </Link>

            <Link href="https://www.instagram.com/udioftalmo/">
              <a>
                <button>Instagram UDI Oftalmo</button>
              </a>
            </Link>
          </div>
        </div>

        <div className="caseImage">
          <Image alt="img" src="/assets/udioftalmo.jpg" width={404} height={484} objectFit="cover"></Image>
        </div>
      </section>

      <section className={styles.case}>
        <div className={styles.caseNames}>
          <h2>Case Dr. Arnaldo Ferreira</h2>
          <span>Brand + Mídias Sociais + Site</span>
          <p>Para posicionar-se com potência em seu nicho, o médico tricologista e cirurgião capilar Arnaldo Ferreira, vem alcançando notoriedade e tornando-se referência em transplante capilar norte-nordeste, com uma estrutura completa para realização de seus atendimentos.</p>

          <div className={styles.buttonsContainer}>

            <Link href="https://drarnaldoferreira.com/">
              <a>
                <button>Site Dr. Arnaldo Ferreira</button>
              </a>
            </Link>

            <Link href="https://www.instagram.com/dr.arnaldoferreira/">
              <a>
                <button>Instagram Dr. Arnaldo Ferreira</button>
              </a>
            </Link>
          </div>
        </div>

        <div className="caseImage">
          <Image alt="img" src="/assets/arnaldo.jpg" width={404} height={484} objectFit="cover"></Image>
        </div>
      </section>

      <section className={styles.projectsVisual}>
        <span className={styles.textIntersectionAssets}>Projetos visuais que encantam!</span>

        <div>
          <Image alt="img" src="/assets/p1.png" width={247} height={246} objectFit="cover"></Image>
          <Image alt="img" src="/assets/p2.png" width={247} height={246} objectFit="cover"></Image>
          <Image alt="img" src="/assets/p3.png" width={247} height={246} objectFit="cover"></Image>
          <Image alt="img" src="/assets/p4.png" width={247} height={246} objectFit="cover"></Image>
          <Image alt="img" src="/assets/p5.png" width={247} height={246} objectFit="cover"></Image>
          <Image alt="img" src="/assets/p6.png" width={247} height={246} objectFit="cover"></Image>
          <Image alt="img" src="/assets/p7.png" width={247} height={246} objectFit="cover"></Image>
          <Image alt="img" src="/assets/p8.png" width={247} height={246} objectFit="cover"></Image>
          <Image alt="img" src="/assets/p9.png" width={247} height={246} objectFit="cover"></Image>
          <Image alt="img" src="/assets/p10.png" width={247} height={246} objectFit="cover"></Image>
          <Image alt="img" src="/assets/p11.png" width={247} height={246} objectFit="cover"></Image>
          <Image alt="img" src="/assets/p12.png" width={247} height={246} objectFit="cover"></Image>
        </div>
      </section>

      <section className={styles.doctorsContainer}>
        <span className={styles.textIntersectionAssetsDoctors}>Fotografia de carreira transmite valor.</span>
        <div className={styles.backgroundAssets}>

          <div className={styles.gridAssets}>
            <div>
              <Image alt="img" src="/assets/cassandra.png" width={373} height={493} objectFit="cover"></Image>
            </div>

            <div className={styles.fourAssets}>
              <Image alt="img" src="/assets/gregoria.png" width={185} height={244} objectFit="cover"></Image>
              <Image alt="img" src="/assets/arnaldo2.png" width={185} height={244} objectFit="cover"></Image>
              <Image alt="img" src="/assets/honorina.png" width={185} height={244} objectFit="cover"></Image>
              <Image alt="img" src="/assets/elvis.png" width={185} height={244} objectFit="cover"></Image>
            </div>

            <div className={styles.fourAssets}>
              <Image alt="img" src="/assets/caroline.png" width={185} height={244} objectFit="cover"></Image>
              <Image alt="img" src="/assets/Endo+.png" width={185} height={244} objectFit="cover"></Image>
              <Image alt="img" src="/assets/carlene.png" width={185} height={244} objectFit="cover"></Image>
              <Image alt="img" src="/assets/mauricio.png" width={185} height={244} objectFit="cover"></Image>
            </div>

            <div>
              <Image alt="img" src="/assets/patriciatwo.png" width={373} height={493} objectFit="cover"></Image>
            </div>
          </div>

          <span className={styles.textIntersectionAssetsDoctors}>Sites que fortalecem o seu posicionamento digital.</span>
          <p>Toque para acessar páginas desenvolvidas por nossa Agência! ;)</p>
        </div>
      </section>

      <div className={styles.containerButtonsWebsites}>
        <Link href="https://drarnaldoferreira.com/">
          <a>
            <button>Dr. Arnaldo Ferreira</button>
          </a>
        </Link>

        <Link href="http://www.drapatriciacanelas.com/">
          <a>
            <button>Dra. Patrícia Canelas</button>
          </a>
        </Link>

        <Link href="https://www.dravivianechaves.com.br/">
          <a>
            <button>Dra. Viviane Chaves</button>
          </a>
        </Link>

        <Link href="https://www.medicalsaudeslz.com">
          <a>
            <button>Medical Saude</button>
          </a>
        </Link>

        <Link href="https://www.drmarcelocarvalho.com.br">
          <a>
            <button>Dr. Marcelo Carvalho</button>
          </a>
        </Link>
        <Link href="https://www.drahonorinaanne.com">
          <a>
            <button>Dra. Honorina Anne</button>
          </a>
        </Link>

        <Link href="https://www.nutrilaislima.com">
          <a>
            <button>Nutri Laís Lima</button>
          </a>
        </Link>

        <Link href="https://www.dorecontrole.com">
          <a>
            <button>Clínica Dor e Controle</button>
          </a>
        </Link>
        <Link href="https://www.udioftalmo.com">
          <a>
            <button>UDI Oftalmo</button>
          </a>
        </Link>

      </div>
      <Wpp></Wpp>
    </div>
  )
}
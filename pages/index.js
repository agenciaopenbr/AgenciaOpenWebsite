import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Wpp from '../components/Wpp'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Início | Agência Open Br</title>
        <meta name="description" content="Construimos marcas de valor e ajudamos médicos a se destacarem no digital. Agência Open Br | Marketing Médico" />
      </Head>

      <div className={styles.backgroundHome}>

        <div className={styles.contentHome}>
          <div className={styles.imgShadow}>
            <div className={styles.divLogo}>
            <Image alt="img" src={"/assets/logoOpen.png"} width={375} height={470} className={styles.img}></Image>
            </div>

            <div className={styles.icons}>
              <Link href="https://www.facebook.com/agenciaopenbr">
                <a>
                  <Image src="/assets/face.webp" alt="Facebook" width={25} height={25}></Image>
                </a>
              </Link>
              <Link href="https://www.instagram.com/agenciaopenbr/">
                <a>
                  <Image src="/assets/insta.webp" alt="Instagram" width={25} height={25}></Image>
                </a>
              </Link>
            </div>
          </div>

          <div className={styles.content}>
            <h2>Oi,</h2>
            <span>construimos marcas de valor e ajudamos médicos a se destacarem no digital.</span>

            <div className={styles.buttonsContainer}>
              <Link href="/estrategias">
                <a className={styles.buttonBlue}>Estratégias</a>
              </Link>
              <Link href="/projetos">
                <a className={styles.buttonWhite}>Projetos</a>
              </Link>
            </div>

            <p>Somos uma agência especializada em design e publicidade, com foco na criação de marcas desde 2014.</p>
            <p>Atuamos em gerenciamento de estratégias de Branding que fortaleçam o posicionamento
              assertivo de nossos clientes, tornando sua marca memorável.</p>
          </div>
        </div>

        <Wpp></Wpp>
      </div>
    </div>
  )
}

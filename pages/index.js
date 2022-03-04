import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Icons from '../components/icons'
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

        <Icons/>

        <div className={styles.contentHome}>
          <div className={styles.imgShadow}>
          <Image alt="img" src={"/assets/mktmedico.png"} width={375} height={524} className={styles.img}></Image>
          </div>

          <div className={styles.content}>
            <h2>Oi,</h2>
            <span>construimos marcas de valor e ajudamos médicos a se destacarem no digital.</span>

            <div className={styles.buttonsContainer}>
              <Link href="/estrategias">
                  <a className={styles.buttonBlue}>Estratégias</a>
              </Link>
              <Link href="/projetos">
                  <a className={styles.buttonWhite}>Projetoss</a>
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

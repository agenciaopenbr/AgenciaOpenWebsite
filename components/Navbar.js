import Link from "next/link";

import styles from "../styles/Navbar.module.css"

export default function Navbar(){
  return(
    <div className={styles.Navbar}>
      <nav>
        <ul className={styles.ul}>
        <li className={styles.li}>
            <Link href="/">
              <a>Início</a>
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="/estrategias">
              <a>Estratégias</a>
            </Link>
          </li>

          <li className={styles.li}>
            <Link href="/projetos">
              <a>Projetos</a>
            </Link>
          </li>

          <li className={styles.li}>
            <Link href="/">
              <a>Propostas</a>
            </Link>
          </li>

          <li className={styles.li}>
            <Link href="/">
              <a>Contato</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
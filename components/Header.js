import Navbar from "./Navbar";

import styles from "../styles/Header.module.css"
import Link from "next/link";

export default function Header() {
  return (
    <div className={styles.containerHeader}>

      <div className={styles.containerTitle}>
        <div className={styles.blueSquare}></div>
        <Link href="/">
          <a>
            <h1>Agência Open</h1>
          </a>
        </Link>

        <div className={styles.insights}>
          <Link href="/estrategias">
            <a>
              <span>/ Brand</span>
              <span>Mídias Sociais</span>
              <span>Sites</span>
              <span>Foto</span>
              <span>Vídeo</span>
            </a>
          </Link>
        </div>

      </div>

      <Navbar />
    </div>
  )
}
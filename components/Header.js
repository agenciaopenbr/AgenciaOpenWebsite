import Navbar from "./Navbar";

import styles from "../styles/Header.module.css"

export default function Header() {
  return (
    <div className={styles.containerHeader}>

      <div className={styles.containerTitle}>
        <div className={styles.blueSquare}></div>
        <h1>Agência Open</h1>

        <div className={styles.insights}>
          <span>/ Brand</span>
          <span>Mídias Sociais</span>
          <span>Sites</span>
          <span>Foto</span>
          <span>Vídeo</span>
        </div>

      </div>

      <Navbar />
    </div>
  )
}
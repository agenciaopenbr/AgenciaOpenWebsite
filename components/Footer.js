import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.Footer}>
      <section className={styles.Section}>
        <span>Site desenvolvido por Agência Open.</span>
        <div className={styles.infosContainerFooter}>
          <div className={styles.infosFooter}>
            <p>WhatsApp.</p>
            <span>98 98716 4967</span>
          </div>

          <div className={styles.infosFooter}>
            <p>E-mail.</p>
            <span>contato@agenciaopenbr.com</span>
          </div>

          <div className={styles.infosFooter}>
            <p>Siga-nos.</p>
            <div className={styles.iconsContainer}>
              <Link href="https://www.instagram.com/_agenciaopen/">
                <a>
                  <Image src="/assets/insta.webp" alt="Instagram" width={20} height={20}></Image>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

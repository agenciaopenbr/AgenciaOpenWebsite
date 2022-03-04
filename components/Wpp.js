import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Wpp.module.css"

export default function Wpp(){
  return(
<div className={styles.whatsapp}>
  <Link href="https://api.whatsapp.com/send?phone=5598987164967">
    <a>
      <Image src="/assets/whatsapp-messenger.png" width={80} height={80} alt="img"></Image>
    </a>
  </Link>
</div>
      )
}
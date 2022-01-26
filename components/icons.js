import Image from "next/image";
import Link from "next/link";

export default function Icons(){
  return(
    <div className="icons">
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
  )
}
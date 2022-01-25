import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar(){
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return(
    <div className="Navbar">
      <Image src="/assets/menu.png" alt="menu" 
      className="menuButton" 
      width="50px" 
      height="50px" 
      onClick={handleClick}></Image>

      <nav>
        <ul className={active ? 'ul' : 'hidden'}>
        <li className="li">
            <Link href="/">
              <a>Início</a>
            </Link>
          </li>
          <li className="li">
            <Link href="/estrategias">
              <a>Estratégias</a>
            </Link>
          </li>

          <li className="li">
            <Link href="/projetos">
              <a>Projetos</a>
            </Link>
          </li>

          <li className="li">
            <Link href="/contato">
              <a>Contato</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
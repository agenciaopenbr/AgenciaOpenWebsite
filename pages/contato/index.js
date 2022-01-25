import Image from "next/image";
import Link from "next/link";

export default function Contato() {
  return (
    <div className="contacts">
      <h2>Vamos conversar?</h2>

      <div className="form-container">
        <form action="https://formsubmit.co/open.solucoes@outlook.com" class="contact-form" method="POST">
          <input type="text" name="name" class="place-text" placeholder="Nome" required />
          <input type="email" name="email" class="place-text" placeholder="Email" required />
          <input type="tel" name="phone" required class="place-text" placeholder="WhatsApp" />
          <textarea name="message" placeholder="Qual sua dúvida?" class="place-text"></textarea>
          <input type="submit" value="Enviar" class="submit" />
        </form>

        <div className="container-midias">
          <div>
            <Link href="/Home">
              <a>
                <Image src="/assets/instagram.webp" width="40px" height="40px" objectFit="cover"></Image>
              </a>
            </Link>

            <div className="infos-midias">
              <div>
              <h3>Instagram</h3>
              </div>
              <p>@agenciaopenbr</p>
            </div>
          </div>

          <div>
            <Link href="/Home">
              <a>
                <Image src="/assets/wpp.webp" width="45px" height="45px" objectFit="cover"></Image>
              </a>
            </Link>

            <div className="infos-midias">
              <span>WhatsApp</span>
              <p>98 98716 4967​</p>
            </div>
          </div>

          <div>
            <Link href="/Home">
              <a>
                <Image src="/assets/gmail.webp" width="45px" height="30px" objectFit="cover"></Image>
              </a>
            </Link>

            <div className="infos-midias">
              <span>E-mail</span>
              <p>open.solucoes@outlook.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
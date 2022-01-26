import Image from "next/image";
import Link from "next/link";

export default function Contato() {
  return (
    <div className="contacts">
      <h2>Vamos conversar?</h2>

      <div className="form-container">
        <form action="https://formsubmit.co/open.solucoes@outlook.com" className="contact-form" method="POST">
          <input type="text" name="name" className="place-text" placeholder="Nome" required />
          <input type="email" name="email" className="place-text" placeholder="Email" required />
          <input type="tel" name="phone" required className="place-text" placeholder="WhatsApp" />
          <textarea name="message" placeholder="Qual sua dúvida?" className="place-text"></textarea>
          <input type="submit" value="Enviar" className="submit" />
        </form>

        <div className="container-midias">
          <div>
            <Link href="https://www.instagram.com/agenciaopenbr">
              <a>
                <Image alt="img" src="/assets/instagram.webp" width="40px" height="40px" objectFit="cover"></Image>
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
            <Link href="https://api.whatsapp.com/send?phone=5598987164967">
              <a>
                <Image alt="img" src="/assets/wpp.webp" width="45px" height="45px" objectFit="cover"></Image>
              </a>
            </Link>

            <div className="infos-midias">
              <span>WhatsApp</span>
              <p>98 98716 4967​</p>
            </div>
          </div>

          <div>
            <Link href="https://mailto:open.solucoes@outlook.com">
              <a>
                <Image alt="img" src="/assets/gmail.webp" width="45px" height="30px" objectFit="cover"></Image>
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
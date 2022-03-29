import Image from "next/image";
import Link from "next/link";
import Wpp from "../../components/Wpp";

export default function Propostas() {
  return (
    <div className="contacts">
      <h2>Vamos conversar?</h2>

      <div className="form-container">
        <form action="https://formsubmit.co/open.solucoes@outlook.com" className="contact-form" method="POST">
          <input type="text" name="Nome" className="place-text" placeholder="Nome" required />
          <input type="email" name="E-mail" className="place-text" placeholder="Email" required />
          <input type="tel" name="Telefone" required className="place-text" placeholder="WhatsApp" />
          <input type="text" name="Rede Social" required className="place-text" placeholder="Insira sua Rede Social" />
          <textarea name="Qual seu negócio?" placeholder="Qual seu negócio?" className="place-text"></textarea>
          <label htmlFor="segment">Fale sobre o projeto que precisa. Qual segmento, qual seu objetivo com o projeto, qual valor de investimento você dispõe para o projeto, dentre outros detalhes. *</label>
          <textarea id="segment" name="Especificações do projeto" placeholder="Especificações do projeto"></textarea>
          <p>Selecione previamente o que você precisa:</p>

          <div className="container-services">
            <div className="services">
              <input type="checkbox" id="criation" name="Criação de Marcas" />
              <label htmlFor="criation">Criação de Marcas</label>

            </div>
            <div className="services">
              <input type="checkbox" id="marca" name="Marcas + Naming" />
              <label htmlFor="marca">Marcas + Naming</label>
            </div>

            <div className="services">
              <input type="checkbox" id="site" name="Site" />
              <label htmlFor="site">Site</label>
            </div>

            <div className="services">
              <input type="checkbox" id="sociais" name="Gestão de Mídias Sociais" />
              <label htmlFor="sociais">Gestão de Mídias Sociais</label>
            </div>

            <div className="services">
              <input type="checkbox" id="ensaio" name="Ensaio Fotográfico Profissional" />
              <label htmlFor="ensaio">Ensaio Fotográfico Profissional</label>
            </div>

            <div className="services">
              <input type="checkbox" id="audiovisual" name="Produção Audiovisual" />
              <label htmlFor="audiovisual">Produção Audiovisual</label>
            </div>

          </div>
          <input type="submit" value="Enviar" className="submit" />
        </form>

        {/* <div className="container-midias">
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
        </div> */}
      </div>
      <Wpp></Wpp>
    </div>
  )
}
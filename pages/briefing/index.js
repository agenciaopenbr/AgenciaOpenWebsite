import React from 'react';
import styles from '/styles/Briefing.module.css';

export default function Briefing() {
  return (
    <div className={styles.container}>
      <div className={styles.infos}>
      <h1>Briefing</h1>

      <p>Responda ao questionário para inicio do seu projeto.</p>
      <span>O que você precisa da Agência Open Br? Queremos conhecer você e o seu negócio.</span>
      </div>

      <div className="form-container container-form-briefing">
        <form action="https://formsubmit.co/open.solucoes@outlook.com" className="contact-form" method="POST">
          <div className="form-briefing">
            <label htmlFor="nomeDaMarca">Qual nome será usado na marca? Haverá slogan?</label>
            <textarea name="Qual nome será usado na marca? Haverá slogan?" className="place-text areaBriefing" id="nomeDaMarca"></textarea>
          </div>

          <div className="form-briefing">
            <label htmlFor="referencia">Tem em mente alguma referência ou elemento específico para fazer parte do logotipo?</label>
            <textarea name="Tem em mente alguma referência ou elemento específico para fazer parte do logotipo?" className="place-text areaBriefing" id="referencia"></textarea>
          </div>

          <div className="form-briefing">
            <label htmlFor="elemento">Existe algum elemento que você não gostaria que estivesse presente na criação?</label>
            <textarea name="Existe algum elemento que você não gostaria que estivesse presente na criação?" className="place-text areaBriefing" id="elemento"></textarea>
          </div>

          <div className="form-tons">

          <p className="tons">Você prefere tons claros ou escuros?</p>

 
            <div className="estilosCores">
              <input type="checkbox" id="tonsClaros" name="Claros" />
              <label htmlFor="tonsClaros">Claros</label>
            </div>

            <div className="estilosCores">
              <input type="checkbox" id="tonsEscuros" name="Escuros" />
              <label htmlFor="tonsEscuros">Escuros</label>
            </div>

          </div>

          <div className="form-briefing">
            <label htmlFor="cores">Possui alguma preferência de cor? Se sim, qual(is)?
            </label>
            <textarea name="Possui alguma preferência de cor? Se sim, qual(is)?
" className="place-text areaBriefing" id="cores"></textarea>
          </div>

          <div className="form-briefing">
            <label htmlFor="adjetivos">Quais adjetivos você gostaria que melhor descrevessem sua futura marca?</label>
            <textarea name="Quais adjetivos você gostaria que melhor descrevessem sua futura marca?" className="place-text areaBriefing" id="adjetivos"></textarea>
          </div>

          <div className="form-briefing">
            <label htmlFor="concorrentes">Cite pelo menos 3 concorrentes seus e diga o que você acha sobre o logotipo que possuem.</label>
            <textarea name="Cite pelo menos 3 concorrentes seus e diga o que você acha sobre o logotipo que possuem." className="place-text areaBriefing" id="concorrentes"></textarea>
          </div>

          <div className="form-briefing">
            <label htmlFor="tipografia">Que estilo de tipografia mais lhe agrada?</label>
            <textarea name="Que estilo de tipografia mais lhe agrada?" placeholder="Exemplo : caligráfica , moderna , fontes finas, etc. " className="place-text areaBriefing" id="tipografia"></textarea>
          </div>

          <div className="form-briefing">
            <label htmlFor="tipografia">Coloque aqui todas as informações de contato que deverão estar presentes em seus materiais de identidade visual.</label>
            <textarea name="Coloque aqui todas as informações de contato que deverão estar presentes em seus materiais de identidade visual." placeholder="Informe seu número de contato , Whatsapp , e-mail, endereço, etc. " className="place-text areaBriefing" id="tipografia"></textarea>
          </div>

          <input type="submit" value="Enviar" className="submit submit-briefing" />

          <span>Ressaltamos que mantemos todas as informações aqui coletadas em sigilo, usando-as somente para o melhor desenvolvimento do seu projeto.
          </span>
        </form>
      </div>

    </div>
  )
}
import React from 'react';
import styles from '/styles/Briefing.module.css';

export default function Briefing() {
  return (
    <div className={styles.container}>
      <div className={styles.infos}>
      <h1>Briefing</h1>

      <p>Responda ao questionário para o desenvolvimento do seu site.</p>
      <span>O envio da informações corretas é de extrema importância.</span>
      </div>

      <div className="form-container container-form-briefing">
        <form action="https://formsubmit.co/open.solucoes@outlook.com" className="contact-form" method="POST">
          <div className="form-briefing">
            <label htmlFor="nomeDaMarca">Nos informe as abas que deseja no site e os dados importantes para conterem em cada uma delas. Exemplo: Aba: Especialidades | Descrição: Otorrinolaringologia, Fonoaudiologia, etc.</label>
            <textarea name="Nos informe as abas que deseja no site e os dados importantes para conterem em cada uma delas. Exemplo: Aba: Especialidades | Descrição: Otorrinolaringologia, Fonoaudiologia, etc." className="place-text areaBriefing" id="nomeDaMarca"></textarea>
          </div>

          <div className="form-briefing">
            <label htmlFor="referencia">Nos informe os dados de contato que devam constar no site, como telefones, whatsapp, endereços, redes sociais, etc.</label>
            <textarea name="Nos informe os dados de contato que devam constar no site, como telefones, whatsapp, endereços, redes sociais, etc." className="place-text areaBriefing" id="referencia"></textarea>
          </div>

          <div className="form-briefing">
            <label htmlFor="elemento">No campo de formulário de agendamento de consultas, quais campos você deseja que o paciente preencha? Exemplo: Nome completo, WhatsApp, motivo da consulta, etc.</label>
            <textarea name="No campo de formulário de agendamento de consultas, quais campos você deseja que o paciente preencha? Exemplo: Nome completo, WhatsApp, motivo da consulta, etc." className="place-text areaBriefing" id="elemento"></textarea>
          </div>

          <div className="form-briefing">
            <label htmlFor="cores">Nos informe um e-mail para onde serão direcionados os formulários de agendamento dos seus pacientes. Toda solicitação de agendamento chegará no e-mail informado. 
            </label>
            <textarea name="Nos informe um e-mail para onde serão direcionados os formulários de agendamento dos seus pacientes. Toda solicitação de agendamento chegará no e-mail informado. 
" className="place-text areaBriefing" id="cores"></textarea>
          </div>

          <div className="form-briefing">
            <label htmlFor="adjetivos">Há algum site de referência que você goste? Há alguma preferência no layout que você deseje nos informar?</label>
            <textarea name="Há algum site de referência que você goste? Há alguma preferência no layout que você deseje nos informar?" className="place-text areaBriefing" id="adjetivos"></textarea>
          </div>

          <input type="submit" value="Enviar" className="submit submit-briefing" />

          <span>Ressaltamos que mantemos todas as informações aqui coletadas em sigilo, usando-as somente para o melhor desenvolvimento do seu projeto.
          </span>
        </form>
      </div>

    </div>
  )
}
import React from "react";
import styles from "./firstSection.module.css";

function FirstSection() {
  return (
    <div className={styles.content}>
      <p className={styles.title}>
        O atendimento de excelência no tratamento de suas lesões.
      </p>
      <p className={styles.subTitle}>
        Ninguém merece sentir dor, <br /> consulte nossos procedimentos e marque
        uma consulta com um profissional que atende às necessidades mais
        especiais.
      </p>
      <a
        href="https://api.whatsapp.com/send?phone=5521966305390&text=Ola, achei seu anuncio na internet, sou [ seu nome :D ], e gostaria de agendar uma avaliação."
        target="_blank"
        className={styles.box}
      >
        <h1 className={styles.boxTitle}>Agendar uma avaliação</h1>
      </a>
    </div>
  );
}

export default FirstSection;

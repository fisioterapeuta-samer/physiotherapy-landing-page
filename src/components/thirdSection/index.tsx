import React from "react";
import styles from "./thirdSection.module.css";
import Image from "next/image";
import clinc from "@physiotherapy-client/assets/tratamento.webp";
import graphIcon from "@physiotherapy-client/assets/graph.svg";
import focusIcon from "@physiotherapy-client/assets/focus.svg";
import certificateIcon from "@physiotherapy-client/assets/cerficate.svg";
import peopleIcon from "@physiotherapy-client/assets/people.svg";
import shieldIcon from "@physiotherapy-client/assets/shield.svg";

function ThirdSection() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Por que sou{" "}
          <span style={{ color: "var(--secondary)" }}>a melhor escolha</span>{" "}
          para seu tratamento?
        </h1>

        {/* <article className={styles.articleListWrapper}>
          <p>
            Olá, meu nome é Samer. Sou graduado em Fisioterapia pela
            Universidade Veiga de Almeida, no Rio de Janeiro, desde 2006. Além
            disso, sou pós-graduado em
            <span style={{ color: "var(--secondary)" }}>
              {" "}
              Traumato-Ortopedia
            </span>{" "}
            e<span style={{ color: "var(--secondary)" }}> Quiropraxia</span>.
            Com uma sólida formação acadêmica e
            <span style={{ color: "var(--secondary)" }}>
              {" "}
              anos de experiência prática
            </span>
            , dedico-me a oferecer o melhor cuidado aos meus pacientes.
          </p>
          <p>
            Minha especialidade é o
            <span style={{ color: "var(--secondary)" }}>
              {" "}
              tratamento de dor crônica
            </span>
            ,
            <span style={{ color: "var(--secondary)" }}>
              {" "}
              zumbido e tontura
            </span>
            . Através de abordagens personalizadas e baseadas em evidências,
            busco melhorar a qualidade de vida de meus pacientes, ajudando-os a
            encontrar <span style={{ color: "var(--secondary)" }}>
              alívio
            </span>{" "}
            e <span style={{ color: "var(--secondary)" }}>recuperação</span>.
          </p>
        </article> */}

        <ul className={styles.listContainer}>
          <li className={styles.list}>
            <Image src={focusIcon} width={40} height={40} alt="check icon" />
            Especialização em tratamento de condições complexas.
          </li>
          <li className={styles.list}>
            <Image src={peopleIcon} width={40} height={40} alt="check icon" />
            Abordagem personalizada e holística.
          </li>
          <li className={styles.list}>
            <Image src={graphIcon} width={40} height={40} alt="check icon" />
            Técnicas avançadas.
          </li>
          <li className={styles.list}>
            <Image
              src={certificateIcon}
              width={40}
              height={40}
              alt="check icon"
            />
            Resultados documentados.
          </li>
          <li className={styles.list}>
            <Image src={shieldIcon} width={40} height={40} alt="check icon" />
            Atualização contínua.
          </li>
        </ul>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src={clinc}
          width={400}
          height={400}
          className={styles.image}
          alt="img"
        />
      </div>
    </div>
  );
}

export default ThirdSection;

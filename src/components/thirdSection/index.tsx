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
        <ul className={styles.listContainer}>
          <li className={styles.list}>
            <Image src={focusIcon} width={40} height={40} alt="check icon" />
            Especialização no tratamento de condições complexas.
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
        <Image src={clinc} className={styles.image} alt="img" />
      </div>
    </div>
  );
}

export default ThirdSection;

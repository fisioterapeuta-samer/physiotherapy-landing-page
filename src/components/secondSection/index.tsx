"use client";

import React, { useState } from "react";
import styles from "./secondSection.module.css";
import Image from "next/image";
import BackImage from "@physiotherapy-client/assets/pic4.webp";
import ear from "@physiotherapy-client/assets/ear.webp";
import neck from "@physiotherapy-client/assets/pic5.webp";
import ReactModal from "react-modal";

function SecondSection() {
  const [showModal, setShowModal] = useState({
    open: false,
    description: "",
    title: "",
  });
  const itemsArray = [
    {
      image: BackImage,
      title: "Dor persistente",
      description:
        "Compreendo como a dor crônica pode impactar todas as áreas da sua vida. Utilizo técnicas avançadas de fisioterapia e quiropraxia para aliviar a dor e restaurar a funcionalidade, permitindo que você retome suas atividades diárias com maior conforto.",
    },
    {
      image: ear,
      title: "Zumbido",
      description:
        "O zumbido pode ser debilitante e afetar a sua paz de espírito. Ofereço tratamentos especializados que visam reduzir os sintomas de zumbido, utilizando abordagens integradas que incluem terapia manual, exercícios específicos e estratégias de manejo do zumbido.",
    },
    {
      image: neck,
      title: "Tontura",
      description:
        "A tontura pode ter várias causas e pode ser extremamente desconfortável. Com minha expertise, realizo uma avaliação detalhada para identificar a origem da tontura e aplico técnicas eficazes para o tratamento, ajudando você a recuperar o equilíbrio e a segurança em suas atividades diárias.",
    },
  ];
  return (
    <div className={styles.container}>
      <p className={styles.title}>Procedimentos</p>
      <div className={styles.imagesContainer}>
        {itemsArray.map((item, index) => (
          <div
            key={index}
            className={styles.imageContainer}
            onClick={() =>
              setShowModal({
                open: true,
                description: item.description,
                title: item.title,
              })
            }
          >
            <div className={styles.imageBackground}>
              <div className={styles.titleContainer}>
                <p>{item.title}</p>
              </div>
            </div>

            <Image
              src={item.image}
              width={index === 1 ? 300 : 250}
              height={index === 1 ? 500 : 400}
              className={styles.image}
              alt="img"
            />
          </div>
        ))}
      </div>
      {showModal.open && (
        <div className={styles.modal}>
          <div
            className={styles.closeButton}
            onClick={() => {
              setShowModal({ open: false, description: "", title: "" });
            }}
          >
            <p>X</p>
          </div>
          <div className={styles.titleContainer}>
            <p>{showModal.title}</p>
          </div>
          <p className={styles.modalDescription}>{showModal.description}</p>
        </div>
      )}
    </div>
  );
}

export default SecondSection;

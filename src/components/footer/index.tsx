import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import phone from "@physiotherapy-client/assets/phone.png";
import insta from "@physiotherapy-client/assets/instagram.png";

function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <Image src={phone} alt="phone" width={20} height={20} />
        <p>000-000</p>
      </div>
      <div className={styles.content}>
        <Image src={insta} alt="phone" width={20} height={20} />
        <p> Instagram</p>
      </div>
    </footer>
  );
}

export default Footer;

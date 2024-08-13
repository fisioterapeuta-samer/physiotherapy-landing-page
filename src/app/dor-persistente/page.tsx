import Image from "next/image";
import styles from "../page.module.css";
import Header from "@physiotherapy-client/components/dorPersistenteScreen/Header";
import background from "@physiotherapy-client/assets/landing-bg.webp";
import ThirdSection from "@physiotherapy-client/components/dorPersistenteScreen/thirdSection";
import FifthSection from "@physiotherapy-client/components/dorPersistenteScreen/fifthSection";
import SecondSection from "@physiotherapy-client/components/dorPersistenteScreen/secondSection";
import FirstSection from "@physiotherapy-client/components/dorPersistenteScreen/firstSection";
import Footer from "@physiotherapy-client/components/dorPersistenteScreen/footer";
import FloatingButton from "@physiotherapy-client/components/dorPersistenteScreen/floatingButton";
import ForthSection from "@physiotherapy-client/components/dorPersistenteScreen/forthSection";

export default function DorPersistente() {
  return (
    <main className={styles.main}>
      <Header />
      <section id="inicio" className={styles.mainSection}>
        <Image
          src={background}
          height={600}
          width={1000}
          alt="imagem Samer fisio"
          className={styles.background}
          loading="eager"
        />
        <FirstSection />
      </section>
      <section id="procedimentos" className={styles.secondarySection}>
        <SecondSection />
      </section>
      <section id="diferencias" className={styles.mainSection}>
        <ThirdSection />
      </section>
      <section id="depoimentos" className={styles.secondarySection}>
        <ForthSection />
      </section>
      <section id="sobre_mim" className={styles.profileSection}>
        <FifthSection />
      </section>
      <FloatingButton />
      <Footer />
    </main>
  );
}

import Image from "next/image";
import styles from "../page.module.css";
import Header from "@physiotherapy-client/components/zumbidoScreen/Header";
import background from "@physiotherapy-client/assets/landing-bg.webp";
import ThirdSection from "@physiotherapy-client/components/zumbidoScreen/thirdSection";
import FifthSection from "@physiotherapy-client/components/zumbidoScreen/fifthSection";
import SecondSection from "@physiotherapy-client/components/zumbidoScreen/secondSection";
import FirstSection from "@physiotherapy-client/components/zumbidoScreen/firstSection";
import Footer from "@physiotherapy-client/components/zumbidoScreen/footer";
import FloatingButton from "@physiotherapy-client/components/zumbidoScreen/floatingButton";
import ForthSection from "@physiotherapy-client/components/zumbidoScreen/forthSection";

export default function Zumbido() {
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

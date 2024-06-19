import Image from "next/image";
import styles from "./page.module.css";
import Header from "@physiotherapy-client/components/Header";
import background from "@physiotherapy-client/assets/pic2.webp";
import ThirdSection from "@physiotherapy-client/components/thirdSection";
import FifthSection from "@physiotherapy-client/components/fifthSection";
import SecondSection from "@physiotherapy-client/components/secondSection";
import FirstSection from "@physiotherapy-client/components/firtsSection";
import Footer from "@physiotherapy-client/components/footer";
import FloatingButton from "@physiotherapy-client/components/floatingButton";

export default function Home() {
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
        Carousel de cometarios
      </section>
      <section id="sobre_mim" className={styles.profileSection}>
        <FifthSection />
      </section>
      <FloatingButton />
      <Footer />
    </main>
  );
}

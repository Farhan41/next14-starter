import Image from "next/image";
import styles from "./home.module.css";

const Home = () => {
 
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency</h1>
        <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati ut quidem aut quam distinctio reiciendis libero quas illo quod. Facilis illum eius, enim incidunt corporis non inventore animi corrupti possimus quo, repellat quam optio odit porro molestiae quidem provident vel eos omnis culpa sed nesciunt. Enim, non. Qui, quibusdam modi!</p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
      <div className={styles.brands}>
        <Image className={styles.brandImg} src="/brands.png" alt="" fill  />
      </div>
      </div>
      <div className={styles.imgContainer}>
        <Image className={styles.heroImg} src='/hero.gif' alt="" fill/>
      </div>
    </div>
  );
};

export default Home;
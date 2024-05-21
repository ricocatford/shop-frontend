import styles from "./home.module.css";
import { robotoCondensed } from "@/app/fonts";

export default function Hero() {
    return (
        <section className={styles.hero__container}>
            <div className={`${styles.hero__wrapper} container`}>
                <h2
                    className={`${robotoCondensed.className} ${styles.hero__heading}`}
                >
                    Stone baked pizza for only $7.99
                </h2>
            </div>
        </section>
    );
}

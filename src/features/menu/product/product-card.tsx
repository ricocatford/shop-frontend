import Image from "next/image";
import pizzaImage from "../../../../public/images/menu/margherita.jpg";
import styles from "./product-card.module.css";
import { robotoCondensed } from "@/app/layout";

export default function ProductCard({ product }) {
    return (
        <div className={`${robotoCondensed.className} ${styles.card}`}>
            <Image src={pizzaImage} alt="Pizza" className={styles.image} />
            <div className={styles.text__wrapper}>
                <h3 className={styles.name}>{product.name}</h3>
                <p>{product.description}</p>
            </div>
            <div className={styles.link}>
                <a className={`${styles.button} button button--solid`}>
                    Medium from ${product.price}
                </a>
            </div>
        </div>
    );
}

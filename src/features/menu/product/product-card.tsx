import Image from "next/image";
import pizzaImage from "../../../../public/images/menu/margherita.jpg";
import { robotoCondensed } from "@/app/layout";
import Link from "next/link";

import styles from "./product-card.module.css";

export default function ProductCard({ product }) {
    return (
        <article className={`${robotoCondensed.className} ${styles.card}`}>
            <Image
                src={product.image_url}
                width={500}
                height={200}
                alt="Pizza"
                className={styles.image}
            />
            <div className={styles.text__wrapper}>
                <h3 className={styles.name}>{product.name}</h3>
                <p>{product.description}</p>
            </div>
            <div className={styles.link}>
                <Link
                    className={`${styles.button} button button--solid`}
                    href={`/menu/${product.id}`}
                >
                    Medium from ${product.price}
                </Link>
            </div>
        </article>
    );
}

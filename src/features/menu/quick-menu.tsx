import styles from "./quick-menu.module.css";
import ProductCard from "./product/product-card";

async function fetchProducts() {
    const response = await fetch("http://localhost:8000/shop");

    if (!response.ok) {
        throw new Error("Error while fetching data.");
    }

    return response.json();
}

export default async function QuickMenu() {
    const data = await fetchProducts();

    return (
        <section className={`${styles.menu__wrapper} container`}>
            {data.map((product) => (
                <ProductCard product={product} />
            ))}
        </section>
    );
}

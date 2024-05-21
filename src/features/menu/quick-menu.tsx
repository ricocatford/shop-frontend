import styles from "./quick-menu.module.css";
import ProductCard from "./product/product-card";
import { Product } from "./product/product";

async function fetchProducts() {
    const response = await fetch(`${process.env.SHOP_BACKEND_HOST}/shop`);

    if (!response.ok) {
        throw new Error("Error while fetching data.");
    }

    return response.json();
}

export default async function QuickMenu() {
    const data = await fetchProducts();

    return (
        <section className={`${styles.menu__wrapper} container`}>
            {data.map((product: Product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </section>
    );
}

import ProductIngredients from "./product-ingredients";

export default interface CartProduct {
    id: string,
    name: string,
    ingredients: ProductIngredients,
    quantity: number
}
export interface Product {
    id: string;
    name: string;
    price: number;
    image_url: string;
    description: string;
}

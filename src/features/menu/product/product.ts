import ProductIngredients from "./product-ingredients";

export default interface Product {
    id: string,
    name: string,
    ingredients: ProductIngredients,
    quantity: number
}
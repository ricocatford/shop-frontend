async function fetchProduct(id: string) {
    const response = await fetch(`${process.env.SHOP_BACKEND_HOST}/shop/${id}`);

    if (!response.ok) {
        throw new Error("Error while fetching data.");
    }

    return response.json();
}

export default async function ProductDetails({
    params,
}: {
    params: { id: string };
}) {
    const product = await fetchProduct(params.id);
    const foundProduct = product[0];
    return <p>{foundProduct.name}</p>;
}

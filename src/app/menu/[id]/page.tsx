async function fetchProduct(id) {
    const response = await fetch(`http://localhost:8000/shop/${id}`);

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

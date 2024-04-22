"use client";

import { createContext, useState } from "react";
import Product from "../product/product";

const ShoppingCartContext = createContext();

const defaultValue: Product[] = [];

export default function ShoppingCartProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [cartItems, setCartItems] = useState<Product[]>(defaultValue);

    const addToCart = (item: Product) => {
        const isItemInCart: Product | undefined = cartItems.find(
            (cartItem: Product) => cartItem.id === item.id
        );
        if (isItemInCart) {
            setCartItems(
                cartItems.map((cartItem: Product) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                )
            );
        } else {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
    };

    const removeFromCart = (item: Product) => {
        const isItemInCart: Product | undefined = cartItems.find(
            (cartItem) => cartItem.id === item.id
        );

        if (isItemInCart !== undefined && isItemInCart.quantity === 1) {
            setCartItems(
                cartItems.filter((cartItem) => cartItem.id !== item.id)
            );
        } else {
            setCartItems(
                cartItems.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity - 1 }
                        : cartItem
                )
            );
        }
    };

    const data = { cartItems };
    return (
        <ShoppingCartContext.Provider value={data}>
            {children}
        </ShoppingCartContext.Provider>
    );
}

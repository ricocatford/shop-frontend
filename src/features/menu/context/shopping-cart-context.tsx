"use client";

import { createContext, useState } from "react";
import CartProduct from "../product/product";

interface ShoppingCartContextData {
    cartItems: CartProduct[];
}

const ShoppingCartContext = createContext<ShoppingCartContextData>({
    cartItems: [],
});

const defaultValue: CartProduct[] = [];

export default function ShoppingCartProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [cartItems, setCartItems] = useState<CartProduct[]>(defaultValue);

    const addToCart = (item: CartProduct) => {
        const isItemInCart: CartProduct | undefined = cartItems.find(
            (cartItem: CartProduct) => cartItem.id === item.id
        );
        if (isItemInCart) {
            setCartItems(
                cartItems.map((cartItem: CartProduct) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                )
            );
        } else {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
    };

    const removeFromCart = (item: CartProduct) => {
        const isItemInCart: CartProduct | undefined = cartItems.find(
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

    const data: ShoppingCartContextData = { cartItems };
    return (
        <ShoppingCartContext.Provider value={data}>
            {children}
        </ShoppingCartContext.Provider>
    );
}

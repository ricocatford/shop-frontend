import type { Metadata } from "next";
import { Quicksand, Roboto_Condensed } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "./main.css";

config.autoAddCss = false;

import Navbar from "../features/layout/navbar/navbar";

export const quicksand = Quicksand({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "700"],
});

export const robotoCondensed = Roboto_Condensed({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "700"],
});

export const metadata: Metadata = {
    title: "Pizzahub",
    description: "Order your pizza now!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={quicksand.className}>
                <Navbar />
                <main>{children}</main>
            </body>
        </html>
    );
}

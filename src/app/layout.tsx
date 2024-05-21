import type { Metadata } from "next";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "./main.css";

config.autoAddCss = false;

import Navbar from "../features/layout/navbar/navbar";
import { quicksand } from "./fonts";

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

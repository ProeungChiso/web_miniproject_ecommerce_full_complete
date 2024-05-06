import React from "react";
import "./globals.css"
import {Metadata} from "next";
import StoreProvider from "@/app/StoreProvider";

export const metadata: Metadata = {
    title: "EBuy",
    description: "Thanks!"
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <StoreProvider>
            {children}
        </StoreProvider>
        </body>
        </html>
    )
}

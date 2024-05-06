import React from "react";
import "@/app/globals.css"
import {Metadata} from "next";
import SessionWrapper from "@/app/SessionWrapper";
import StoreProvider from "@/app/StoreProvider";

export const metadata: Metadata = {
    title: {
        template: "%s - EBuy",
        default: "EBuy"
    },
    description: "Login of the EBuy",
    keywords: ["EBuy-ECommerce", "shop", "ecommerce", "sell", "buy"],
    openGraph: {
        title: {
            template: "%s - EBuy",
            default: "Login - EBuy"
        },
        description: "Login of the EBuy",
        images: [
            "https://static.vecteezy.com/system/resources/previews/007/910/763/original/login-and-logout-icons-enter-and-exit-symbols-sign-in-and-sign-out-pictograms-vector.jpg"
        ]
    }
}

export default function AuthLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <SessionWrapper>
            <html lang="en">
            <body>
            <StoreProvider>
                {children}
            </StoreProvider>
            </body>
            </html>
        </SessionWrapper>
    )
}

import React from "react";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "../globals.css";
import {SidebarComponent} from "@/components/Admin/Sidebar/SidebarComponent";
import StoreProvider from "@/app/StoreProvider";
import SessionWrapper from "@/app/SessionWrapper";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: {
        template: "%s - Dashboard",
        default: "My Shop"
    },
    description: "My Shop of the EBuy",
    keywords: ["EBuy-ECommerce", "shop", "ecommerce", "sell", "buy", "seller"],
    openGraph: {
        title: {
            template: "%s - Dashboard",
            default: "My Shop"
        },
        description: "My Shop of the EBuy",
        images: [
            "https://i.pinimg.com/564x/55/1d/15/551d15d706ab1e06214ad50022f87289.jpg"
        ]
    }
}

export default function AdminLayout({
                                        children,
                                    }: {
    children: React.ReactNode
}) {
    return (
        <SessionWrapper>
            <html lang="en">
            <body className="flex">
            <StoreProvider>
                <SidebarComponent/>
                {children}
            </StoreProvider>
            </body>
            </html>
        </SessionWrapper>
    )
}

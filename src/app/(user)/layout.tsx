import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "../globals.css";
import React from "react";
import NavbarComponent from "@/components/User/Navbar/NavbarComponent";
import FooterComponent from "@/components/User/Footer/FooterComponent";
import StoreProvider from "@/app/StoreProvider";
import {Suspense} from "react";
import Loading from "@/app/(user)/loading";
import Error from "@/app/(user)/error";
import {ErrorBoundary} from "next/dist/client/components/error-boundary";
import SessionWrapper from "@/app/SessionWrapper";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: {
        template: "%s - EBuy",
        default: "EBuy"
    },
    description: "Welcome to EBuy-ECommerce",
    keywords: ["EBuy-ECommerce", "shop", "ecommerce", "sell", "buy"],
    openGraph: {
        title: {
            template: "%s - ECommerce",
            default: "EBuy"
        },
        description: "Welcome to EBuy-ECommerce",
        images: [
            "https://i.pinimg.com/564x/76/e6/b9/76e6b9355380c85fe9a80dddae96172c.jpg"
        ]
    }
};

export default function UserLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <SessionWrapper>
            <html lang="en">
            <body className={inter.className}>
            <StoreProvider>
                <NavbarComponent/>
                <ErrorBoundary errorComponent={Error}>
                    <Suspense fallback={<Loading/>}>
                        {children}
                    </Suspense>
                </ErrorBoundary>
                <FooterComponent/>
            </StoreProvider>
            </body>
            </html>
        </SessionWrapper>
    );
}

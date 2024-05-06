
import React from "react";
import LoginFormComponent from "@/components/User/Forms/LoginFormComponent";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Login",
    description:"Login of the EBuy",
    keywords:["EBuy-ECommerce", "shop", "ecommerce", "sell", "buy"]
}

export default function LoginPage() {
    return(
        <main>
            <LoginFormComponent/>
        </main>
    )
}
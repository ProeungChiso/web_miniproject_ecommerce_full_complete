import React from 'react';
import RegisterFormComponent from "@/components/User/Forms/RegisterFormComponent";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Registration",
    description:"Register of the EBuy",
    keywords:["EBuy-ECommerce", "shop", "ecommerce", "sell", "buy"]
}

function RegisterPage(){
    return (
        <RegisterFormComponent/>
    );
}

export default RegisterPage;
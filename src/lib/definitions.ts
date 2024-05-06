export const MenuItems = [
    {
        title:"Home",
        path:"/"
    },
    {
        title:"About",
        path:"/about-us"
    },
    {
        title:"Policy",
        path:"/policy"
    },
    {
        title: "My Shop",
        path:"/my-shop"
    }
]

import { FaDatabase, FaGlobe  } from "react-icons/fa";
import { BsDatabaseFillAdd } from "react-icons/bs";
export const SidebarItems = [
    {
        title:"My Products",
        path:"/my-shop",
        icon:FaDatabase
    },
    {
        title:"Create Product",
        path:"/create-product",
        icon:BsDatabaseFillAdd
    },
    {
        title:"Back to Home",
        path:"/",
        icon:FaGlobe
    }
]

export type ProductDetailType = {
    id:number
    name:string;
    price:number;
    category:string;
    description:string;
    image:string;
};

export type CartProductType = {
    id:number;
    title:string;
    price:number;
    image:string;
    onClick?:()=>void;
}


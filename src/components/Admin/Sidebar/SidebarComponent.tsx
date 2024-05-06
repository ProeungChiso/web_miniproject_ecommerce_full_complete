
"use client";

import { Sidebar } from "flowbite-react";
import { FaDatabase, FaGlobe  } from "react-icons/fa";
import { BsDatabaseFillAdd } from "react-icons/bs";
import {SidebarItems} from "@/lib/definitions";
import Link from "next/link";

export function SidebarComponent() {
    return (
        <Sidebar aria-label="Sidebar with logo branding example" className="h-screen">
            <Sidebar.Logo href="/my-shop" img="/E-Commerce.png" imgAlt="EBuy">
                EBuy
            </Sidebar.Logo>
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    {SidebarItems.map((item, index) => (
                        <Sidebar.Item
                            key={index}
                            href={item.path}
                            icon={item.icon}
                        >
                            {item.title}
                        </Sidebar.Item>
                    ))}
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
}

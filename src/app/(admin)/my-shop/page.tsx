'use client'

import ProductTable from "@/components/Admin/Table/TableComponent";
import {selectToken, setAccessToken} from "@/redux/features/auth/authSlice";
import {useAppSelector} from "@/redux/hooks";
import {useRouter} from "next/navigation";

export default function MyShopPage() {
    const accessToken = useAppSelector(selectToken);
    const router = useRouter();

    return (
        <ProductTable/>
    )

}
"use client"

import {Button, Navbar, Modal} from "flowbite-react";
import {MenuItems} from "@/lib/definitions";
import {usePathname, useRouter} from "next/navigation";
import {useAppSelector, useAppDispatch} from "@/redux/hooks";
import {removeFromCart, selectProducts} from "@/redux/features/cart/cartSlice";
import {selectTotalPrice} from "@/redux/features/cart/cartSlice";
import {useState} from "react";
import {useSession, signOut} from "next-auth/react";

export default function NavbarComponent() {
    const productLength = useAppSelector(selectProducts);
    const product = useAppSelector(selectProducts);
    const amount = useAppSelector(selectTotalPrice);
    const dispatch = useAppDispatch();
    const handleRemoveFromCart = (id: number) => {
        dispatch(removeFromCart(id));
    };
    const pathname = usePathname();
    const [openModal, setOpenModal] = useState(false);
    const {data: session} = useSession();
    const router = useRouter();

    return (
        <Navbar fluid rounded>
            <Navbar.Brand href="/">
                <img src="/E-Commerce.png" className="mr-3 h-6 sm:h-9" alt="EBuy Logo"/>
                <span className="self-center whitespace-nowrap text-xl font-extrabold text-gray-800">EBuy</span>
            </Navbar.Brand>
            <div className="flex items-center md:order-2 gap-4 me-2">
                <div className="flex justify-center items-center" onClick={() => setOpenModal(true)}>
                    <div className="relative py-2">
                        <div className="t-0 absolute left-3">
                            <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">{productLength.length}</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="file: mt-4 h-6 w-6">
                            <path strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/>
                        </svg>
                    </div>
                </div>
                <Modal show={openModal} onClose={() => setOpenModal(false)}>
                    <Modal.Header>Your Cart</Modal.Header>
                    <Modal.Body>
                        <div className="space-y-6">
                            {product.map((product) => (
                                <div className="flex justify-between items-center border-b-2 rounded-s-3xl w-full p-3"
                                     key={product.id}>
                                    <div
                                        className="w-[80px] h-[80px] border-2 border-cyan-800 rounded-full overflow-hidden">
                                        <img className="w-[80px] h-[80px] object-cover"
                                             src={product.image}
                                             alt={product.title}/>
                                    </div>
                                    <h5>{product.title}</h5>
                                    <p className="text-red-700">${product.price}</p>
                                    <button
                                        onClick={() => {
                                            handleRemoveFromCart(product.id)
                                        }}
                                        className="text-red-500 hover:text-white hover:bg-red-500 font-semibold text-[12px] p-2 rounded-xl"
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                            <div className="w-full p-3 rounded-xl bg-cyan-700">
                                <h5 className="text-center text-white">$ {amount}</h5>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => setOpenModal(false)}>Order</Button>
                        <Button color="red" onClick={() => setOpenModal(false)}>
                            Cancel
                        </Button>
                    </Modal.Footer>
                </Modal>
                <div>
                    {
                        session ? (
                            <Button onClick={() => signOut()}>
                                Sign Out
                            </Button>

                        ) : (
                            <Button onClick={() => router.push(`/login`)}>
                                Login
                            </Button>
                        )
                    }
                </div>
                <Navbar.Toggle/>
            </div>
            <Navbar.Collapse>
                {MenuItems.map((item, index: any) => (
                    <Navbar.Link
                        href={item.path}
                        key={index}
                        className={
                            `${pathname === item.path && "font-bold text-cyan-800"}`
                        }
                    >
                        {item.title}
                    </Navbar.Link>
                ))}
            </Navbar.Collapse>
        </Navbar>
    );
}

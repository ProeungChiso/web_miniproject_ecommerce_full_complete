"use client";

import React, {useState} from "react";
import style from "@/app/(auth)/login/style.module.css";
import {IoEyeOffSharp} from "react-icons/io5";
import {IoEyeSharp} from "react-icons/io5";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import Image from "next/image";
import {FaGithub, FaGoogle} from "react-icons/fa";
import {signIn} from "next-auth/react"
import {useRouter} from "next/navigation";
import {selectToken, setAccessToken} from "@/redux/features/auth/authSlice";
import {useAppDispatch, useAppSelector} from "@/redux/hooks";

type ValueTypes = {
    email: string;
    password: string;
};

const initialValues: ValueTypes = {
    email: "",
    password: ""
};

const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required")
});

export default function LoginFormComponent() {
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const router = useRouter();
    const dispatch = useAppDispatch();
    const accessToken = useAppSelector(selectToken);

    const handleLogin = (values: ValueTypes) => {
        setLoading(true);
        fetch(process.env.NEXT_PUBLIC_API_URL + `/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
        })
            .then((res) => res.json())
            .then((data) => {
                setLoading(false)
                dispatch(setAccessToken(data.accessToken));
                if(data.accessToken != null){
                    router.push(`/my-shop`)
                }
            })
            .catch((error) => {
                setLoading(false);
            });
    };

    return (
        <main className={`${style.container}`}>
            <div className="flex justify-center items-center mb-6 gap-4 cursor-pointer"
                 onClick={() => router.push(`/`)}>
                <Image src="/E-Commerce.png" alt="EBuy" width={100} height={100}/>
                <h5 className="font-bold text-cyan-800 text-xl">Welcome back! Ms/Mr</h5>
            </div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, actions) => {
                    handleLogin(values);
                }}
            >
                <Form className="border-2 border-cyan-700 p-4 rounded-lg w-96">
                    <h1 className={`${style.title}`}>Login</h1>
                    {/* Email */}
                    <div className="mb-5">
                        <label className={`${style.label}`} htmlFor="email">
                            Email
                        </label>
                        <Field
                            type="email"
                            name="email"
                            id="email"
                            className={`${style.input}`}
                        />
                        <ErrorMessage
                            name="email"
                            component="section"
                            className={`${style.error}`}
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-5">
                        <label className={`${style.label}`} htmlFor="password">
                            Password
                        </label>
                        <div className="relative">
                            <Field
                                type={showPassword ? "text" : "password"}
                                name="password"
                                id="password"
                                className={`${style.input}`}
                            />
                            {!showPassword ? (
                                <IoEyeOffSharp
                                    onClick={() => handleShowPassword()}
                                    className="cursor-pointer absolute right-2 top-4"
                                />
                            ) : (
                                <IoEyeSharp
                                    onClick={() => handleShowPassword()}
                                    className="cursor-pointer absolute right-2 top-4"
                                />
                            )}
                        </div>
                        <ErrorMessage
                            name="password"
                            component="section"
                            className={`${style.error}`}
                        />
                    </div>

                    {/* button submit */}
                    <div className="flex flex-col items-center gap-4">
                        <button onClick={() => handleLogin} type="submit" className={`${style.button}`}>
                            Login
                        </button>
                        <p className="text-cyan-800 cursor-pointer" onClick={() => router.push(`/register`)}>Register
                            now
                        </p>
                    </div>
                    <div className="w-full flex flex-col justify-center items-center">
                        <button className="bg-blue-600 py-2 px-6 rounded-md text-white mt-5 mb-2"
                                onClick={() => signIn('google')}>
                            <span className="flex justify-between items-center gap-2">
                                <FaGoogle/>
                                Sign in with Google
                            </span>
                        </button>
                        <button className="bg-gray-900 py-2 px-6 rounded-md text-white mb-2"
                                onClick={() => signIn('github')}>
                            <span className="flex justify-between items-center gap-2">
                                <FaGithub/>
                                Sign in with GitHub
                            </span>
                        </button>
                    </div>
                </Form>
            </Formik>
        </main>
    );
}
import React from 'react'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom'

export default function LoginApp() {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
    }
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="flex shadow-md">
                <div className="hidden bg-sky-500 w-96 md:flex flex-col items-center justify-center">
                    <h1 className=" text-3xl font-bold text-white">HRManagement</h1>
                </div>
                <div className="bg-white px-16 py-20 text-slate-600">
                    <div className="w-72">
                        <p className="font-medium text-xl my-1">Hello!</p>
                        <p className="text-xl font-bold text-sky-500 mb-16">
                            Welcome HRManagement
                        </p>
                        <p className="text-xl font-bold mb-5 text-center">
                            <span className="text-sky-500">Login</span> Your Account
                        </p>
                        <form className="text-lg a" onSubmit={handleSubmit(onSubmit)}>
                            <input
                                className="my-3 py-2 w-full border-b-2 border-sky-500 focus:outline-none focus:border-b-4 focus:border-violet-500"
                                type="text"
                                placeholder="Username"
                                {...register("username")}
                            />
                            <input
                                className="my-3 py-2 w-full border-b-2 border-sky-500 focus:outline-none focus:border-b-4 focus:border-violet-500"
                                type="password"
                                placeholder="Password"
                                {...register("password")}
                            />
                            <p className="text-right text-sm text-sky-500 hover:text-sky-400 ">
                                <Link to="/forgot-password">Forgot password</Link>
                            </p>

                            <div className="mb-8 flex text-sm font-medium items-center">
                                <input type="checkbox" className="mr-1 accent-blue-500" />
                                <span className="text-gray-500">Remember</span>
                            </div>
                            <button type="submit" className="w-full hover:bg-sky-400 bg-sky-500 py-2 text-xl font-medium text-white">
                                Login
                            </button>
                        </form>
                        <h1 className="mt-3 text-sm">
                            Don't have an account?
                            <Link
                                className="ml-1 font-medium text-sky-500 hover:text-sky-400"
                                to="/sign-in"
                            >
                                Sign up
                            </Link>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

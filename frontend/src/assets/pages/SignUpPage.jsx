import { useState } from "react"
import { Eye, EyeOff } from "lucide-react";
import { Navbar } from "../components/Navbar";

export const SignUpPage = () => {
    const [showPassword, setShowPassword] = useState(false)
    return <>
        <div className="h-[100vh] w-full flex flex-col">
            <div className="h-[13%] relative w-full flex justify-center align-bottom">
                <Navbar />
            </div>
            <div className="h-[90%] w-full flex pt-[50px] justify-center items-center md:bg-[url('/images/main.png')] bg-[url('/images/mmain.png')] bg-center md:bg-cover">
                <div className="w-[50%] h-[90%] flex flex-col px-[40px] pt-[50px] justify-between items-center bg-white/10 backdrop-blur-md  border border-white/20 rounded-2xl p-6 shadow-xl">
                    <div className="w-full h-auto flex flex-col justify-center items-start">
                        <h3 className="text-white cursor-default font-sans text-xl font-thin">Username</h3>
                        <input type="text" name="username" id="username" className="text-white font-sans text-sm font-thin border-white border-b-1 w-[70%] focus:outline-none h-[30px]" />
                    </div>
                    <div className="w-full h-auto flex flex-col justify-center items-start">
                        <h3 className="text-white cursor-default font-sans text-xl font-thin">Email</h3>
                        <input type="email" name="email" id="email" className="text-white font-sans text-sm font-thin border-white border-b-1 w-[70%] focus:outline-none h-[30px]" />
                    </div>
                    <div className="w-full h-auto flex flex-col justify-center items-start">
                        <h3 className="text-white cursor-default font-sans text-xl font-thin">Password</h3>
                        <div className="relative w-[70%]">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                id="password"
                                className="text-white font-sans text-sm font-thin border-white border-b w-full h-[30px] bg-transparent focus:outline-none focus:ring-0 pr-10"
                            />
                            <button
                                type="button"
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white"
                                onClick={() => setShowPassword((prev) => !prev)}
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </div>
                    <div className="w-full h-[60px] border-1px flex justify-center items-center">
                        <button className="w-[70%] h-[40px] text-white border-[2px] border-white/20 rounded-sm font-sans text-xl font-thin cursor-pointer">SignUp</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}
import { useNavigate, useLocation } from "react-router-dom";

export const Navbar = () => {
    const navigate = useNavigate()
    const location = useLocation();
    return <>
        <div className="h-[80%] w-[90%] flex bg-white/10 justify-between items-center backdrop-blur-md  border border-white/20 rounded-2xl p-6 shadow-xl bottom-0 absolute">
            <div className="w-[30px] md:w-[60px] lg:w-[75px]">
                <img src="/images/logo.png" alt="" className="w-full h-full" />
            </div>
            <div>
                {location.pathname === "/signup" ? <button className="text-white font-sans text-[1.6vh] md:text-xl lg:text-[1.5vw] font-thin cursor-pointer" onClick={() => navigate("/")}>Home</button> : <button className="text-white font-sans text-[1.6vh] md:text-xl lg:text-[1.5vw] font-thin cursor-pointer" onClick={() => navigate("/signup")}>Signup</button>}
            </div>
        </div>
    </>
}

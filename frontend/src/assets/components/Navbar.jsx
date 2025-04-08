
export const Navbar = () => {
    return <>
        <div className="h-[80%] w-[90%] flex bg-white/10 justify-between items-center backdrop-blur-md  border border-white/20 rounded-2xl p-6 shadow-xl bottom-0 absolute">
            <div className="w-[60px]">
                <img src="/images/logo.png" alt="" className="w-full h-full"/>
            </div>
            <div>
                <button className="text-white font-sans text-xl font-thin">Signup</button>
            </div>
        </div>
    </>
}

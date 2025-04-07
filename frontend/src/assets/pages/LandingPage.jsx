import { Navbar } from "../components/Navbar"

export const LandingPage = () => {
    return <>
        <div className="flex flex-col items-start h-[100vh] w-full">
            <div className="h-[13%] fixed w-full flex justify-center align-bottom">
                <Navbar />
            </div>
            <div className="w-full flex flex-col justify-center items-center h-[87%] bottom-0 absolute md:bg-[url('/images/main.png')] bg-[url('/images/mmain.png')] bg-center md:bg-cover">
                <div className="w-[90%] flex flex-col relative items-center align-top h-[60%] bg-black/80 backdrop-blur-md  border border-white/20 rounded-2xl p-6">
                    <h1 className="text-white drop-shadow-[0_0_4px_rgba(255,255,255,0.6)] font-sans text-5xl font-light uppercase">Not your basic todo app</h1>
                    <p className="text-white mt-[12px] font-sans text-[15px] font-light drop-shadow-[0_0_4px_rgba(255,255,255,0.6)]">...we may be named justtodo but its way more than that</p>
                    <div className="flex flex-col h-[70%] absolute bottom-[20px] pt-[3%] items-center align-top">
                        <p className="text-gray-200 px-[50px] mt-[12px] font-sans text-[15px] text-center font-light drop-shadow-[0_0_4px_rgba(255,255,255,0.6)]">
                            Say goodbye to boring to-do lists and hello to justtodo.com – your ultimate weapon against procrastination. Why shuffle tasks when you can slay goals with style? At justtodo, we don’t just help you “stay organized” – we launch you into beast mode with goal-based to-do templates and an AI-powered routine builder that actually gets you moving. Whether you're chasing dreams or just trying to crush your daily grind, we've got your back. Join a tribe of like-minded go-getters, fuel your focus, and build habits that stick harder than Monday blues.
                        </p>
                        <h3 className="text-gray-200 mt-[50px] px-[50px] font-sans text-[30px] font-light drop-shadow-[0_0_4px_rgba(255,255,255,0.6)]">Get better. Get disciplined. Get it DONE – only at justtodo.com.</h3>
                    </div>
                </div>
            </div>
        </div>
    </>
}
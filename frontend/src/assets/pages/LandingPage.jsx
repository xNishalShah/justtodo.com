import { Navbar } from "../components/Navbar"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);
export const LandingPage = () => {
    const container = useRef()
    const container2 = useRef()
    const page = useRef()
    // useGSAP(() => {
    //     gsap.to(container.current, {
    //         opacity: 0,
    //         x: 1200,
    //         duration: 2,
    //         scrollTrigger: {
    //             trigger: page.current,
    //             start: "top top",
    //             end: "top -90%",
    //             scrub: true,
    //         }
    //     });
    //     gsap.from(container2.current, {
    //         opacity: 0,
    //         x: -1200,
    //         duration: 2,
    //         scrollTrigger: {
    //             trigger: page.current,
    //             start: "top top",
    //             end: "top -90%",
    //             scrub: true,
    //         }
    //     });
    // }, []);
    return <>
        <div className="h-[13%] w-full flex justify-center align-bottom z-[999] fixed">
            <Navbar />
        </div>
        {/* mainpage */}
        <div ref={page} className="flex flex-col h-[100%] w-full">
            {/* innerpage1 */}
            <div className="flex flex-col items-center pt-[2%] h-[100vh] w-full bg-[url('/images/page3.avif')] bg-cover">
                <div className="w-[70%] flex flex-col items-center mt-[6%] absolute align-top h-[80%] bg-black/20 backdrop-blur-md  border border-white/20 rounded-2xl p-6">
                    <h1 className="text-white drop-shadow-[0_0_4px_rgba(255,255,255,0.6)] mt-[2%] font-sans text-5xl text-nowrap font-bold uppercase">Not your basic todo app</h1>
                    <p className="text-white mt-[30px] font-sans text-center text-[18px] font-light drop-shadow-[0_0_4px_rgba(255,255,255,0.6)]">...we may be named justtodo but its way more than that</p>
                    <div className="flex flex-col h-[70%] absolute bottom-[20px] pt-[3%] items-center align-top">
                        <p className="text-gray-200 px-[50px] mt-[12px] font-sans text-[20px] text-center font-light drop-shadow-[0_0_4px_rgba(255,255,255,0.6)]">
                            Say goodbye to boring to-do lists and hello to justtodo.com – your ultimate weapon against procrastination. Why shuffle tasks when you can slay goals with style? At justtodo, we don’t just help you “stay organized” – we launch you into beast mode with goal-based to-do templates and an AI-powered routine builder that actually gets you moving. Whether you're chasing dreams or just trying to crush your daily grind, we've got your back. Join a tribe of like-minded go-getters, fuel your focus, and build habits that stick harder than Monday blues.
                        </p>
                        <h3 className="text-gray-200 mt-[50px] px-[50px] font-sans text-center text-[27px] font-bold drop-shadow-[0_0_4px_rgba(255,255,255,0.6)]">Get better. Get disciplined. Get it DONE – only at justtodo.com</h3>
                    </div>
                </div>
            </div>
            {/* innerpage2 */}
            <div className="flex justify-between items-center h-[100vh] w-full bg-[url('/images/page3.avif')] bg-cover rotate-180 rotate-y-180">
                <div>

                </div>
            </div>
        </div>
    </>
}


{/* <div ref={page} className="h-[100%] w-full">
            <div ref={container} className="flex flex-col items-start h-[100vh] w-full bg-[url('/images/main.png')] bg-left">
                <div className="h-[13%] fixed w-full flex justify-center z-[999] align-bottom">
                    <Navbar />
                </div>
                <div className="w-full flex flex-col justify-center items-center h-[100%] absolute">
                    <div className="w-[70%] flex flex-col items-center mt-[6%] absolute align-top h-[80%] bg-black/80 backdrop-blur-md  border border-white/20 rounded-2xl p-6">
                        <h1 className="text-white drop-shadow-[0_0_4px_rgba(255,255,255,0.6)] mt-[2%] font-sans text-5xl text-nowrap font-bold uppercase">Not your basic todo app</h1>
                        <p className="text-white mt-[30px] font-sans text-center text-[18px] font-light drop-shadow-[0_0_4px_rgba(255,255,255,0.6)]">...we may be named justtodo but its way more than that</p>
                        <div className="flex flex-col h-[70%] absolute bottom-[20px] pt-[3%] items-center align-top">
                            <p className="text-gray-200 px-[50px] mt-[12px] font-sans text-[20px] text-center font-light drop-shadow-[0_0_4px_rgba(255,255,255,0.6)]">
                                Say goodbye to boring to-do lists and hello to justtodo.com – your ultimate weapon against procrastination. Why shuffle tasks when you can slay goals with style? At justtodo, we don’t just help you “stay organized” – we launch you into beast mode with goal-based to-do templates and an AI-powered routine builder that actually gets you moving. Whether you're chasing dreams or just trying to crush your daily grind, we've got your back. Join a tribe of like-minded go-getters, fuel your focus, and build habits that stick harder than Monday blues.
                            </p>
                            <h3 className="text-gray-200 mt-[50px] px-[50px] font-sans text-center text-[27px] font-bold drop-shadow-[0_0_4px_rgba(255,255,255,0.6)]">Get better. Get disciplined. Get it DONE – only at justtodo.com</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[100vh] w-full">

            </div>
        </div> */}

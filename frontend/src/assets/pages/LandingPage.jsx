import { Navbar } from "../components/Navbar"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);
export default function LandingPage(){
    const page = useRef()
    const nav = useRef()
    const container = useRef()
    const page2 = useRef()
    const page2ContL = useRef()
    const page2ContR = useRef()
    const page3 = useRef()
    const page3ContL = useRef()
    const page3ContR = useRef()
    useGSAP(() => {
        const tl = gsap.timeline()
        tl.from(page.current, {
            opacity: 0,
            scale: 0.9999,
            duration: 3,
        });
        tl.from(nav.current, {
            opacity: 0,
            scale: 0.9999,
            duration: 1,
        });
        tl.from(container.current, {
            opacity: 0,
            scale: 0.9999,
            duration: 2,
        });
        gsap.from(page2ContL.current,{
            x: -500,
            opacity:0,
            duration: 1,
            scrollTrigger:{
                trigger: page2.current,
                start: "top 120%",
                end: "top -5%", 
                scrub: true
            }
        })
        gsap.from(page2ContR.current,{
            x: 500,
            opacity:0,
            duration: 1,
            scrollTrigger:{
                trigger: page2.current,
                start: "top 200%",
                end: "top -25%", 
                scrub: true
            }
        })
        gsap.from(page3ContL.current,{
            y: -100,
            x: -300,
            duration: 1,
            opacity:0,
            scrollTrigger:{
                trigger: page3.current,
                start: "top 80%",
                end: "top -25%", 
                scrub: true
            }
        })
        gsap.from(page3ContR.current,{
            y: 500,
            opacity: 0,
            duration: 1,
            scrollTrigger:{
                trigger: page3.current,
                start: "top 80%",
                end: "top -5%", 
                scrub: true
            }
        })
    }, []);
    return <>
        <div ref={nav} className="h-[16vw] md:h-[13%] w-[98vw] md:w-full flex justify-center align-bottom z-[999] fixed">
            <Navbar />
        </div>
        {/* mainpage */}
        <div ref={page} className="flex flex-col h-[100%] w-full">
            {/* innerpage1 */}
            <div className="flex flex-col relative justify-center items-center pt-[2%] md:pt-[7%] h-[100vh] w-full bg-[url('/images/page3.avif')] bg-cover">
                <div ref={container} className="w-[90%] md:w-[70%] flex flex-col items-center absolute align-top h-[58vmax] md:h-[72vmin] bg-black/20 backdrop-blur-md  border border-white/20 rounded-2xl p-6">
                    <h1 className="text-white drop-shadow-[0_0_4px_rgba(255,255,255,0.6)] mt-[2%] font-sans text-[5.7vmin] text-nowrap font-bold uppercase">Not your basic todo app</h1>
                    <p className="text-white mt-[3vw] md:mt-[30px] font-sans text-center text-[2.6vw] md:text-[1.6vw] font-light drop-shadow-[0_0_4px_rgba(255,255,255,0.6)]">...we may be named justtodo but its way more than that</p>
                    <div className="flex flex-col h-[70%] absolute bottom-[20px] pt-[3%] items-center align-top">
                        <p className="text-gray-200 px-[30px] md:px-[50px] md:mt-[12px] font-sans text-[1.6vmax] text-center font-light drop-shadow-[0_0_4px_rgba(255,255,255,0.6)]">
                            Say goodbye to boring to-do lists and hello to justtodo.com – your ultimate weapon against procrastination. Why shuffle tasks when you can slay goals with style? At justtodo, we don’t just help you “stay organized” – we launch you into beast mode with goal-based to-do templates and an AI-powered routine builder that actually gets you moving. Whether you're chasing dreams or just trying to crush your daily grind, we've got your back. Join a tribe of like-minded go-getters, fuel your focus, and build habits that stick harder than Monday blues.
                        </p>
                        <h3 className="text-gray-200 mt-[50px] px-[50px] font-sans text-center text-[1.8vh] md:text-[3.8vmin] font-bold drop-shadow-[0_0_4px_rgba(255,255,255,0.6)]">Get better. Get disciplined. Get it done – only at justtodo.com</h3>
                    </div>
                </div>
            </div>
            {/* innerpage2 */}
            <div ref={page2} className="h-[100vh] w-full relative">
                <div className="h-[100vh] absolute w-full z-0 bg-[url('/images/page3.avif')] bg-cover rotate-x-180" />
                <div className="h-[100vh] z-50 absolute flex flex-col md:flex-row justify-between w-full">
                    {/* leftdiv */}
                    <div ref={page2ContL} className="w-full h-[50%] md:w-[50%] pt-[5%] md:h-full flex justify-center items-end md:items-center">
                        <img src="/images/chase.png" alt="" className="w-[70%]" />
                    </div>
                    {/* rightdiv */}
                    <div ref={page2ContR} className="w-full md:w-[50%] md:pt-[5%] px-[40px] h-[50%] md:h-full gap-[20px] flex flex-col justify-center items-center">
                        <p className="text-white drop-shadow-[0_0_4px_rgba(255,255,255,0.6)] font-thin text-[1.8vh] md:text-[20px] lg:text-[1.7vw] text-center">
                            Stressed about not crushing your goals? Don’t sweat it — we’ve got you.
                            Kickstart your journey with justtodo.com and channel your inner Goggins (minus the ultra marathons… unless that’s your thing).

                            Feeling lost in the chaos? Wondering what to do and when to do it?
                            Let our Jutso AI be your personal goal sensei — slicing through the confusion and serving you daily missions that actually move the needle.

                            No more guesswork. No more wasted days. Just action, discipline, and real progress.
                        </p>
                        <h4 className="text-white drop-shadow-[0_0_4px_rgba(255,255,255,0.6)] text-[20px] lg:text-[2vw] text-center">Start now, stay sharp, and get it DONE – the justtodo.com way.</h4>
                    </div>
                </div>
            </div>
            {/* innerpage3 */}
            <div ref={page3} className="h-[100vh] w-full relative">
                <div className="h-[100vh] absolute w-full z-0 bg-[url('/images/page3.avif')] bg-cover" />
                <div className="h-[100vh] z-50 absolute flex flex-col-reverse md:flex-row justify-between w-full">
                    <div ref={page3ContL} className="w-full md:w-[50%] md:pt-[5%] px-[2vw] md:px-[40px] h-[50%] md:h-full gap-[20px] flex flex-col justify-center items-center">
                        <div className="flex flex-col gap-5 w-full px-[5vw] md:px-[0vw] h-full items-center justify-center">
                            <p className="text-white drop-shadow-[0_0_4px_rgba(255,255,255,0.6)] font-thin text-[3.5vw] md:text-[20px] lg:text-[1.7vw] text-left">Jutso AI knows exactly what you’re going through...
                                Jutso AI knows exactly what you’re going through...
                                Well, not really — it was always disciplined (annoying, we know).
                                But don’t worry — this AI isn't just smart, it’s your personal sensei of structure.
                            </p>
                            <p className="text-white drop-shadow-[0_0_4px_rgba(255,255,255,0.6)] font-thin text-[3.5vw] md:text-[20px] lg:text-[1.7vw] text-left">
                                Feeling overwhelmed? Tasks all over the place?
                                Jutso AI steps in like a productivity ninja — slicing up your to-do chaos, crafting strategies, and helping you outsmart procrastination like a boss.
                            </p>
                            <p className="text-white drop-shadow-[0_0_4px_rgba(255,255,255,0.6)] font-thin text-[3.5vw] md:text-[20px] lg:text-[1.7vw] text-left">
                                Struggling to stick to a routine? Just brain-dump your mess of tasks and Jutso will whip up a tailor-made daily plan to help you get your sh*t together — and actually keep it together.
                            </p>
                        </div>
                    </div>
                    <div ref={page3ContR} className="w-full md:w-[50%] pt-[5%] h-[50%] md:h-full flex justify-center items-end md:items-center">
                        <img src="/images/jutso.png" alt="" className="w-[70%]" />
                    </div>
                </div>
            </div>
        </div>
    </>
}

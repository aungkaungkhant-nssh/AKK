"use client"
import AnimatedButton from "../ui/animatedButton"
import ScrollPointer from "./ScrollPointer"
import SwipeCardCarousel from "./SwipeCardCarousel"
import TypingEffect from "./TypingEffect"


export default function Intro() {
    const handleExploreResume = () => {
        window.open("https://docs.google.com/document/d/1k3jm-f7Gnhmp-zSrl4pAP4Jr7yFEk_cE/edit?usp=sharing&ouid=107337763190109767832&rtpof=true&sd=true", "_blank");
    }
    return (
        <div className="h-screen flex flex-col-reverse lg:flex-row lg:justify-between gap-[45px]  justify-center items-center relative text-center lg:text-left mt-6 lg:mt-0">
            <div className="flex flex-col gap-3 max-w-lg shadow-lg rounded-lg mx-auto lg:mx-0"> {/* Centered on mobile */}
                <h1 className="text-2xl font-semibold text-tertiary">🙏 Warm Greetings 🙏</h1>
                <TypingEffect />
                <h3 className="text-lg text-tertiary uppercase tracking-widest mt-2 font-boldp">Full Stack Developer</h3>
                <p className="text-tertiary tracking-wide text-lg">
                    I am a versatile full-stack developer skilled in building dynamic, user-centric web applications from front-end design to back-end architecture.
                </p>
                <AnimatedButton text="Explore Resume" onClick={handleExploreResume} />
            </div>
            <div className="">
                <SwipeCardCarousel />
            </div>
            <ScrollPointer />
        </div>

    )
}
import AnimatedButton from "../ui/animatedButton"
import ScrollPointer from "./ScrollPointer"
import SwipeCardCarousel from "./SwipeCardCarousel"
import TypingEffect from "./TypingEffect"


export default function Intro() {
    return (
        <div className="h-screen flex flex-col-reverse lg:flex-row lg:justify-between gap-[45px]  justify-center items-center relative text-center lg:text-left mt-6 lg:mt-0">
            <div className="flex flex-col gap-3 max-w-lg shadow-lg rounded-lg mx-auto lg:mx-0"> {/* Centered on mobile */}
                <h1 className="text-2xl font-semibold text-tertiary">🙏 Warm Greetings 🙏</h1>
                <TypingEffect />
                <h3 className="text-lg text-tertiary uppercase tracking-widest mt-2">Full Stack Developer</h3>
                <p className="text-tertiary tracking-wide">
                    I am a versatile full-stack developer skilled in building dynamic, user-centric web applications from front-end design to back-end architecture.
                </p>
                <AnimatedButton text="DownLoad Resume" />
            </div>
            <div className="">
                <SwipeCardCarousel />
            </div>
            <ScrollPointer />
        </div>

    )
}
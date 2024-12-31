"use client"
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
export default function ScrollPointer() {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true) // Runs only on the client side
    }, [])

    const scrollToNextSection = () => {
        if (isClient) {
            const element = document.getElementById("about") as HTMLElement;
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <motion.div
            className='absolute bottom-8 left-[45%] border border-primary rounded-full p-2 hover:bg-foreground cursor-pointer '
            initial={{ y: 0 }}
            animate={{ y: [0, 8, 0] }} // Animates y from 0 to 8 and back to 0
            transition={{
                duration: 0.8,
                ease: "easeInOut",
                repeat: Infinity, // Makes the animation loop infinitely
            }}
            onClick={scrollToNextSection}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap='round' strokeLinejoin="round" className="lucide lucide-chevrons-down text-primary"><path d="m7 6 5 5 5-5" /><path d="m7 13 5 5 5-5" /></svg>
        </motion.div>
    )
}



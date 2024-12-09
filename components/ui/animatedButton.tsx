"use client"
import { motion } from "framer-motion";
import { FileUser } from "lucide-react";

interface AnimatedButtonProps {
    text: string;
    icon?: React.ReactNode; // Optional icon prop
    fromColor?: string; // Gradient start color
    toColor?: string; // Gradient end color
    hoverFromColor?: string; // Hover gradient start color
    hoverToColor?: string; // Hover gradient end color
}

function AnimatedButton({
    text,
    icon = <FileUser size={25} />, // Default icon
    fromColor = "#d97706", // Default gradient from color
    toColor = "#dc2626", // Default gradient to color
    hoverFromColor = "#6b7280", // Default hover gradient from color
    hoverToColor = "#dc2626", // Default hover gradient to color
}: AnimatedButtonProps) {
    return (
        <motion.button
            type="button"
            className="group flex w-full h-[50px] items-center justify-center rounded-full p-[1.5px] text-white"
            whileHover={{
                scale: 1.05,
                background: `linear-gradient(to right, ${hoverFromColor}, ${hoverToColor})`,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{
                background: `linear-gradient(to right, ${fromColor}, ${toColor})`, // Set initial gradient color
            }}
        >
            <div className="text-primary font-black text-lg  flex gap-2 h-full w-full items-center justify-center rounded-full bg-black transition duration-300 ease-in-out">
                {icon} {/* Render the icon */}
                <span>{text}</span>
            </div>
        </motion.button>
    );
}

export default AnimatedButton;

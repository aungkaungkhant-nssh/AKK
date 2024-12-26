"use client"
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { FileUser } from "lucide-react";

interface AnimatedButtonProps {
    text: string;
    width?: string;
    height?: string;
    icon?: React.ReactNode;
    fromColor?: string;
    toColor?: string;
    hoverFromColor?: string;
    hoverToColor?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function AnimatedButton({
    text,
    onClick,
    width = "w-full",
    height = "h-[50px]",
    icon = <FileUser size={25} />,
    fromColor = "#d97706",
    toColor = "#dc2626",
    hoverFromColor = "#6b7280",
    hoverToColor = "#dc2626",

}: AnimatedButtonProps) {
    return (
        <motion.button
            type="button"
            className={cn("group flex items-center justify-center rounded-full p-[1.5px] text-white", width, height)}
            whileHover={{
                scale: 1.05,
                background: `linear-gradient(to right, ${hoverFromColor}, ${hoverToColor})`,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{
                background: `linear-gradient(to right, ${fromColor}, ${toColor})`, // Set initial gradient color
            }}
            onClick={onClick}
        >
            <div className="text-primary font-black text-lg  flex gap-1 h-full w-full items-center justify-center rounded-full bg-black transition duration-300 ease-in-out">
                {icon} {/* Render the icon */}
                <span>{text}</span>
            </div>
        </motion.button>
    );
}

export default AnimatedButton;

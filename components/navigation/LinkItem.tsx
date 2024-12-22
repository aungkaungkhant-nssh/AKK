"use client"
import React from "react";
import { motion } from "framer-motion";

interface LinkGroupsProps {
    icon: React.ComponentType<{ className?: string; size?: number }>;
    link: string;
    size?: number
    color?: string;
}

const LinkItem = ({ icon: Icon, link, size = 23, color = "primary", }: LinkGroupsProps) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <button className="text-white border border-primary rounded-full p-2 hover:bg-foreground mx-2">
                <motion.div
                    initial={{ scale: 0, opacity: 0, rotate: -45 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                        duration: 0.5,
                    }}
                    whileHover={{
                        scale: 1.2,
                        rotate: 10,
                    }}
                    whileTap={{ scale: 0.9 }}
                >
                    <Icon className={`text-${color}`} size={size} />
                </motion.div>
            </button>
        </a>
    );
};

export default LinkItem;




"use client"
import { Menu } from "lucide-react";
import { AnimatePresence, motion } from 'framer-motion'
import Profile from "../home/Profile";
import { IoClose } from "react-icons/io5";
import MenuList from "./MenuList";
import socialLinks from "@/constants/socialLinks";
import { useState } from "react";
import LinkItem from "./LinkItem";
const sidebarVariants = {
    open: { x: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } },
    closed: { x: '100%', transition: { type: 'spring', stiffness: 300, damping: 30 } },
};
export default function SideMenu() {
    const [open, setOpen] = useState(false)
    return (
        <>
            <motion.div
                className="cursor-pointer"
                initial={{ rotateY: 90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    duration: 0.8,
                }}
                whileHover={{ scale: 1.1, rotateY: -10 }}
                onClick={() => setOpen(prev => !prev)}
            >
                <Menu className="text-primary" size={35} />
            </motion.div>
            <AnimatePresence>
                {open && (
                    <>
                        {/* Sidebar */}
                        <motion.div
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={sidebarVariants}
                            className="fixed inset-y-0 right-0 w-96 bg-background text-white z-30 py-4 px-6 h-screen"
                        >
                            <div className="relative h-full">
                                <div className="text-lg font-bold mb-4 flex justify-between items-center">
                                    <Profile />
                                    <IoClose size={30} className="cursor-pointer" onClick={() => setOpen(prev => !prev)} />
                                </div>
                                <div className="h-full mt-[80px]">
                                    <MenuList className="flex-col" setOpen={setOpen} />
                                </div>
                                <div className="absolute bottom-0 left-[30%] ">
                                    {
                                        socialLinks.map((link, index) => (
                                            <LinkItem
                                                key={index}
                                                icon={link.icon}
                                                link={link.link}
                                                color={link.color}
                                            />
                                        ))
                                    }
                                </div>
                            </div>

                        </motion.div>

                        {/* Background Overlay */}
                        <motion.div
                            className="fixed inset-0 bg-background opacity-25 z-20 h-screen"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setOpen(prev => !prev)}
                        />
                    </>
                )}
            </AnimatePresence>
        </>
    )
}
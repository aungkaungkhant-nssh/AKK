"use client"
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion'
export default function SocialLink() {
    return (
        <div className="flex items-center gap-6">
            <button className="text-white border border-primary rounded-full p-2 hover:bg-foreground">
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
                    <FaGithub className=" text-primary" size={23} />
                </motion.div>

            </button>
            <button className=" text-white border border-primary rounded-full p-2 hover:bg-foreground">
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
                    <FaLinkedin className=" text-primary" size={23} />
                </motion.div>
            </button>
            <button className=" text-white border border-primary rounded-full p-2 hover:bg-foreground">
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
                    <FaFacebook className=" text-primary" size={23} />
                </motion.div>

            </button>
        </div>
    )
}
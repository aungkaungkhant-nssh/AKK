"use client"
import {
    Avatar,
} from "@/components/ui/avatar"
import Pf from '@/public/images/pf.png'
import { AvatarFallback } from "@radix-ui/react-avatar"
import Image from "next/image"
import { motion } from 'framer-motion'
export default function Profile({}) {
    return (
        <motion.div
            initial={{ rotateY: 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
                duration: 0.8,
            }}
            whileHover={{ scale: 1.1, rotateY: -10 }}
        >
            <Avatar className="w-[60px] h-[60px]">
                <AvatarFallback>
                    <Image
                        src={Pf}
                        alt="akk"
                        className=""
                        fill={true}
                    />
                </AvatarFallback>
            </Avatar>
        </motion.div>
    )
}
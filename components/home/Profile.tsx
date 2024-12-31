"use client"
import { motion } from 'framer-motion'
import { Code, CodeXmlIcon } from "lucide-react"
export default function Profile({ }) {
    return (
        <motion.div
            className='cursor-pointer'
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
            <div className='flex gap-2 items-center '>
                <Code className=' text-white ' />
                <h1 className='text-primary font-bold text-2xl'>Mg Kaung</h1>
                <CodeXmlIcon className='text-white' />
            </div>
        </motion.div>
    )
}
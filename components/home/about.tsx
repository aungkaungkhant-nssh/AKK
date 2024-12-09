"use client"
import Lottie from 'lottie-react'
import pm from '@/public/pm2.json'
import { GraduationCap } from 'lucide-react'
import { motion } from 'framer-motion'
export default function About() {

    return (
        <div className=" grid grid-cols-4 gap-4   mt-6  items-center flex-wrap" id="about">
            <div className='col-span-4 lg:col-span-2'>
                <Lottie
                    autoplay
                    loop
                    animationData={pm}
                    style={{ height: '100%', width: '100%' }}
                />

            </div>
            <div className="col-span-4 lg:col-span-2 p-6 bg-foreground rounded-lg shadow-lg shadow-primary/20">
                <h2 className="text-2xl font-bold text-primary  mb-4 text-center">About Me</h2>
                <div className="text-tertiary text-lg">
                    <p className='leading-7 tracking-wide indent-7'>
                        I am a Full-Stack Developer with a deep passion for backend development and a strong foundation in JavaScript. With extensive experience in modern JavaScript frameworks, libraries, and server-side technologies, I specialize in building scalable APIs, efficient data flows, and robust server-side solutions.
                    </p>
                    <p className='leading-7 tracking-wide indent-7'>
                        My expertise spans across Node.js, Express.js, Nest Js ,and other backend ecosystems, allowing me to design and implement high-performing applications that solve real-world problems. I also enjoy working with front-end technologies like React and Next.js, creating seamless integrations between client and server.
                    </p>
                    <p className='leading-7 tracking-wide indent-7'>
                        I’m continuously learning and staying updated on the latest JavaScript trends and best practices to deliver cutting-edge solutions that make an impact.
                    </p>
                </div>
            </div>
            <div className='col-span-4 lg:col-start-2 lg:col-end-4 bg-foreground rounded-lg p-3 relative shadow-lg shadow-primary/20'>
                <h2 className="text-2xl font-bold text-primary  mb-4 text-center">Education</h2>
                <div className='text-tertiary flex flex-col gap-1'>
                    <h5>2018-2023</h5>
                    <h1 className='text-2xl font-bold text-white'>University Of Computer Studies (Hpa An)</h1>
                    <p>Bachelor Of Computer Science</p>
                </div>
                <motion.div
                    className="absolute -top-5 -left-3"
                    animate={{ rotate: [0, -15, 15, 0] }}  // Rotate from 0 to 15 and back to 0
                    transition={{
                        repeat: Infinity,
                        duration: 3,  // Duration for one full cycle (rotate and back)
                        ease: 'easeInOut',
                    }}
                >
                    <GraduationCap className="text-primary" size={35} />
                </motion.div>
                <motion.div
                    className="absolute -top-5 -right-3"
                    animate={{ rotate: [0, 15, -15, 0] }}    // Rotate in the opposite direction
                    transition={{
                        repeat: Infinity,
                        duration: 3,
                        ease: 'easeInOut',
                    }}
                >
                    <GraduationCap className="text-primary" size={35} />
                </motion.div>
            </div>
        </div>
    )
}
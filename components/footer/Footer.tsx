"use client"
import MaxWidthWrapper from "../wrappers/MaxWidthWrapper"
import { Mail } from 'lucide-react'
export default function Footer() {
    return (
        <div className=" bg-foreground backdrop-blur-md py-[14px] ">
            <MaxWidthWrapper className="text-tertiary">
                <div className="flex justify-center items-center flex-col lg:flex-row lg:justify-between">
                    <p >© 2024 Aung Kaung Khant. Proudly crafted with care.</p>
                    <div className="flex gap-2">
                        <Mail />
                        <p>akkgit0909@gmail.com</p>
                    </div>
                </div>
            </MaxWidthWrapper>
        </div>
    )
}
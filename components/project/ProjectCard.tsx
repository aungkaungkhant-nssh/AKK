"use client"
import { cn } from "@/lib/utils";

import Pf from '@/public/images/pf.png'
import Image from "next/image";
import iconLinks from "@/constants/iconLinks";
import LinkItem from "../navigation/LinkItem";

export default function ProjectCard() {
    return (
        <div className={cn('flex items-start gap-3 ')}>
            <div>
                <div>
                    <h1>AKK portfolio</h1>
                    <p>Portfolio Website of me</p>
                </div>
                <div>
                    {
                        iconLinks.map((link, index) => (
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
            <div>
                <Image
                    src={Pf}
                    alt="akk"
                    className="border rounded-lg"
                    width={50}
                    height={50}
                />
            </div>
        </div>
    )
}
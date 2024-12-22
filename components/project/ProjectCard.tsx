"use client"
import { cn } from "@/lib/utils";

import Pf from '@/public/images/pf.png'
import Image from "next/image";
import iconLinks from "@/constants/iconLinks";
import LinkItem from "../navigation/LinkItem";
import Link from "next/link";

export default function ProjectCard() {
    return (
        <div className="bg-foreground text-tertiary px-4 py-3 rounded-lg shadow-lg shadow-primary/20 w-[100%] md:w-[48%] lg:w-[30%]   mt-[20px]">
            <div className={cn('flex items-start gap-3 justify-between')}>
                <div>
                    <div>
                        <Link href="/">
                            <h1 className="text-xl text-primary font-bold">AKK portfolio</h1>
                        </Link>

                        <p className="text-tertiary tracking-wide text-justify">
                            Explore my portfolio to see projects that showcase my skills . Let’s connect and create something remarkable!
                        </p>
                    </div>
                    <div className="mt-3">
                        {
                            iconLinks.map((link, index) => (
                                <LinkItem
                                    key={index}
                                    icon={link.icon}
                                    link={link.link}
                                    color={link.color}
                                    size={18}
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
                        width={150}
                    />
                </div>
            </div>
        </div>

    )
}
"use client";
import { cn } from "@/lib/utils";
import iconLinks from "@/constants/iconLinks";
import LinkItem from "../navigation/LinkItem";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation'

export type PropsTypes = {
    project: {
        id: number;
        title: string;
        subTitle: string;
        logo: string | React.ElementType
        githubLink?: string | null;
        demoLink?: string | null;
        desc?: string | null;

    };
};

export default function ProjectCard({ project }: PropsTypes) {
    const pathname = usePathname();


    const linkMapping: { [key: number]: string } = {
        0: `${pathname}?id=${project.id}`,
        1: project.githubLink || "",
        2: project.demoLink || "",
    };
    return (
        <div className="bg-foreground text-tertiary px-4 py-3 rounded-lg shadow-lg shadow-primary/20 w-[100%] md:w-[48%] lg:w-[30%] mt-[20px] min-h-[180px] relative">

            <div className={cn("flex items-start gap-3 justify-between")}>
                <div>
                    <div>
                        <Link href="/">
                            <h1 className={cn(`text-xl text-primary font-bold`)}>{project.title}</h1>
                        </Link>

                        <p className="text-tertiary tracking-wide text-justify mt-1">{project.subTitle}</p>
                    </div>

                </div>
                <div>
                    {(
                        <Image
                            src={project.logo as string}
                            alt={`${project.title} logo`}
                            className="border rounded-lg"
                            width={100}
                            height={100}
                        />)
                    }

                </div>
            </div>

            <div className="mt-3 absolute bottom-3 left-[50%] transform translate-x-[-50%] flex gap-2">
                {iconLinks.map((link, index) => {
                    link.link = linkMapping[index] || "";
                    return (
                        <LinkItem
                            key={index}
                            icon={link.icon}
                            link={link.link}
                            color={link.color}
                            size={18}
                        />
                    )
                })}
            </div>

        </div>
    );
}

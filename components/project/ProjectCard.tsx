"use client";
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
        0: `${pathname}/${project.id}`,
        1: project.githubLink || "",
        2: project.demoLink || "",
    };
    return (
        <div className="bg-background text-tertiary px-6 py-5 rounded-lg shadow-lg shadow-primary/20 w-full md:w-[48%] lg:w-[30%]  md:min-h-[200px]  transition-transform transform hover:scale-105">
            <div className="flex flex-col justify-between items-center">
                <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                        <Link href={linkMapping[0] || ""}>
                            <h1 className="text-xl text-white font-bold hover:underline">{project.title}</h1>
                        </Link>
                        <p className="text-tertiary tracking-wide text-justify mt-2 leading-relaxed">
                            {project.subTitle}
                        </p>
                    </div>
                    {project.logo && (
                        <div className="flex-shrink-0">
                            <Image
                                src={project.logo as string}
                                alt={`${project.title} logo`}
                                className="border border-gray-200 rounded-lg shadow-md"
                                width={80}
                                height={80}
                            />
                        </div>
                    )}
                </div>

                <div className="mt-4  flex gap-3">
                    {iconLinks.map((link, index) => {
                        link.link = linkMapping[index] || "";
                        return (
                            <LinkItem
                                key={index}
                                icon={link.icon}
                                link={link.link}
                                color={link.color}
                                size={20}
                            />
                        );
                    })}
                </div>
            </div>

        </div>

    );
}

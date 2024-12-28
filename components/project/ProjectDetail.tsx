"use client"
import { ChevronLeft } from "lucide-react"
import AnimatedButton from "../ui/animatedButton"
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

type PropTypes = {
    project: {
        id: number;
        title: string;
        subTitle: string;
        desc: string;
        logo: string;
        techStacks: string[];
        photo: string;
        responsibilities: string;
        githubLink?: string | null;
        demoLink?: string | null;
    }

}

export default function ProjectDetails({ project }: PropTypes) {
    const router = useRouter();
    return (
        <div className="bg-foreground text-tertiary px-4 py-3 rounded-lg shadow-lg shadow-primary/20 w-[100%] my-[20px]  relative">
            <AnimatedButton
                text='Back'
                icon={<ChevronLeft size={24} />}
                width="w-[90px]"
                height="h-[40px]"
                onClick={() => router.push('/projects')}
            />

            <div className="my-7 flex flex-col md:flex-row w-full gap-6 items-center bg-background p-6 rounded-lg shadow-md">
                <Image
                    src={project.photo}
                    alt={project.title}
                    width={1000}
                    height={1000}
                    className="w-full md:w-1/2 object-cover border border-gray-600 rounded-md"
                />
                <div className="flex flex-col justify-between w-full md:w-1/2">
                    <div className="mb-4">
                        <h1 className="text-primary font-bold text-3xl mb-2">{project.title}</h1>
                        <h3 className="text-tertiary text-lg leading-relaxed md:leading-loose font-medium">
                            {project.subTitle}
                        </h3>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-3">
                        {project.techStacks.map((techStack, index) => (
                            <span
                                key={index}
                                className="text-white bg-primary px-3 py-1 rounded-full text-sm font-semibold">
                                {techStack}
                            </span>
                        ))}
                    </div>


                    <div className="flex  items-start mt-4 gap-3">
                        {
                            project.demoLink && (
                                <Link
                                    target="_blank"
                                    href={project.demoLink}
                                    className="text-primary font-semibold text-lg underline hover:text-primary/80 transition duration-200"
                                >
                                    Demo Link
                                </Link>
                            )
                        }

                        {
                            project.githubLink && (
                                <Link
                                    href={project.githubLink}
                                    className="text-primary font-semibold text-lg underline hover:text-primary/80 transition duration-200"
                                >
                                    GitHub Link
                                </Link>
                            )
                        }


                    </div>
                </div>
            </div>



            <div className="mt-5 text-white bg-background p-6 rounded-lg shadow-md">
                <div className="mb-6">
                    <h1 className="text-2xl font-bold mb-3 border-b-2 border-gray-600 pb-2">Responsibilities</h1>
                    <p className="text-gray-300 leading-relaxed">{project.responsibilities}</p>
                </div>
                <div>
                    <h1 className="text-2xl font-bold mb-3 border-b-2 border-gray-600 pb-2">Description</h1>
                    <p className="text-gray-300 leading-relaxed">{project.desc}</p>
                </div>
            </div>

        </div>
    )
}


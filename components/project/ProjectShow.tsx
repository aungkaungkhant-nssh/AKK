"use client"
import Image from "next/image"
import ProjectShowImage from "./ProjectShowImage"
import { projectActivities } from "@/constants/projectActivities"

export default function ProjectShow() {
    return (
        <div className="bg-foreground text-white px-6 py-8 rounded-xl shadow-lg">
            <h1 className="text-3xl font-bold text-center mb-6">
                Serving as Team Lead for a University Project Showcase
            </h1>
            <p className="text-gray-300 leading-relaxed text-lg mb-8">
                As the Team Lead for a University Project Showcase, I was responsible for
                coordinating a team to conceptualize, develop, and present an innovative
                project. My role involved overseeing project milestones, ensuring effective
                collaboration, and delivering a compelling presentation to an audience of
                peers, faculty, and industry professionals. This experience demonstrated my
                leadership, organizational, and problem-solving skills while fostering
                creativity and teamwork.
            </p>

            <div className="w-full lg:w-2/3 mx-auto mb-8">
                <Image
                    src={projectActivities[2].src}
                    alt="Project Showcase"
                    width={1000}
                    height={600}
                    layout="responsive"
                    objectFit="cover"
                    className="rounded-lg shadow-md"
                />
            </div>

            <div className="mt-6">
                <ProjectShowImage />
            </div>
        </div>


    )
}
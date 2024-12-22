"use client"
import { projectLists } from "@/constants/projectlists";
import ProjectCard from "./ProjectCard";

const ProjectLists = () => {
    return (
        <section className="flex flex-wrap gap-4 items-center justify-center">
            {
                projectLists.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                    />
                ))
            }

        </section>
    )
}

export default ProjectLists;
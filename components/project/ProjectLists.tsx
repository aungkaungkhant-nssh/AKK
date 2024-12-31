"use client"
import { projectLists } from "@/constants/projectlists";
import ProjectCard from "./ProjectCard";

const ProjectLists = () => {
    return (
        <section className=" bg-foreground mt-4 p-5 rounded-sm">
            <h2 className="text-3xl font-semibold text-center text-white mb-5">
                Highlighted Projects from My Experience
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-3">
                {
                    projectLists.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                        />
                    ))
                }
            </div>
        </section>

    )
}

export default ProjectLists;
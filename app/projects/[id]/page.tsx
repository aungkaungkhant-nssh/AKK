import ProjectDetails from "@/components/project/ProjectDetail";
import MaxWidthWrapper from "@/components/wrappers/MaxWidthWrapper";
import { projectLists } from "@/constants/projectlists"

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const id = (await params).id
    const project = projectLists.find((project) => project.id === parseInt(id));
    if (!project) return <div>Project not found</div>

    return (
        <MaxWidthWrapper className=" relative  pt-32 lg:pt-24  px-4 sm:px-8 md:px-12 max-w-6xl">
            <ProjectDetails project={project} />
        </MaxWidthWrapper>
    )
}
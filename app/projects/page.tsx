import ProjectLists from "@/components/project/ProjectLists";
import ProjectShow from "@/components/project/ProjectShow";
import MaxWidthWrapper from "@/components/wrappers/MaxWidthWrapper";

export default function Project() {
    return (
        <MaxWidthWrapper className=" relative  pt-32 lg:pt-24  px-4 sm:px-8 md:px-12">
            <ProjectShow />
            <ProjectLists />
        </MaxWidthWrapper>
    )
}

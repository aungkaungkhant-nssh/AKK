import ProjectLists from "@/components/project/ProjectLists";
import MaxWidthWrapper from "@/components/wrappers/MaxWidthWrapper";

export default function Project() {
    return (
        <MaxWidthWrapper className="lg:h-screen flex gap-[45px] items-center relative text-center lg:text-left pt-32 lg:pt-24 px-4 sm:px-8 md:px-12">
            <div className="bg-foreground text-tertiary px-4 py-3 rounded-lg shadow-lg shadow-primary/20">
                <ProjectLists />
            </div>
        </MaxWidthWrapper>
    )
}
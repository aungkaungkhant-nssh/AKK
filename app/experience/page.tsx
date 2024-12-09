import ExperienceInfo from "@/components/experience/ExperienceInfo";
import ExperienceLists from "@/components/experience/ExperienceLists";
import MaxWidthWrapper from "@/components/wrappers/MaxWidthWrapper";

export default function Experience() {
    return (
        <MaxWidthWrapper className="lg:h-screen flex gap-[45px] items-center relative text-center lg:text-left pt-32 lg:pt-24 px-4 sm:px-8 md:px-12">
            <div className="flex flex-col lg:flex-row justify-between gap-4">
                <div className="flex-[2] bg-foreground text-tertiary px-4 py-3 rounded-lg shadow-lg shadow-primary/20">
                    <h1 className='text-2xl font-bold text-primary'>Work Experience</h1>
                    <ExperienceLists />
                </div>
                <div className="flex-[2] bg-foreground text-tertiary px-4 py-3 rounded-lg shadow-lg shadow-primary/20">
                    <h1 className='text-2xl font-bold text-primary'>Professional Summary</h1>
                    <ExperienceInfo />
                </div>
            </div>
        </MaxWidthWrapper>


    )
}
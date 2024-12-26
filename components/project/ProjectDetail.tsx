"use client"
import { ChevronLeft } from "lucide-react"
import AnimatedButton from "../ui/animatedButton"
import { useRouter } from "next/navigation";

type PropTypes = {
    project: {
        id: number;
        title: string;
        subTitle: string;
        desc: string;
        logo: string;
        techStacks: string[];
        responsibilities: string;
        githubLink?: string | null;
        demoLink?: string | null;
    }

}

export default function ProjectDetails({ project }: PropTypes) {
    const router = useRouter();
    return (
        <div className="bg-foreground text-tertiary px-4 py-3 rounded-lg shadow-lg shadow-primary/20 w-[100%] mt-[20px]  relative">
            <AnimatedButton
                text='Back'
                icon={<ChevronLeft size={24} />}
                width="w-[90px]"
                height="h-[40px]"
                onClick={() => router.push('/projects')}
            />

            <div>
                    
            </div>
        </div>
    )
}
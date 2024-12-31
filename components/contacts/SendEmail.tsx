
import { ArrowRightCircleIcon } from "lucide-react";
import AnimatedButton from "../ui/animatedButton";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export default function SendEmail() {
    return (
        <div className="bg-foreground text-tertiary px-4 py-5 rounded-lg shadow-lg shadow-primary/20 w-[100%] my-[20px]  relative">
            <div className="text-center">
                <h1 className="text-primary font-bold text-3xl mb-2">Send Me Email</h1>
                <p className="text-tertiary text-lg leading-relaxed md:leading-loose font-medium"> I{"'"}M VERY RESPONSIVE TO MESSAGE</p>
            </div>
            <div className="mt-5">
                <div className="flex flex-col md:flex-row gap-3">
                    <Input className="bg-background focus:border-primary focus:outline-none" placeholder="Name" />
                    <Input className="bg-background focus:border-primary focus:outline-none" placeholder="Email" />
                </div>
                <div className="my-4">
                    <Input className="bg-background focus:border-primary focus:outline-none" placeholder="Subject" />
                </div>
                <div>
                    <Textarea className="bg-background focus:border-primary focus:outline-none" placeholder="Message" />
                </div>
                <div className="w-[96%] mx-auto mt-5">
                    <AnimatedButton
                        text="Send Message"
                        icon={<ArrowRightCircleIcon />}
                        isLeft={false}
                        height="h-[50px]"
                    />
                </div>

            </div>
        </div>
    )
}
import ContactSection from "@/components/contacts/ContactSection";
import MaxWidthWrapper from "@/components/wrappers/MaxWidthWrapper";

export default function Page() {
    return (
        <MaxWidthWrapper className=" relative  pt-[78px] lg:pt-24  px-4 sm:px-8 md:px-12">
            <ContactSection />
        </MaxWidthWrapper>
    )
}
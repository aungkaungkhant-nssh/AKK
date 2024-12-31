"use client"
import useReadingProgress from "@/hooks/useReadingProgress"
import MaxWidthWrapper from "../wrappers/MaxWidthWrapper"
import SideMenu from "./SideMenu"
import Profile from "../home/Profile";
import MenuList from "./MenuList";
import socialLinks from "@/constants/socialLinks";
import LinkItem from "./LinkItem";


export default function Navbar() {
    const scrollIndicator = useReadingProgress();
    return (
        <section className="fixed top-0 z-50 left-0 right-0  shadow-lg  shadow-primary/20 bg-background/30 backdrop-blur-md py-[14px]" >
            <MaxWidthWrapper className="flex w-full items-center justify-between " >
                {/* <span
                    id="progress-bar"
                    style={{
                        transform: `translateX(${scrollIndicator - 100}%)`,
                    }}
                    className={`absolute bottom-0 left-0 w-full transition-transform duration-150 h-[0.1rem] bg-primary`}
                /> */}
                <div >
                    <Profile />
                </div>
                <div className="h-auto px-6 py-3 rounded-full bg-foreground hidden lg:inline-block">
                    <MenuList />
                </div>
                <div className="hidden lg:inline-block">
                    {
                        socialLinks.map((link, index) => (
                            <LinkItem
                                key={index}
                                icon={link.icon}
                                link={link.link}
                                color={link.color}
                            />
                        ))
                    }

                </div>
                <div className="lg:hidden">
                    <SideMenu />
                </div>
            </MaxWidthWrapper>

        </section >
    )
}

// a8b3cf
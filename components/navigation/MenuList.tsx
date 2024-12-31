"use client"
import menuLists from "@/constants/menulists";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from 'framer-motion'
import { usePathname } from "next/navigation";
type Props = {
    className?: string;
    setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function MenuList({ className, setOpen }: Props) {
    const pathName = usePathname();

    return (
        <ul className={cn("flex items-center gap-10", className)}>
            {
                menuLists.map((link) => (
                    <li key={link.id}>
                        <Link href={`${link.path}`}
                            className={
                                cn(
                                    "font-medium text-md  text-tertiary",
                                    pathName === link.path && ("text-primary")
                                )
                            }
                            onClick={() => setOpen && setOpen(false)}
                        >
                            {link.name}
                            {
                                link.path === pathName && (
                                    <motion.div
                                        className="h-[2px] bg-primary w-full"
                                        initial={{ scale: 0.5 }}
                                        animate={{ scale: 1 }}
                                        layoutId="underline"
                                        transition={{ type: "spring", stiffness: 35 }}
                                    />
                                )
                            }
                        </Link>
                    </li>
                ))
            }

        </ul>
    )
}
import { cn } from '@/lib/utils'
import { PropsWithChildren } from 'react'

type Props = { className?: string }

export default function MaxWidthWrapper({ className, children }: PropsWithChildren<Props>) {
    return (
        <div className={cn("px-6 md:px-12 max-w-9xl mx-auto ", className)}>
            {children}
        </div>
    )
}
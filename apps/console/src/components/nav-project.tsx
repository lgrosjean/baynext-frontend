import { Command, Slash } from "lucide-react"
import Link from "next/link"
import Image from "next/image";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb"

import { GeistMono } from 'geist/font/mono';

function NavProject({
    team,
}: {
    team: {
        name: string
        avatar: string
    }
}) {

    return (
        <div className="flex items-center gap-2 p-2 rounded-sm hover:bg-gray-100">
            <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-5 items-center justify-center rounded-sm">
                <Command className="size-3" />
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
                <span className={`${GeistMono.className} truncate font-medium`}>Acme Inc</span>
            </div>
        </div>
    )
}

export function NavProjects({
    team, project
}: {
    team: {
        name: string
        avatar: string
    }
    project?: {
        name: string
        avatar: string
    }
}) {
    return (
        <Breadcrumb className="hidden sm:block">
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="#">
                        <Image src="/apple-touch-icon.png" alt="Logo" width={180} height={180} className="rounded-full size-12" />
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                    <Slash />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                    <BreadcrumbLink href="#">
                        <NavProject team={team} />
                    </BreadcrumbLink>
                </BreadcrumbItem>
                {project && (
                    <>
                        <BreadcrumbSeparator>
                            <Slash />
                        </BreadcrumbSeparator>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="#">
                                <NavProject team={project} />
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </>
                )}
            </BreadcrumbList>
        </Breadcrumb>
    )
}
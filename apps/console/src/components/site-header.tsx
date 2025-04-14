// "use client"
import { auth } from "@/auth"

// import { SidebarIcon } from "lucide-react"

import { Send } from "lucide-react"

// import {
//     Breadcrumb,
//     BreadcrumbItem,
//     BreadcrumbLink,
//     BreadcrumbList,
//     BreadcrumbPage,
//     BreadcrumbSeparator,
// } from "@workspace/ui/components/breadcrumb"
import { Button } from "@workspace/ui/components/button"
// import { Separator } from "@workspace/ui/components/separator"
// import { useSidebar } from "@workspace/ui/components/sidebar"
import { NavProjects } from "./nav-project"
import { NavUser } from "@/components/nav-user"

const data = {
    team: {
        name: "Acme Inc",
        avatar: "/avatars/shadcn.jpg",
    },
    project: {
        name: "My Project",
        avatar: "/avatars/shadcn.jpg",
    },
}

export async function SiteHeader() {
    // const { toggleSidebar } = useSidebar()

    const user = (await auth())?.user

    return (
        <header className="flex bg-background fixed top-0 z-50 w-full items-center border-b">
            <div className="flex h-header-height w-full items-center gap-2 px-4">

                <NavProjects team={data.team} project={data.project} />

                <div className="flex items-center gap-3 ml-auto">
                    <Button variant="outline" size="sm">
                        <Send /> Feedback
                    </Button>
                    <NavUser user={user} />
                </div>
            </div>
        </header>
    )
}

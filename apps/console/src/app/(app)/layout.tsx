import { Toaster } from "@workspace/ui/components/sonner"

import { SidebarInset, SidebarProvider } from "@workspace/ui/components/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

import { SiteHeader } from "@/components/site-header"

export default async function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    
    return (
        <main className="[--header-height:calc(theme(spacing.14))]">
            <SidebarProvider className="flex flex-col">
                <SiteHeader />
                <div className="top-(--header-height) h-[calc(100svh-var(--header-height))]!">
                    <AppSidebar />
                    <SidebarInset>
                        {children}
                    </SidebarInset>
                </div>
            </SidebarProvider>
            <Toaster position="bottom-right" richColors />
        </main>
    );
}

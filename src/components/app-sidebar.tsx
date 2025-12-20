"use client"

import {
  CreditCardIcon,
  FolderIcon,
  HistoryIcon,
  KeyIcon,
  Loader2Icon,
  LogOutIcon,
  StarIcon
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton
} from "@/components/ui/sidebar";
import { useLogout } from "@/features/hooks/useLogout";

const menuItems = [{
  title: "Main",
  items: [
    {
      title: "Workflows",
      icon: FolderIcon,
      url: "/workflows"
    },
    {
      title: "Credentials",
      icon: KeyIcon,
      url: "/credentials",
    },
    {
      title: "Executions",
      icon: HistoryIcon,
      url: "/executions",
    }
  ]
}]

export const AppSidebar = () => {
  const pathname = usePathname();
  const { logout, loading } = useLogout();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenuItem>
          <SidebarMenuButton asChild className="gap-x-4 h-10 px-4">
            <Link href="/" prefetch>
              <Image
                src="/logos/logo.svg"
                alt="Nodebase"
                width={30}
                height={30}
              />
              <span className="font-semibold text-sm">Nodebase</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarHeader>
      <SidebarContent>
        {
          menuItems.map((group) => (
            <SidebarGroup key={group.title}>
              <SidebarGroupContent>
                <SidebarMenu>
                  {
                    group.items.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                          tooltip={item.title}
                          isActive={item.url === "/" ? pathname === "/" : pathname.startsWith(item.url)}
                          asChild
                          className="gap-x-4 h-10 px-4"
                        >
                          <Link href={item.url} prefetch>
                            <item.icon />
                            <span>{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))
                  }
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))
        }
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip={"Upgrade to Pro"}
              className="gap-x-4 h-10 px-4"
              onClick={() => { }}
            >
              <StarIcon className="size-4" />
              <span>Upgrade to Pro</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip={"Billing Portal"}
              className="gap-x-4 h-10 px-4"
              onClick={() => { }}
            >
              <CreditCardIcon className="size-4" />
              <span>Billing Portal</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip={"Sign out"}
              className="gap-x-4 h-10 px-4"
              onClick={logout}
            >
              {
                loading ? (
                  <>
                    <Loader2Icon className="size-4 animate-spin" />
                    <span>Signing out...</span>
                  </>
                ) : (
                  <>
                    <LogOutIcon className="size-4" />
                    <span>Sign out</span>
                  </>
                )
              }
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}




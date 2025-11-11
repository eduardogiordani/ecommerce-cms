import * as React from "react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarRail,
} from "@/components/ui/sidebar"
import { ShoppingCart } from "lucide-react"

const data = {
  navMain: [
    {
      title: "Getting Started",
      url: "#",
      items: [
        {
          title: "Installation",
          url: "#",
        },
        {
          title: "Project Structure",
          url: "#",
        },
      ],
    },
    {
      title: "VENDAS",
      url: "#",
      items: [
        {
          title: "CLIENTES",
          url: "/customers",
        },
        {
          title: "Pedidos",
          url: "/orders",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton size="lg" asChild>
                    <a href="#">
                       <div className="bg-sidebar-primary text-sidebar-foregroud flex aspect-square
                        size-0 items-center justify-center rounded-lg">
                        <ShoppingCart />
                       </div>
                       <div>E-Commerce CMS</div>
                    </a>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url}className="font-medium">
                    {item.title}
                    </a>
                </SidebarMenuButton>
                {item.items.length ?(
                  <SidebarMenuSub className="ml-0 border-l-0 px-1.5">
                    {item.items.map((subitem)=>(
                      <SidebarMenuItem key={subitem.title}>
                        <SidebarMenuSubButton asChild>
                          <a href={subitem.url}>
                          {subitem.title}
                          </a>
                        </SidebarMenuSubButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenuSub>
                ): null}
              </SidebarMenuItem>
            ))} 
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}

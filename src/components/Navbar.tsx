"use client"

import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { ModeToggle } from "./ModeToggle"
import { Button } from "./ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

const PublicLinks = [{ name: "Sounds", link: "/" }]
const UserMenuLinks = [
  { name: "Login", link: "/login" },
  { name: "Register", link: "/register" },
]

const Navbar = () => {
  return (
    <MaxWidthWrapper className="border-b p-3 flex items-center justify-between h-16 z-50 w-full sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center w-full justify-between">
        <NavigationMenu className="flex justify-between">
          {/* Public links */}
          <NavigationMenuList>
            {PublicLinks.map((link) => (
              <NavigationMenuItem key={link.name} className="me-2">
                <NavigationMenuLink href={link.link}>
                  {link.name}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* User menu */}
        <NavigationMenu>
          <NavigationMenuList>
            {UserMenuLinks.map((link) => (
              <NavigationMenuItem key={link.name} className="me-2">
                <NavigationMenuLink href={link.link}>
                  {link.name}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
            <div className="ms-8">
              <NavigationMenuList className="ms-4">
                <ModeToggle />
              </NavigationMenuList>
            </div>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </MaxWidthWrapper>
  )
}

export default Navbar

import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";
// import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
const components = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
    },
    {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
    },
    {
        title: "Progress",
        href: "/docs/primitives/progress",
    },
    // {
    //     title: "Scroll-area",
    //     href: "/docs/primitives/scroll-area",
    // },
    // {
    //     title: "Tabs",
    //     href: "/docs/primitives/tabs",
    // },
    // {
    //     title: "Tooltip",
    //     href: "/docs/primitives/tooltip",
    // },
];
function ListItem({ className, title, children, ...props }) {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    className={cn(
                        "block select-none rounded-md leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
}
ListItem.displayName = "ListItem";
export default function NavigationMenuDemo() {
    return (
        /* lg screen menu st ##################  */
        <NavigationMenu>
            <NavigationMenuList >
                <NavigationMenuItem className="flex">
                    <NavLink to="/jobs" className="text-white hover:text-divyang">
                        Jobs
                    </NavLink>
                </NavigationMenuItem>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem className="mr-[-18px]">
                            <NavigationMenuTrigger className='text-sm bg-none bg-primary hover:bg-primary text-white hover:text-white'>Company</NavigationMenuTrigger>
                            <NavigationMenuContent className='flex flex-col p-3'>
                                <NavigationMenuLink> <Link to="/about" className="hover:text-divyang" >About Us</Link> </NavigationMenuLink>
                                <NavigationMenuLink><Link to="/founder" className="flex min-w-32 hover:text-divyang pt-3" >Founder’s Note</Link></NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <NavigationMenuItem >
                    <NavLink to="/schemes" className="ml-4 text-white hover:text-divyang">
                        Schemes
                    </NavLink>
                </NavigationMenuItem>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem className="mr-[-18px]">
                            <NavigationMenuTrigger className='text-sm bg-none text-white hover:text-white  bg-primary hover:bg-primary'>Categories</NavigationMenuTrigger>
                            <NavigationMenuContent className='flex flex-col p-3'>
                                {/* Submenu open on hover #######################  */}
                                <Tabs defaultValue="account" className="w-[450px]">
                                    <TabsList className="grid w-full grid-cols-2">
                                        <TabsTrigger value="account">Job by Disability</TabsTrigger>
                                        <TabsTrigger value="password">Job by Sector</TabsTrigger>
                                    </TabsList>
                                    {/* this is submenu 1 tab #################### */}
                                    <TabsContent value="account" className="flex gap-2 mt-1 " >
                                        <Card className="border-none flex "> 
                                            <CardContent className="space-y-2">
                                                <NavigationMenuItem className="flex " >
                                                    <NavLink to="/jobs" className="ml-4 text-black hover:text-divyang">
                                                        Physical Disability
                                                    </NavLink>
                                                </NavigationMenuItem>
                                                <NavigationMenuItem >
                                                    <NavLink to="/jobs" className="ml-4 text-black hover:text-divyang">
                                                        Mental Illness
                                                    </NavLink>
                                                </NavigationMenuItem>
                                                <NavigationMenuItem >
                                                    <NavLink to="/jobs" className="ml-4 text-black hover:text-divyang">
                                                        Blood Disorder
                                                    </NavLink>
                                                </NavigationMenuItem>
                                            </CardContent>
                                        </Card>
                                        <Card className="border-none flex items-start justify-start " >
                                            <CardContent className="space-y-2">
                                                <NavigationMenuItem >
                                                    <NavLink to="/jobs" className="ml-4 text-black hover:text-divyang">
                                                        Inellectual Disability
                                                    </NavLink>
                                                </NavigationMenuItem>
                                                <NavigationMenuItem >
                                                    <NavLink to="/jobs" className="ml-4 text-black hover:text-divyang">
                                                        Chronic Neurological
                                                    </NavLink>
                                                </NavigationMenuItem>
                                                <NavigationMenuItem >
                                                    <NavLink to="/jobs" className="ml-4 text-black hover:text-divyang">
                                                        Multiple Disabilities
                                                    </NavLink>
                                                </NavigationMenuItem>
                                            </CardContent>
                                        </Card>
                                    </TabsContent>
                                    {/* this is submenu 2 tab #################### */}
                                    <TabsContent value="password" className="flex gap-2 ">
                                        <Card className="border-none" >
                                            <CardContent className="space-y-2">
                                                <NavigationMenuItem >
                                                    <NavLink to="/jobs" className="ml-4 text-black hover:text-divyang">
                                                        Ecommerce
                                                    </NavLink>
                                                </NavigationMenuItem>
                                                <NavigationMenuItem >
                                                    <NavLink to="/jobs" className="ml-4 text-black hover:text-divyang">
                                                        Hospitality
                                                    </NavLink>
                                                </NavigationMenuItem>
                                                <NavigationMenuItem >
                                                    <NavLink to="/jobs" className="ml-4 text-black hover:text-divyang">
                                                        IT / ITES
                                                    </NavLink>
                                                </NavigationMenuItem>
                                            </CardContent>
                                        </Card>
                                        <Card className="border-none" >
                                            <CardContent className="space-y-2 ms-10">
                                                <NavigationMenuItem >
                                                    <NavLink to="/jobs" className="ml-4 text-black hover:text-divyang">
                                                        BFSI
                                                    </NavLink>
                                                </NavigationMenuItem>
                                                <NavigationMenuItem >
                                                    <NavLink to="/jobs" className="ml-4 text-black hover:text-divyang">
                                                        Manufacturing
                                                    </NavLink>
                                                </NavigationMenuItem>
                                                <NavigationMenuItem >
                                                    <NavLink to="/jobs" className="ml-4 text-black hover:text-divyang">
                                                        Retail
                                                    </NavLink>
                                                </NavigationMenuItem>
                                            </CardContent>
                                        </Card>
                                    </TabsContent>
                                </Tabs>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <NavigationMenuItem>
                    <NavLink to="/blogs" className="ml-4 text-white hover:text-divyang">
                        Blog
                    </NavLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavLink to="/contact" className="ml-4 text-white hover:text-divyang">
                        Contact Us
                    </NavLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
        /* lg screen menu end ##################  */
    );
}







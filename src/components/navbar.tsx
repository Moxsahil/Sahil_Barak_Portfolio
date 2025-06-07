"use client";

import { LINKS } from "@/constants/links";
import { Dock, DockIcon } from "./ui/dock";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { AnimationContainer } from "./utils/animation-container";
import Icons from "./ui/icons";
import { FileTextIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { Separator } from "./ui/separator";

const DATA = {
    navbar: LINKS,
    contact: {
        social: {
            github: {
                name: "GitHub",
                url: "",
                icon: Icons.github,
            },
            linkedin: {
                name: "LInkedIn",
                url: "",
                icon: Icons.linkedin,
            },
            leetcode: {
                name: "Leetcode",
                url: "",
                icon: Icons.leetcode,
            },
            resume: {
                name: "Resume",
                url: "",
                icon: FileTextIcon,
            },
        },
    },
};

const Header = () => {
    return (
        <header>
            <div className="w-full h-16 bg-gradient-to-t from-background absolute  -bottom-8 inset-x-0 -z-10"></div>

            <AnimationContainer animation="slide-up" delay={0.5}>
                <TooltipProvider delayDuration={0}>
                   <Dock direction="middle" className="relative">
                    {DATA.navbar.map((item) => (
                        <DockIcon key={item.name}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link 
                                        href={item.href}
                                        aria-label={item.name}
                                        className={cn(buttonVariants({ variant: "ghost", size: "icon"}),
                                        "size-10 rounded-xl",
                                        )}
                                    >
                                        <item.icon className="size-4" />
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent sideOffset={10} className="px-2 py-1 text-xs">
                                    <p>{item.name}</p>
                                </TooltipContent>
                            </Tooltip>
                        </DockIcon>
                    ))}
                    <Separator orientation="vertical" className="h-full" />
                    {Object.entries(DATA.contact.social).map(([name, social]) => (
                        <DockIcon key={name} className={social.name === "" ? "md:!hidden md:w-0" : undefined }>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        href={social.url}
                                        target="_blank"
                                        aria-label={social.name}
                                        className={cn(
                                                buttonVariants({ variant: "ghost", size: "icon" }),
                                                "size-12 rounded-xl",
                                        )}
                                    >
                                        <social.icon className="size-4" />
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{social.name}</p>
                                </TooltipContent>
                            </Tooltip>
                        </DockIcon>
                    ))}
                   </Dock>
                </TooltipProvider>
            </AnimationContainer>
        </header>
    )
}

export default Header
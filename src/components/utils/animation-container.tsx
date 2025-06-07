"use client";

import { cn } from "@/lib/utils";
import { motion, MotionProps } from "framer-motion";

interface AnimationContainerProps extends MotionProps {
    children: React.ReactNode;
    className?: string;
    animation?: "fade" | "slide-left" | "slide-right" | "slide-up" | "slide-down" | "scale" | "none";
    delay?: number;
    duration?: number;
    once?: boolean;
}

const animations = {
    "fade": {
        initial : { opacity: 0 },
        animate: { opacity: 1 },
    },
    "slide-left": {
        initial : { x: 20, opacity: 0 },
        animate: { x: 0, opacity: 0 },
    },
    "slide-right": {
        initial : { x: -20, opacity: 0 },
        animate: { x: 0, opacity: 1 },
    },
    "slide-up": {
        initial: { y: 20, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    },
    "slide-down": {
        initial: { y: -20, opacity: 0 },
        animate: { y: 0, opacity: 1}
    },
    "scale": {
        initial: { scale: 0.5, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
    },
    "none": {
        initial: {},
        animate: {},
    },
}

export const AnimationContainer = ({
    children,
    className,
    animation = "fade",
    delay = 0,
    duration = 0.5,
    once = true,
    ...props
}: AnimationContainerProps) => {
    return (
        <motion.div 
            className={cn(className)}
            initial={animations[animation].initial}
            whileInView={animations[animation].animate}
            viewport={{ once: false }}
            transition={{
                delay,
                duration,
                ease: "easeOut"
            }}
            {...props}>
            {children}
        </motion.div>
    )
}
export default AnimationContainer;
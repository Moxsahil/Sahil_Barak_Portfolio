"use client";

import { Badge } from '@mantine/core';
import Icons from '../ui/icons';

interface Props {
    stacks: string[];
}

const techStackIcons: { [key: string]: keyof typeof Icons } = {
  // Languages
  "java": "java",
  "javascript": "javascript",
  "js": "javascript",
  "typescript": "typescript",
  "ts": "typescript",
  
  // Frontend Frameworks
  "react": "react",
  "reactjs": "react",
  "next.js": "nextjs",
  "nextjs": "nextjs",
  "next": "nextjs",
  "react native": "react",
  "react-native": "react",
  "vite": "vite",
  
  // JavaScript Libraries
  "react query": "reactQuery",
  "react-query": "reactQuery",
  "reactquery": "reactQuery",
  "zustand": "zustand",
  "redux": "redux",
  "axios": "react", // Using react as fallback for now
  "react hook form": "reactHookForm",
  "react-hook-form": "reactHookForm",
  "reacthookform": "reactHookForm",
  
  // Backend Technologies
  "node.js": "NODEJS",
  "nodejs": "NODEJS",
  "node": "NODEJS",
  "express.js": "express",
  "expressjs": "express",
  "express": "express",
  "prisma": "prisma",
  "drizzle": "drizzle",
  
  // Database
  "mongodb": "mongodb",
  "mongo": "mongodb",
  "mysql": "mysql",
  "postgresql": "postgresql",
  "postgres": "postgresql",
  "convex": "convex",
  
  // Software & Tools
  "vs code": "react", // Using react as fallback for now
  "vscode": "react",
  "cursor": "cursor",
  "git": "github", // Using github as fallback
  "github": "github",
  "figma": "figma",
  "postman": "postman",
  "vercel": "vercel",
};

const getIconForTech = (tech: string) => {
  const normalizedTech = tech.toLowerCase().trim();
  const iconKey = techStackIcons[normalizedTech];
  
  if (iconKey && Icons[iconKey as keyof typeof Icons]) {
    const Icon = Icons[iconKey as keyof typeof Icons];
    return <Icon className="size-3 mr-1" />;
  }
  
  return null;
};

const ShowSkills = ({ stacks }: Props) => {
    return (
        <>
            {stacks.map((stack) => (
                <Badge
                    key={stack}
                    size="lg"
                    radius="sm"
                    variant="filled"
                    color="dark"
                    className="bg-neutral-600/70 hover:bg-neutral-700 transition-colors duration-300 ease-in-out"
                >
                    <span className="font-medium text-white flex items-center">
                        {getIconForTech(stack)}
                        {stack}
                    </span>
                </Badge>
            ))}
        </>
    )
};

export default ShowSkills
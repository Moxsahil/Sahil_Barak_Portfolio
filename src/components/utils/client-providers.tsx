"use client";

import dynamic from "next/dynamic";

const BuymeCoffeeButton = dynamic(() => import("./buyme-coffee-button"), {
    ssr: false,
});

export function ClientProviders() {
    return (
        <>
            <BuymeCoffeeButton />
        </>
    );
} 
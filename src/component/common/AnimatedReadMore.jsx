import React from 'react'
import { GoDotFill } from 'react-icons/go'

export default function AnimatedReadMore() {
    return (
        <>
            <p className="flex uppercase text-sm items-center gap-1 group mt-4">
                <GoDotFill className="text-[#f8a065] transition-all duration-500 ease-in-out transform group-hover:translate-x-2 group-hover:opacity-0" />
                <span className="transition-all duration-500 ease-in-out group-hover:translate-x-2">Read More</span>
                <GoDotFill className="hidden text-[#f8a065] transition-all duration-500 ease-in-out transform group-hover:inline group-hover:translate-x-2 group-hover:opacity-100" />
            </p>
        </>
    )
}

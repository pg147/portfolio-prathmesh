import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import StripDot from './StripDot'

export default function HeroStrip() {
    const items = ["WEB DEVELOPER", "FREELANCER", "TECH ENTHUSIAST", "COLLABORATOR"];

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        isMobile ? (
            <div className="z-[11] absolute bottom-0 px-8 md:hidden flex items-center overflow-hidden h-20 w-full bg-gradient-to-r from-black via-secondary to-black" >
                <motion.div
                    className="flex gap-x-12 whitespace-nowrap"
                    animate={{ x: ["0%", "-100%"] }} // Moves from right to left
                    transition={{ repeat: Infinity, duration: 16, ease: "linear" }} // Infinite loop
                >
                    {items.concat(items).map((item, index) => ( // Duplicate items to create smooth looping
                        <div key={index} className="size-fit">
                            <h1 className="font-bold text-lg md:text-2xl text-textSecondary">{item}</h1>
                        </div>
                    ))}
                </motion.div>
            </div>
        ) : (
            <div className='absolute bottom-0 px-8 md:px-14 flex gap-x-12 md:gap-x-0 items-center justify-around h-20 w-full bg-gradient-to-r from-black via-secondary to-black overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth flex-nowrap'>
                <div className='size-fit'>
                    <h1 className='font-bold text-lg md:text-2xl text-textSecondary'>WEB DEVELOPER</h1>
                </div>
                <StripDot />
                <div className='size-fit'>
                    <h1 className='font-bold text-lg md:text-2xl text-textSecondary'>FREELANCER</h1>
                </div>
                <StripDot />
                <div className='size-fit'>
                    <h1 className='font-bold text-lg md:text-2xl text-textSecondary'>TECH ENTHUSIAST</h1>
                </div>
                <StripDot />
                <div className='size-fit'>
                    <h1 className='font-bold text-lg md:text-2xl text-textSecondary'>COLLABORATOR</h1>
                </div>
            </div>
        )
    )
}

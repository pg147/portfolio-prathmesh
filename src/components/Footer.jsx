// Component
import Separator from "./Separator";

// Icon Library
import { InstagramIcon, Linkedin01Icon, NewTwitterRectangleIcon } from "hugeicons-react";

const footerLinks = [
    {
        label: 'Home'
    },
    {
        label: 'Stack'
    },
    {
        label: 'Projects'
    },
    {
        label: 'Experience'
    },
    {
        label: 'Github'
    },
]

const socialLinks = [
    {
        icon: InstagramIcon,
        href: ''
    },
    {
        icon: Linkedin01Icon,
        href: ''
    },
    {
        icon: NewTwitterRectangleIcon,
        href: ''
    }
]

export default function Footer() {
    return (
        <div className="flex flex-col gap-y-4 h-fit w-full">
            {/* Copyright */}
            <div className="w-full grid grid-cols-12 items-center gap-x-1">
                <h1 className="text-lg col-span-4 font-regular text-textSecondary">&copy; 2025 | Prathmesh Gaidhane | All rights reserved</h1>
                <Separator className="col-span-8" />
            </div>

            {/* Footer Links */}
            <div className="flex w-full items-center justify-between">
                {/* Links & Buttons */}
                <div className="flex items-center md:gap-x-14">
                    {/* Links */}
                    <div className="flex items-center md:gap-x-14">
                        {footerLinks.map((link, index) => (
                            <div key={index} className="md:h-12 w-fit py-2.5">
                                <h1 className="text-lg text-links font-regular">{link.label}</h1>
                            </div>
                        ))}
                    </div>

                    {/* CV Button */}
                    <button className="font-regular text-lg md:h-12 w-fit px-6 py-2.5 bg-gradient-to-t text-textSecondary from-primary/60 via-body to-body">Download CV</button>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-x-5">
                    {
                        socialLinks.map((link, index) => (
                            <a key={index} href={link.href}>
                                <div className="size-fit p-1.5 bg-blip lg:hover:bg-blip/70 rounded-full">
                                    <link.icon className="md:size-8 text-textSecondary" />
                                </div>
                            </a>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

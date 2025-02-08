// Components
import GradientHeading from "./GradientHeading";
import Separator from "./Separator";

// Icon Library
import { InstagramIcon, Linkedin01Icon, NewTwitterRectangleIcon } from "hugeicons-react";

// Footer Links
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

// Social Handles 
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
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/Prathmesh-Gaidhane-Resume.pdf"; // Path from public folder
        link.download = "Prathmesh-Gaidhane-Resume.pdf"; // File name when downloaded
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="xl:max-w-[1050px] 2xl:max-w-[1400px] mx-auto flex flex-col gap-y-9 md:gap-y-12 h-fit w-full mt-24 mb-8">
            <Separator className={"md:hidden"} />

            {/* Signature */}
            <div className="w-full flex flex-col gap-y-6 md:gap-y-10">
                {/* Heading */}
                <div className="w-full md:grid md:grid-cols-12 items-center place-items-center gap-x-2">
                    <Separator className="hidden md:block col-span-4" />
                    <div className="w-fit mx-auto md:col-span-4">
                        <GradientHeading
                            leadingText={"Website brought to"}
                            spanText={"Life"}
                            trailingText={"by"}
                            className={"text-center text-xl xl:text-2xl 2xl:text-3xl font-medium"}
                        />
                    </div>
                    <Separator className="hidden md:block col-span-4" />
                </div>

                {/* Signature Content */}
                <h1 className="font-signature text-textSecondary text-4xl md:text-5xl text-center">Prathmesh Gaidhane</h1>
            </div>

            <div className="w-full flex flex-col gap-y-4">
                {/* Copyright */}
                <div className="w-full md:grid md:grid-cols-12 items-center gap-x-1">
                    <h1 className="text-sm text-center md:text-left md:text-lg xl:col-span-6 2xl:col-span-4 font-regular text-textSecondary">&copy; 2025 | Prathmesh Gaidhane | All rights reserved</h1>
                    <Separator className="hidden md:block xl:col-span-6 2xl:col-span-8" />
                </div>

                {/* Footer Links */}
                <div className="flex flex-col gap-y-6 md:flex-row w-full items-center justify-between">
                    {/* Links & Buttons */}
                    <div className="md:flex items-center xl:gap-x-10 2xl:gap-x-14 px-6 md:px-0">
                        {/* Links */}
                        <div className="grid grid-cols-4 md:flex items-center xl:gap-x-10 2xl:gap-x-14">
                            {footerLinks.map((link, index) => (
                                <div key={index} className="md:h-12 w-fit py-2.5">
                                    <h1 className="text-base md:text-lg text-links font-regular">{link.label}</h1>
                                </div>
                            ))}
                        </div>

                        {/* CV Button */}
                        <button onClick={handleDownload} className="font-regular text-lg md:h-12 w-full md:w-fit px-6 py-2.5 bg-gradient-to-t text-textSecondary from-primary/60 via-body to-body">Download CV</button>
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
        </div>
    )
}

import { InstagramIcon, Linkedin01Icon, MultiplicationSignIcon, NewTwitterRectangleIcon } from 'hugeicons-react';
import Separator from './Separator';

const socialLinks = [
    {
        icon: InstagramIcon,
        href: 'https://www.instagram.com/pg_147/'
    },
    {
        icon: Linkedin01Icon,
        href: 'https://www.linkedin.com/in/prathmesh-gaidhane-9019b022a/'
    },
    {
        icon: NewTwitterRectangleIcon,
        href: '#'
    }
]

export default function SideMenu({ isOpen, onClose, navLinks, handleNavClick }) {
    return (
        <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className="font-regular fixed left-0 top-0 h-full w-64 bg-tile p-6 shadow-lg transform transition-transform duration-300 ease-in-out" style={{ transform: isOpen ? 'translateX(0)' : 'translateX(-100%)' }}>
                <button onClick={onClose} className="absolute top-4 right-4">
                    <MultiplicationSignIcon className="size-6 text-primary" />
                </button>
                <nav className="mt-8 flex flex-col gap-y-6">
                    {navLinks.map((link, index) => (
                        <div key={index} className='flex flex-col gap-y-6'>
                            <button onClick={() => { onClose(); handleNavClick(link.target); }} className="bg-gradient-to-r bg-clip-text text-transparent from-white to-headingGradientSecondary text-lg">
                                {link.label}
                            </button>
                            <Separator />
                        </div>
                    ))}
                </nav>
                <div className='absolute bottom-20 left-1/2 -translate-x-1/2 w-full px-6'>
                    <h1 className="text-sm text-center lg:text-left md:text-lg xl:col-span-6 2xl:col-span-4 font-regular text-textSecondary">&copy; 2025 | Prathmesh Gaidhane | All rights reserved</h1>
                    <div className="flex w-fit mt-6 items-center gap-x-5 mx-auto">
                        {
                            socialLinks.map((link, index) => (
                                <a key={index} target='_blank' href={link.href}>
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
    );
}

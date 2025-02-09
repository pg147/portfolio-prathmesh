import FunSnippets from './FunSnippets'
import HeroStrip from './HeroStrip'
import GradientHeading from './GradientHeading';
import { Menu01Icon } from 'hugeicons-react';
import { useEffect, useState } from 'react';

// Nav Links
const navLinks = [
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

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Prathmesh-Gaidhane-Resume.pdf"; // Path from public folder
    link.download = "Prathmesh-Gaidhane-Resume.pdf"; // File name when downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='relative h-full w-full overflow-hidden'>
      {/* Mobile Menu */}
      {isMobile && <div className='w-full h-fit flex items-center justify-between px-6 py-4'>
        <Menu01Icon className='text-primary size-6' />
        <button onClick={handleDownload} className="font-regular text-sm md:h-12 w-fit px-6 py-2.5 bg-gradient-to-t text-textSecondary from-primary/60 via-body to-body">Download CV</button>
      </div>}


      {/* Web Menu */}
      {!isMobile && <div className="mt-12 w-fit xl:px-28 2xl:px-36 md:flex md:mx-auto lg:mx-0 items-center md:gap-x-10 2xl:gap-x-14">
        {/* Links */}
        <div className="grid grid-cols-4 md:flex items-center md:gap-x-10 2xl:gap-x-14">
          {navLinks.map((link, index) => (
            <div key={index} className="md:h-12 w-fit py-2.5">
              <h1 className="text-base md:text-lg text-links font-regular">{link.label}</h1>
            </div>
          ))}
        </div>

        {/* CV Button */}
        <button onClick={handleDownload} className="font-regular text-lg md:h-12 w-full md:w-fit px-6 py-2.5 bg-gradient-to-b text-textSecondary from-primary/60 via-body to-body">Download CV</button>
      </div>}

      <div className='w-fit mt-0 md:mt-16 xl:px-28 2xl:px-36 flex flex-col gap-y-16 mx-auto lg:mx-0'>
        <div className='mt-6 md:mt-0'>
          <GradientHeading
            leadingText={"I AM A"}
            spanText={"FULL STACK"}
            className={"font-semibold text-center lg:text-left text-3xl md:text-6xl"}
          />
          <GradientHeading
            spanText={"DEVELOPER"}
            trailingText={"</>"}
            className={"font-semibold text-center lg:text-left text-3xl md:text-6xl"}
          />

          <div className='flex w-fit items-center gap-x-3 mx-auto mt-4 lg:mx-0 text-sm md:text-lg'>
            <div className='bg-tile border-[1.5px] px-3 py-2 border-stroke rounded-xl'>
              <h1 className='text-[#C2BFBF] font-code'>{isMobile ? "version: " : "build: "} <span className='text-textSecondary font-[700]'>{isMobile ? "7.7.7" : "alpha-7.7.7"}</span></h1>
            </div>
            <div className='bg-tile border-[1.5px] px-3 py-2 border-stroke rounded-xl'>
              <h1 className='text-[#C2BFBF] font-code'>{isMobile ? "release: " : "pkg-release: "} <span className='text-textSecondary font-[700]'>11/07/03</span></h1>
            </div>
          </div>
        </div>
        <FunSnippets />
      </div>

      <img src='/myself.png' alt='prathmesh_gaidhane' className='z-[10] scale-105 lg:scale-100 2xl:scale-125 absolute bottom-[88px] xl:right-0 2xl:bottom-36 2xl:right-32 size-fit md:left-1/2 md:-translate-x-1/2 lg:left-auto lg:translate-x-0' />
      <div className='absolute top-0 xl:right-0 2xl:right-48 z-[-5] h-full w-full lg:max-w-sm bg-gradient-to-b from-transparent from-0% via-primary/20 via-60% md:via-40% lg:via-20% to-primary to-100%'>

      </div>
      <HeroStrip />
    </div >
  )
}

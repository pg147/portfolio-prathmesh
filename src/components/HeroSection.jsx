import FunSnippets from './FunSnippets'
import HeroStrip from './HeroStrip'
import GradientHeading from './GradientHeading';

export default function HeroSection() {
  return (
    <div className='relative h-full flex justify-between w-full'>
      <div className='w-fit xl:p-28 2xl:p-36 flex flex-col gap-y-16'>
        <div className=''>
          <GradientHeading
            leadingText={"I AM A"}
            spanText={"FULL STACK"}
            className={"font-semibold text-5xl md:text-6xl"}
          />
          <GradientHeading
            spanText={"DEVELOPER"}
            trailingText={"</>"}
            className={"font-semibold text-5xl md:text-6xl"}
          />
        </div>
        <FunSnippets />
      </div>

      <img src='/myself.png' alt='prathmesh_gaidhane' className='z-[10] 2xl:scale-125 absolute bottom-20 xl:right-0 2xl:bottom-36 2xl:right-32 size-fit' />
      <div className='absolute top-0 xl:right-0 2xl:right-48 z-[-5] h-full w-full max-w-sm bg-gradient-to-b from-transparent from-0% via-primary/20 via-60% md:via-20% to-primary to-100%'>

      </div>
      <HeroStrip />
    </div>
  )
}

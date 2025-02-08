import StripDot from './StripDot'

export default function HeroStrip() {
  return (
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
}

import { Globe02Icon } from "hugeicons-react";

export default function ProjectCards({ title, type, image, brief, hostlink, projectlink }) {
  return (
    <div className="h-fit max-w-[350px] flex flex-col gap-y-3">
      <div className="h-fit flex items-center gap-x-2">
        <div className="h-6 w-0.5 rounded-full bg-gradient-to-b from-primary to-secondary"></div>
        <h1 className="font-medium text-lg text-textSecondary">{title}</h1>
      </div>

      <img src={image} alt={title + "_cover"} className="h-[200px] md:h-[225px] w-[350px] rounded-xl object-cover" />

      <div className="flex items-start justify-between w-full">
        <p className="text-subheading font-medium w-3/4">- {brief}</p>

        <div className="flex items-center gap-x-2">
          <a href={hostlink} target="_blank">
            <div className="rounded-full bg-blip p-1">
              <Globe02Icon className="size-6 text-white" />
            </div>
          </a>

          <a href={projectlink} target="_blank">
            <div className="rounded-full bg-blip p-1">
              {type === 'design' ? <img src="/figma.svg" className="size-6" /> : <img src="/github.svg" className="size-6" />} 
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

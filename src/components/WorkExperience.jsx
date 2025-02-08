import GradientHeading from "./GradientHeading";
import InfoCards from "./InfoCards";

const experiences = [
  {
    title: "Software Development Engineer",
    tenure: "May 2024 - Dec 2024",
    logo: "/bt.png",
    organization: "Blemense Technologies LLP, Nagpur"
  },
  {
    title: "Full Stack Developer Intern",
    tenure: "Nov 2023 - May 2024",
    logo: "/star.png",
    organization: "Star Origin Business Solutions, Nagpur"
  },
  {
    title: "Front-end Web Developer",
    tenure: "Dec 2022 - Apr 2023",
    organization: "TBI Club, RCOEM, Nagpur"
  },
]

export default function WorkExperience() {
  return (
    <div className="w-full mt-20 flex flex-col gap-y-7 pt-16 pb-24 bg-gradient-to-l from-transparent via-primary/5 to-transparent">
      {/* Heading */}
      <div className="flex items-center gap-x-3">
        <GradientHeading
          leadingText={"Work Experience"}
          className={"text-left"}
        />
        <div className="bg-tile border-[1.5px] rounded-2xl border-stroke px-4 py-2">
          <h1 className="font-medium text-lg text-textSecondary">.org</h1>
        </div>
      </div>

      {/* Experiences */}
      <div className="w-full flex items-center justify-between">
        {
          experiences.map((item, index) => (
            <InfoCards
              key={index}
              title={item.title}
              tenure={item.tenure}
              logo={item.logo}
              organization={item.organization}
            />
          ))
        }
      </div>
    </div>
  )
}

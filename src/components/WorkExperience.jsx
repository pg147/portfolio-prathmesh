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
    <div className="px-5 md:px-14 lg:px-0 w-full xl:max-w-[1050px] 2xl:max-w-[1400px] mx-auto mt-12 md:mt-20 flex flex-col gap-y-7 md:gap-y-10 lg:gap-y-7 pt-12 md:pt-16 pb-14 md:pb-24 bg-gradient-to-l from-transparent via-primary/5 to-transparent">
      {/* Heading */}
      <div className="flex items-center gap-x-3 mx-auto lg:mx-0">
        <GradientHeading
          leadingText={"Work Experience"}
          className={"text-left text-xl md:text-2xl 2xl:text-3xl font-medium"}
        />
        <div className="bg-tile border-[1.5px] rounded-2xl border-stroke px-3 py-1 xl:px-3.5 xl:py-1.5 2xl:px-4 2xl:py-2">
          <h1 className="font-medium text-lg text-textSecondary">.org</h1>
        </div>
      </div>

      {/* Experiences */}
      <div className="w-full flex flex-col gap-y-16 md:gap-y-10 md:flex-row md:flex-wrap justify-between">
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

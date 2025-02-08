import GradientHeading from "./GradientHeading";
import InfoCards from "./InfoCards";

const education = [
    {
      title: "B.Tech, Information Technology",
      tenure: "2021 - 2025,",
      credentials: "CGPA: 7.25",
      organization: "Shri Ramdeobaba College of Engineering and Management, Nagpur"
    },
    {
      title: "XII, Science, HSC",
      tenure: "2020 - 2021, ",
      credentials: "90.5%",
      organization: "Yashoda High School, Nagpur"
    },
    {
      title: "X, CBSE",
      tenure: "2018 - 2019, ",
      credentials: "90.4%",
      organization: "Royal Public School, Nagpur"
    },
  ]

export default function EducationalBackground() {
    return (
        <div className="w-full flex flex-col gap-y-7 mt-16">
            {/* Heading */}
            <div className="flex items-center gap-x-3">
                <GradientHeading
                    leadingText={"Educational Background"}
                    className={"text-left"}
                />
                <div className="bg-tile border-[1.5px] rounded-2xl border-stroke px-4 py-2">
                    <h1 className="font-medium text-lg text-textSecondary">.edu</h1>
                </div>
            </div>

            {/* Experiences */}
            <div className="w-full flex items-start justify-between">
                {
                    education.map((item, index) => (
                        <InfoCards
                            key={index}
                            title={item.title}
                            tenure={item.tenure}
                            credentials={item.credentials}
                            organization={item.organization}
                        />
                    ))
                }
            </div>
        </div>
    )
}

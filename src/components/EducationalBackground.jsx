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
        <div className="px-5 md:px-0 w-full xl:max-w-[1050px] 2xl:max-w-[1400px] mx-auto flex flex-col gap-y-7 mt-16">
            {/* Heading */}
            <div className="flex items-center gap-x-3 mx-auto md:mx-0">
                <GradientHeading
                    leadingText={"Educational Background"}
                    className={"text-left text-xl xl:text-2xl 2xl:text-3xl font-medium"}
                />
                <div className="bg-tile border-[1.5px] rounded-2xl border-stroke px-3 py-1 xl:px-3.5 xl:py-1.5 2xl:px-4 2xl:py-2">
                    <h1 className="font-medium text-lg text-textSecondary">.edu</h1>
                </div>
            </div>

            {/* Experiences */}
            <div className="w-fit md:w-full flex flex-col gap-y-16 mx-auto md:mx-0 md:flex-row justify-between">
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

import GradientHeading from "./GradientHeading";
import ProjectCards from "./ProjectCards";

const designs = [
    {
        title: "House of Travellers",
        image: "/house-of-travellers.png",
        brief: "D2C Backpacker hostel brand for travellers",
        projectlink: "#",
        hostlink: "#"
    },
    {
        title: "ACTMIT Solar",
        image: "/actmit-solar.png",
        brief: "German Solar e-commerce marketplace.",
        projectlink: "#",
        hostlink: "#"
    },
    {
        title: "Blemense.tech",
        image: "/blemense-tech.png",
        brief: "Software Services based agency website.",
        projectlink: "#",
        hostlink: "#"
    },
    {
        title: "Yuvaa Clothing",
        image: "/yuvaa.png",
        brief: "Merchandised Clothing e-commerce store.",
        projectlink: "#",
        hostlink: "#"
    },
]

export default function Designer() {
    return (
        <div className="px-5 md:px-14 lg:px-0 w-full xl:max-w-[1050px] 2xl:max-w-[1400px] mx-auto flex flex-col gap-y-7 md:gap-y-10 lg:gap-y-7 mt-12 md:mt-16">
            {/* Heading */}
            <div className="flex items-center gap-x-3 mx-auto lg:mx-0">
                <GradientHeading
                    leadingText={"Passion / Hobby Designer"}
                    className={"text-left text-xl md:text-2xl 2xl:text-3xl font-medium"}
                />
                <div className="bg-tile border-[1.5px] rounded-2xl border-stroke px-3 py-1 xl:px-3.5 xl:py-1.5 2xl:px-4 2xl:py-2">
                    <h1 className="font-medium text-lg text-textSecondary">.fig</h1>
                </div>
            </div>

            {/* Content */}
            <div className="w-full h-fit flex flex-row items-center gap-x-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth flex-nowrap">
                {designs.map((design, index) => (
                    <div key={index} className="md:snap-start min-w-[350px]">
                        <ProjectCards
                            title={design.title}
                            brief={design.brief}
                            image={design.image}
                            projectlink={design.projectlink}
                            hostlink={design.hostlink}
                            type={"design"}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

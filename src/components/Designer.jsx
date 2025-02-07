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
        <div className="w-full flex flex-col gap-y-7 mt-16">
            {/* Heading */}
            <div className="flex items-center gap-x-3">
                <GradientHeading
                    leadingText={"Passion / Hobby Designer"}
                    className={"text-left"}
                />
                <div className="bg-tile border-[1.5px] rounded-2xl border-stroke px-4 py-2">
                    <h1 className="font-medium text-lg text-textSecondary">.fig</h1>
                </div>
            </div>

            {/* Content */}
            <div className="w-full h-fit flex flex-row items-center gap-x-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth flex-nowrap">
                {designs.map((design, index) => (
                    <div key={index} className="snap-start min-w-[350px]">
                        <ProjectCards
                            title={design.title}
                            brief={design.brief}
                            image={design.image}
                            projectlink={design.projectlink}
                            hostlink={design.hostlink}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

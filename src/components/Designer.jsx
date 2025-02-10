import GradientHeading from "./GradientHeading";
import ProjectCards from "./ProjectCards";

const designs = [
    {
        title: "House of Travellers",
        image: "/designs/house-of-travellers.png",
        brief: "D2C Backpacker hostel brand for travellers",
        projectlink: "https://www.figma.com/proto/pz1AbORzoHKkcvW4hnOmkQ/House-of-Travellers?node-id=0-1&t=XyTxePd4zn1oNZKr-1",
        hostlink: "https://www.houseoftravellers.com/"
    },
    {
        title: "ACTMIT Solar",
        image: "/designs/actmit-solar.png",
        brief: "German Solar e-commerce marketplace.",
        projectlink: "https://www.figma.com/proto/ac9ep0pePM6ioSZjk8auUd/ACTMIT-Solar?node-id=0-1&t=JbtUaMgiAvWniLpM-1",
        hostlink: "https://actmitsolar.de"
    },
    {
        title: "Blemense.tech",
        image: "/designs/blemense-tech.png",
        brief: "Software Services based agency website.",
        projectlink: "https://www.figma.com/proto/QRzLlNovYxOVwjsXy657fr/Blemense.tech---PUBLIC-ACCESS?node-id=0-1&t=tvlgykzLxbCBzXVR-1",
        hostlink: "https://blemense.tech"
    },
    {
        title: "Yuvaa Clothing",
        image: "/designs/yuvaa.png",
        brief: "Merchandised Clothing e-commerce store.",
        projectlink: "https://www.figma.com/proto/d012cUSESW7vmka7NMRChv/Yuvaa-Project?node-id=144-38&t=S6wgfdEYydKN2D89-1",
        hostlink: "N/A"
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

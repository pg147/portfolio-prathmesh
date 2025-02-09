import GradientHeading from "./GradientHeading";
import ProjectCards from "./ProjectCards";

const projects = [
    {
        title: "Chatty-io",
        image: "/chatty-io.png",
        brief: "A real-time chat web application.",
        projectlink: "#",
        hostlink: "#"
    },
    {
        title: "BeatSync",
        image: "/beat-sync.png",
        brief: "Spotify inspired music streaming web app.",
        projectlink: "#",
        hostlink: "#"
    }
]

export default function RecentWork() {
    return (
        <div className="px-5 md:px-14 lg:px-0 w-full xl:max-w-[1050px] 2xl:max-w-[1400px] mx-auto mt-20 flex flex-col lg:flex-row justify-between gap-y-7 pt-10 md:pt-16 pb-12 md:pb-24 bg-gradient-to-l from-transparent via-primary/5 to-transparent">
            <div className="h-fit flex flex-col gap-y-12">
                <div className="flex items-center gap-x-5 mx-auto lg:mx-0">
                    <GradientHeading
                        leadingText={"Recent Work"}
                        className={"text-left text-xl md:text-2xl 2xl:text-3xl font-medium"}
                    />
                    <h1 className="text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-primary to-secondary">{"</>"}</h1>
                </div>

                <div className="hidden lg:flex font-medium mx-auto md:mx-0 flex-col gap-y-2.5 xl:w-[95%] 2xl:w-fit text-subheading xl:text-lg 2xl:text-2xl">
                    <div className="flex items-center gap-x-3.5">
                        <h1>Follow</h1>
                        <div className="bg-tile flex gap-x-2.5 items-center border-[1.5px] size-fit rounded-2xl border-stroke px-4 py-1.5">
                            <img src="/github.svg" alt="github" />
                            <p className="text-white">/ pg147</p>
                        </div>
                        <p>to view</p>
                    </div>
                    <p>latest projects and related updates.</p>
                </div>
            </div>

            <div className="w-fit md:w-full lg:w-fit flex flex-col gap-y-8 md:flex-row items-center md:justify-between lg:justify-normal xl:gap-x-6 2xl:gap-x-14">
                {projects.map((design, index) => (
                    <div key={index} className="snap-start min-w-full md:min-w-[350px]">
                        <ProjectCards
                            title={design.title}
                            brief={design.brief}
                            image={design.image}
                            projectlink={design.projectlink}
                            hostlink={design.hostlink}
                            type={"code"}
                        />
                    </div>
                ))}
            </div>

            <div className="lg:hidden mt-6 flex font-medium mx-auto lg:mx-0 flex-col gap-y-2.5 xl:w-[95%] 2xl:w-fit text-subheading xl:text-lg 2xl:text-2xl">
                <div className="flex items-center gap-x-3.5">
                    <h1>Follow</h1>
                    <div className="bg-tile flex gap-x-2.5 items-center border-[1.5px] size-fit rounded-2xl border-stroke px-4 py-1.5">
                        <img src="/github.svg" alt="github" />
                        <p className="text-white">/ pg147</p>
                    </div>
                    <p>to view</p>
                </div>
                <p>latest projects and related updates.</p>
            </div>
        </div>
    )
}

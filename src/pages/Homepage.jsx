import {
    EducationalBackground,
    Footer,
    QueryForm,
    WorkExperience,
    Designer,
    RecentWork,
    TechStack,
    HeroSection,
} from "../components"

export default function Homepage() {
    return (
        <div className="h-screen">
            <HeroSection />
            <div id="stack">
                <TechStack />
            </div>
            <div id="projects">
                <RecentWork />
            </div>
            <Designer />
            <div id="experience">
                <WorkExperience />
            </div>
            <EducationalBackground />
            <QueryForm />
            <Footer />
        </div>
    )
}

import { EducationalBackground, Footer, QueryForm, WorkExperience, Designer, RecentWork, TechStack, HeroSection } from "../components";

export default function Homepage() {
    return (
        <div className="h-screen">
            <HeroSection />
            <TechStack />
            <RecentWork />
            <Designer />
            <WorkExperience />
            <EducationalBackground />
            <QueryForm />
            <Footer />
        </div>
    )
}

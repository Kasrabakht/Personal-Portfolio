import { ThemeToggle } from "../component/Themetoggle"
import { StarBackground } from "../component/StarBackground"
import {HeroSection } from "../component/HeroSection"
import {Navbar } from "../component/Navbar"
import { AboutSection } from "../component/AboutSection"
import { SkillSection } from "../component/SkillSection"
import { ProjectSection } from "../component/ProjectSection"
import { ContactSection} from "../component/ContactSection"

export const Home = () =>
{
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Theme Toggle */}
             . <ThemeToggle />

            {/* Background Effects */}
            <StarBackground />


            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <main>
            <HeroSection />
                <AboutSection />
                <SkillSection />
                <ProjectSection />
            <ContactSection />
            </main>

            {/* Footer */}
        </div>
    )

}
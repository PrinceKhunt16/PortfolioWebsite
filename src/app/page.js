'use client';

import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import EducationSection from '@/components/EducationSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import CertificationsSection from '@/components/CertificationsSection';
import AchievementsSection from '@/components/AchievementsSection';
import YouTubeSection from '@/components/YouTubeSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const HomePage = () => {
    return (
        <>
            <Navbar />
            <main>
                <HeroSection />
                <AboutSection />
                <EducationSection />
                <ExperienceSection />
                <ProjectsSection />
                <SkillsSection />
                <CertificationsSection />
                <AchievementsSection />
                <YouTubeSection />
                <ContactSection />
            </main>
            <Footer />
        </>
    );
};

export default HomePage;

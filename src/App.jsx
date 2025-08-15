// App.jsx
import './App.css';

// Navbar
import NavBarMain from './components/navbar/NavBarMain';

// Hero Section
import HeroMain from './components/heroSection/HeroMain';
import HeroGradient from './components/heroSection/HeroGradient';
import SubHeroSec from './components/heroSection/SubHeroSec';

// About Section
import AboutMeMain from './components/aboutSection/AboutMeMain';

// Skills Section
import SkillsMain from './components/SkillSection/SkillsMain';
import SubSkill from './components/SkillSection/SubSkill';

// Experience Section
import ExperienceMain from './components/experienceSection/ExperienceMain';

// Projects Section
import ProjectsMain from './components/projectSection.jsx/ProjectsMain';

// Contact & Footer
import ContactMeMain from './components/contactMeSection/contactMeMain';
import FooterMain from './components/footer/FooterMain';

// Misc Section
import HelperSection from './components/helperSection';

function App() {
  return (
    <main className="font-mono">
      <NavBarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroSec />
      <AboutMeMain />
      <SkillsMain />
      <SubSkill />
      <ExperienceMain />
      <ProjectsMain />
      <HelperSection />
      <ContactMeMain />
      <FooterMain />
    </main>
  );
}

export default App;

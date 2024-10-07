import IntroSection from "./components/IntroSection";
import SkillsSection from "./components/SkillsSection";
import ProfileSection from "./components/ProfileSection";
import ProjectsSection from "./components/ProjectsSection";
import FooterSection from "./components/FooterSection";

function App() {
  return (
    <>
      <div className="App bg-light-white dark:bg-dark-gray">
        <IntroSection />
        <SkillsSection />
        <ProfileSection />
        <ProjectsSection />
        <FooterSection />
      </div>
    </>
  );
}

export default App;

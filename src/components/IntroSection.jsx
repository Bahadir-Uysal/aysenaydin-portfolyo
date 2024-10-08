import SocialButton from "./SocialButton";
import Title from "./Title";
import { useLanguageTheme } from "../contexts/LanguageThemeContext";

function IntroSection() {
  const { theme, toggleTheme } = useLanguageTheme();

  return (
    <div className="h-[671px] bg-light-purple-to-green dark:bg-dark-purple-to-dark-green flex items-center justify-center">
      <div className="w-[955px]">
        <div className="flex justify-between h-20">
          <h2 className="text-light-green font-bold text-3xl self-center">
            Ayşen
          </h2>
          <div className="flex gap-9">
            <div className="uppercase text-light-green dark:text-light-gray font-bold">
              <span className="dark:text-dark-lilly">Türkçe</span>
              <span className="text-light-silver">&apos;ye geç</span>
            </div>
            <div className="flex gap-2">
              <img
                onClick={toggleTheme}
                src={theme === "dark" ? "dark-switch.png" : "light-switch.png"}
                alt="theme mode"
                className="h-6 cursor-pointer"
              />
              <div className="uppercase text-light-purple dark:text-dark-silver font-bold">
                {theme === "dark" ? "Dark mode" : "Light mode"}
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-20 ">
          <div className="flex flex-col gap-9">
            <Title
              textSize={"text-5.5xl"}
              text={"I am a Frontend Developer..."}
              color={"text-light-green"}
            />
            <div className="text-white text-2xl">
            I'm open to new experiences, love learning, and have a disciplined approach to my work. I develop projects with a passion for web technologies and a goal of creating user-friendly experiences.
            </div>
            <div className="flex gap-3">
              <SocialButton
                icon={
                  <i className="fa fa-github text-2xl" aria-hidden="true"></i>
                }
                text={"Github"}
                link={"https://github.com/aysenayydin"}
              />
              <SocialButton
                icon={
                  <i className="fa fa-linkedin text-2xl" aria-hidden="true"></i>
                }
                text={"Linkedin"}
                link={"https://www.linkedin.com/in/aysenaydin/"}
              />
            </div>
          </div>
          <div className=" shrink-0 ">
            <img className="w-[350px] h-[375px] rounded-xl" src="profile1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroSection;

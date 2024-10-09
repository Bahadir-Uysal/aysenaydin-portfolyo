import SocialButton from "./SocialButton";
import Title from "./Title";
import { useLanguageTheme } from "../contexts/LanguageThemeContext";

function IntroSection() {
  const { theme, toggleTheme, texts, language, changeLang } =
    useLanguageTheme();

  return (
    <div className=" h-[671px] sm:bg-light-purple-to-green  lg:bg-light-purple-to-green dark:bg-dark-purple-to-dark-green   flex items-center justify-center sm:px-10 ">
      <div className=" lg:max-w-[955px] ">
        <div className="flex justify-between h-20">
          <h2 className="text-light-green font-bold text-3xl self-center">
            Ayşen
          </h2>
          <div className="flex gap-9">
            <div className="uppercase text-light-green dark:text-light-gray font-bold">
              {language === "tr" ? (
                <>
                  <span className="text-light-silver">Switch to </span>
                  <span
                    className="dark:text-dark-lilly cursor-pointer"
                    onClick={() => changeLang("en")}
                  >
                    {texts.introSection.currentLang}
                  </span>
                </>
              ) : (
                <>
                  <span
                    className="dark:text-dark-lilly cursor-pointer"
                    onClick={() => changeLang("tr")}
                  >
                    {texts.introSection.currentLang}
                  </span>
                  <span className="text-light-silver">'ye geç</span>
                </>
              )}
            </div>
            <div className="flex gap-2">
              <img
                onClick={toggleTheme}
                src={theme === "dark" ? "dark-switch.png" : "light-switch.png"}
                alt="theme mode"
                className="h-6 cursor-pointer"
              />
              <div className="uppercase  text-dark-pblila dark:text-dark-silver font-bold">
                {theme === "dark"
                  ? texts.introSection.lightMode
                  : texts.introSection.darkMode}
              </div>
            </div>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col sm:gap-5 lg:gap-20 ">
          <div className="flex flex-col gap-9">
            <Title
              textSize={"text-5.5xl"}
              text={texts.introSection.heading}
              color={"text-light-green"}
            />
            <div className="text-white text-2xl">
              {texts.introSection.subHeading}
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
            <img
              className="lg:w-[350px] lg:h-[375px]  sm:w-[200px] sm:h-[200px] rounded-xl"
              src="profile1.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroSection;

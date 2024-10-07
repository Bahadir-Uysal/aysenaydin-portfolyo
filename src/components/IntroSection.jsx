import Title from "./Title";
import SocialButton from "./SocialButton";

function IntroSection() {
  return (
    <div className="h-[671px] bg-purple flex items-center justify-center">
      <div className="w-[955px]">
        <div className="flex justify-between h-20">
          <h2 className="text-green font-bold text-3xl self-center">Ayşen</h2>
          <div className="flex gap-28 ">
            <div className="uppercase text-green font-bold">Türkçe'ye geç</div>
            <div className="uppercase text-white font-bold">Dark mode</div>
          </div>
        </div>
        <div className="flex gap-20 ">
          <div className="flex flex-col gap-9">
            <Title
              textSize={"text-5.5xl"}
              text={"I am a Frontend Developer..."}
              color={"text-green"}
            />
            <div className="text-white text-2xl">
              ...who likes to craft solid and scalable frontend products with
              great user experiences.
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
          <div className="w-[350px] bg-white h-[375px] shrink-0 rounded-xl">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default IntroSection;

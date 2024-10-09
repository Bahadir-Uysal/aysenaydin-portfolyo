import React from "react";
import Title from "./Title";
import { useLanguageTheme } from "../contexts/LanguageThemeContext";

function ProfileSection() {
  const { texts } = useLanguageTheme();
  return (

    <div className="flex justify-center  bg-light-purple w-full dark:bg-dark-purple sm:px-10">
        <div className=" lg:h-[552px] pt-16 flex flex-col">
            
        <Title  text={texts.profileSection.heading} textSize={"text-5xl"} color={"text-light-green"} />
      
        <div className="flex gap-5 pt-6 ">
          <div className="flex flex-col gap-5 w-[300px]">
            <h2 className="text-3xl font-medium text-white mb-4">
            {texts.profileSection.basicInfoTitle}
            </h2>
            <div className="text-light-green mb-2">
              <strong>{texts.profileSection.birthDate}</strong>{" "}
              <span className="text-white ml-2">{texts.profileSection.birthDateValue}</span>
            </div>
            <div className="text-light-green mb-2">
              <strong>{texts.profileSection.city}</strong>{" "}
              <span className="text-white ml-2">{texts.profileSection.cityValue}</span>
            </div>
            <div className="text-light-green mb-2 ">
              <strong>{texts.profileSection.education}</strong>{" "}
              <span className="text-white ml-2">
              {texts.profileSection.educationValue}
              </span>
            </div>
            <div className="text-light-green mb-2">
              <strong>{texts.profileSection.preferredRole}</strong>{" "}
              <span className="text-white ml-2">{texts.profileSection.preferredRoleValue}</span>
            </div>
          </div>

          <div >
            <img  className="rounded-lg w-[300px] h-[290px]"  src="profile2.png" alt=""  />
          </div>

          <div className="w-[300px]">
            <h2 className="text-3xl font-semibold text-white mb-4">{texts.profileSection.aboutMeTitle}</h2>
            <p className="text-white">
            {texts.profileSection.aboutMeText1}
            </p>
            <br/>
            <p className="text-white">
            {texts.profileSection.aboutMeText2}
            </p>
          </div>
        </div>
        </div>
      </div>
   
  );
}

export default ProfileSection;

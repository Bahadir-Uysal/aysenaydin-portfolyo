import React from "react";
import Title from "./Title";

function ProfileSection() {
  return (
   
        <div className=" bg-purple h-[552px] pt-16 pl-[240px] w-full justify-center items-center ">
          <Title text={"Profile"} textSize={"text-5xl"} color={"text-green"} />
       
      
        <div className="flex gap-5 w-[960px] justify-center items-center">
          <div className="flex flex-col gap-5 w-[300px]">
            <h2 className="text-3xl font-medium text-white mb-4">
              Basic Information
            </h2>
            <div className="text-green mb-2">
              <strong>Doğum Tarihi</strong>{" "}
              <span className="text-white ml-2">12.06.1993</span>
            </div>
            <div className="text-green mb-2">
              <strong>İkamet Şehri</strong>{" "}
              <span className="text-white ml-2">Istanbul</span>
            </div>
            <div className="text-green mb-2">
              <strong>Eğitim Durumu</strong>{" "}
              <span className="text-white ml-2">
                Ege Üniv. Matematik, Lisans, 2016
              </span>
            </div>
            <div className="text-green mb-2">
              <strong>Tercih Ettiği Rol</strong>{" "}
              <span className="text-white ml-2">Frontend, UI</span>
            </div>
          </div>

          <div className="w-[300px] h-[290px] rounded-lg bg-white">
            <img src="" alt="Profile" className="" />
          </div>

          <div className="flex-1">
            <h2 className="text-3xl font-semibold text-white mb-4">About Me</h2>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
              aut, odit laborum aliquam voluptatum nisi mollitia. Minima
              accusamus ratione soluta aperiam sit voluptate? Dicta quod
              deserunt quam temporibus cumque magnam!
            </p>
          </div>
        </div>
      </div>
   
  );
}

export default ProfileSection;

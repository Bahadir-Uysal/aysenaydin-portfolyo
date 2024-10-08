import React from "react";
import Title from "./Title";

function ProfileSection() {
  return (
   

    <div className="flex justify-center  bg-light-purple w-full dark:bg-dark-purple">
        <div className=" h-[552px] pt-16 flex flex-col">
            
        <Title  text={"Profile"} textSize={"text-5xl"} color={"text-light-green"} />
      
        <div className="flex gap-5 pt-6 ">
          <div className="flex flex-col gap-5 w-[300px]">
            <h2 className="text-3xl font-medium text-white mb-4">
              Basic Information
            </h2>
            <div className="text-light-green mb-2">
              <strong>Doğum Tarihi</strong>{" "}
              <span className="text-white ml-2">12.06.1993</span>
            </div>
            <div className="text-light-green mb-2">
              <strong>İkamet Şehri</strong>{" "}
              <span className="text-white ml-2">Istanbul</span>
            </div>
            <div className="text-light-green mb-2 ">
              <strong>Eğitim Durumu</strong>{" "}
              <span className="text-white ml-2">
                Ege Üniv. Matematik, Lisans, 2016
              </span>
            </div>
            <div className="text-light-green mb-2">
              <strong>Tercih Ettiği Rol</strong>{" "}
              <span className="text-white ml-2">Frontend, UI</span>
            </div>
          </div>

          <div >
            <img  className="rounded-lg w-[300px] h-[290px]"  src="profile2.png" alt=""  />
          </div>

          <div className="w-[300px]">
            <h2 className="text-3xl font-semibold text-white mb-4">About Me</h2>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
              aut, odit laborum aliquam voluptatum nisi mollitia.
            </p>
            <br/>
            <p className="text-white">
            Minima
              accusamus ratione soluta aperiam sit voluptate? Dicta quod
              deserunt quam temporibus cumque magnam!
            </p>
          </div>
        </div>
        </div>
      </div>
   
  );
}

export default ProfileSection;

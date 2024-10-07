import React from "react";
function SocialButton({ text, icon, link }) {
  return (
    
    <a href={link} >
      <div className="h-12 w-fit bg-white rounded-md p-3 flex items-center gap-1 text-purple font-semibold text-lg">{icon}{text}</div>
      
    </a>
   
  );
}
export default SocialButton;
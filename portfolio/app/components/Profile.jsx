import React from "react";
import Image from "next/image";
const Profile = () => {
  return (
    <div className="flex justify-center items-center  flex-col">
      <Image
        src="/profile.png"
        alt="Profile"
        width={345}
        height={323}
        className="rounded-full"
        unoptimized={true}
      />
      <p className="w-[576px] h-[252px] text-center font-['Roboto Condensed'] font-medium text-[26px] leading-[30px] text-white">
        Hi! I'm experienced in film production, writing, and direction. My
        portfolio includes a short film, over 100 branded video content, and a
        bunch of ad films. I've also been involved in theatre and performing
        arts.
      </p>
    </div>
  );
};

export default Profile;

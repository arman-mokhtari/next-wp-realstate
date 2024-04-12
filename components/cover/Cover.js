import Image from "next/image";
import React from "react";

const Cover = ({ children, background }) => {
  return (
    <div className="h-screen bg-slate-800 relative min-h-[400px] flex justify-center items-center">
      <Image
        className="object-cover mix-blend-soft-light"
        alt="cover"
        src={background}
        fill
        sizes="100vw"
      />
      {children}
    </div>
  );
};

export default Cover;

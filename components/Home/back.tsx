import React from "react";

const Back = () => {
  return (
    <div className="flex flex-col w-[90%] mb-36 md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] items-center relative ">
      <div className="absolute -bottom-10 -left-2 w-72 h-72 mix-blend-multiply bg-purple-300 rounded-full filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute -bottom-20 -right-2 w-72 h-72 mix-blend-multiply bg-green-300 rounded-full filter blur-xl opacity-70 animate-blob animation-delay-3000"></div>
      <div className="absolute top-0 -right-2 w-72 h-72 mix-blend-multiply bg-yellow-300 rounded-full filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute top-20  w-72 h-72 mix-blend-multiply bg-pink-300 rounded-full filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
    </div>
  );
};

export default Back;

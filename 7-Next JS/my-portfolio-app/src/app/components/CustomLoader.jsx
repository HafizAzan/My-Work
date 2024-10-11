import React from "react";

const CustomLoader = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center flex-col bg-sky-200">
      <div className="loader"></div>
      <h3 className="mt-4 font-medium">Please Wait</h3>
    </div>
  );
};

export default CustomLoader;

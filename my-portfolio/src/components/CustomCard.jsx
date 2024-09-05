import React, { memo } from "react";
import { CustomParagraphText, CustomText } from "./customText";

function CustomCard({ title = "developer", bio }) {
  return (
    <div className="card bg-sky-300 rounded-md w-[35vw] h-[18vw] flex flex-col pt-[2vw] pl-[2vw] pr-[2vw]">
      <CustomText className="text-black font-bold text-[2vw]" Title={title} />
      <CustomParagraphText
        className="text-black font-medium text-[1vw]"
        Title={bio}
      />
    </div>
  );
}

export default memo(CustomCard);

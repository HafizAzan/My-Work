import React, { forwardRef } from "react";
import { CustomParagraphText, CustomText } from "../components/customText";

const CustomEducationCard = forwardRef(
  ({ className, headingClass, pClass, title, p }, ref) => {
    return (
      <div ref={ref} className={`${className} cursor-pointer`}>
        <div>
          <CustomText className={headingClass} Title={title} />
        </div>
        <div>
          <CustomParagraphText className={pClass} Title={p} />
        </div>
      </div>
    );
  }
);

export default CustomEducationCard;

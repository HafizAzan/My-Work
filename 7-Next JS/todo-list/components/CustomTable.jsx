import React, { memo } from "react";
import CustomButton from "./CustomButton";

const tableOptions = ["No.", "Todo Item ", "Status ", " Actions"];
const tableValues = ["1", "Apple ", "approve"];

const CustomTable = () => {
  return (
    <>
      <table className="flex flex-col items-center justify-around w-full my-7">
        <thead className="border-b-solid border-b-zinc-400 border-b-[1px] w-full">
          <tr className="flex items-center justify-between px-6 pb-4">
            {tableOptions.map((item, i) => (
              <th key={i} className="font-medium text-zinc-800">
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="border-b-solid border-b-zinc-400 border-b-[1px] w-full">
          <tr className="flex items-center justify-between px-6 py-7">
            {tableValues.map((item, i) => (
              <th key={i} className="font-medium text-zinc-900">
                {item}
              </th>
            ))}
            <td className="flex space-x-2">
              <CustomButton className={"bg-yellow hover:bg-purple-400"}>
                Edit
              </CustomButton>
              <CustomButton className={"w-[80px] bg-accent hover:bg-red-700"}>
                Delete
              </CustomButton>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default memo(CustomTable);

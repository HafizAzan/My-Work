import React, { memo } from "react";
import CustomButton from "./CustomButton";

const tableOptions = ["No.", "Todo Item ", "Status ", " Actions"];

const CustomTable = ({
  TodoData,
  deleteTodo = () => {},
  getTodoUsingId = () => {},
  deleteTodosLoader,
}) => {
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
        <tbody className="border-b-solid border-b-zinc-400 border-b-[1px] w-full max-h-[250px] overflow-y-auto ">
          {TodoData?.todos?.map((single, index) => (
            <tr
              key={single?._id}
              className="flex items-center justify-between px-6 cursor-pointer py-7 hover:bg-slate-200"
            >
              <th className="font-medium text-zinc-900">{index + 1}</th>
              <th className="font-medium text-zinc-900">{single?.item}</th>
              <th
                className={`font-medium  text-white p-3 rounded-lg ${
                  single?.status === "approve" ? "bg-green" : "bg-accent"
                }`}
              >
                {single?.status}
              </th>
              <td className="flex space-x-2">
                <CustomButton
                  className={"bg-yellow hover:bg-purple-400"}
                  onClick={() => getTodoUsingId(single)}
                >
                  Edit
                </CustomButton>
                <CustomButton
                  className={"w-[80px] bg-accent hover:bg-red-900"}
                  onClick={() => deleteTodo(single?._id)}
                  disabled={deleteTodosLoader}
                >
                  Delete
                </CustomButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default memo(CustomTable);

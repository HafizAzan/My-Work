"use client";
import CustomButton from "components/CustomButton";
import CustomTable from "components/CustomTable";
import useTodos from "./Hooks/useTodos";
import { useState } from "react";

export default function Home() {
  const {
    TodoData,
    saveTodoData,
    refetchTodoData,
    deleteTodoData,
    deleteAllTodoData,
    loaderTodo,
    deleteTodosLoader,
    statusChangeReq,
    editTodoData,
    approveData,
    UnApproveData,
  } = useTodos();

  const [valueInput, setValueInput] = useState({
    item: "",
    status: "",
    id: null,
  });

  const InputsHandler = (e) => {
    const { name, value } = e.target;
    setValueInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    const payload = {
      item: valueInput.item,
      status: valueInput.status,
    };

    if (valueInput.id) {
      try {
        await editTodoData(
          { id: valueInput.id, payload },
          {
            onSuccess: () => {
              setValueInput({ item: "", status: "", id: null });
              refetchTodoData();
            },
          }
        );
      } catch (error) {
        console.error("Edit Error:", error);
        throw new Error(error);
      }
    } else {
      saveTodoData(payload, {
        onSuccess: () => {
          setValueInput({ item: "", status: "", id: null });
          refetchTodoData();
        },
      });
    }
  };

  const deleteTodo = (id) => {
    if (id && confirm("Are You Sure?")) {
      deleteTodoData(id, {
        onSuccess: () => {
          console.log("all delete");
          refetchTodoData();
        },
      });
    }
  };

  const deleteAllData = () => {
    if (confirm("Are You Sure?")) {
      deleteAllTodoData([], {
        onSuccess: () => {
          console.log("delete");
          refetchTodoData();
        },
      });
    }
  };

  const getTodoUsingId = (single) => {
    setValueInput({
      item: single.item,
      status: single.status,
      id: single._id,
    });
  };

  const updateStatusFn = (single) => {
    if (single?.status === "approve") {
      UnApproveData(single?._id, {
        onSuccess: () => {
          console.log("sucess");
          refetchTodoData();
        },
      });
    } else {
      approveData(single?._id, {
        onSuccess: () => {
          console.log("sucess approve");
          refetchTodoData();
        },
      });
    }
  };

  return (
    <section>
      <div className="container flex items-center justify-center h-screen">
        <div className="w-[80%] h-[78%] bg-white">
          <h1 className="pt-6 text-3xl font-medium text-center text-grey">
            To Do App
          </h1>
          <div className="flex items-center justify-center w-full my-14 gap-x-3">
            <form className="flex space-x-3" onSubmit={formSubmitHandler}>
              <input
                name="item"
                type="text"
                className="rounded-md border-solid border-grey border-[1px] py-2 pl-2 placeholder:text-accent outline-none"
                placeholder="Enter a task here"
                onChange={InputsHandler}
                value={valueInput.item || ""}
              />
              <select
                name="status"
                className="rounded-md border-solid border-grey border-[1px] py-2 pl-2 placeholder:text-accent outline-none"
                onChange={InputsHandler}
                value={valueInput.status || ""}
              >
                <option value="" disabled>
                  Select Status
                </option>
                <option value="approve" className="capitalize">
                  Approve
                </option>
                <option value="unapprove" className="capitalize">
                  Unapprove
                </option>
              </select>

              <CustomButton className={"bg-primary hover:bg-purple-800"}>
                Save
              </CustomButton>
            </form>
            <CustomButton
              className={"w-28 py-3 bg-accent hover:bg-red-700"}
              onClick={deleteAllData}
            >
              Delete All
            </CustomButton>
          </div>
          {loaderTodo || deleteTodosLoader ? (
            <div>Loading...</div>
          ) : (
            <div className="w-full">
              <CustomTable
                TodoData={TodoData}
                deleteTodo={deleteTodo}
                deleteTodosLoader={deleteTodosLoader}
                getTodoUsingId={getTodoUsingId}
                updateStatusFn={updateStatusFn}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

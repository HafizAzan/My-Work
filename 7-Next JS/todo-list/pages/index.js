import CustomButton from "components/CustomButton";
import CustomTable from "components/CustomTable";

export default function Home() {
  return (
    <section>
      <div className="container flex items-center justify-center h-screen">
        <div className="w-[80%] h-[60%] bg-white">
          <h1 className="pt-6 text-3xl font-medium text-center text-grey">
            To Do App
          </h1>
          <div className="flex items-center justify-center w-full my-14 gap-x-3">
            <input
              type="text"
              className="rounded-md border-solid border-grey border-[1px] py-2 pl-2 placeholder:text-accent outline-none"
              placeholder="Enter a task here"
            />
            <CustomButton className={"hover:bg-purple-800"}>Save</CustomButton>
            <CustomButton className={"w-28 py-3 bg-accent hover:bg-red-700"}>
              Delete All
            </CustomButton>
          </div>
          <div className="w-full">
            <CustomTable />
          </div>
        </div>
      </div>
    </section>
  );
}

import connectDatabase from "app/libs/monogdb";
import Todo from "app/models/Todo";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  await connectDatabase();
  const { id } = params;
  try {
    const todo = await Todo.findById(id);

    if (!todo) {
      return NextResponse.json({ message: "Todo not found" }, { status: 404 });
    }

    todo.status = "approve";
    await todo.save();

    return NextResponse.json(
      { todo, message: "Todo found and status set to approve" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

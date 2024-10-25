import connectDatabase from "app/libs/monogdb";
import Todo from "app/models/Todo";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

export async function DELETE(req, { params }) {
  await connectDatabase();

  const { id } = params;

  if (!ObjectId.isValid(id)) {
    return NextResponse.json({ message: "Invalid ID format" }, { status: 400 });
  }

  const existingTodo = await Todo.findById(id);
  if (!existingTodo) {
    return NextResponse.json({ message: "Todo not found" }, { status: 404 });
  }

  try {
    const topic_delete = await Todo.deleteOne({ _id: new ObjectId(id) });

    if (topic_delete.deletedCount === 0) {
      return NextResponse.json({ message: "Todo not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Deleted Successfully", topic_delete },
      { status: 200 }
    );
  } catch (error) {
    console.error("Deletion error:", error);
    return NextResponse.json(
      { message: "Deletion Failed", error: error.message },
      { status: 500 }
    );
  }
}

export async function GET(req, { params }) {
  await connectDatabase();

  const { id } = params;

  if (!id) {
    return NextResponse.json({ message: "ID is required" }, { status: 400 });
  }

  const todos = await Todo.findById(id);

  if (!todos) {
    return NextResponse.json({ message: "Todo not found" }, { status: 404 });
  }

  return NextResponse.json({ todos }, { status: 200 });
}

export async function PATCH(request, { params }) {
  await connectDatabase();
  const { id } = params;
  const data = await request.json();

  if (!data || Object.keys(data).length === 0) {
    return NextResponse.json({ message: "No data provided" }, { status: 400 });
  }

  const todo = await Todo.findByIdAndUpdate(id, data);

  if (!todo) {
    return NextResponse.json({ message: "Todo not found" }, { status: 404 });
  }

  return NextResponse.json({ todo, message: "Todo Updated" }, { status: 200 });
}

export async function STATUS(request, { params }) {
  await connectDatabase();
  const { id } = params;
  const todo = await Todo.findById(id);

  if (!todo) {
    return NextResponse.json(
      { message: "Todo Status not found" },
      { status: 404 }
    );
  }

  todo.status == "approve" ? "unapprove" : "approve";
  await todo.save();

  return NextResponse.json(
    { todo, message: "Todo Status Updated" },
    { status: 200 }
  );
}

import connectDatabase from "app/libs/monogdb";
import Todo from "app/models/Todo";
import { NextResponse } from "next/server";

export async function GET(request) {
  await connectDatabase();
  const todos = await Todo.find().sort({ updatedAt: -1 });
  return NextResponse.json(
    { todos },
    { message: "Todo Created", status: "200" }
  );
}

export async function POST(request) {
  const { item, status } = await request.json();
  await connectDatabase();

  const todo = await Todo.create({
    item,
    status,
  });

  return NextResponse.json(
    { todo },
    { message: "Todo Created", status: "201" }
  );
}

export async function DELETE(request) {
  await connectDatabase();
  const todos = await Todo.deleteMany({});
  return NextResponse.json(
    { todos },
    { message: "All Todos Deleted", status: "200" }
  );
}

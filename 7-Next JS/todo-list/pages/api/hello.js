import { NextResponse } from "next/server";
import connectToDatabase from "pages/libs/mongodb";
import Todo from "pages/Models/Todo";

export async function POST(request) {
  try {
    const { items, status, id } = await request.json();

    if (!items || !status || !id) {
      return NextResponse.json(
        { message: "Items, status, and id are required." },
        { status: 400 }
      );
    }

    await connectToDatabase();
    const todo = await Todo.create({ items, status, id });
    return NextResponse.json(
      { todo, message: "Todo Created" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectToDatabase();
    const todos = await Todo.find();
    return NextResponse.json({ todos });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    if (!id) {
      return NextResponse.json(
        { message: "ID is required to delete." },
        { status: 400 }
      );
    }

    await connectToDatabase();
    const deletedTodo = await Todo.findByIdAndDelete(id);

    if (!deletedTodo) {
      return NextResponse.json({ message: "Todo not found." }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Todo deleted successfully." },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

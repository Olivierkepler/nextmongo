import { NextRequest, NextResponse } from "next/server";
import connectMongo from "@/app/lib/mongoose";
import User from "@/app/models/User";

export async function POST(req: NextRequest) {
  await connectMongo();

  try {
    const body = await req.json(); //
    const { name, email, comment } = body; // Include comment in the request body

    const newUser = new User({ name, email, comment });
    await newUser.save();

    return NextResponse.json({ success: true, data: newUser }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error ? error.message : "An unknown error occurred",
      },
      { status: 400 }
    );
  }
}

import { Prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { email, password, name } = await req.json();

    await Prisma.user.create({
      data: {
        email,
        password,
        name,
      },
    });

    return NextResponse.json({ message: "User created Successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to Create User" },
      { status: 500 }
    );
  }
}

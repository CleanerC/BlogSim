import { Prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { email, password } = await req.json();

  const user = await Prisma.user.findUnique({
    where: { email: email },
  });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 401 });
  }

  if (password !== user.password) {
    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  }

  return NextResponse.json(
    {user: {
      id: user.id,
      email: user.email,
      name: user.name
    }}
  )
}

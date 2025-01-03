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

  const session = {
    id: user.id,
    email: user.email,
    name: user.name,
  };

  const response = NextResponse.json(
    { message: "Login Successful" },
    { id: user.id, email: user.email, name: user.name }
  );

  response.cookies.set({
    name: "session",
    value: JSON.stringify(session),
  });

  return response
}

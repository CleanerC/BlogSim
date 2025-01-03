import { NextResponse } from "next/server";

export function middleware(request) {
  const sessionCookie = request.cookies.get("session");

  if (request.nextUrl.pathname === "/create-blog") {
    if (!sessionCookie) {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }

    const session = JSON.parse(sessionCookie.value);
    if (!session.id || !session.email) {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/create-blog",
};

import { Prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function POST(req) {
  try {
    // Get session data from cookie
    const sessionCookie = cookies().get("session")
    
    if (!sessionCookie) {
      return NextResponse.json(
        { error: "Not authenticated" },
        { status: 401 }
      )
    }

    const session = JSON.parse(sessionCookie.value)
    const { title, excerpt, content } = await req.json()

    if (!title || !excerpt || !content) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      )
    }

    const post = await Prisma.post.create({
      data: {
        title,
        author: session.name,
        excerpt,
        content,
      },
    })

    return NextResponse.json({ message: "Post created successfully", post });
  } catch (error) {
    console.error("Failed to create post:", error)
    return NextResponse.json(
      { error: "Failed to create post" },
      { status: 500 }
    );
  }
}
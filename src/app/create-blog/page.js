"use client"

import { useState, useEffect } from "react"

export default function CreateBlog() {
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
  })

  const [author, setAuthor] = useState("");

  useEffect(() => {
    const sessionCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("session="))

    if (sessionCookie) {
      const sessionData = JSON.parse(
        decodeURIComponent(sessionCookie.split("=")[1])
      )
      setAuthor(sessionData.name);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch("/api/posts/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          author: author,
        }),
      })

      if (res.ok) {
        // Redirect to home page and force a refresh
        window.location.href = "/"
      }
    } catch (error) {
      console.error("Failed to create post:", error);
    }
  }

  return (
    <div className="min-h-screen w-4/5 mx-auto py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Create a New Blog Post</h1>
        {author && <p className="mb-4 text-gray-600">Posting as: {author}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="w-full p-2 border-2 border-black rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Excerpt</label>
            <input
              type="text"
              value={formData.excerpt}
              onChange={(e) =>
                setFormData({ ...formData, excerpt: e.target.value })
              }
              className="w-full p-2 border-2 border-black rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Content</label>
            <textarea
              value={formData.content}
              onChange={(e) =>
                setFormData({ ...formData, content: e.target.value })
              }
              className="w-full p-2 border-2 border-black rounded min-h-[200px]"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors"
          >
            Create Post
          </button>
        </form>
      </div>
    </div>
  );
}

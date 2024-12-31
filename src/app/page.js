import { Prisma } from "../../lib/prisma";

export default async function Home() {

  const blogPost = await Prisma.post.findMany({
    orderBy: {
      date: 'desc'
    }
  })

  return (
    <div className="min-h-screen w-4/5 mx-auto py-8">
      <div className="grid gap-6">
        {blogPost.map((post) => (
          <article key={post.id} className="bg-white border-4 border-black rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-between items-start mb-4">
              {/* title */}
              <h2 className="text-2xl font-bold text-black cursor-pointer">{post.title}</h2>
            </div>

            {/* excerpt */}
            <p className="text-gray-700 mb-4">{post.excerpt}</p>
            
            {/* additional info */}
            <div className="flex justify-between items-center text-sm text-gray-800">
              <span className="text-gray-800">By {post.author}</span>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

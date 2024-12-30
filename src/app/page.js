export default function Home() {
  //Sample blog post data
  const blogPost = [
    {
      id: 1,
      title: "SAMPLE BLOG POST 1",
      author: "DAVID X",
      date: "2024-12-30",
      excerpt:
        "SAMPLE TEXT SAMPLE TEXTSAMPLE TEXT SAMPLE TEXTSAMPLE TEXTSAMPLE TEXT SAMPLE TEXT SAMPLE TEXT",
    },
    {
      id: 2,
      title: "SAMPLE BLOG POST 2",
      author: "BOB A",
      date: "2024-12-31",
      excerpt:
        "SAMPLE TEXT SAMPLE TEXTSAMPLE TEXT SAMPLE TEXTSAMPLE TEXTSAMPLE TEXT SAMPLE TEXT SAMPLE TEXT",
    },
  ];

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

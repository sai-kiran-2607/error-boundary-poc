import React, { useEffect, useState } from "react";

export default function PostList() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    // ✅ Works normally
    const API_URL = "https://jsonplaceholder.typicode.com/posts";

    // ❌ Test crash by using:
    // const API_URL = "https://jsonplaceholder.typicode.com/postssss";

    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error("API Failed");
        return res.json();
      })
      .then((data) => setPosts(data))
      .catch(() => setPosts(undefined)); // force crash fallback
  }, []);

  // If API failed → intentionally crash → ErrorBoundary catches it
  if (posts === undefined) {
    return posts.map((p) => p.title); // 💥 triggers fallback UI
  }

  // While loading
  if (posts === null) {
    return <h2 className="text-center mt-10 text-xl text-gray-600">Loading...</h2>;
  }

  return (
    <div className="flex flex-col items-center py-10">
      <h2 className="text-2xl font-semibold mb-6">📌 Posts</h2>

      <ul className="w-full max-w-2xl bg-white border rounded-md shadow divide-y">
        {posts.slice(0, 10).map((post) => (
          <li key={post.id} className="p-4">
           {post.id} .{post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function Blog({ posts }) {
  if (!posts || posts.length === 0) {
    return <p className="p-4 text-red-500">⚠️ No blog posts found.</p>;
  }

  return (
    <section className="p-4">
      <h2 className="text-2xl font-bold mb-4">📝 Blog Posts</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <Link to={`/blog/${index}`} key={index}>
            <div className="bg-white shadow-md rounded p-4 hover:shadow-lg transition">
              <img src={post.image} alt={post.title} className="rounded h-40 w-full object-cover mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">{post.title}</h3>
              <p className="text-sm text-purple-600">{post.date} — {post.tag}</p>
              <p className="text-gray-700 mt-2">{post.content.substring(0, 100)}...</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

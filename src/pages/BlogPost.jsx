import React from "react";
  import { Link } from "react-router-dom";
import Image1 from "../assets/images1.png"; 
import Image2 from "../assets/image2.jpg"; 
import Image3 from "../assets/image3.png"; 

<img src={Image1} alt="Profile" className="rounded-full w-80 h-80" />,
<img src={Image2} alt="Profile" className="rounded-full w-80 h-80" />,
<img src={Image3} alt="Profile" className="rounded-full w-80 h-80" />

const blogPosts = [
  {
    title: "How I Built My First Website",
    date: "August 2025",
    tag: "Web Dev",
    image: Image1,
    content: "I used React and Tailwind to build my first fully responsive web app. Full content continues here..."
  },
  {
    title: "My Internship at Masiphumelele Library",
    date: "July 2025",
    tag: "Internship",
    image: Image2,
    content: "During my internship, I helped digitize the book catalog and created a new website."
  },
  {
    title: "Study Tips for CS Students",
    date: "June 2025",
    tag: "Study Tips",
    image: Image3,
    content: "Here are my top 5 methods for managing stress and boosting marks as a computer science student."
  }
];

export default function BlogPost() {
  return (
    <section className="p-4">
      <h2 className="text-2xl font-bold mb-4">📝 Blog Posts</h2>

      {/* ✅ Add Post Button */}
              <Link
                to="/blog/new"
                className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
              >
                ➕ Add New Post
              </Link>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">



        {blogPosts.map((post, index) => (
          <Link to={`/blog/${index}`} key={index}>
            <div className="bg-white shadow-md rounded p-4 cursor-pointer hover:shadow-lg transition">
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

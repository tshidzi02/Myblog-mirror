import React, { useState } from "react";
import { Link } from "react-router-dom";
import Image1 from "../assets/images1.png"; 
import Image2 from "../assets/image2.jpg"; 
import Image3 from "../assets/image3.png"; 

<img src={Image1} alt="Profile" className="rounded-full w-80 h-80" />,
<img src={Image2} alt="Profile" className="rounded-full w-80 h-80" />,
<img src={Image3} alt="Profile" className="rounded-full w-80 h-80" />

export default function Blog({ posts, setPosts }) {
  //const [posts, setPosts] = useState(blogPosts);

  return (
    <section className="p-4 mt-15">
      <div className="flex justify-between items-center mb-4">
        <form
  className="mb-6 bg-gray-100 p-4 rounded"
  onSubmit={(e) => {
    e.preventDefault();
    const form = e.target;
    const newPost = {
      title: form.title.value,
      date: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
      tag: form.tag.value,
      image: form.imageURL.value,
      content: form.content.value
    };
    setPosts([newPost, ...posts]);
    form.reset();
  }}
>
  <h3 className="text-lg font-bold mb-2">➕ Add New Blog Post</h3>
  <input type="text" name="title" placeholder="Title" className="mb-2 p-2 w-full" required />
  <input type="text" name="tag" placeholder="Tag (e.g. Web Dev)" className="mb-2 p-2 w-full" required />
  <input type="text" name="imageURL" placeholder="Image URL (optional)" className="mb-2 p-2 w-full" />
  <textarea name="content" placeholder="Content" className="mb-2 p-2 w-full" rows="3" required />
  <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded">Post</button>
</form>

        <h2 className="text-2xl font-bold">📝 Blog Posts</h2>
        <Link to="/blog/new">
          <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
            + Add Post
          </button>
        </Link>
      </div>

    
        <p className="text-gray-500">No posts yet. Click “Add Post” to start.</p>
       (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <Link to={`/blog/${index}`} key={index}>
              <div className="bg-white shadow-md rounded p-4 cursor-pointer hover:shadow-lg transition">
                <img src={post.image} alt={post.title} className="rounded h-60 w-full object-cover mb-10" />
                <h3 className="text-xl font-semibold text-gray-800">{post.title}</h3>
                <p className="text-sm text-purple-600">{post.date} — {post.tag}</p>
                <p className="text-gray-700 mt-2">{post.content.substring(0, 100)}...</p>
              </div>
            </Link>
          ))}
        </div>
      )
    </section>
  );
}
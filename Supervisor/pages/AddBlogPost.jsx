import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddBlogPost({ addPost }) {
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      title,
      tag,
      date,
      content,
      image: URL.createObjectURL(image),
    };
    addPost(newPost);
    navigate("/blog");
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">➕ Add New Blog Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="border p-2 w-full"
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          className="border p-2 w-full"
          type="text"
          placeholder="Tag (e.g. Web Dev)"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          required
        />
        <input
          className="border p-2 w-full"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <textarea
          className="border p-2 w-full"
          placeholder="Post Content"
          rows="4"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <input
          className="border p-2 w-full"
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          Publish Post
        </button>
      </form>
    </div>
  );
}

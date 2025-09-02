import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreatePost({ onAddPost }) {
  /* Each piece of input is a piece of component state */
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tagsInput, setTagsInput] = useState(""); // e.g., "web dev, react, tailwind"
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [image, setImage] = useState(null);       // base64 string for preview & storage

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    /* Turn "web dev, react" → ["web dev","react"] (trim spaces, drop empties) */
    const tags = tagsInput
      .split(",")
      .map(t => t.trim())
      .filter(Boolean);

    const newPost = {
    id: crypto.randomUUID(),     // ✅ add an id so delete is reliable
    title,
    content,
    tag,
    date,
    image,
  };

    /* Call the callback from App.jsx to append to the list */
    onAddPost(newPost);

    /* Go back to the blog list so user can see their new post */
    navigate("/blog");
  }

  // CreatePost.jsx — only the small change shown in handleSubmit


  /* When a file is chosen, read it as a data URL (base64) for easy preview & memory storage */
  function handleImageChange(e) {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => setImage(reader.result);
    reader.readAsDataURL(file);
  }

  return (
    <section className="p-4 max-w-xl mx-auto mt-15">
      <h2 className="text-2xl font-bold mb-4">📝 Create New Blog Post</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />

        <textarea
          placeholder="Write your blog content here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border rounded"
          rows="5"
          required
        />

        <input
          type="text"
          placeholder="Tags (comma separated, e.g. web dev, react, tailwind)"
          value={tagsInput}
          onChange={(e) => setTagsInput(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full"
        />

        {image && (
          <img
            src={image}
            alt="Preview"
            className="rounded w-full h-40 object-cover mt-2"
          />
        )}

        <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded">
          Post Blog
        </button>
      </form>
    </section>
  );
}

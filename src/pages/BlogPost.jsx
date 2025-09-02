import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

export default function BlogPost({ posts = [] }) {
  const [search, setSearch] = useState("");
  const [selectedTags, setSelectedTags] = useState(new Set());

  const allTags = useMemo(() => {
    const bag = new Set();
    for (const p of posts) {
      if (p.tag) bag.add(String(p.tag).trim());
      if (Array.isArray(p.tags)) p.tags.forEach(t => t && bag.add(String(t).trim()));
    }
    return Array.from(bag).sort((a, b) => a.localeCompare(b));
  }, [posts]);

  function toggleTag(tag) {
    setSelectedTags(prev => {
      const next = new Set(prev);
      next.has(tag) ? next.delete(tag) : next.add(tag);
      return next;
    });
  }

  const filteredPosts = useMemo(() => {
    const q = search.trim().toLowerCase();
    return posts.filter(p => {
      const tagList = [
        ...(p.tag ? [String(p.tag)] : []),
        ...(Array.isArray(p.tags) ? p.tags : []),
      ].map(t => String(t).toLowerCase());

      const hay = [String(p.title || ""), String(p.content || ""), ...tagList]
        .join(" ")
        .toLowerCase();

      const matchesSearch = q === "" || hay.includes(q);
      const noTagsChosen = selectedTags.size === 0;
      const matchesTags = noTagsChosen || tagList.some(t => selectedTags.has(t));
      return matchesSearch && matchesTags;
    });
  }, [posts, search, selectedTags]);

  return (
    <section className="p-4 mt-16">
      <div className="flex items-center justify-between gap-3 mb-4">
        <h2 className="text-2xl font-bold">📝 Blog Posts</h2>
        <Link to="/blog/new" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition">
          ➕ Add New Post
        </Link>
      </div>

      <div className="flex flex-col gap-3 mb-5">
        <input
          type="text"
          placeholder="Search posts (title, content, tags)…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-xl border rounded p-2"
        />
        {allTags.length > 0 && (
          <div className="flex flex-wrap items-center gap-2">
            {selectedTags.size > 0 && (
              <button onClick={() => setSelectedTags(new Set())} className="text-xs px-3 py-1 rounded border hover:bg-gray-100">
                Clear filters ✖
              </button>
            )}
            {allTags.map((t) => {
              const active = selectedTags.has(t.toLowerCase());
              return (
                <button
                  key={t}
                  onClick={() => toggleTag(t.toLowerCase())}
                  className={`text-xs px-3 py-1 rounded border transition ${
                    active ? "bg-purple-600 text-white border-purple-600" : "bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100"
                  }`}
                >
                  #{t}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {filteredPosts.length === 0 && <p className="text-gray-600">No posts match your filters.</p>}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post, index) => {
          const { title, date, tag, tags, image, content } = post;
          const tagList = [...(tag ? [tag] : []), ...(Array.isArray(tags) ? tags : [])];
          return (
            <article key={index} className="bg-white shadow-md rounded p-4 hover:shadow-lg transition">
              {image && <img src={image} alt={title} className="rounded h-40 w-full object-cover mb-4" />}
              <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
              <p className="text-sm text-purple-600 mt-1">{date || "—"}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {tagList.map((t, i) => (
                  <span key={i} className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">
                    #{t}
                  </span>
                ))}
              </div>
                  <div className="mt-4 flex gap-2">
                <button
                  onClick={() => onDeletePost?.(id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
                {/* Optional: Edit button later */}
              </div>
              <p className="text-gray-700 mt-3">
                {content?.slice(0, 120) || ""}{content && content.length > 120 ? "..." : ""}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
